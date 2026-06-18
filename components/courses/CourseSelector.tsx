export default function CourseSelector() {
  return (
    <section className="py-16 md:py-24 bg-blue-50">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="text-center mb-14">

          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Find Your Path
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-blue-900">
            Which Course Is Right For You?
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600">
            Every student is at a different stage of their journey.
            Choose the program that best matches your goals.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition">

            <div className="text-5xl">🎓</div>

            <h3 className="mt-5 text-2xl font-bold text-blue-900">
              Completed 10th Class?
            </h3>

            <p className="mt-4 text-gray-600">
              Begin your Intermediate education while preparing
              systematically for NEET.
            </p>

            <p className="mt-6 font-semibold text-orange-500">
              Intermediate + NEET
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition">

            <div className="text-5xl">📚</div>

            <h3 className="mt-5 text-2xl font-bold text-blue-900">
              Serious About Medicine?
            </h3>

            <p className="mt-4 text-gray-600">
              A comprehensive residential program focused on
              achieving a medical seat.
            </p>

            <p className="mt-6 font-semibold text-orange-500">
              Long-Term NEET
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition">

            <div className="text-5xl">⚡</div>

            <h3 className="mt-5 text-2xl font-bold text-blue-900">
              Need Final Revision?
            </h3>

            <p className="mt-4 text-gray-600">
              Intensive preparation focused on revision,
              testing and exam readiness.
            </p>

            <p className="mt-6 font-semibold text-orange-500">
              Short-Term Revision
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}