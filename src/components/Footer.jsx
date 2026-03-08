import { Instagram, MessageCircle, Phone, MapPin, Heart } from "lucide-react";
import { NAV_LINKS } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-[#110d0f] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <img src="/logo.png" alt="The Perfect Day" className="h-10 w-auto object-contain brightness-0 invert opacity-90 sm:h-12 lg:h-14" />
            <p className="mt-5 max-w-sm font-body text-sm leading-7 text-white/55">
              Ultra-luxury wedding and event planning across Ras Al Khaimah, Dubai and destination
              venues. We craft bespoke celebrations with a feminine signature.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="https://instagram.com/tpdweddings"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-[#f0b7c8] hover:text-[#f0b7c8]"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/971529779108"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-[#25D366] hover:text-[#25D366]"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="tel:+971529779108"
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
              {NAV_LINKS.map((item) => (
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
                  Compass Co-working Center<br />
                  Al Shohada Road, Street C<br />
                  Al Hamra Area, Ras Al Khaimah<br />
                  P.O. Box 16111, UAE
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#f0b7c8]" />
                <a href="tel:+971529779108" className="font-body text-sm text-white/55 hover:text-white transition">
                  +971 52 977 9108
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-[#25D366]" />
                <a
                  href="https://wa.me/971529779108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-white/55 hover:text-white transition"
                >
                  WhatsApp Available
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
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
