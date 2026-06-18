const ecosystems = [
  {
    title: "Patient Care",
    careers: [
      "MBBS",
      "BDS",
      "Nursing",
      "Physiotherapy",
    ],
  },
  {
    title: "Animal Care",
    careers: [
      "Veterinary Sciences",
      "Animal Husbandry",
    ],
  },
  {
    title: "Medicines & Treatment",
    careers: [
      "Pharmacy",
      "Clinical Research",
    ],
  },
  {
    title: "Traditional Medicine",
    careers: [
      "BAMS",
      "BHMS",
      "BUMS",
    ],
  },
  {
    title: "Food & Agriculture",
    careers: [
      "Agriculture",
      "Food Sciences",
      "Horticulture",
    ],
  },
  {
    title: "Research & Innovation",
    careers: [
      "Biotechnology",
      "Life Sciences",
      "Biomedical Research",
    ],
  },
];

export default function HealthcareEcosystem() {
  return (
    <section className="py-16 md:py-24 bg-blue-50">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="text-center mb-14">

          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Healthcare Ecosystem
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-blue-900">
            BiPC Opens More Doors Than Most Families Realize
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600">
            Healthcare is not a single profession. It is a vast
            ecosystem of careers dedicated to serving people,
            animals and communities.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {ecosystems.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-8 shadow-md border border-gray-100"
            >

              <h3 className="text-2xl font-bold text-blue-900">
                {item.title}
              </h3>

              <ul className="mt-6 space-y-2 text-gray-600">

                {item.careers.map((career) => (
                  <li key={career}>
                    ✓ {career}
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}