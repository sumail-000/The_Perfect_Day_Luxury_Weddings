import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useContent } from "../context/ContentContext";

export default function FAQ() {
  const { faqs } = useContent();
  const [open, setOpen] = useState(null);

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-20 lg:px-10 lg:py-28">
      <div data-reveal="up" className="mb-8 max-w-3xl md:mb-14">
        <div className="font-script-soft text-4xl text-[#e2a0b4] sm:text-5xl md:text-6xl">
          Frequently Asked Questions
        </div>
        <h2 className="mt-1 font-display text-3xl font-semibold text-[#49353d] sm:text-4xl md:text-5xl lg:text-6xl">
          Everything couples and families often ask us.
        </h2>
      </div>

      <div className="grid gap-4">
        {faqs.map((item, idx) => {
          const q = item.question || item.q;
          const a = item.answer || item.a;
          return (
            <div
              key={item.id || q}
              data-reveal="up-sm"
              data-delay={String(idx * 80)}
              className="overflow-hidden rounded-[2rem] border border-[#f0e1e7] bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="flex w-full items-center justify-between gap-3 p-5 text-left sm:gap-4 sm:p-7"
              >
                <h3 className="font-display text-xl font-semibold text-[#4a3a40] sm:text-2xl md:text-3xl">
                  {q}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#c17b94] transition-transform duration-300 ${
                    open === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === idx ? "max-h-64 pb-5 sm:pb-7" : "max-h-0"
                }`}
              >
                <p className="px-5 font-body text-sm leading-7 text-[#6a5b63] sm:px-7 sm:text-base sm:leading-8">{a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
