import { STATS } from "../data/content";

export default function PlannerProfile() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative">
            <div className="overflow-hidden rounded-[3rem] shadow-[0_40px_100px_rgba(195,145,164,0.22)]">
              <img
                src="https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=900&q=85"
                alt="Chief Planner - Navdeep Tanwar"
                className="h-[560px] w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-[2rem] bg-gradient-to-br from-[#f7d8e3] to-[#fce8ef] p-6 shadow-2xl lg:-right-10">
              <div className="font-display text-5xl font-semibold text-[#593c46]">100+</div>
              <div className="mt-1 font-body text-xs uppercase tracking-[0.3em] text-[#a37a88]">
                Weddings Executed
              </div>
            </div>
          </div>

          <div>
            <div className="font-script text-5xl text-[#e5a6b9] md:text-6xl">Chief Planner</div>
            <h2 className="mt-3 font-display text-5xl font-semibold text-[#47363c] md:text-6xl">
              Navdeep Tanwar
            </h2>
            <div className="mt-3 font-body text-sm uppercase tracking-[0.35em] text-[#79bdb8]">
              Certified Wedding Planner · Interior Designer
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {STATS.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.75rem] border border-[#f1e4ea] bg-[#fdf7f9] p-5 text-center shadow-sm"
                >
                  <div className="font-display text-3xl font-semibold text-[#4b3a40] md:text-4xl">
                    {item.number}
                  </div>
                  <div className="mt-2 font-body text-[10px] uppercase tracking-[0.2em] text-[#a37a88]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 font-body text-lg leading-8 text-[#6f6068]">
              Navdeep Tanwar is the Chief Planner of The Perfect Day, bringing more than 20 years
              of experience in planning, styling and executing luxury celebrations. A certified
              wedding planner and interior designer, she is known for combining spatial aesthetics,
              floral storytelling and seamless guest experience into beautifully orchestrated events.
            </p>
            <p className="mt-5 font-body text-lg leading-8 text-[#6f6068]">
              Over the course of her career, Navdeep has planned and executed more than 100 weddings
              across India, managing everything from intimate family functions to grand multi-day
              destination celebrations. Her expertise lies in transforming each client vision into a
              refined, emotionally resonant and flawlessly delivered experience with a strong eye for
              design and detail.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-[1.5rem] border border-[#f1e1e7] bg-[#fdf7f9] px-6 py-4">
              <div className="font-script-soft text-3xl text-[#dfa4b6]">The creative force behind the celebrations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
