import { GraduationCap, BookOpen, Zap } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "Intermediate + NEET",
    description:
      "Begin your Intermediate education while preparing systematically for NEET.",
    tag: "For Class 10 Passed Students",
  },
  {
    icon: BookOpen,
    title: "Long-Term NEET",
    description:
      "Comprehensive residential program focused on achieving medical seat admission.",
    tag: "For Serious Medical Aspirants",
  },
  {
    icon: Zap,
    title: "Revision Program",
    description:
      "Intensive preparation focused on revision, testing and exam readiness.",
    tag: "For Final Year Preparation",
  },
];

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

          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.title}
                className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:shadow-lg transition group"
              >

                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon
                    className="w-7 h-7 md:w-8 md:h-8 text-orange-600"
                    strokeWidth={2}
                  />
                </div>

                <h3 className="mt-4 md:mt-5 text-lg md:text-2xl font-bold text-blue-900">
                  {program.title}
                </h3>

                <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-600">
                  {program.description}
                </p>

                <p className="mt-4 md:mt-6 font-semibold text-orange-500 text-sm md:text-base">
                  {program.tag}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}