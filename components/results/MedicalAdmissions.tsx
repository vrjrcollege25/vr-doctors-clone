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
    <section className="py-16 md:py-24 bg-blue-50">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Medical Admissions
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-blue-900">
            Students Joining Top Medical Colleges
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600">
            Our students have secured admissions into some of the
            most respected medical institutions across Telangana
            and India.
          </p>

        </div>

        {/* College Cards */}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {colleges.map((college) => (
            <div
              key={college}
              className="bg-white border border-gray-200 rounded-3xl p-8 text-center hover:shadow-lg transition"
            >

              <div className="text-5xl">
                🎓
              </div>

              <h3 className="mt-5 text-lg md:text-xl font-bold text-blue-900">
                {college}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}