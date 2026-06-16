import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import JourneySection from "../components/JourneySection";
import TestimonialsSection from "../components/TestimonialsSection";
import CampusLifeSection from "../components/CampusLifeSection";
import DreamersSection from "../components/DreamersSection";
import CampusVisitCTA from "../components/CampusVisitCTA";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <main id="top">
      <Navbar />
      <HeroCarousel />
      <JourneySection />
      <TestimonialsSection />
      <CampusLifeSection />
      <DreamersSection />
      <CampusVisitCTA />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}