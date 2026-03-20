import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { useContent } from "../../context/ContentContext";
import { PageHeader, SaveButton, Field, Card, inputClass, textareaClass } from "../../components/admin/AdminUI";

export default function ContactEditor() {
  const { contact, refetch } = useContent();
  const [form, setForm] = useState(contact);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => { setForm(contact); }, [contact]);

  const set = (key, val) => {
    setForm((f) => ({ ...f, [key]: val }));
    setSaved(false);
  };

  const save = async () => {
    setSaving(true);
    const { error } = await supabase
      .from("site_content")
      .update({ data: form, updated_at: new Date().toISOString() })
      .eq("section", "contact_info");
    setSaving(false);
    if (error) alert("Error: " + error.message);
    else { setSaved(true); refetch(); }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader title="Contact Info" subtitle="Update your phone number, address, and social links" />

      <Card className="mb-6">
        <h3 className="mb-5 font-display text-xl font-semibold text-[#49353d]">Phone & WhatsApp</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Phone Number (display)">
            <input className={inputClass} value={form.phone || ""} onChange={(e) => set("phone", e.target.value)} placeholder="+971 52 977 9108" />
          </Field>
          <Field label="WhatsApp Number (digits only)">
            <input className={inputClass} value={form.whatsapp_number || ""} onChange={(e) => set("whatsapp_number", e.target.value)} placeholder="971529779108" />
          </Field>
        </div>
      </Card>

      <Card className="mb-6">
        <h3 className="mb-5 font-display text-xl font-semibold text-[#49353d]">Address</h3>
        <div className="grid gap-4">
          <Field label="Line 1">
            <input className={inputClass} value={form.address_line_1 || ""} onChange={(e) => set("address_line_1", e.target.value)} />
          </Field>
          <Field label="Line 2">
            <input className={inputClass} value={form.address_line_2 || ""} onChange={(e) => set("address_line_2", e.target.value)} />
          </Field>
          <Field label="Line 3">
            <input className={inputClass} value={form.address_line_3 || ""} onChange={(e) => set("address_line_3", e.target.value)} />
          </Field>
          <Field label="Line 4">
            <input className={inputClass} value={form.address_line_4 || ""} onChange={(e) => set("address_line_4", e.target.value)} />
          </Field>
        </div>
      </Card>

      <Card className="mb-6">
        <h3 className="mb-5 font-display text-xl font-semibold text-[#49353d]">Social</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Instagram Handle">
            <input className={inputClass} value={form.instagram_handle || ""} onChange={(e) => set("instagram_handle", e.target.value)} placeholder="tpdweddings" />
          </Field>
          <Field label="Instagram URL">
            <input className={inputClass} value={form.instagram_url || ""} onChange={(e) => set("instagram_url", e.target.value)} placeholder="https://instagram.com/tpdweddings" />
          </Field>
        </div>
      </Card>

      <Card className="mb-6">
        <h3 className="mb-5 font-display text-xl font-semibold text-[#49353d]">Footer</h3>
        <Field label="Footer Tagline">
          <textarea className={textareaClass} value={form.footer_tagline || ""} onChange={(e) => set("footer_tagline", e.target.value)} />
        </Field>
      </Card>

      <SaveButton saving={saving} saved={saved} onClick={save} />
    </div>
  );
}
