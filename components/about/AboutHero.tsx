import Image from "next/image";

interface AboutHeroProps {
  backgroundImage?: string;
}

export default function AboutHero({
  backgroundImage = "/Campus/infra-1.webp"
}: AboutHeroProps) {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">

      {/* Background Image */}
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="VR Doctors Campus"
          fill
          priority
          className="object-cover -z-10"
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-transparent to-blue-900/40 -z-10" />

      <div className="max-w-5xl mx-auto px-5 text-center relative z-9">

        <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm md:text-base">
          About VR Doctors Academy
        </p>

        <h1 className="mt-3 md:mt-5 text-3xl md:text-6xl font-bold leading-tight text-white">
          Transforming Aspirations
          <br />
          Into Medical Careers
          <br />
          Since 2019
        </h1>

        <p className="max-w-3xl mx-auto mt-4 md:mt-8 text-base md:text-lg text-gray-100">
          From a humble beginning with 95 students to a thriving
          academic community supporting 1000+ aspirants every year,
          VR Doctors Academy continues to help students turn their
          vision of becoming a doctor into reality.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6 md:mt-8">

          <a
            href="/results"
            className="bg-orange-500 hover:bg-orange-600 transition px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-white text-sm md:text-base"
          >
            Explore Results
          </a>

          <a
            href="/contact"
            className="border border-white hover:bg-white hover:text-blue-900 transition px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-white text-sm md:text-base"
          >
            Book an appointment
          </a>

        </div>

      </div>

    </section>
  );
}