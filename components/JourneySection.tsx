export default function JourneySection() {
  return (
    <section className="py-12 md:py-16 bg-white">

      <div className="max-w-4xl mx-auto px-4 md:px-4">

        <div className="text-center mb-10">

          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Our Journey So Far
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mt-4">
            Turning Vision Into Reality Since 2019
          </h2>

          <p className="max-w-3xl mx-auto mt-4 text-gray-600">
            Since 2019, VR Doctors has been transforming aspirations into
            medical careers through disciplined preparation, residential
            learning and consistent results.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

          <div className="text-center border border-gray-200 rounded-2xl p-6 bg-gray-50">
            <h3 className="text-3xl md:text-5xl font-bold text-blue-900">
              2019
            </h3>
            <p className="mt-2 text-gray-600">
              Established
            </p>
          </div>

          <div className="text-center border border-gray-200 rounded-2xl p-6 bg-gray-50">
            <h3 className="text-3xl md:text-5xl font-bold text-blue-900">
              5
            </h3>
            <p className="mt-2 text-gray-600">
              Successful Batches
            </p>
          </div>

          <div className="text-center border border-gray-200 rounded-2xl p-6 bg-gray-50">
            <h3 className="text-3xl md:text-5xl font-bold text-blue-900">
              500+
            </h3>
            <p className="mt-2 text-gray-600">
              Doctors Produced
            </p>
          </div>

          <div className="text-center border border-gray-200 rounded-2xl p-6 bg-gray-50">
            <h3 className="text-3xl md:text-5xl font-bold text-blue-900">
              101+
            </h3>
            <p className="mt-2 text-gray-600">
              Medical Seats In 2025
            </p>
          </div>

        </div>

        <p className="text-center text-gray-500 mt-8 text-sm">
          Including MBBS, BDS and AYUSH admissions across India.
        </p>

      </div>

    </section>
  );
}