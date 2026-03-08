import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PlannerProfile from "./components/PlannerProfile";
import { WeddingsSection, SocialEventsSection, DestinationSection } from "./components/Services";
import Gallery from "./components/Gallery";
import InstagramFeed from "./components/InstagramFeed";
import FAQ from "./components/FAQ";
import InquiryForm from "./components/InquiryForm";
import Footer from "./components/Footer";
import { useReveal } from "./hooks/useReveal";

function App() {
  useReveal();
  return (
    <div className="min-h-screen bg-[#fffaf8] text-[#3c2d31]">
      <Navbar />
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

export default App;
