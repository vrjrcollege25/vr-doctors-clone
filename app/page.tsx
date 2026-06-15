import Navbar from "../components/Navbar";
import JourneySection from "../components/JourneySection";
import DreamersSection from "../components/DreamersSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import HeroCarousel from "../components/HeroCarousel";
import VisionSection from "../components/VisionSection";
import CampusLifeSection from "../components/CampusLifeSection";
import CampusVisitCTA from "../components/CampusVisitCTA";

export default function Home() {
  return (
    <main id="top">
      <Navbar />
      <HeroCarousel />
      <JourneySection />
      <VisionSection />
      <CampusLifeSection />
      <DreamersSection />
      <CampusVisitCTA />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}