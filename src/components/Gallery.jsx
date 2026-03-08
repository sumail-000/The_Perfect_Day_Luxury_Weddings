import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_ITEMS } from "../data/content";

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  const prev = () => setLightbox((i) => (i === 0 ? GALLERY_ITEMS.length - 1 : i - 1));
  const next = () => setLightbox((i) => (i === GALLERY_ITEMS.length - 1 ? 0 : i + 1));

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <div className="font-script-soft text-5xl text-[#e5a4b7] md:text-6xl">
            Signature Gallery
          </div>
          <h2 className="mt-2 font-display text-4xl font-semibold text-[#46353b] md:text-5xl lg:text-6xl">
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

      <div className="columns-1 gap-5 sm:columns-2 xl:columns-3">
        {GALLERY_ITEMS.map((item, idx) => (
          <div
            key={item.title}
            className="group mb-5 cursor-pointer overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(202,178,188,0.18)] break-inside-avoid transition hover:shadow-[0_30px_80px_rgba(202,178,188,0.30)]"
            onClick={() => setLightbox(idx)}
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover transition duration-700 group-hover:scale-105"
                style={{ height: idx % 3 === 0 ? "420px" : "300px" }}
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
            className="absolute left-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div
            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-[2rem]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_ITEMS[lightbox].image.replace("w=800", "w=1400")}
              alt={GALLERY_ITEMS[lightbox].title}
              className="max-h-[85vh] w-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <div className="font-script-soft text-3xl text-white">{GALLERY_ITEMS[lightbox].title}</div>
              <div className="mt-1 font-body text-xs uppercase tracking-[0.25em] text-white/70">
                {GALLERY_ITEMS[lightbox].subtitle}
              </div>
            </div>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
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
