import Image from "next/image";

interface ResultsHeroProps {
  backgroundImage?: string;
}

export default function ResultsHero({
  backgroundImage = "/results hero.webp",
}: ResultsHeroProps) {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">

      {/* Background Image */}
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Results and Achievements"
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
          Results That Matter
        </p>

        <h1 className="mt-3 md:mt-5 text-3xl md:text-6xl font-bold text-white">
          500+ Medical Careers
          <br />
          Guided Since 2019
        </h1>

        <p className="max-w-3xl mx-auto mt-4 md:mt-6 text-base md:text-lg text-blue-100">
          Every result represents a student, a dream and years of
          disciplined preparation. Our commitment to excellence has
          helped hundreds of students begin their medical journey.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mt-6 md:mt-10">

          <a
            href="#achievers"
            className="bg-orange-500 hover:bg-orange-600 transition px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-white text-sm md:text-base"
          >
            View Top Achievers
          </a>

          <a
            href="/contact"
            className="border border-white hover:bg-white hover:text-blue-900 transition px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-white text-sm md:text-base"
          >
            Contact Admissions
          </a>

        </div>

      </div>

    </section>
  );
}