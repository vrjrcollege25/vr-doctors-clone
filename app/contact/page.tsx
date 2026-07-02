import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import ContactHero from "../../components/contact/ContactHero";
import ContactForm from "../../components/contact/ContactForm";
import CampusInfo from "../../components/contact/CampusInfo";
import ContactCTA from "../../components/contact/ContactCTA";
import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contact Admissions",
  description:
    "Contact VR Doctors Academy for admissions, course information, campus visits and guidance for your medical career journey.",
};

export default function ContactPage() {
  return (
    <main>

      <Navbar />

      <ContactHero />

      <ContactForm />

      <CampusInfo />

      <ContactCTA />

      <WhatsAppButton />

      <Footer />

    </main>
  );
}