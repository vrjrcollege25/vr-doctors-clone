const colleges = [
  "Osmania Medical College",
  "Gandhi Medical College",
  "Government Medical College Siddipet",
  "Kakatiya Medical College",
  "ESIC Medical College",
  "AIIMS",
];

export default function MedicalAdmissions() {
  return (
    <section className="py-12 md:py-16 bg-blue-50">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Heading */}

        <div className="text-center mb-10">

          <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm md:text-base">
            Medical Admissions
          </p>

          <h2 className="mt-3 md:mt-4 text-3xl md:text-5xl font-bold text-blue-900">
            Top Medical Colleges
          </h2>

          <p className="max-w-3xl mx-auto mt-4 md:mt-6 text-sm md:text-base text-gray-600">
            Our students have secured admissions into respected medical institutions across Telangana and India.
          </p>

        </div>

        {/* College Cards */}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">

          {colleges.map((college) => (
            <div
              key={college}
              className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 text-center hover:shadow-lg transition"
            >

              <div className="text-4xl md:text-5xl mb-3">
                🎓
              </div>

              <h3 className="text-sm md:text-base font-bold text-blue-900">
                {college}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}