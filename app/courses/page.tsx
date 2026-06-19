import Navbar from "../../components/Navbar";
import CoursesHero from "@/components/courses/CoursesHero";
import IntermediateNeet from "@/components/courses/IntermediateNeet";
import LongTermNeet from "@/components/courses/LongTermNeet";
import ShortTermRevision from "@/components/courses/ShortTermRevision";
import CourseSelector from "@/components/courses/CourseSelector";
import WhyChooseVRDoctors from "@/components/courses/WhyChooseVRDoctors";
import CampusVisitCTA from "../../components/CampusVisitCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />    
      <CoursesHero />
      <IntermediateNeet />
      <LongTermNeet />
      <ShortTermRevision />
      <CourseSelector />
      <WhyChooseVRDoctors />
      <CampusVisitCTA />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}