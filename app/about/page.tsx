import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import WhatMakesUsDifferent from "@/components/about/WhatMakesUsDifferent";
import WhoWeAre from "@/components/about/WhoWeAre";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import ImpactSection from "@/components/about/ImpactSection";
import TrustSection from "@/components/about/TrustSection";
import FacultySection from "@/components/about/FacultySection";
import ChairmanMessage from "@/components/about/ChairmanMessage";
import Footer from "../../components/Footer";



export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <WhoWeAre />
      <WhatMakesUsDifferent />
      <JourneyTimeline /> 
      <ImpactSection />
      <TrustSection />
      <FacultySection />
      <ChairmanMessage />
      <Footer />
    </main>
  );
}