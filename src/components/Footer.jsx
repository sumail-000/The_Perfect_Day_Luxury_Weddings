import { Instagram, MessageCircle, Phone, MapPin } from "lucide-react";
import { useContent } from "../context/ContentContext";

export default function Footer() {
  const { navLinks, contact } = useContent();
  const waLink = `https://wa.me/${contact.whatsapp_number}`;

  return (
    <footer className="bg-[#110d0f] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div data-reveal="up" className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <img src="/logo.png" alt="The Perfect Day" className="h-12 w-auto object-contain brightness-0 invert opacity-90 sm:h-14 lg:h-[5.5rem]" />
            <p className="mt-5 max-w-sm font-body text-sm leading-7 text-white/55">
              {contact.footer_tagline}
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href={contact.instagram_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-[#f0b7c8] hover:text-[#f0b7c8]"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-[#25D366] hover:text-[#25D366]"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={`tel:${contact.phone?.replace(/\s/g, "")}`}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-[#7fc8c2] hover:text-[#7fc8c2]"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-body text-xs uppercase tracking-[0.35em] text-white/40">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-body text-sm text-white/55 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-6 font-body text-xs uppercase tracking-[0.35em] text-white/40">
              Contact
            </h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#7fc8c2]" />
                <p className="font-body text-sm leading-6 text-white/55">
                  {contact.address_line_1}<br />
                  {contact.address_line_2}<br />
                  {contact.address_line_3}<br />
                  {contact.address_line_4}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#f0b7c8]" />
                <a href={`tel:${contact.phone?.replace(/\s/g, "")}`} className="font-body text-sm text-white/55 hover:text-white transition">
                  {contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-[#25D366]" />
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-white/55 hover:text-white transition">
                  WhatsApp Available
                </a>
              </div>
            </div>
          </div>
        </div>

        <div data-reveal="fade" data-delay="200" className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
          <div className="font-script-soft text-3xl text-[#eab0c3]">The Perfect Day</div>
          <p className="flex items-center gap-1.5 font-body text-xs text-white/35">
            Wedding & Event Planners · Ras Al Khaimah · UAE
          </p>
          <p className="font-body text-xs text-white/30">
            © {new Date().getFullYear()} The Perfect Day. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
