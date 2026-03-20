import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { useContent } from "../../context/ContentContext";
import { PageHeader, SaveButton, Field, Card, inputClass, textareaClass } from "../../components/admin/AdminUI";
import ImageUploader from "../../components/admin/ImageUploader";

export default function ProfileEditor() {
  const { planner, refetch } = useContent();
  const [form, setForm] = useState(planner);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => { setForm(planner); }, [planner]);

  const set = (key, val) => {
    setForm((f) => ({ ...f, [key]: val }));
    setSaved(false);
  };

  const setChapter = (idx, field, val) => {
    const chapters = [...(form.chapters || [])];
    chapters[idx] = { ...chapters[idx], [field]: val };
    set("chapters", chapters);
  };

  const addChapter = () => set("chapters", [...(form.chapters || []), { title: "", text: "" }]);
  const removeChapter = (idx) => set("chapters", (form.chapters || []).filter((_, i) => i !== idx));

  const setStat = (idx, field, val) => {
    const stats = [...(form.stats || [])];
    stats[idx] = { ...stats[idx], [field]: val };
    set("stats", stats);
  };

  const addStat = () => set("stats", [...(form.stats || []), { number: "", label: "" }]);
  const removeStat = (idx) => set("stats", (form.stats || []).filter((_, i) => i !== idx));

  const save = async () => {
    setSaving(true);
    const { error } = await supabase
      .from("site_content")
      .update({ data: form, updated_at: new Date().toISOString() })
      .eq("section", "planner_profile");
    setSaving(false);
    if (error) alert("Error: " + error.message);
    else { setSaved(true); refetch(); }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader title="Planner Profile" subtitle="Edit the planner's bio, photos, and stats" />

      <Card className="mb-6">
        <h3 className="mb-5 font-display text-xl font-semibold text-[#49353d]">Basic Info</h3>
        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name">
              <input className={inputClass} value={form.name || ""} onChange={(e) => set("name", e.target.value)} />
            </Field>
            <Field label="Title">
              <input className={inputClass} value={form.title || ""} onChange={(e) => set("title", e.target.value)} />
            </Field>
          </div>
          <Field label="Credentials">
            <input className={inputClass} value={form.credentials || ""} onChange={(e) => set("credentials", e.target.value)} />
          </Field>
          <Field label="Subtitle (above name)">
            <input className={inputClass} value={form.subtitle || ""} onChange={(e) => set("subtitle", e.target.value)} />
          </Field>
          <Field label="Quote">
            <textarea className={textareaClass} value={form.quote || ""} onChange={(e) => set("quote", e.target.value)} />
          </Field>
          <Field label="Signature Quote (bottom band)">
            <textarea className={textareaClass} value={form.signature_quote || ""} onChange={(e) => set("signature_quote", e.target.value)} />
          </Field>
        </div>
      </Card>

      <Card className="mb-6">
        <h3 className="mb-5 font-display text-xl font-semibold text-[#49353d]">Photos</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="mb-2 font-body text-sm font-medium text-[#6d5d64]">Portrait (full-bleed)</p>
            <ImageUploader value={form.portrait_image} onChange={(v) => set("portrait_image", v)} folder="profile" />
          </div>
          <div>
            <p className="mb-2 font-body text-sm font-medium text-[#6d5d64]">Selfie / Secondary</p>
            <ImageUploader value={form.selfie_image} onChange={(v) => set("selfie_image", v)} folder="profile" />
          </div>
        </div>
      </Card>

      <Card className="mb-6">
        <h3 className="mb-5 font-display text-xl font-semibold text-[#49353d]">Stats</h3>
        <div className="grid gap-3">
          {(form.stats || []).map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <input className={inputClass} value={s.number} onChange={(e) => setStat(i, "number", e.target.value)} placeholder="100+" />
              <input className={inputClass} value={s.label} onChange={(e) => setStat(i, "label", e.target.value)} placeholder="Weddings Planned" />
              <button type="button" onClick={() => removeStat(i)} className="shrink-0 rounded-full bg-red-50 px-3 py-2 font-body text-xs text-red-400 hover:bg-red-100">Remove</button>
            </div>
          ))}
          <button type="button" onClick={addStat} className="w-fit rounded-full border border-[#eddce3] px-5 py-2 font-body text-sm text-[#7b5e67] transition hover:bg-[#f9edf2]">+ Add Stat</button>
        </div>
      </Card>

      <Card className="mb-6">
        <h3 className="mb-5 font-display text-xl font-semibold text-[#49353d]">Bio Chapters</h3>
        <div className="grid gap-5">
          {(form.chapters || []).map((ch, i) => (
            <div key={i} className="rounded-2xl border border-[#f1e1e7] bg-[#fdfafa] p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-body text-sm font-semibold text-[#49353d]">Chapter {i + 1}</span>
                <button type="button" onClick={() => removeChapter(i)} className="rounded-full bg-red-50 px-3 py-1.5 font-body text-xs text-red-400 hover:bg-red-100">Remove</button>
              </div>
              <Field label="Title" className="mb-3">
                <input className={inputClass} value={ch.title} onChange={(e) => setChapter(i, "title", e.target.value)} />
              </Field>
              <Field label="Text">
                <textarea className={textareaClass + " min-h-[140px]"} value={ch.text} onChange={(e) => setChapter(i, "text", e.target.value)} />
              </Field>
            </div>
          ))}
          <button type="button" onClick={addChapter} className="w-fit rounded-full border border-[#eddce3] px-5 py-2 font-body text-sm text-[#7b5e67] transition hover:bg-[#f9edf2]">+ Add Chapter</button>
        </div>
      </Card>

      <SaveButton saving={saving} saved={saved} onClick={save} />
    </div>
  );
}
