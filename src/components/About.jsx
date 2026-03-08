import { Heart } from "lucide-react";
import { ABOUT_PILLARS } from "../data/content";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <div className="font-script-soft text-5xl text-[#e5a4b7] md:text-6xl">
            About The Perfect Day
          </div>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-[#453339] md:text-5xl lg:text-6xl">
            Every celebration should feel poetic, polished and deeply personal.
          </h2>
          <p className="mt-6 font-body text-lg leading-8 text-[#73656c]">
            We design weddings and social occasions with a romantic, hospitality-led approach. Our
            team turns ideas into refined experiences through thoughtful planning, soft luxury
            aesthetics, and meticulous execution.
          </p>
          <p className="mt-5 font-body text-lg leading-8 text-[#73656c]">
            From beachfront weddings in Ras Al Khaimah to glamorous celebrations in Dubai and
            destination wedding weekends, we create events that feel effortless for hosts and
            unforgettable for guests.
          </p>
          <a href="#inquiry" className="btn-primary mt-10 inline-flex">
            Begin Your Journey
          </a>
        </div>

        <div className="grid gap-4 content-start">
          {ABOUT_PILLARS.map((item) => (
            <div
              key={item}
              className="flex items-start gap-5 rounded-[2rem] border border-[#f1e1e7] bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mt-0.5 shrink-0 rounded-full bg-[#f7d8e3] p-3 text-[#b7748d]">
                <Heart className="h-4 w-4" />
              </div>
              <p className="font-body leading-7 text-[#6d5d64]">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 overflow-hidden rounded-[3rem] shadow-[0_40px_100px_rgba(195,145,164,0.18)]">
        <img
          src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1600&q=85"
          alt="Luxury wedding celebration"
          className="h-[480px] w-full object-cover object-center"
        />
      </div>
    </section>
  );
}
