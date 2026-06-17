const stats = [
  {
    number: "1000+",
    label: "Students Every Year",
  },
  {
    number: "500+",
    label: "Medical Careers Guided",
  },
  {
    number: "100+",
    label: "Scholarships Awarded Annually",
  },
  {
    number: "2",
    label: "Major Campuses",
  },
  {
    number: "5+",
    label: "Successful Batches",
  },
  {
    number: "101+",
    label: "Medical Seats In 2025",
  },
];

export default function ImpactSection() {
  return (
    <section className="py-16 md:py-24 bg-blue-900 text-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-orange-400 font-semibold uppercase tracking-widest">
            Our Impact
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Numbers That Tell Our Story
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-blue-100">
            Behind every number is a student, a family and a dream
            that moved one step closer to becoming reality.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/15 transition"
            >

              <h3 className="text-4xl md:text-5xl font-bold text-orange-400">
                {stat.number}
              </h3>

              <p className="mt-3 text-blue-100">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}