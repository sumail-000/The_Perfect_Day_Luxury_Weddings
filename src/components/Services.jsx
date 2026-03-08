import { Flower2, GlassWater, MapPin } from "lucide-react";
import { WEDDING_SERVICES, SOCIAL_SERVICES, DESTINATION_SERVICES } from "../data/content";

function ServiceCard({ icon: Icon, title, desc, accent }) {
  return (
    <div className="group rounded-[1.5rem] border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 sm:rounded-[2rem] sm:p-8"
      style={{ borderColor: accent.border }}>
      <div className="mb-5 w-fit rounded-full p-3" style={{ backgroundColor: accent.iconBg }}>
        <Icon className="h-5 w-5" style={{ color: accent.iconColor }} />
      </div>
      <h3 className="font-display text-xl font-semibold text-[#453339] sm:text-2xl">{title}</h3>
      <p className="mt-2 font-body text-sm leading-7 text-[#6b5c63] sm:text-base">{desc}</p>
    </div>
  );
}

function ServiceSection({ id, bgClass, scriptClass, scriptText, heading, services, icon, accent, image }) {
  return (
    <section id={id} className={bgClass}>
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-20 lg:px-10 lg:py-28">
        <div data-reveal="up" className="mb-10 grid gap-6 lg:mb-16 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <div className={`font-script text-4xl sm:text-5xl ${scriptClass}`}>{scriptText}</div>
            <h2 className="mt-1 font-display text-3xl font-semibold text-[#49353d] sm:text-4xl md:text-5xl lg:text-6xl">
              {heading}
            </h2>
          </div>
          {image && (
            <div className="hidden overflow-hidden rounded-[2rem] lg:block">
              <img src={image} alt={scriptText} className="h-44 w-56 object-cover" />
            </div>
          )}
        </div>
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {services.map((item, i) => (
            <div key={item.title} data-reveal="up-sm" data-delay={String(i * 150)}>
              <ServiceCard icon={icon} title={item.title} desc={item.desc} accent={accent} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WeddingsSection() {
  return (
    <ServiceSection
      id="weddings"
      bgClass="bg-[#fff6f9]"
      scriptClass="text-[#e7a8bb]"
      scriptText="Weddings"
      heading="Curated wedding experiences with softness and grandeur."
      services={WEDDING_SERVICES}
      icon={Flower2}
      accent={{ border: "#efdbe3", iconBg: "#f9e6ed", iconColor: "#c17b94" }}
      image="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80"
    />
  );
}

export function SocialEventsSection() {
  return (
    <ServiceSection
      id="social-events"
      bgClass="bg-white"
      scriptClass="text-[#72c7c0]"
      scriptText="Social Events"
      heading="Private celebrations designed with charm and finesse."
      services={SOCIAL_SERVICES}
      icon={GlassWater}
      accent={{ border: "#e3f1ef", iconBg: "#dff5f2", iconColor: "#5ab1ab" }}
      image="https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&q=80"
    />
  );
}

export function DestinationSection() {
  return (
    <ServiceSection
      id="destination"
      bgClass="bg-[#f7fbfb]"
      scriptClass="text-[#75c9c1]"
      scriptText="Destination Weddings"
      heading="Seamless multi-day celebrations for families travelling the world."
      services={DESTINATION_SERVICES}
      icon={MapPin}
      accent={{ border: "#ddeceb", iconBg: "#dff5f2", iconColor: "#59ada7" }}
      image="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80"
    />
  );
}
