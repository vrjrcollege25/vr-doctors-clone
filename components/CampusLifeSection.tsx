export default function CampusLifeSection() {
  const features = [
    {
      icon: "🏠",
      title: "Residential Campus",
      description:
        "A focused residential environment designed to minimize distractions and maximize academic growth.",
    },
    {
      icon: "🍽️",
      title: "Nutritious Food",
      description:
        "Healthy and balanced meals prepared to support student wellbeing and long study hours.",
    },
    {
      icon: "📚",
      title: "Study Culture",
      description:
        "Structured schedules, supervised study hours and disciplined preparation for NEET success.",
    },
    {
      icon: "🎉",
      title: "Events & Festivals",
      description:
        "Celebrating important occasions and cultural events to create memorable student experiences.",
    },
    {
      icon: "🛡️",
      title: "Safe Environment",
      description:
        "A secure and supportive campus where students can focus on their goals with confidence.",
    },
    {
      icon: "👨‍⚕️",
      title: "Future Doctors Community",
      description:
        "Students surrounded by like-minded aspirants working together toward medical careers.",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-blue-50">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="text-center mb-12 md:mb-14">

          <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm">
            Student Experience
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mt-4">
            Life At VR Doctors
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600">
            More than a coaching institute. A residential ecosystem
            designed to help students learn, grow and achieve.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                bg-white
                border
                border-gray-200
                rounded-3xl
                p-6 md:p-8
                hover:-translate-y-1
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              <div className="text-4xl md:text-5xl">
                {feature.icon}
              </div>

              <h3 className="mt-4 text-xl md:text-2xl font-bold text-blue-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}