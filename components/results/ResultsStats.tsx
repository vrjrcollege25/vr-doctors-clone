const stats = [
  {
    number: "101+",
    label: "Medical Seats 2025",
    icon: "🎓",
    context: "Current year admissions"
  },
  {
    number: "99%",
    label: "Success Rate",
    icon: "⭐",
    context: "Students achieving seats"
  },
  {
    number: "AIR 1-500",
    label: "Top Ranks",
    icon: "🏆",
    context: "NEET All India Rankings"
  },
];

export default function ResultsStats() {
  return (
    <section className="py-10 md:py-12 bg-white">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gradient-to-br from-blue-50 via-white to-orange-50 border-2 border-orange-200 rounded-2xl p-6 md:p-8 text-center hover:shadow-lg transition group"
            >

              <div className="text-5xl md:text-6xl mb-3 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                {stat.number}
              </h2>

              <p className="font-bold text-blue-900 text-lg">
                {stat.label}
              </p>

              <p className="mt-3 text-xs md:text-sm text-gray-600 font-medium">
                {stat.context}
              </p>

            </div>
          ))}

        </div>

        <div className="mt-8 p-5 md:p-6 bg-blue-50 rounded-2xl border-l-4 border-orange-500">
          <p className="text-sm md:text-base text-blue-900">
            <span className="font-bold">💡 Achievement Highlights:</span> These numbers represent 2025 results. Every statistic reflects the hard work, dedication, and guidance our students received.
          </p>
        </div>

      </div>

    </section>
  );
}