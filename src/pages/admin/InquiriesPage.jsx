import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { PageHeader, Card } from "../../components/admin/AdminUI";
import { Trash2, Phone, Mail, Calendar, MapPin, Users, MessageSquare } from "lucide-react";

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    const { data } = await supabase
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false });
    setInquiries(data || []);
    setLoading(false);
  };

  useEffect(() => { fetch(); }, []);

  const remove = async (id) => {
    if (!confirm("Delete this inquiry?")) return;
    await supabase.from("inquiries").delete().eq("id", id);
    setInquiries((prev) => prev.filter((i) => i.id !== id));
  };

  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader title="Inquiries" subtitle="Wedding and event inquiries submitted through your website" />

      {loading ? (
        <p className="font-body text-sm text-[#7b5e67]">Loading...</p>
      ) : inquiries.length === 0 ? (
        <Card>
          <div className="py-12 text-center">
            <div className="font-script text-3xl text-[#e7a8bb]">No inquiries yet</div>
            <p className="mt-2 font-body text-sm text-[#7b5e67]">
              Inquiries submitted through the website form will appear here.
            </p>
          </div>
        </Card>
      ) : (
        <div className="grid gap-4">
          {inquiries.map((inq) => (
            <Card key={inq.id}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-display text-xl font-semibold text-[#49353d]">{inq.name}</h3>
                    {inq.event_type && (
                      <span className="rounded-full bg-[#f9e6ed] px-3 py-1 font-body text-xs font-medium text-[#c17b94]">
                        {inq.event_type}
                      </span>
                    )}
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="flex items-center gap-2 font-body text-sm text-[#6d5d64]">
                      <Phone className="h-3.5 w-3.5 text-[#b09099]" />
                      <a href={`tel:${inq.phone}`} className="hover:text-[#0fb7b1]">{inq.phone}</a>
                    </div>
                    {inq.email && (
                      <div className="flex items-center gap-2 font-body text-sm text-[#6d5d64]">
                        <Mail className="h-3.5 w-3.5 text-[#b09099]" />
                        <a href={`mailto:${inq.email}`} className="hover:text-[#0fb7b1]">{inq.email}</a>
                      </div>
                    )}
                    {inq.event_date && (
                      <div className="flex items-center gap-2 font-body text-sm text-[#6d5d64]">
                        <Calendar className="h-3.5 w-3.5 text-[#b09099]" />
                        {inq.event_date}
                      </div>
                    )}
                    {inq.guests && (
                      <div className="flex items-center gap-2 font-body text-sm text-[#6d5d64]">
                        <Users className="h-3.5 w-3.5 text-[#b09099]" />
                        {inq.guests} guests
                      </div>
                    )}
                    {inq.location && (
                      <div className="flex items-center gap-2 font-body text-sm text-[#6d5d64]">
                        <MapPin className="h-3.5 w-3.5 text-[#b09099]" />
                        {inq.location}
                      </div>
                    )}
                  </div>

                  {inq.message && (
                    <div className="mt-3 flex items-start gap-2 rounded-xl bg-[#fdfafa] p-3 border border-[#f1e1e7]">
                      <MessageSquare className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#b09099]" />
                      <p className="font-body text-sm leading-relaxed text-[#6d5d64]">{inq.message}</p>
                    </div>
                  )}

                  <p className="mt-3 font-body text-xs text-[#b09099]">
                    {formatDate(inq.created_at)}
                  </p>
                </div>

                <button onClick={() => remove(inq.id)} className="shrink-0 rounded-full p-2 text-red-300 transition hover:bg-red-50 hover:text-red-400">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
