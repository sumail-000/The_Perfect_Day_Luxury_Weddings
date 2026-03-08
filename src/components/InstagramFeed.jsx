import { Instagram, MessageCircle } from "lucide-react";
import { INSTAGRAM_IMAGES } from "../data/content";

export default function InstagramFeed() {
  return (
    <section className="bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <div className="font-script text-5xl text-[#f0b7c8] md:text-6xl">
              Instagram Style Feed
            </div>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl lg:text-6xl">
              Soft, editorial, scroll-worthy moments.
            </h2>
            <p className="mt-6 max-w-xl font-body text-lg leading-8 text-white/70">
              Follow our curated social showcase — luxury bridal styling, behind-the-scenes
              planning, client moments and décor details from real celebrations.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://instagram.com/tpdweddings"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-body text-sm font-semibold text-[#111]"
              >
                <Instagram className="h-4 w-4" />
                @tpdweddings
              </a>
              <a
                href="https://wa.me/971529779108"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-body text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {INSTAGRAM_IMAGES.map((image, index) => (
              <a
                key={index}
                href="https://instagram.com/tpdweddings"
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-[1.5rem] bg-white/5"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image}
                    alt={`Instagram moment ${index + 1}`}
                    className="h-40 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-48"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/30">
                    <Instagram className="h-6 w-6 text-white opacity-0 transition duration-300 group-hover:opacity-100" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
