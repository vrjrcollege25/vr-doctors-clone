import { GraduationCap, Star, Trophy, Lightbulb } from "lucide-react";

const stats = [
  {
    number: "101+",
    label: "Medical Seats in 2025",
    icon: GraduationCap,
    context: "Current year admissions"
  },
  {
    number: "50%",
    label: "Success Rate Every Year",
    icon: Star,
    context: "Students achieving seats"
  },
  {
    number: "AIR 206",
    label: "Top Rank",
    icon: Trophy,
    context: "NEET All India Rankings"
  },
];

export default function ResultsStats() {
  return (
    <section className="py-10 md:py-12 bg-white">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">

          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-gradient-to-br from-blue-50 via-white to-orange-50 border-2 border-orange-200 rounded-2xl p-6 md:p-8 text-center hover:shadow-lg transition group"
              >

                <div className="flex justify-center mb-3">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon
                      className="w-8 h-8 md:w-10 md:h-10 text-orange-600"
                      strokeWidth={2}
                    />
                  </div>
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
            );
          })}

        </div>

        <div className="mt-8 p-5 md:p-6 bg-blue-50 rounded-2xl border-l-4 border-orange-500">
          <p className="text-sm md:text-base text-blue-900 flex items-start gap-2">
            <Lightbulb className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
            <span>
              <span className="font-bold">Achievement Highlights:</span> These numbers represent 2025 results. Every statistic reflects the hard work, dedication, and guidance our students received.
            </span>
          </p>
        </div>

      </div>

    </section>
  );
}