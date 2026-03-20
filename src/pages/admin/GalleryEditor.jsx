import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { useContent } from "../../context/ContentContext";
import { PageHeader, SaveButton, Field, Card, inputClass } from "../../components/admin/AdminUI";
import ImageUploader from "../../components/admin/ImageUploader";
import { Plus, Trash2 } from "lucide-react";

export default function GalleryEditor() {
  const { galleryItems, refetch } = useContent();
  const [items, setItems] = useState([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setItems(galleryItems.map((g, i) => ({
      id: g.id,
      title: g.title,
      subtitle: g.subtitle || "",
      image_url: g.image_url || g.image || "",
      sort_order: i,
    })));
  }, [galleryItems]);

  const updateItem = (idx, field, val) => {
    setItems((prev) => prev.map((item, i) => i === idx ? { ...item, [field]: val } : item));
    setSaved(false);
  };

  const addItem = () => {
    setItems((prev) => [...prev, { id: null, title: "", subtitle: "", image_url: "", sort_order: prev.length }]);
    setSaved(false);
  };

  const removeItem = async (idx) => {
    const item = items[idx];
    if (item.id && typeof item.id === "string" && item.id.includes("-")) {
      await supabase.from("gallery_items").delete().eq("id", item.id);
    }
    setItems((prev) => prev.filter((_, i) => i !== idx));
    setSaved(false);
  };

  const moveItem = (idx, dir) => {
    const newItems = [...items];
    const target = idx + dir;
    if (target < 0 || target >= newItems.length) return;
    [newItems[idx], newItems[target]] = [newItems[target], newItems[idx]];
    setItems(newItems);
    setSaved(false);
  };

  const save = async () => {
    setSaving(true);
    try {
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const payload = {
          title: item.title,
          subtitle: item.subtitle,
          image_url: item.image_url,
          sort_order: i,
        };

        if (item.id && typeof item.id === "string" && item.id.includes("-")) {
          await supabase.from("gallery_items").update(payload).eq("id", item.id);
        } else {
          await supabase.from("gallery_items").insert(payload);
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
      <PageHeader title="Gallery" subtitle="Manage your gallery images, titles, and order" />

      <div className="grid gap-4 mb-6 sm:grid-cols-2">
        {items.map((item, idx) => (
          <Card key={idx}>
            <div className="mb-3 flex items-center justify-between">
              <span className="font-body text-sm font-semibold text-[#49353d]">#{idx + 1}</span>
              <div className="flex items-center gap-1">
                <button type="button" onClick={() => moveItem(idx, -1)} disabled={idx === 0} className="rounded-lg px-2 py-1 font-body text-xs text-[#7b5e67] hover:bg-[#f9edf2] disabled:opacity-30">Up</button>
                <button type="button" onClick={() => moveItem(idx, 1)} disabled={idx === items.length - 1} className="rounded-lg px-2 py-1 font-body text-xs text-[#7b5e67] hover:bg-[#f9edf2] disabled:opacity-30">Down</button>
                <button type="button" onClick={() => removeItem(idx)} className="rounded-full p-2 text-red-400 hover:bg-red-50">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            <ImageUploader
              value={item.image_url}
              onChange={(v) => updateItem(idx, "image_url", v)}
              folder="gallery"
              className="mb-3"
            />

            <Field label="Title" className="mb-3">
              <input className={inputClass} value={item.title} onChange={(e) => updateItem(idx, "title", e.target.value)} placeholder="e.g. Floral Stage Styling" />
            </Field>
            <Field label="Subtitle">
              <input className={inputClass} value={item.subtitle} onChange={(e) => updateItem(idx, "subtitle", e.target.value)} placeholder="e.g. Romantic Outdoor Celebration" />
            </Field>
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
