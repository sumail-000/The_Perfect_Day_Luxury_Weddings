import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { useContent } from "../../context/ContentContext";
import { PageHeader, SaveButton, Card } from "../../components/admin/AdminUI";
import ImageUploader from "../../components/admin/ImageUploader";
import { Plus, Trash2 } from "lucide-react";

export default function InstagramEditor() {
  const { instagramImages, refetch } = useContent();
  const [items, setItems] = useState([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setItems(instagramImages.map((img, i) => ({
      id: img.id,
      image_url: typeof img === "string" ? img : img.image_url,
      sort_order: i,
    })));
  }, [instagramImages]);

  const updateItem = (idx, val) => {
    setItems((prev) => prev.map((item, i) => i === idx ? { ...item, image_url: val } : item));
    setSaved(false);
  };

  const addItem = () => {
    setItems((prev) => [...prev, { id: null, image_url: "", sort_order: prev.length }]);
    setSaved(false);
  };

  const removeItem = async (idx) => {
    const item = items[idx];
    if (item.id && typeof item.id === "string" && item.id.includes("-")) {
      await supabase.from("instagram_images").delete().eq("id", item.id);
    }
    setItems((prev) => prev.filter((_, i) => i !== idx));
    setSaved(false);
  };

  const save = async () => {
    setSaving(true);
    try {
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const payload = { image_url: item.image_url, sort_order: i };

        if (item.id && typeof item.id === "string" && item.id.includes("-")) {
          await supabase.from("instagram_images").update(payload).eq("id", item.id);
        } else {
          await supabase.from("instagram_images").insert(payload);
        }
      }
      setSaved(true);
      refetch();
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader title="Instagram Feed" subtitle="Manage the images shown in the Instagram section" />

      <div className="grid gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <Card key={idx}>
            <div className="mb-3 flex items-center justify-between">
              <span className="font-body text-sm font-semibold text-[#49353d]">#{idx + 1}</span>
              <button type="button" onClick={() => removeItem(idx)} className="rounded-full p-2 text-red-400 hover:bg-red-50">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <ImageUploader
              value={item.image_url}
              onChange={(v) => updateItem(idx, v)}
              folder="instagram"
            />
          </Card>
        ))}
      </div>

      <div className="mb-6 flex items-center gap-4">
        <button type="button" onClick={addItem} className="inline-flex items-center gap-2 rounded-full border border-[#eddce3] bg-white px-6 py-3 font-body text-sm font-semibold text-[#7b5e67] shadow-sm transition hover:bg-[#f9edf2]">
          <Plus className="h-4 w-4" />
          Add Image
        </button>
      </div>

      <SaveButton saving={saving} saved={saved} onClick={save} />
    </div>
  );
}
