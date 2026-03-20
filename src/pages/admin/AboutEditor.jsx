import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { useContent } from "../../context/ContentContext";
import { PageHeader, SaveButton, Field, Card, inputClass, textareaClass } from "../../components/admin/AdminUI";
import ImageUploader from "../../components/admin/ImageUploader";

export default function AboutEditor() {
  const { about, refetch } = useContent();
  const [form, setForm] = useState(about);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => { setForm(about); }, [about]);

  const set = (key, val) => {
    setForm((f) => ({ ...f, [key]: val }));
    setSaved(false);
  };

  const setPillar = (idx, val) => {
    const pillars = [...(form.pillars || [])];
    pillars[idx] = val;
    set("pillars", pillars);
  };

  const addPillar = () => set("pillars", [...(form.pillars || []), ""]);
  const removePillar = (idx) => set("pillars", (form.pillars || []).filter((_, i) => i !== idx));

  const save = async () => {
    setSaving(true);
    const { error } = await supabase
      .from("site_content")
      .update({ data: form, updated_at: new Date().toISOString() })
      .eq("section", "about");
    setSaving(false);
    if (error) alert("Error: " + error.message);
    else { setSaved(true); refetch(); }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader title="About Section" subtitle="Edit the about section of your website" />

      <Card className="mb-6">
        <h3 className="mb-5 font-display text-xl font-semibold text-[#49353d]">Text Content</h3>
        <div className="grid gap-4">
          <Field label="Script Heading (cursive)">
            <input className={inputClass} value={form.script_heading || ""} onChange={(e) => set("script_heading", e.target.value)} />
          </Field>
          <Field label="Main Heading">
            <textarea className={textareaClass} value={form.heading || ""} onChange={(e) => set("heading", e.target.value)} />
          </Field>
          <Field label="Paragraph 1">
            <textarea className={textareaClass} value={form.paragraph_1 || ""} onChange={(e) => set("paragraph_1", e.target.value)} />
          </Field>
          <Field label="Paragraph 2">
            <textarea className={textareaClass} value={form.paragraph_2 || ""} onChange={(e) => set("paragraph_2", e.target.value)} />
          </Field>
          <Field label="CTA Button Text">
            <input className={inputClass} value={form.cta_text || ""} onChange={(e) => set("cta_text", e.target.value)} />
          </Field>
        </div>
      </Card>

      <Card className="mb-6">
        <h3 className="mb-5 font-display text-xl font-semibold text-[#49353d]">Section Image</h3>
        <ImageUploader value={form.image} onChange={(v) => set("image", v)} folder="about" />
        <Field label="Or paste image URL" className="mt-4">
          <input className={inputClass} value={form.image || ""} onChange={(e) => set("image", e.target.value)} />
        </Field>
      </Card>

      <Card className="mb-6">
        <h3 className="mb-5 font-display text-xl font-semibold text-[#49353d]">Pillars</h3>
        <div className="grid gap-3">
          {(form.pillars || []).map((p, i) => (
            <div key={i} className="flex items-start gap-3">
              <textarea className={textareaClass + " min-h-[70px]"} value={p} onChange={(e) => setPillar(i, e.target.value)} />
              <button type="button" onClick={() => removePillar(i)} className="mt-2 shrink-0 rounded-full bg-red-50 px-3 py-2 font-body text-xs text-red-400 hover:bg-red-100">
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={addPillar} className="w-fit rounded-full border border-[#eddce3] px-5 py-2 font-body text-sm text-[#7b5e67] transition hover:bg-[#f9edf2]">
            + Add Pillar
          </button>
        </div>
      </Card>

      <SaveButton saving={saving} saved={saved} onClick={save} />
    </div>
  );
}
