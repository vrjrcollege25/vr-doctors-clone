export default function PhilosophySection() {
  const values = [
    "Strong Concepts",
    "Disciplined Preparation",
    "Continuous Evaluation",
    "Focused Mentoring",
    "Consistent Results",
  ];

  return (
    <section className="py-16 md:py-24 bg-blue-50">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">

          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Our Approach
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-blue-900">
            Learn → Practise → Perform
            <br />
            Analyse → Achieve
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600">
            Success in NEET is not built through shortcuts.
            It is built through strong concepts, disciplined
            preparation, consistent practice and the right
            mentoring environment.
          </p>

        </div>

        <div className="grid md:grid-cols-5 gap-6 mt-14">

          {values.map((value) => (
            <div
              key={value}
              className="bg-white border border-gray-200 rounded-3xl p-6 text-center hover:shadow-lg transition"
            >

              <h3 className="font-bold text-blue-900 text-lg">
                {value}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}