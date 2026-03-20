import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import PlannerProfile from "./PlannerProfile";
import { WeddingsSection, SocialEventsSection, DestinationSection } from "./Services";
import Gallery from "./Gallery";
import InstagramFeed from "./InstagramFeed";
import FAQ from "./FAQ";
import InquiryForm from "./InquiryForm";
import Footer from "./Footer";
import { useReveal } from "../hooks/useReveal";
import { useContent } from "../context/ContentContext";

export default function PublicSite() {
  useReveal();
  const { contact } = useContent();
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowFab(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fffaf8] text-[#3c2d31]">
      <Navbar />

      <a
        href={`https://wa.me/${contact.whatsapp_number}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 font-body text-sm font-semibold text-white shadow-2xl transition-all duration-500 hover:scale-105 ${
          showFab ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>
      <Hero />
      <About />
      <PlannerProfile />
      <WeddingsSection />
      <SocialEventsSection />
      <DestinationSection />
      <Gallery />
      <InstagramFeed />
      <FAQ />
      <InquiryForm />
      <Footer />
    </div>
  );
}
