import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../data/content";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <div className="mb-14 max-w-3xl">
        <div className="font-script-soft text-5xl text-[#e2a0b4] md:text-6xl">
          Frequently Asked Questions
        </div>
        <h2 className="mt-2 font-display text-4xl font-semibold text-[#49353d] md:text-5xl lg:text-6xl">
          Everything couples and families often ask us.
        </h2>
      </div>

      <div className="grid gap-4">
        {FAQS.map((item, idx) => (
          <div
            key={item.q}
            className="overflow-hidden rounded-[2rem] border border-[#f0e1e7] bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <button
              onClick={() => setOpen(open === idx ? null : idx)}
              className="flex w-full items-center justify-between gap-4 p-7 text-left"
            >
              <h3 className="font-display text-2xl font-semibold text-[#4a3a40] md:text-3xl">
                {item.q}
              </h3>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-[#c17b94] transition-transform duration-300 ${
                  open === idx ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                open === idx ? "max-h-48 pb-7" : "max-h-0"
              }`}
            >
              <p className="px-7 font-body text-base leading-8 text-[#6a5b63]">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
