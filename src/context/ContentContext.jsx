import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { supabase } from "../lib/supabase";
import {
  NAV_LINKS,
  WEDDING_SERVICES,
  SOCIAL_SERVICES,
  DESTINATION_SERVICES,
  GALLERY_ITEMS,
  INSTAGRAM_IMAGES,
  FAQS,
  STATS,
  ABOUT_PILLARS,
} from "../data/content";

const STATIC_HERO = {
  badge: "Bespoke Social Experience · UAE",
  script_heading: "The art of a beautiful celebration",
  heading: "Ultra-luxury weddings and graceful social events with",
  heading_accent: "timeless elegance.",
  description:
    "The Perfect Day crafts intimate, elegant and deeply personalized celebrations across Ras Al Khaimah, Dubai and other global destinations — blending hospitality, décor, emotion and seamless planning into moments that feel soft, luxurious and unforgettable.",
  cta_primary: "Let's plan your Perfect Day",
  cta_secondary: "View Signature Gallery",
  tags: ["Luxury Weddings", "Bespoke Styling", "UAE & Destination Events"],
  background_image:
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=90",
};

const STATIC_ABOUT = {
  script_heading: "About The Perfect Day",
  heading:
    "Every celebration should feel poetic, polished and deeply personal.",
  paragraph_1:
    "We design weddings and social occasions with a romantic, hospitality-led approach. Our team turns ideas into refined experiences through thoughtful planning, soft luxury aesthetics, and meticulous execution.",
  paragraph_2:
    "From beachfront weddings in Ras Al Khaimah to glamorous celebrations in Dubai and destination wedding weekends, we create events that feel effortless for hosts and unforgettable for guests.",
  cta_text: "Begin Your Journey",
  image:
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1600&q=85",
  pillars: ABOUT_PILLARS,
};

const STATIC_PLANNER = {
  name: "Navdeep Tanwar",
  title: "Chief Planner",
  credentials: "Certified Wedding Planner · Interior Designer",
  subtitle: "The Perfect Day presents",
  quote:
    "The most beautiful events are the ones people don't just see, but deeply feel.",
  chapters: [
    {
      title: "The Belief",
      text: "Navdeep Tanwar's journey into celebration design began with a simple belief: weddings have never been only about décor, logistics, or grand venues — they are about emotion, memory, intimacy, and the art of creating moments that stay with families forever. That belief became the foundation of The Perfect Day.",
    },
    {
      title: "The Craft",
      text: "With more than 20 years of experience, Navdeep has built a reputation for crafting celebrations that are as personal as they are spectacular. A certified wedding planner and interior designer, he brings together the eye of a designer, the instinct of a storyteller, and the discipline of a planner who understands that true luxury lies in how effortlessly every detail comes together. Over the years, he has planned and executed more than 100 weddings across India, ranging from intimate family gatherings to lavish multi-day destination celebrations.",
    },
    {
      title: "The Person",
      text: "What makes Navdeep's approach truly distinctive is the life he brings into his work beyond events. An avid wanderlust-driven solo traveller, he draws inspiration from places, cultures, architecture, textures, and human connection. A passionate home cook, he believes that the most memorable experiences are built with warmth, soul, and generosity. And as a Virgo who believes in perfection and nothing less, he approaches every celebration with precision, grace, and an uncompromising eye for beauty.",
    },
  ],
  signature_quote:
    "For Navdeep, every wedding is not just an event — it is a story waiting to be told with elegance, emotion, and unforgettable detail.",
  portrait_image: "/profile_pic_camera.jpg",
  selfie_image: "/profile_pic_selfie.jpg",
  stats: STATS,
};

const STATIC_CONTACT = {
  phone: "+971 52 977 9108",
  whatsapp_number: "971529779108",
  address_line_1: "Compass Co-working Center",
  address_line_2: "Al Shohada Road, Street C",
  address_line_3: "Al Hamra Area, Ras Al Khaimah",
  address_line_4: "P.O. Box 16111, UAE",
  instagram_handle: "tpdweddings",
  instagram_url: "https://instagram.com/tpdweddings",
  footer_tagline:
    "Ultra-luxury wedding and event planning across Ras Al Khaimah, Dubai and other global destinations. We craft bespoke celebrations with timeless elegance.",
};

const ContentContext = createContext(null);

export function ContentProvider({ children }) {
  const [hero, setHero] = useState(STATIC_HERO);
  const [about, setAbout] = useState(STATIC_ABOUT);
  const [planner, setPlanner] = useState(STATIC_PLANNER);
  const [contact, setContact] = useState(STATIC_CONTACT);
  const [weddingServices, setWeddingServices] = useState(
    WEDDING_SERVICES.map((s) => ({ ...s, id: crypto.randomUUID() }))
  );
  const [socialServices, setSocialServices] = useState(
    SOCIAL_SERVICES.map((s) => ({ ...s, id: crypto.randomUUID() }))
  );
  const [destinationServices, setDestinationServices] = useState(
    DESTINATION_SERVICES.map((s) => ({ ...s, id: crypto.randomUUID() }))
  );
  const [galleryItems, setGalleryItems] = useState(
    GALLERY_ITEMS.map((g) => ({ ...g, id: crypto.randomUUID() }))
  );
  const [instagramImages, setInstagramImages] = useState(
    INSTAGRAM_IMAGES.map((url) => ({
      id: crypto.randomUUID(),
      image_url: url,
    }))
  );
  const [faqs, setFaqs] = useState(
    FAQS.map((f) => ({
      id: crypto.randomUUID(),
      question: f.q,
      answer: f.a,
    }))
  );
  const [navLinks] = useState(NAV_LINKS);
  const [loading, setLoading] = useState(true);

  const fetchContent = useCallback(async () => {
    try {
      const [siteRes, svcRes, galRes, faqRes, igRes] = await Promise.all([
        supabase.from("site_content").select("section, data"),
        supabase.from("services").select("*").order("sort_order"),
        supabase.from("gallery_items").select("*").order("sort_order"),
        supabase.from("faqs").select("*").order("sort_order"),
        supabase.from("instagram_images").select("*").order("sort_order"),
      ]);

      if (siteRes.data) {
        for (const row of siteRes.data) {
          if (row.section === "hero") setHero(row.data);
          if (row.section === "about") setAbout(row.data);
          if (row.section === "planner_profile") setPlanner(row.data);
          if (row.section === "contact_info") setContact(row.data);
        }
      }

      if (svcRes.data) {
        setWeddingServices(
          svcRes.data
            .filter((s) => s.category === "wedding")
            .map((s) => ({ id: s.id, title: s.title, desc: s.description }))
        );
        setSocialServices(
          svcRes.data
            .filter((s) => s.category === "social")
            .map((s) => ({ id: s.id, title: s.title, desc: s.description }))
        );
        setDestinationServices(
          svcRes.data
            .filter((s) => s.category === "destination")
            .map((s) => ({ id: s.id, title: s.title, desc: s.description }))
        );
      }

      if (galRes.data) setGalleryItems(galRes.data);
      if (faqRes.data) setFaqs(faqRes.data);
      if (igRes.data) setInstagramImages(igRes.data);
    } catch {
      // static fallback already set as initial state
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  return (
    <ContentContext.Provider
      value={{
        hero,
        about,
        planner,
        contact,
        weddingServices,
        socialServices,
        destinationServices,
        galleryItems,
        instagramImages,
        faqs,
        navLinks,
        loading,
        refetch: fetchContent,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) throw new Error("useContent must be used within ContentProvider");
  return context;
}
