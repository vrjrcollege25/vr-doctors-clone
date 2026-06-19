import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import BipcHero from "@/components/bipc/BipcHero";
import WhatIsBipc from "@/components/bipc/WhatIsBipc";
import HealthcareEcosystem from "@/components/bipc/HealthcareEcosystem";
import RealitySection from "@/components/bipc/RealitySection";
import WhyVRDoctorsGuides from "@/components/bipc/WhyVRDoctorsGuides";
import WhatsAppButton from "@/components/WhatsAppButton";


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