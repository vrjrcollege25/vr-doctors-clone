export default function CTASection() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-4">

          <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold">
              Admission Enquiry
            </h3>

            <p className="mt-3 text-blue-100">
              Get guidance from our academic team.
            </p>
          </div>

          <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold">
              Enrol Now
            </h3>

            <p className="mt-3 text-blue-100">
              Start your journey towards medical success.
            </p>
          </div>

          <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold">
              Future Doctor
            </h3>

            <p className="mt-3 text-blue-100">
              Join the next generation of achievers.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}