import { STATS } from "../data/content";

export default function PlannerProfile() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative mb-10 sm:mb-0">
            <div className="overflow-hidden rounded-[3rem] shadow-[0_40px_100px_rgba(195,145,164,0.22)]">
              <img
                src="https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=900&q=85"
                alt="Chief Planner - Navdeep Tanwar"
                className="h-72 w-full object-cover object-top sm:h-96 lg:h-[560px]"
              />
            </div>
            <div className="absolute -bottom-5 right-4 rounded-[1.5rem] bg-gradient-to-br from-[#f7d8e3] to-[#fce8ef] p-4 shadow-2xl sm:-bottom-6 sm:-right-6 sm:rounded-[2rem] sm:p-6 lg:-right-10">
              <div className="font-display text-3xl font-semibold text-[#593c46] sm:text-5xl">100+</div>
              <div className="mt-1 font-body text-xs uppercase tracking-[0.3em] text-[#a37a88]">
                Weddings Executed
              </div>
            </div>
          </div>

          <div>
            <div className="font-script text-4xl text-[#e5a6b9] sm:text-5xl md:text-6xl">Chief Planner</div>
            <h2 className="mt-2 font-display text-3xl font-semibold text-[#47363c] sm:text-4xl md:text-5xl lg:text-6xl">
              Navdeep Tanwar
            </h2>
            <div className="mt-3 font-body text-sm uppercase tracking-[0.35em] text-[#79bdb8]">
              Certified Wedding Planner · Interior Designer
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {STATS.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.75rem] border border-[#f1e4ea] bg-[#fdf7f9] p-5 text-center shadow-sm"
                >
                  <div className="font-display text-2xl font-semibold text-[#4b3a40] sm:text-3xl md:text-4xl">
                    {item.number}
                  </div>
                  <div className="mt-2 font-body text-[10px] uppercase tracking-[0.2em] text-[#a37a88]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 font-body text-base leading-7 text-[#6f6068] md:text-lg md:leading-8">
              Navdeep Tanwar is the Chief Planner of The Perfect Day, bringing more than 20 years
              of experience in planning, styling and executing luxury celebrations. A certified
              wedding planner and interior designer, she is known for combining spatial aesthetics,
              floral storytelling and seamless guest experience into beautifully orchestrated events.
            </p>
            <p className="mt-4 font-body text-base leading-7 text-[#6f6068] md:text-lg md:leading-8">
              Over the course of her career, Navdeep has planned and executed more than 100 weddings
              across India, managing everything from intimate family functions to grand multi-day
              destination celebrations. Her expertise lies in transforming each client vision into a
              refined, emotionally resonant and flawlessly delivered experience with a strong eye for
              design and detail.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 rounded-[1.5rem] border border-[#f1e1e7] bg-[#fdf7f9] px-5 py-3 sm:px-6 sm:py-4">
              <div className="font-script-soft text-2xl text-[#dfa4b6] sm:text-3xl">The creative force behind the celebrations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
