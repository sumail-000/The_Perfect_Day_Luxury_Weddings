import { STATS } from "../data/content";

export default function PlannerProfile() {
  return (
    <section className="relative overflow-hidden">

      {/* ══════════════════════════════════════════════════════════════
          ACT I — The Reveal: Full-bleed hero portrait with floating identity card
          ══════════════════════════════════════════════════════════════ */}
      <div className="relative">
        {/* Full-width portrait — cinematic crop */}
        <div data-reveal="fade" className="relative h-[70vh] min-h-[480px] max-h-[720px] w-full overflow-hidden sm:min-h-[540px]">
          <img
            src="/profile_pic_camera.jpg"
            alt="Navdeep Tanwar — Chief Planner, The Perfect Day"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          {/* Cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2a1a1f]/80 via-[#2a1a1f]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a1a1f]/30 to-transparent" />

          {/* Name lockup — anchored bottom-left over the portrait */}
          <div className="absolute bottom-8 left-0 right-0 px-5 sm:bottom-12 sm:px-8 lg:bottom-16 lg:px-16">
            <div className="mx-auto max-w-7xl">
              <div data-reveal="left" className="max-w-xl">
                <div className="font-script text-3xl text-[#f0c8d8] drop-shadow-lg sm:text-4xl lg:text-5xl">
                  Chief Planner
                </div>
                <h2 className="mt-1 font-display text-4xl font-semibold text-white drop-shadow-lg sm:text-5xl lg:text-7xl">
                  Navdeep Tanwar
                </h2>
                <div className="mt-3 font-body text-[10px] uppercase tracking-[0.4em] text-white/60 sm:text-xs">
                  Certified Wedding Planner · Interior Designer
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating stats card — overlaps the portrait bottom edge */}
        <div className="relative z-10 -mt-10 px-5 sm:-mt-12 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div
              data-reveal="up"
              className="inline-flex items-center gap-0 rounded-[1.5rem] border border-[#f1e1e7] bg-white/95 px-6 py-5 shadow-[0_20px_60px_rgba(195,145,164,0.18)] backdrop-blur-sm sm:rounded-[2rem] sm:px-10 sm:py-7"
            >
              {STATS.map((item, i) => (
                <div key={item.label} className="flex items-center">
                  {i > 0 && <div className="mx-5 h-10 w-px bg-[#eedae1] sm:mx-8" />}
                  <div className="text-center">
                    <div className="font-display text-2xl font-semibold text-[#4b3a40] sm:text-3xl lg:text-4xl">
                      {item.number}
                    </div>
                    <div className="mt-1 font-body text-[8px] uppercase tracking-[0.22em] text-[#a37a88] sm:text-[10px]">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          ACT II — The Story: Asymmetric editorial with offset selfie
          ══════════════════════════════════════════════════════════════ */}
      <div className="relative bg-white">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 h-[600px] w-1/3 bg-[#fdf7f9] pointer-events-none hidden lg:block" />
        <div className="absolute top-40 left-10 h-64 w-64 rounded-full bg-[#f7dce6]/20 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-16 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-20">

            {/* Left — Editorial text */}
            <div>
              {/* Intro paragraph — large serif italic, the "lead" */}
              <div data-reveal="left">
                <p className="font-display text-xl font-normal italic leading-[1.85] text-[#5a4a50] sm:text-2xl sm:leading-[1.85] lg:text-[1.65rem]">
                  Navdeep Tanwar's journey into celebration design began with a simple belief:
                  the most beautiful events are the ones people don't just see, but deeply feel.
                </p>
              </div>

              {/* Decorative divider */}
              <div data-reveal="fade" data-delay="200" className="my-8 flex items-center gap-4 lg:my-10">
                <div className="h-px flex-1 bg-gradient-to-r from-[#e7c3d0] to-transparent" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#dfa4b6]" />
                <div className="h-px w-12 bg-[#e7c3d0]" />
              </div>

              {/* Body text — refined Montserrat */}
              <div data-reveal="up-sm" data-delay="150" className="space-y-5">
                <p className="font-body text-[13px] leading-[2.1] text-[#73656c] sm:text-sm sm:leading-[2.05]">
                  For him, weddings have never been only about décor, logistics, or grand venues —
                  they are about emotion, memory, intimacy, and the art of creating moments that
                  stay with families forever. That belief became the foundation of The Perfect Day.
                </p>
                <p className="font-body text-[13px] leading-[2.1] text-[#73656c] sm:text-sm sm:leading-[2.05]">
                  With more than 20 years of experience, Navdeep has built a reputation for crafting
                  celebrations that are as personal as they are spectacular. A certified wedding planner
                  and interior designer, he brings together the eye of a designer, the instinct of a
                  storyteller, and the discipline of a planner who understands that true luxury lies in
                  how effortlessly every detail comes together. Over the years, he has planned and executed
                  more than 100 weddings across India, ranging from intimate family gatherings to lavish
                  multi-day destination celebrations.
                </p>
                <p className="font-body text-[13px] leading-[2.1] text-[#73656c] sm:text-sm sm:leading-[2.05]">
                  What makes Navdeep's approach truly distinctive is the life he brings into his work
                  beyond events. An avid wanderlust-driven solo traveller, he draws inspiration from
                  places, cultures, architecture, textures, and human connection. A passionate home cook,
                  he believes that the most memorable experiences are built with warmth, soul, and
                  generosity. And as a Virgo who believes in perfection and nothing less, he approaches
                  every celebration with precision, grace, and an uncompromising eye for beauty.
                </p>
              </div>
            </div>

            {/* Right — Selfie with decorative framing */}
            <div data-reveal="right" className="relative lg:sticky lg:top-28">
              {/* Teal accent blob */}
              <div className="absolute -top-8 -right-8 h-56 w-56 rounded-full bg-[#d4ece9]/30 blur-3xl pointer-events-none" />
              {/* Rose accent blob */}
              <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-[#f0d4df]/40 blur-3xl pointer-events-none" />

              {/* Decorative border frame — offset */}
              <div className="absolute -top-3 -right-3 bottom-6 left-6 rounded-[2.5rem] border-2 border-[#e7c3d0]/40 pointer-events-none sm:-top-4 sm:-right-4 sm:bottom-8 sm:left-8" />

              {/* The actual photo */}
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_rgba(60,45,49,0.12)]">
                <img
                  src="/profile_pic_selfie.jpg"
                  alt="Navdeep Tanwar"
                  className="h-80 w-full object-cover object-top sm:h-[440px] lg:h-[520px]"
                />
                {/* Subtle bottom gradient for depth */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#2a1a1f]/20 to-transparent" />
              </div>

              {/* 100+ badge on selfie */}
              <div
                data-reveal="scale"
                data-delay="300"
                className="absolute -bottom-4 -left-4 z-10 rounded-2xl bg-gradient-to-br from-[#f7d8e3] to-[#fce8ef] px-5 py-3.5 shadow-xl sm:-left-6 sm:px-6 sm:py-4"
              >
                <div className="font-display text-xl font-semibold text-[#593c46] sm:text-2xl">100+</div>
                <div className="mt-0.5 font-body text-[9px] uppercase tracking-[0.25em] text-[#a37a88] sm:text-[10px]">
                  Weddings Executed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          ACT III — The Signature: Pull-quote on subtle textured band
          ══════════════════════════════════════════════════════════════ */}
      <div className="relative bg-[#fdf7f9] py-14 sm:py-20 lg:py-24">
        {/* Subtle decorative dots */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #3c2d31 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div data-reveal="up" className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <div className="font-script text-[1.6rem] leading-relaxed text-[#c98da2] sm:text-3xl sm:leading-relaxed md:text-4xl md:leading-relaxed">
            For Navdeep, every wedding is not just an event —<br className="hidden md:inline" /> it is a story waiting to be told with elegance,<br className="hidden md:inline" /> emotion, and unforgettable detail.
          </div>
          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-[#e7c3d0]" />
            <div className="h-1.5 w-1.5 rotate-45 bg-[#dfa4b6]" />
            <div className="h-px w-8 bg-[#e7c3d0]" />
          </div>
        </div>
      </div>

    </section>
  );
}
