import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useContent } from "../context/ContentContext";

export default function Gallery() {
  const { galleryItems } = useContent();
  const [lightbox, setLightbox] = useState(null);
  const prev = () => setLightbox((i) => (i === 0 ? galleryItems.length - 1 : i - 1));
  const next = () => setLightbox((i) => (i === galleryItems.length - 1 ? 0 : i + 1));

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-20 lg:px-10 lg:py-28">
      <div data-reveal="up" className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <div className="font-script-soft text-4xl text-[#e5a4b7] sm:text-5xl md:text-6xl">
            Signature Gallery
          </div>
          <h2 className="mt-1 font-display text-3xl font-semibold text-[#46353b] sm:text-4xl md:text-5xl lg:text-6xl">
            A visual moodboard of the experiences we create.
          </h2>
        </div>
        <a
          href="#inquiry"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#edd7e0] bg-white px-6 py-3 font-body text-sm font-semibold text-[#b17b8e] shadow-sm transition hover:bg-[#fff6f9]"
        >
          Enquire for your event →
        </a>
      </div>

      <div className="columns-1 gap-4 sm:columns-2 sm:gap-5 xl:columns-3">
        {galleryItems.map((item, idx) => (
          <div
            key={item.id || item.title}
            data-reveal="scale"
            data-delay={String((idx % 3) * 100)}
            className="group mb-5 cursor-pointer overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(202,178,188,0.18)] break-inside-avoid transition hover:shadow-[0_30px_80px_rgba(202,178,188,0.30)]"
            onClick={() => setLightbox(idx)}
          >
            <div className="overflow-hidden">
              <img
                src={item.image_url || item.image}
                alt={item.title}
                className="w-full object-cover transition duration-700 group-hover:scale-105"
                style={{ height: idx % 3 === 0 ? "clamp(240px, 40vw, 420px)" : "clamp(180px, 30vw, 300px)" }}
              />
            </div>
            <div className="p-6">
              <div className="font-script-soft text-3xl text-[#dfa5b7]">{item.title}</div>
              <div className="mt-1.5 font-body text-xs uppercase tracking-[0.25em] text-[#7fc8c2]">
                {item.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:left-4 sm:p-3"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div
            className="relative mx-10 max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[1.5rem] sm:mx-16 sm:rounded-[2rem]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={(galleryItems[lightbox].image_url || galleryItems[lightbox].image).replace("w=800", "w=1400")}
              alt={galleryItems[lightbox].title}
              className="max-h-[85vh] w-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <div className="font-script-soft text-3xl text-white">{galleryItems[lightbox].title}</div>
              <div className="mt-1 font-body text-xs uppercase tracking-[0.25em] text-white/70">
                {galleryItems[lightbox].subtitle}
              </div>
            </div>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:right-4 sm:p-3"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}
