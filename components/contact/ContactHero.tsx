import Image from "next/image";

interface ContactHeroProps {
  backgroundImage?: string;
}

export default function ContactHero({
  backgroundImage = "/Campus/infra-2.webp"
}: ContactHeroProps) {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">

      {/* Background Image */}
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Contact VR Doctors"
          fill
          priority
          className="object-cover -z-10"
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-transparent to-blue-900/40 -z-10" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center relative z-9">

        <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm md:text-base">
          Contact VR Doctors
        </p>

        <h1 className="mt-3 md:mt-5 text-3xl md:text-6xl font-bold leading-tight text-white">
          Let's Plan Your
          <span className="text-orange-400"> Medical Journey</span>
        </h1>

        <p className="max-w-3xl mx-auto mt-4 md:mt-6 text-base md:text-lg text-gray-100">
          Whether you're a student exploring BiPC, a parent seeking
          guidance, or someone preparing for NEET, our team is here
          to help you make the right decision.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-6 md:mt-10">

          <a
            href="tel:+919256925640"
            className="bg-orange-500 hover:bg-orange-600 transition px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold shadow-lg text-white text-sm md:text-base"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/15559412484?text=Hi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 transition px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold shadow-lg text-white text-sm md:text-base"
          >
            💬 WhatsApp Us
          </a>

        </div>

      </div>

    </section>
  );
}