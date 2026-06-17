const stats = [
  {
    number: "500+",
    label: "Medical Careers Guided",
  },
  {
    number: "101+",
    label: "Medical Seats In 2025",
  },
  {
    number: "5+",
    label: "Successful Batches",
  },
  {
    number: "1000+",
    label: "Students Every Year",
  },
];

export default function ResultsStats() {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-50 border border-gray-200 rounded-3xl p-8 text-center hover:shadow-lg transition"
            >

              <h2 className="text-4xl md:text-5xl font-bold text-orange-500">
                {stat.number}
              </h2>

              <p className="mt-3 text-blue-900 font-medium">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}