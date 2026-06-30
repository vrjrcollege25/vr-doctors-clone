const impacts = [
  {
    stat: "600+",
    title: "Medical Careers Guided",
    story: "Each number represents a student who achieved their dream. Families changed, futures transformed, and the healthcare field strengthened with every success."
  },
  {
    stat: "150+",
    title: "Doctors Produced Every Year",
    story: "From first day to final NEET attempt, we walk alongside every student. Our residential environment creates a community of support and disciplined preparation."
  },
  {
    stat: "6+",
    title: "Years of Excellence",
    story: "Since 2019, we've built more than just results. We've created a legacy of trust, consistency, and excellence that parents and students rely on."
  },
  {
    stat: "100+",
    title: "Scholarships Awarded",
    story: "Merit and dedication matter. We invest in deserving students, believing talent shouldn't be limited by finances. Education is for everyone."
  },
];

export default function ImpactSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="text-center mb-12">

          <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm md:text-base">
            Our Impact
          </p>

          <h2 className="mt-3 md:mt-4 text-3xl md:text-5xl font-bold">
            Beyond The Numbers
          </h2>

          <p className="max-w-3xl mx-auto mt-4 md:mt-6 text-sm md:text-base text-blue-100">
            Every statistic tells a human story. Here's what these numbers really mean.
          </p>

        </div>

        <div className="space-y-6 md:space-y-8">

          {impacts.map((impact, index) => (
            <div
              key={impact.title}
              className={`grid md:grid-cols-[300px_1fr] gap-6 md:gap-12 items-center ${
                index % 2 === 1 ? "md:grid-cols-[1fr_300px]" : ""
              }`}
            >

              {/* Stat Block */}
              <div
                className={`bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-center shadow-xl ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >

                <h3 className="text-5xl md:text-6xl font-bold text-white mb-3">
                  {impact.stat}
                </h3>

                <p className="font-semibold text-orange-100 text-lg">
                  {impact.title}
                </p>

              </div>

              {/* Story Block */}
              <div
                className={`${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >

                <p className="text-base md:text-lg text-blue-100 leading-relaxed">
                  {impact.story}
                </p>

                <div className="mt-4 h-1 w-16 bg-orange-400 rounded-full" />

              </div>

            </div>
          ))}

        </div>

        {/* Bottom message */}
        <div className="mt-16 pt-12 border-t border-white/20 text-center">

          <p className="text-lg md:text-xl text-blue-50 italic">
            "Numbers tell stories. Stories inspire futures. We're proud of both."
          </p>

        </div>

      </div>

    </section>
  );
}