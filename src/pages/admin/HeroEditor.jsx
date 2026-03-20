import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { useContent } from "../../context/ContentContext";
import { PageHeader, SaveButton, Field, Card, inputClass, textareaClass } from "../../components/admin/AdminUI";
import ImageUploader from "../../components/admin/ImageUploader";

export default function HeroEditor() {
  const { hero, refetch } = useContent();
  const [form, setForm] = useState(hero);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => { setForm(hero); }, [hero]);

  const set = (key, val) => {
    setForm((f) => ({ ...f, [key]: val }));
    setSaved(false);
  };

  const setTag = (idx, val) => {
    const tags = [...(form.tags || [])];
    tags[idx] = val;
    set("tags", tags);
  };

  const addTag = () => set("tags", [...(form.tags || []), ""]);
  const removeTag = (idx) => set("tags", (form.tags || []).filter((_, i) => i !== idx));

  const save = async () => {
    setSaving(true);
    const { error } = await supabase
      .from("site_content")
      .update({ data: form, updated_at: new Date().toISOString() })
      .eq("section", "hero");
    setSaving(false);
    if (error) alert("Error: " + error.message);
    else { setSaved(true); refetch(); }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader title="Hero Section" subtitle="Edit the main hero banner of your website" />

      <Card className="mb-6">
        <h3 className="mb-5 font-display text-xl font-semibold text-[#49353d]">Background Image</h3>
        <ImageUploader value={form.background_image} onChange={(v) => set("background_image", v)} folder="hero" />
        <Field label="Or paste image URL" className="mt-4">
          <input className={inputClass} value={form.background_image || ""} onChange={(e) => set("background_image", e.target.value)} placeholder="https://..." />
        </Field>
      </Card>

      <Card className="mb-6">
        <h3 className="mb-5 font-display text-xl font-semibold text-[#49353d]">Text Content</h3>
        <div className="grid gap-4">
          <Field label="Badge Text">
            <input className={inputClass} value={form.badge || ""} onChange={(e) => set("badge", e.target.value)} />
          </Field>
          <Field label="Script Heading (cursive)">
            <input className={inputClass} value={form.script_heading || ""} onChange={(e) => set("script_heading", e.target.value)} />
          </Field>
          <Field label="Main Heading">
            <input className={inputClass} value={form.heading || ""} onChange={(e) => set("heading", e.target.value)} />
          </Field>
          <Field label="Heading Accent (colored text)">
            <input className={inputClass} value={form.heading_accent || ""} onChange={(e) => set("heading_accent", e.target.value)} />
          </Field>
          <Field label="Description">
            <textarea className={textareaClass} value={form.description || ""} onChange={(e) => set("description", e.target.value)} />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Primary CTA">
              <input className={inputClass} value={form.cta_primary || ""} onChange={(e) => set("cta_primary", e.target.value)} />
            </Field>
            <Field label="Secondary CTA">
              <input className={inputClass} value={form.cta_secondary || ""} onChange={(e) => set("cta_secondary", e.target.value)} />
            </Field>
          </div>
        </div>
      </Card>

      <Card className="mb-6">
        <h3 className="mb-5 font-display text-xl font-semibold text-[#49353d]">Tags</h3>
        <div className="grid gap-3">
          {(form.tags || []).map((tag, i) => (
            <div key={i} className="flex items-center gap-3">
              <input className={inputClass} value={tag} onChange={(e) => setTag(i, e.target.value)} />
              <button type="button" onClick={() => removeTag(i)} className="shrink-0 rounded-full bg-red-50 px-3 py-2 font-body text-xs text-red-400 hover:bg-red-100">
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={addTag} className="w-fit rounded-full border border-[#eddce3] px-5 py-2 font-body text-sm text-[#7b5e67] transition hover:bg-[#f9edf2]">
            + Add Tag
          </button>
        </div>
      </Card>

      <SaveButton saving={saving} saved={saved} onClick={save} />
    </div>
  );
}
