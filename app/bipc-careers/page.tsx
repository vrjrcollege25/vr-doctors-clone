import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import BipcHero from "@/components/bipc/BipcHero";
import WhatIsBipc from "@/components/bipc/WhatIsBipc";
import HealthcareEcosystem from "@/components/bipc/HealthcareEcosystem";
import RealitySection from "@/components/bipc/RealitySection";
import WhyVRDoctorsGuides from "@/components/bipc/WhyVRDoctorsGuides";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "BiPC Careers",
  description:
    "Explore the world of BiPC and discover careers in medicine, healthcare, research, pharmacy, agriculture and life sciences after Intermediate.",
};

export default function BipcCareersPage() {
  return (
    <main>
      <Navbar />

      <BipcHero />

      <WhatIsBipc />

      <HealthcareEcosystem />

      <RealitySection />

      <WhyVRDoctorsGuides />

      <Footer />

      <WhatsAppButton />

    </main>
  );
}