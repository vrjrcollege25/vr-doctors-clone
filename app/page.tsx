import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CTASection from "../components/CTASection";
import AboutSection from "../components/AboutSection";
import ResultsSection from "../components/ResultsSection";
import DreamersSection from "../components/DreamersSection";
import CampusSection from "../components/CampusSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <main id="top">
      <Navbar />
      <Hero />
      <CTASection />
      <AboutSection />
      <ResultsSection />
      <DreamersSection />
      <CampusSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}