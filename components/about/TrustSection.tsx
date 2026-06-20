const trustFactors = [
  {
    title: "Residential Learning Environment",
    description:
      "A focused residential ecosystem designed to minimize distractions and maximize academic growth.",
  },
  {
    title: "Experienced Faculty",
    description:
      "Dedicated subject experts committed to helping students build strong concepts and confidence.",
  },
  {
    title: "Personal Mentoring",
    description:
      "Regular guidance, performance reviews and individual support throughout the journey.",
  },
  {
    title: "Scholarship Opportunities",
    description:
      "Supporting deserving students through merit-based scholarships every year.",
  },
  {
    title: "Academic Discipline",
    description:
      "Structured schedules, supervised study hours and continuous evaluation systems.",
  },
  {
    title: "Proven Results",
    description:
      "Consistent success stories and medical admissions across multiple batches.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-12 md:py-16 bg-white">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="text-center mb-10">

          <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm md:text-base">
            Why Parents Trust Us
          </p>

          <h2 className="mt-3 md:mt-4 text-3xl md:text-5xl font-bold text-blue-900">
            Building Confidence Through Results
          </h2>

          <p className="max-w-3xl mx-auto mt-4 md:mt-6 text-sm md:text-base text-gray-600">
            Trust is earned through consistency, discipline and a genuine commitment to student success.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">

          {trustFactors.map((item) => (
            <div
              key={item.title}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition"
            >

              <h3 className="text-base md:text-lg font-bold text-blue-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}