export default function AboutSection() {
  return (
    <section id='about' className="scroll-mt-24 py-14 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-blue-900">
            Why VR Doctors?
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We combine expert faculty, disciplined preparation,
            personalized mentoring, and proven NEET-focused strategies
            to help students achieve their medical dreams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-orange-500 mb-3">
              Expert Faculty
            </h3>

            <p className="text-gray-600">
              Learn from experienced educators who understand
              competitive exam preparation.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-orange-500 mb-3">
              Personalized Mentoring
            </h3>

            <p className="text-gray-600">
              Individual attention and regular performance reviews
              for every student.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-orange-500 mb-3">
              Proven Results
            </h3>

            <p className="text-gray-600">
              Consistent track record of successful NEET aspirants
              entering top medical colleges.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}