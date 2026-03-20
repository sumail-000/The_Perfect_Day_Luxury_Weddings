import { useEffect, useRef, useState } from "react";
import { useContent } from "../context/ContentContext";

function useCountUp(target, duration = 2000, trigger = false) {
  const [value, setValue] = useState(0);
  const isNumber = /^\d+/.test(target);
  const numericTarget = parseInt(target, 10) || 0;

  useEffect(() => {
    if (!trigger || !isNumber) return;
    let start = 0;
    const step = Math.ceil(numericTarget / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= numericTarget) { setValue(numericTarget); clearInterval(timer); }
      else setValue(start);
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, numericTarget, isNumber, duration]);

  if (!isNumber) return target;
  return trigger ? value + (target.includes("+") ? "+" : "") : "0" + (target.includes("+") ? "+" : "");
}

function AnimatedStat({ item, trigger }) {
  const display = useCountUp(item.number, 1800, trigger);
  return (
    <div className="text-center">
      <div className="font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
        {display}
      </div>
      <div className="mt-1.5 font-body text-[8px] uppercase tracking-[0.3em] text-white/50 sm:text-[10px]">
        {item.label}
      </div>
    </div>
  );
}

export default function PlannerProfile() {
  const { planner } = useContent();
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    if (!statsRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsVisible(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const stats = planner.stats || [];
  const chapters = planner.chapters || [];

  return (
    <section className="relative overflow-hidden">
      <div className="relative">
        <div data-reveal="fade" className="relative h-[80vh] min-h-[520px] max-h-[800px] w-full overflow-hidden sm:min-h-[600px]">
          <img
            src={planner.portrait_image}
            alt={`${planner.name} — ${planner.title}, The Perfect Day`}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0e12] via-[#1a0e12]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0e12]/40 via-transparent to-[#1a0e12]/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(231,168,187,0.08),transparent_60%)]" />

          <div className="absolute inset-x-0 bottom-0 px-5 pb-10 sm:px-8 sm:pb-14 lg:px-16 lg:pb-20">
            <div className="mx-auto max-w-7xl">
              <div data-reveal="left" className="mb-10 sm:mb-14">
                <div className="font-body text-[10px] uppercase tracking-[0.5em] text-[#c9949f] sm:text-[11px]">
                  {planner.subtitle}
                </div>
                <div className="mt-3 font-script text-4xl text-[#f0c8d8] drop-shadow-lg sm:text-5xl lg:text-6xl">
                  {planner.title}
                </div>
                <h2 className="mt-1 font-display text-5xl font-semibold leading-[0.95] text-white drop-shadow-lg sm:text-6xl lg:text-8xl">
                  {planner.name?.split(" ").map((part, i) => (
                    <span key={i}>{i > 0 && <br />}{part}</span>
                  ))}
                </h2>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-px w-10 bg-[#f0c8d8]/40" />
                  <div className="font-body text-[10px] uppercase tracking-[0.35em] text-white/50 sm:text-xs">
                    {planner.credentials}
                  </div>
                </div>
              </div>

              <div ref={statsRef} className="flex items-center gap-0">
                {stats.map((item, i) => (
                  <div key={item.label} className="flex items-center">
                    {i > 0 && <div className="mx-5 h-8 w-px bg-white/15 sm:mx-8 sm:h-10" />}
                    <AnimatedStat item={item} trigger={statsVisible} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute top-0 right-0 bottom-0 w-full bg-[#faf2f5] pointer-events-none clip-diagonal hidden lg:block" />
        <style>{`.clip-diagonal { clip-path: polygon(45% 0, 100% 0, 100% 100%, 35% 100%); }`}</style>

        <div className="absolute top-24 left-[10%] h-72 w-72 rounded-full bg-[#f7dce6]/15 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-32 right-[15%] h-56 w-56 rounded-full bg-[#d4ece9]/15 blur-[80px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24 lg:px-16 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-16 xl:gap-24">
            <div className="max-w-xl">
              <div data-reveal="left">
                <p className="font-display text-[1.35rem] font-normal italic leading-[1.9] text-[#4a3a40] sm:text-2xl sm:leading-[1.85] lg:text-[1.7rem]">
                  "{planner.quote}"
                </p>
                <div className="mt-3 font-body text-[10px] uppercase tracking-[0.35em] text-[#b08a96]">
                  — {planner.name}
                </div>
              </div>

              <div className="relative mt-12 pl-8 sm:mt-14 sm:pl-10">
                <div data-reveal="fade" data-delay="200" className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#e7c3d0] via-[#e7c3d0] to-transparent sm:left-1" />

                {chapters.map((ch, i) => (
                  <div key={ch.title} data-reveal="up-sm" data-delay={String((i + 1) * 100)} className={`relative ${i < chapters.length - 1 ? "pb-8 sm:pb-10" : ""}`}>
                    <div className="absolute -left-8 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#dfa4b6] bg-white sm:-left-10 sm:h-3 sm:w-3" />
                    <div className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#b08a96]">{ch.title}</div>
                    <p className="mt-2.5 font-body text-[13px] leading-[2.1] text-[#73656c] sm:text-sm">
                      {ch.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div data-reveal="right" className="relative lg:sticky lg:top-24">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.5rem] bg-gradient-to-br from-[#f0d4df]/60 to-[#d4ece9]/40 pointer-events-none sm:translate-x-6 sm:translate-y-6" />
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_40px_100px_rgba(60,45,49,0.15)]">
                <img
                  src={planner.selfie_image}
                  alt={planner.name}
                  className="h-[420px] w-full object-cover object-top sm:h-[520px] lg:h-[600px]"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1a0e12]/40 to-transparent" />
                <div
                  data-reveal="scale"
                  data-delay="400"
                  className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-white/15 px-5 py-4 shadow-2xl backdrop-blur-md sm:bottom-8 sm:left-8 sm:px-6 sm:py-5"
                >
                  <div className="font-display text-2xl font-semibold text-white sm:text-3xl">{stats[0]?.number}</div>
                  <div className="mt-0.5 font-body text-[9px] uppercase tracking-[0.25em] text-white/70 sm:text-[10px]">
                    {stats[0]?.label}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-[#2a1a1f] py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-[#e7a8bb]/8 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #f0c8d8 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />

        <div data-reveal="up" className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <div className="mx-auto mb-6 flex items-center justify-center gap-2 sm:mb-8">
            <div className="h-px w-10 bg-[#e7c3d0]/30" />
            <div className="h-2 w-2 rotate-45 border border-[#e7c3d0]/40" />
            <div className="h-px w-10 bg-[#e7c3d0]/30" />
          </div>

          <div className="font-script text-[1.5rem] leading-[1.7] text-[#e5b5c5] sm:text-3xl sm:leading-[1.65] md:text-[2.2rem] lg:text-4xl lg:leading-[1.6]">
            {planner.signature_quote}
          </div>

          <div className="mx-auto mt-8 flex items-center justify-center gap-3 sm:mt-10">
            <div className="h-px w-6 bg-[#e7c3d0]/25" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#dfa4b6]/50" />
            <div className="h-1.5 w-1.5 rotate-45 bg-[#dfa4b6]/40" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#dfa4b6]/50" />
            <div className="h-px w-6 bg-[#e7c3d0]/25" />
          </div>
        </div>
      </div>
    </section>
  );
}
