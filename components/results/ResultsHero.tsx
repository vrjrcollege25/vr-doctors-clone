export default function ResultsHero() {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20 md:py-28">

      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">

        <p className="text-orange-400 font-semibold uppercase tracking-widest">
          Results That Matter
        </p>

        <h1 className="mt-4 text-4xl md:text-7xl font-bold">
          500+ Medical Careers
          <br />
          Guided Since 2019
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-lg text-blue-100">
          Every result represents a student, a dream and years of
          disciplined preparation. Our commitment to excellence has
          helped hundreds of students begin their medical journey.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

          <a
            href="#achievers"
            className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold"
          >
            View Top Achievers
          </a>

          <a
            href="#contact"
            className="border border-white hover:bg-white hover:text-blue-900 transition px-8 py-4 rounded-xl font-semibold"
          >
            Contact Admissions
          </a>

        </div>

      </div>

    </section>
  );
}