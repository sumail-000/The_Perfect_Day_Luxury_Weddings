import { Link } from "react-router-dom";
import {
  Sparkles,
  Info,
  User,
  Heart,
  GlassWater,
  MapPin,
  Image,
  Instagram,
  HelpCircle,
  Phone,
  Inbox,
} from "lucide-react";

const SECTIONS = [
  { to: "/admin/hero", icon: Sparkles, label: "Hero Section", desc: "Background image, headlines, call-to-action", color: "#f9e6ed", iconColor: "#c17b94" },
  { to: "/admin/about", icon: Info, label: "About", desc: "About text, pillars, section image", color: "#f0faf9", iconColor: "#54aba5" },
  { to: "/admin/profile", icon: User, label: "Planner Profile", desc: "Bio, stats, photos, quote", color: "#f9e6ed", iconColor: "#c17b94" },
  { to: "/admin/services/wedding", icon: Heart, label: "Weddings", desc: "Wedding service cards", color: "#f9e6ed", iconColor: "#c17b94" },
  { to: "/admin/services/social", icon: GlassWater, label: "Social Events", desc: "Social event service cards", color: "#f0faf9", iconColor: "#54aba5" },
  { to: "/admin/services/destination", icon: MapPin, label: "Destination", desc: "Destination wedding service cards", color: "#f0faf9", iconColor: "#54aba5" },
  { to: "/admin/gallery", icon: Image, label: "Gallery", desc: "Manage gallery images", color: "#f9e6ed", iconColor: "#c17b94" },
  { to: "/admin/instagram", icon: Instagram, label: "Instagram Feed", desc: "Instagram showcase images", color: "#f0faf9", iconColor: "#54aba5" },
  { to: "/admin/faqs", icon: HelpCircle, label: "FAQs", desc: "Questions & answers", color: "#f9e6ed", iconColor: "#c17b94" },
  { to: "/admin/contact", icon: Phone, label: "Contact Info", desc: "Phone, address, socials", color: "#f0faf9", iconColor: "#54aba5" },
  { to: "/admin/inquiries", icon: Inbox, label: "Inquiries", desc: "View form submissions", color: "#f9e6ed", iconColor: "#c17b94" },
];

export default function DashboardHome() {
  return (
    <div>
      <div className="mb-8">
        <div className="font-script text-4xl text-[#e7a8bb]">Welcome back</div>
        <h1 className="mt-1 font-display text-3xl font-semibold text-[#49353d]">
          Manage Your Website Content
        </h1>
        <p className="mt-2 font-body text-sm text-[#7b5e67]">
          Select a section below to edit text, images, or other content on your website.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {SECTIONS.map((s) => (
          <Link
            key={s.to}
            to={s.to}
            className="group flex items-start gap-4 rounded-[2rem] border border-[#f1e1e7] bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            <div
              className="shrink-0 rounded-full p-3"
              style={{ backgroundColor: s.color }}
            >
              <s.icon className="h-5 w-5" style={{ color: s.iconColor }} />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-[#49353d] group-hover:text-[#0fb7b1] transition-colors">
                {s.label}
              </h3>
              <p className="mt-1 font-body text-sm text-[#7b5e67]">{s.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
