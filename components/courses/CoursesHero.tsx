import Image from "next/image";

interface CoursesHeroProps {
  backgroundImage?: string;
}

export default function CoursesHero({
  backgroundImage = "/Campus/academics-3.webp"
}: CoursesHeroProps) {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">

      {/* Background Image */}
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Programs and Courses"
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
          Courses At VR Doctors
        </p>

        <h1 className="mt-3 md:mt-5 text-3xl md:text-6xl font-bold text-white">
          Programs Designed For
          <br />
          Future Doctors
        </h1>

        <p className="max-w-3xl mx-auto mt-4 md:mt-6 text-base md:text-lg text-gray-100">
          Whether you are beginning your NEET journey, preparing for
          a dedicated long-term program or looking for focused
          revision before the exam, VR Doctors offers structured
          pathways designed for medical aspirants.
        </p>

      </div>

    </section>
  );
}