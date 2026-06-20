export default function AboutHero() {
  return (
    <section className="relative py-18 md:py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden">

      <div className="max-w-5xl mx-auto px-5 text-center relative z-9">

        <p className="text-orange-400 font-semibold uppercase tracking-widest">
          About VR Doctors Academy
        </p>

        <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight">
          Transforming Aspirations
          <br />
          Into Medical Careers
          <br />
          Since 2019
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-blue-100">
          From a humble beginning with 95 students to a thriving
          academic community supporting 1000+ aspirants every year,
          VR Doctors Academy continues to help students turn their
          vision of becoming a doctor into reality.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">

          <a
            href="/results"
            className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold"
          >
            Explore Results
          </a>

          <a
            href="/contact"
            className="border border-white hover:bg-white hover:text-blue-900 transition px-8 py-4 rounded-xl font-semibold"
          >
            Book an appointment
          </a>

        </div>

      </div>

    </section>
  );
}