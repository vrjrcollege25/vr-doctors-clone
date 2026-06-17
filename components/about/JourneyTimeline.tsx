const timeline = [
  {
    year: "2019",
    title: "VR Doctors Academy Founded",
    description:
      "Started with a vision to help aspiring medical students transform their dreams into reality.",
  },
  {
    year: "2020",
    title: "Produced Our First Batch Of Doctors",
    description:
      "The first successful batch marked the beginning of a journey that would impact hundreds of future medical professionals.",
  },
  {
    year: "2021-2023",
    title: "Strengthened Residential NEET Programs",
    description:
      "Focused on building a disciplined residential ecosystem designed to maximize student success.",
  },
  {
    year: "2023",
    title: "Launched VRIIT",
    description:
      "Expanded academic offerings to support IIT aspirants through a dedicated program.",
  },
  {
    year: "2024",
    title: "Expanded Through VR Junior College",
    description:
      "Broadened academic pathways and strengthened the educational ecosystem for students.",
  },
  {
    year: "2026",
    title: "Building The Next Chapter",
    description:
      "Continuing our efforts to provide quality education to budding doctors.",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="py-16 md:py-24 bg-white">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Our Journey
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-blue-900">
            The VR Doctors Journey
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600">
            Every milestone represents our commitment to helping
            students achieve success in NEET and beyond.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 -translate-x-1/2" />

          {/* Mobile Line */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-1 bg-blue-100" />

          {timeline.map((item, index) => (
            <div
              key={item.year}
              className={`relative mb-12 md:mb-16 flex ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >

              {/* Dot */}
              <div className="absolute left-5 md:left-1/2 top-6 w-4 h-4 bg-orange-500 rounded-full md:-translate-x-1/2" />

              {/* Card */}
              <div
                className={`
                  ml-12 md:ml-0
                  w-full md:w-[45%]
                  bg-gray-50 border border-gray-200
                  rounded-3xl p-6
                  shadow-sm hover:shadow-lg transition
                `}
              >

                <p className="text-orange-500 font-bold text-lg">
                  {item.year}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-blue-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}