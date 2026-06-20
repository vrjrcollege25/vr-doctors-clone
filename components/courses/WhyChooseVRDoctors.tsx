"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Join VR Doctors",
    description:
      "Begin your journey by choosing the program that best matches your academic goals and medical aspirations.",
    icon: "🚀",
  },
  {
    number: "02",
    title: "Personalized Study Plan",
    description:
      "Students follow a structured academic roadmap designed to ensure consistent progress throughout the year.",
    icon: "📚",
  },
  {
    number: "03",
    title: "Faculty Mentoring",
    description:
      "Experienced faculty provide regular guidance, doubt clarification and motivation to keep students on track.",
    icon: "👨‍🏫",
  },
  {
    number: "04",
    title: "Weekly Tests",
    description:
      "Frequent assessments help students measure their understanding and improve exam readiness.",
    icon: "📝",
  },
  {
    number: "05",
    title: "Performance Review",
    description:
      "Detailed analysis helps identify strengths, improve weak areas and refine preparation strategies.",
    icon: "📊",
  },
  {
    number: "06",
    title: "NEET Success",
    description:
      "The result of disciplined preparation, expert guidance and consistent effort is success in NEET and admission into top medical colleges.",
    icon: "🏆",
  },
];

export default function StudentJourney() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-12 md:py-16 bg-blue-50">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Heading */}

        <div className="text-center mb-10">

          <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm md:text-base">
            Your Journey At VR Doctors
          </p>

          <h2 className="mt-3 md:mt-4 text-3xl md:text-5xl font-bold text-blue-900">
            From Admission To Success
          </h2>

          <p className="max-w-3xl mx-auto mt-4 md:mt-6 text-sm md:text-base text-gray-600">
            Structured pathway designed to maximize learning, confidence and NEET performance.
          </p>

        </div>

        {/* Step Buttons */}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">

          {steps.map((step, index) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(index)}
              className={`rounded-2xl p-4 md:p-5 text-left transition-all duration-300 border text-sm md:text-base ${
                activeStep === index
                  ? "bg-blue-900 text-white border-blue-900 shadow-lg scale-[1.02]"
                  : "bg-white text-blue-900 border-gray-200 hover:border-blue-900"
              }`}
            >
              <div className="flex items-start gap-2">

                <span className="text-2xl md:text-3xl flex-shrink-0">
                  {step.icon}
                </span>

                <div className="flex-1 min-w-0">

                  <p
                    className={`text-xs font-semibold mb-1 ${
                      activeStep === index
                        ? "text-orange-400"
                        : "text-orange-500"
                    }`}
                  >
                    STEP {step.number}
                  </p>

                  <h3 className="font-bold leading-tight text-sm">
                    {step.title}
                  </h3>

                </div>

              </div>

            </button>
          ))}

        </div>

        {/* Active Step */}

        <div className="mt-8 md:mt-10 bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-lg">

          <div className="flex items-start gap-3 md:gap-4">

            <span className="text-4xl md:text-5xl flex-shrink-0">
              {steps[activeStep].icon}
            </span>

            <div className="flex-1">

              <p className="text-orange-500 font-semibold text-sm md:text-base">
                STEP {steps[activeStep].number}
              </p>

              <h3 className="text-2xl md:text-4xl font-bold text-blue-900 mt-2">
                {steps[activeStep].title}
              </h3>

            </div>

          </div>

          <p className="mt-5 md:mt-6 text-gray-600 text-sm md:text-base leading-relaxed">
            {steps[activeStep].description}
          </p>

        </div>

      </div>

    </section>
  );
}