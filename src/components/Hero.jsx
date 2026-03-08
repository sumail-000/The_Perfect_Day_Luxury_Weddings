import { Gem, MessageCircle, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=90')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a0f]/75 via-[#2c1018]/55 to-[#0a1a19]/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(235,188,205,0.12),transparent_50%)]" />

      <div className="relative flex min-h-screen flex-col items-center justify-center px-5 pt-28 pb-16 text-center sm:px-8 lg:px-10">
        <div className="hero-enter hero-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-body text-[10px] uppercase tracking-[0.3em] text-white/80 backdrop-blur-sm sm:mb-8 sm:px-5 sm:py-2.5 sm:text-xs sm:tracking-[0.4em]" style={{ animationDuration: '900ms', animationDelay: '100ms' }}>
          <Gem className="h-3 w-3 text-[#f0b7c8]" />
          Bespoke Social Experience · UAE
        </div>

        <div className="hero-enter hero-fade-up font-script mb-2 text-4xl text-[#f0c8d8] drop-shadow-lg sm:text-5xl md:text-7xl lg:text-8xl" style={{ animationDuration: '1000ms', animationDelay: '300ms' }}>
          The art of a beautiful celebration
        </div>

        <h1 className="hero-enter hero-fade-up mt-3 max-w-5xl font-display text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-5xl lg:text-7xl" style={{ animationDuration: '1000ms', animationDelay: '500ms' }}>
          Ultra-luxury weddings and graceful social events with a{" "}
          <em className="not-italic text-[#f0b7c8]">feminine signature.</em>
        </h1>

        <p className="hero-enter hero-fade-up mt-5 max-w-2xl font-body text-sm leading-7 text-white/75 sm:text-base md:mt-7 md:text-lg md:leading-8" style={{ animationDuration: '900ms', animationDelay: '650ms' }}>
          The Perfect Day crafts intimate, elegant and deeply personalized celebrations across
          Ras Al Khaimah, Dubai and destination settings — blending hospitality, décor, emotion
          and seamless planning into moments that feel soft, luxurious and unforgettable.
        </p>

        <div className="hero-enter hero-fade-up mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4" style={{ animationDuration: '900ms', animationDelay: '800ms' }}>
          <a href="#inquiry" className="btn-primary w-full px-8 py-3.5 text-sm shadow-2xl sm:w-auto sm:px-9 sm:py-4 sm:text-base">
            Start Your Bridal Inquiry
          </a>
          <a
            href="#gallery"
            className="w-full rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-center font-body text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto sm:px-9 sm:py-4"
          >
            View Signature Gallery
          </a>
        </div>

        <div className="hero-enter hero-fade-in mt-8 flex flex-wrap justify-center gap-3 md:mt-14 md:gap-6" style={{ animationDuration: '1000ms', animationDelay: '1000ms' }}>
          {["Luxury Weddings", "Feminine Styling", "UAE & Destination Events"].map((tag) => (
            <div
              key={tag}
              className="rounded-full border border-white/15 bg-white/10 px-4 py-2 font-body text-xs text-white/70 backdrop-blur-sm sm:px-6 sm:py-2.5 sm:text-sm"
            >
              {tag}
            </div>
          ))}
        </div>

        <a
          href="https://wa.me/971529779108"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 font-body text-sm font-semibold text-white shadow-2xl transition hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
}
