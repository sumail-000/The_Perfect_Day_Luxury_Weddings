import { Check, Loader2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function PageHeader({ title, subtitle, backTo = "/admin" }) {
  return (
    <div className="mb-8">
      <Link to={backTo} className="mb-3 inline-flex items-center gap-1.5 font-body text-sm text-[#0fb7b1] transition hover:text-[#0da8a2]">
        <ArrowLeft className="h-4 w-4" />
        Back to dashboard
      </Link>
      <h1 className="font-display text-3xl font-semibold text-[#49353d]">{title}</h1>
      {subtitle && <p className="mt-1 font-body text-sm text-[#7b5e67]">{subtitle}</p>}
    </div>
  );
}

export function SaveButton({ saving, saved, onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={saving}
      className={`inline-flex items-center gap-2 rounded-full bg-[#0fb7b1] px-7 py-3 font-body text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#0da8a2] disabled:opacity-50 ${className}`}
    >
      {saving ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : saved ? (
        <Check className="h-4 w-4" />
      ) : null}
      {saving ? "Saving..." : saved ? "Saved!" : "Save Changes"}
    </button>
  );
}

export function Field({ label, children, className = "" }) {
  return (
    <div className={className}>
      <label className="mb-2 block font-body text-sm font-medium text-[#6d5d64]">{label}</label>
      {children}
    </div>
  );
}

export const inputClass =
  "w-full rounded-2xl border border-[#eddce3] bg-[#fdfafa] px-5 py-3.5 font-body text-[#3c2d31] outline-none transition focus:border-[#0fb7b1] focus:ring-2 focus:ring-[#0fb7b1]/10 placeholder:text-[#b09099]";

export const textareaClass =
  "w-full min-h-[120px] rounded-2xl border border-[#eddce3] bg-[#fdfafa] px-5 py-3.5 font-body text-[#3c2d31] outline-none transition focus:border-[#0fb7b1] focus:ring-2 focus:ring-[#0fb7b1]/10 placeholder:text-[#b09099] resize-none";

export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-[2rem] border border-[#f1e1e7] bg-white p-6 shadow-sm sm:p-8 ${className}`}>
      {children}
    </div>
  );
}
