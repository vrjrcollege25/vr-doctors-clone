import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import ImpactSection from "@/components/about/ImpactSection";
import TrustSection from "@/components/about/TrustSection";
import FacultySection from "@/components/about/FacultySection";
import ChairmanMessage from "@/components/about/ChairmanMessage";
import Footer from "../../components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the journey of VR Doctors Academy, our mission, faculty, values and commitment to helping students succeed in NEET and medical careers.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <WhoWeAre />
      <JourneyTimeline />
      <ImpactSection />
      <TrustSection />
      <FacultySection />
      <ChairmanMessage />
      <WhatsAppButton />

      <Footer />
    </main>
  );
}