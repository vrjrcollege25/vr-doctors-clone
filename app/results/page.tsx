import Navbar from "../../components/Navbar";
import ResultsHero from "@/components/results/ResultsHero";
import ResultsStats from "@/components/results/ResultsStats";
import MedicalAdmissions from "@/components/results/MedicalAdmissions";
import TopAchieversCarousel from "@/components/results/TopAchieversCarousel";
import SuccessStories from "@/components/results/SuccessStories";
import Footer from "../../components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEET Results & Medical Admissions",
  description:
    "Discover the success stories, top achievers and medical college admissions of students from VR Doctors Academy since 2019.",
};

export default function Home() {
  return (
    <main>
      <Navbar />    
      <ResultsHero />
      <ResultsStats />
      <MedicalAdmissions />
      <TopAchieversCarousel />
      <SuccessStories />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}