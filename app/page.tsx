import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CTASection from "../components/CTASection";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CTASection />
      <AboutSection />
    </main>
  );
}