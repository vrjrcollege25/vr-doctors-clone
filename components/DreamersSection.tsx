export default function DreamersSection() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">
            From Dreamers To Doctors
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Every successful doctor begins with a dream.
            At VR Doctors, we provide the guidance,
            discipline, and mentorship required to turn
            those dreams into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="shadow-lg rounded-xl p-8">
            <h3 className="text-xl font-bold text-orange-500 mb-4">
              Dream
            </h3>

            <p className="text-gray-600">
              Students arrive with ambitions of becoming
              doctors and serving society.
            </p>
          </div>

          <div className="shadow-lg rounded-xl p-8">
            <h3 className="text-xl font-bold text-orange-500 mb-4">
              Prepare
            </h3>

            <p className="text-gray-600">
              Intensive coaching, regular tests, and
              personal mentoring create consistency.
            </p>
          </div>

          <div className="shadow-lg rounded-xl p-8">
            <h3 className="text-xl font-bold text-orange-500 mb-4">
              Achieve
            </h3>

            <p className="text-gray-600">
              Students secure medical seats and transform
              their vision into reality.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}