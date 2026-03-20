import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  LayoutDashboard,
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
  LogOut,
  ChevronLeft,
} from "lucide-react";

const NAV_ITEMS = [
  { to: "/admin", icon: LayoutDashboard, label: "Dashboard", end: true },
  { to: "/admin/hero", icon: Sparkles, label: "Hero" },
  { to: "/admin/about", icon: Info, label: "About" },
  { to: "/admin/profile", icon: User, label: "Planner Profile" },
  { to: "/admin/services/wedding", icon: Heart, label: "Weddings" },
  { to: "/admin/services/social", icon: GlassWater, label: "Social Events" },
  { to: "/admin/services/destination", icon: MapPin, label: "Destination" },
  { to: "/admin/gallery", icon: Image, label: "Gallery" },
  { to: "/admin/instagram", icon: Instagram, label: "Instagram" },
  { to: "/admin/faqs", icon: HelpCircle, label: "FAQs" },
  { to: "/admin/contact", icon: Phone, label: "Contact Info" },
  { to: "/admin/inquiries", icon: Inbox, label: "Inquiries" },
];

export default function AdminSidebar({ open, onClose }) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin/login");
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-40 bg-black/30 lg:hidden" onClick={onClose} />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 flex h-full w-72 flex-col border-r border-[#f1e1e7] bg-white transition-transform duration-300 lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#f1e1e7] px-6 py-5">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="TPD" className="h-8 w-auto object-contain" />
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#b08a96]">
              Admin
            </span>
          </div>
          <button onClick={onClose} className="rounded-xl p-1.5 text-[#b09099] hover:bg-[#f9edf2] lg:hidden">
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={onClose}
              className={({ isActive }) =>
                `mb-1 flex items-center gap-3 rounded-2xl px-4 py-3 font-body text-sm transition-colors ${
                  isActive
                    ? "bg-[#f9edf2] font-semibold text-[#49353d]"
                    : "text-[#7b5e67] hover:bg-[#fdf5f7]"
                }`
              }
            >
              <item.icon className="h-4 w-4 shrink-0" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-[#f1e1e7] px-3 py-4">
          <a
            href="/"
            target="_blank"
            className="mb-2 flex items-center gap-3 rounded-2xl px-4 py-3 font-body text-sm text-[#7b5e67] transition hover:bg-[#f0faf9]"
          >
            <ChevronLeft className="h-4 w-4" />
            View Website
          </a>
          <button
            onClick={handleSignOut}
            className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 font-body text-sm text-red-400 transition hover:bg-red-50"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
}
