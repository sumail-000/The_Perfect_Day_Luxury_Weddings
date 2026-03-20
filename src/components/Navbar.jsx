import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { useContent } from "../context/ContentContext";

export default function Navbar() {
  const { navLinks, contact } = useContent();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setAtTop(window.scrollY < 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waLink = `https://wa.me/${contact.whatsapp_number}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#fff6f8]/95 backdrop-blur-md shadow-[0_2px_30px_rgba(195,145,164,0.15)]"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-10">
        <a href="#" className="flex items-center">
          <img
            src="/logo.png"
            alt="The Perfect Day"
            className={`h-9 w-auto object-contain sm:h-11 md:h-12 transition-all duration-300 ${atTop ? "brightness-0 invert" : ""}`}
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href}
              className={`font-body text-sm font-medium tracking-wide transition-colors duration-200 ${
                scrolled ? "text-[#7b5e67] hover:text-[#0fb7b1]" : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={waLink}
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
          className={`rounded-xl p-2 md:hidden transition-colors duration-200 ${scrolled ? "text-[#7b5e67]" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#f1e1e7] bg-[#fff6f8]/98 backdrop-blur-md px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {navLinks.map((item) => (
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
              href={waLink}
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
