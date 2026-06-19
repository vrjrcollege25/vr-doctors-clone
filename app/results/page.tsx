import Navbar from "../../components/Navbar";
import ResultsHero from "@/components/results/ResultsHero";
import ResultsStats from "@/components/results/ResultsStats";
import MedicalAdmissions from "@/components/results/MedicalAdmissions";
import TopAchieversCarousel from "@/components/results/TopAchieversCarousel";
import SuccessStories from "@/components/results/SuccessStories";
import Footer from "../../components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";


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