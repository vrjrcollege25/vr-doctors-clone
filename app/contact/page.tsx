import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import ContactHero from "../../components/contact/ContactHero";
import ContactForm from "../../components/contact/ContactForm";
import CampusInfo from "../../components/contact/CampusInfo";
import ContactCTA from "../../components/contact/ContactCTA";

import WhatsAppButton from "@/components/WhatsAppButton";


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