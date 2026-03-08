import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_30px_rgba(195,145,164,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="The Perfect Day"
            className="h-14 w-auto object-contain md:h-16"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <a key={item.label} href={item.href} className="nav-link font-medium tracking-wide">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://wa.me/971529779108"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 font-body text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl p-2 text-[#7b5e67] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#f1e1e7] bg-white/98 backdrop-blur-md px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-body text-base font-medium text-[#7b5e67] hover:text-[#0fb7b1]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/971529779108"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex w-fit items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-body text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
