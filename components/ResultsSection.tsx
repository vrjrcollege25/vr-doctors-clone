export default function ResultsSection() {
  return (
    <section
      id="results"
      className="scroll-mt-40 py-12 md:py-16 bg-blue-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="text-center mb-8 md:mb-12">

          <h2 className="text-3xl md:text-4xl font-bold">
            NEET 2025 Results
          </h2>

          <p className="mt-3 md:mt-4 text-blue-100 max-w-2xl mx-auto text-sm md:text-base">
            Our students continue to achieve outstanding results
            and secure seats in top medical colleges.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

          <div className="bg-white/10 rounded-xl p-5 md:p-8 text-center backdrop-blur-sm">

            <h3 className="text-2xl md:text-4xl font-bold text-orange-400">
              101+
            </h3>

            <p className="mt-2 text-sm md:text-base">
              Medical Seats
            </p>

          </div>

          <div className="bg-white/10 rounded-xl p-5 md:p-8 text-center backdrop-blur-sm">

            <h3 className="text-2xl md:text-4xl font-bold text-orange-400">
              219
            </h3>

            <p className="mt-2 text-sm md:text-base">
              Students Appeared
            </p>

          </div>

          <div className="bg-white/10 rounded-xl p-5 md:p-8 text-center backdrop-blur-sm">

            <h3 className="text-2xl md:text-4xl font-bold text-orange-400">
              617
            </h3>

            <p className="mt-2 text-sm md:text-base">
              Highest Score
            </p>

          </div>

          <div className="bg-white/10 rounded-xl p-5 md:p-8 text-center backdrop-blur-sm">

            <h3 className="text-2xl md:text-4xl font-bold text-orange-400">
              AIR 206
            </h3>

            <p className="mt-2 text-sm md:text-base">
              Top Rank
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}