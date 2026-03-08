import { useState } from "react";
import { MapPin, Phone, MessageCircle, Send } from "lucide-react";

export default function InquiryForm() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", date: "",
    guests: "", location: "", type: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="bg-gradient-to-br from-[#f9edf2] via-[#fffaf9] to-[#ecf9f8]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-20 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <div className="font-script text-5xl text-[#e4a7b9] sm:text-6xl">Bridal Inquiry</div>
            <h2 className="mt-2 font-display text-3xl font-semibold text-[#47363c] sm:text-4xl md:text-5xl lg:text-6xl">
              Begin your journey with The Perfect Day.
            </h2>
            <p className="mt-4 font-body text-base leading-7 text-[#73646b] md:text-lg md:leading-8">
              Tell us about your wedding vision, celebration dates, destination preferences, guest
              count and design style. We will curate a planning experience that feels graceful,
              calm and truly bespoke.
            </p>

            <div className="mt-8 space-y-4 rounded-[1.5rem] bg-white p-6 shadow-lg sm:rounded-[2rem] sm:p-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-full bg-[#dff5f2] p-3 text-[#54aba5]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-xl font-semibold text-[#45353b] sm:text-2xl">
                    Ras Al Khaimah, UAE
                  </div>
                  <p className="mt-1 font-body text-sm leading-7 text-[#76676e]">
                    Compass Co-working Center, Al Shohada Road,<br />
                    Street C – Al Hamra Area, P.O. Box 16111
                  </p>
                </div>
              </div>
              <div className="h-px bg-[#f1e1e7]" />
              <div className="flex items-center gap-4">
                <div className="shrink-0 rounded-full bg-[#f8e5ec] p-3 text-[#c17b94]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-xl font-semibold text-[#45353b] sm:text-2xl">
                    +971 52 977 9108
                  </div>
                  <p className="font-body text-sm text-[#76676e]">Direct Planning Line</p>
                </div>
              </div>
              <div className="h-px bg-[#f1e1e7]" />
              <div className="flex items-center gap-4">
                <div className="shrink-0 rounded-full bg-[#dff5f2] p-3 text-[#54aba5]">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-xl font-semibold text-[#45353b] sm:text-2xl">
                    WhatsApp Available
                  </div>
                  <p className="font-body text-sm text-[#76676e]">
                    Fast responses for bridal consultations
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/80 bg-white p-5 shadow-[0_25px_80px_rgba(184,151,168,0.16)] sm:rounded-[2rem] sm:p-8 lg:rounded-[2.5rem] lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="font-script text-6xl text-[#e4a7b9]">Thank You</div>
                <h3 className="mt-4 font-display text-3xl font-semibold text-[#47363c]">
                  Your inquiry has been received.
                </h3>
                <p className="mt-4 max-w-sm font-body text-base leading-7 text-[#73646b]">
                  Navdeep will personally review your details and reach out within 24 hours to
                  begin your bespoke planning journey.
                </p>
                <a
                  href="https://wa.me/971529779108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-8"
                >
                  Chat on WhatsApp Now
                </a>
              </div>
            ) : (
              <>
                <div className="mb-5 font-script-soft text-4xl text-[#dfa5b7] sm:mb-6 sm:text-5xl">
                  Tell us your love story
                </div>
                <form onSubmit={handleSubmit} className="grid gap-4 font-body">
                  <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="rounded-2xl border border-[#eddce3] bg-[#fdfafa] px-5 py-4 text-[#3c2d31] outline-none transition focus:border-[#0fb7b1] focus:ring-2 focus:ring-[#0fb7b1]/10 placeholder:text-[#b09099]"
                      placeholder="Bride / Couple Name"
                    />
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="rounded-2xl border border-[#eddce3] bg-[#fdfafa] px-5 py-4 text-[#3c2d31] outline-none transition focus:border-[#0fb7b1] focus:ring-2 focus:ring-[#0fb7b1]/10 placeholder:text-[#b09099]"
                      placeholder="Phone / WhatsApp Number"
                    />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className="rounded-2xl border border-[#eddce3] bg-[#fdfafa] px-5 py-4 text-[#3c2d31] outline-none transition focus:border-[#0fb7b1] focus:ring-2 focus:ring-[#0fb7b1]/10 placeholder:text-[#b09099]"
                      placeholder="Email Address"
                    />
                    <input
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="rounded-2xl border border-[#eddce3] bg-[#fdfafa] px-5 py-4 text-[#3c2d31] outline-none transition focus:border-[#0fb7b1] focus:ring-2 focus:ring-[#0fb7b1]/10 placeholder:text-[#b09099]"
                      placeholder="Preferred Event Date"
                    />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                    <input
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className="rounded-2xl border border-[#eddce3] bg-[#fdfafa] px-5 py-4 text-[#3c2d31] outline-none transition focus:border-[#0fb7b1] focus:ring-2 focus:ring-[#0fb7b1]/10 placeholder:text-[#b09099]"
                      placeholder="Estimated Guest Count"
                    />
                    <input
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      className="rounded-2xl border border-[#eddce3] bg-[#fdfafa] px-5 py-4 text-[#3c2d31] outline-none transition focus:border-[#0fb7b1] focus:ring-2 focus:ring-[#0fb7b1]/10 placeholder:text-[#b09099]"
                      placeholder="Preferred Location / Venue"
                    />
                  </div>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="rounded-2xl border border-[#eddce3] bg-[#fdfafa] px-5 py-4 text-[#7b6b72] outline-none transition focus:border-[#0fb7b1] focus:ring-2 focus:ring-[#0fb7b1]/10"
                  >
                    <option value="">Type of Celebration</option>
                    <option>Wedding</option>
                    <option>Engagement</option>
                    <option>Reception</option>
                    <option>Destination Wedding</option>
                    <option>Private Social Event</option>
                    <option>Anniversary</option>
                  </select>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="min-h-[160px] rounded-2xl border border-[#eddce3] bg-[#fdfafa] px-5 py-4 text-[#3c2d31] outline-none transition focus:border-[#0fb7b1] focus:ring-2 focus:ring-[#0fb7b1]/10 placeholder:text-[#b09099] resize-none"
                    placeholder="Tell us about your vision, style, rituals, venue ideas or any special details..."
                  />
                  <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0fb7b1] px-8 py-3.5 font-body text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#0da8a2] sm:w-auto sm:justify-start"
                    >
                      <Send className="h-4 w-4" />
                      Submit Bridal Inquiry
                    </button>
                    <a
                      href="https://wa.me/971529779108"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#ead4dd] px-7 py-3.5 font-body text-sm font-semibold text-[#b27c8f] transition hover:bg-[#fff6f9] sm:w-auto sm:justify-start"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Ask on WhatsApp
                    </a>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
