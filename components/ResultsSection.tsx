export default function ResultsSection() {
  return (
    <section id="results" className="scroll-mt-40 py-14 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">
            NEET 2025 Results
          </h2>

          <p className="mt-4 text-blue-100">
            Our students continue to achieve outstanding results
            and secure seats in top medical colleges.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white/10 rounded-xl p-8 text-center">
            <h3 className="text-4xl font-bold text-orange-400">
              101+
            </h3>
            <p className="mt-2">
              Medical Seats
            </p>
          </div>

          <div className="bg-white/10 rounded-xl p-8 text-center">
            <h3 className="text-4xl font-bold text-orange-400">
              219
            </h3>
            <p className="mt-2">
              Students Appeared
            </p>
          </div>

          <div className="bg-white/10 rounded-xl p-8 text-center">
            <h3 className="text-4xl font-bold text-orange-400">
              617
            </h3>
            <p className="mt-2">
              Highest Score
            </p>
          </div>

          <div className="bg-white/10 rounded-xl p-8 text-center">
            <h3 className="text-4xl font-bold text-orange-400">
              AIR 206
            </h3>
            <p className="mt-2">
              Top Rank
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}