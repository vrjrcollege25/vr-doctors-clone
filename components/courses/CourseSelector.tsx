export default function CourseSelector() {
  return (
    <section className="py-12 md:py-16 bg-blue-50">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="text-center mb-10">

          <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm md:text-base">
            Find Your Path
          </p>

          <h2 className="mt-3 md:mt-4 text-3xl md:text-5xl font-bold text-blue-900">
            Choose Your Program
          </h2>

          <p className="max-w-3xl mx-auto mt-4 md:mt-6 text-sm md:text-base text-gray-600">
            Every student is at a different stage. Select the program that matches your goals.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:shadow-lg transition">

            <div className="text-4xl md:text-5xl">🎓</div>

            <h3 className="mt-4 md:mt-5 text-lg md:text-2xl font-bold text-blue-900">
              Intermediate + NEET
            </h3>

            <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-600">
              Begin your Intermediate education while preparing systematically for NEET.
            </p>

            <p className="mt-4 md:mt-6 font-semibold text-orange-500 text-sm md:text-base">
              For Class 10 Passed Students
            </p>

          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:shadow-lg transition">

            <div className="text-4xl md:text-5xl">📚</div>

            <h3 className="mt-4 md:mt-5 text-lg md:text-2xl font-bold text-blue-900">
              Long-Term NEET
            </h3>

            <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-600">
              Comprehensive residential program focused on achieving medical seat admission.
            </p>

            <p className="mt-4 md:mt-6 font-semibold text-orange-500 text-sm md:text-base">
              For Serious Medical Aspirants
            </p>

          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:shadow-lg transition">

            <div className="text-4xl md:text-5xl">⚡</div>

            <h3 className="mt-4 md:mt-5 text-lg md:text-2xl font-bold text-blue-900">
              Revision Program
            </h3>

            <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-600">
              Intensive preparation focused on revision, testing and exam readiness.
            </p>

            <p className="mt-4 md:mt-6 font-semibold text-orange-500 text-sm md:text-base">
              For Final Year Preparation
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}