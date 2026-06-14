export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-14 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-blue-900">
            Contact Us
          </h2>

          <p className="mt-4 text-gray-600">
            Speak to our admissions team today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div className="shadow-lg rounded-xl p-6">
            <h3 className="font-bold text-orange-500">
              Phone
            </h3>
            <p className="mt-2">
              +91 9256 9256 40/41/42/43
            </p>
          </div>

          <div className="shadow-lg rounded-xl p-6">
            <h3 className="font-bold text-orange-500">
              Email
            </h3>
            <p className="mt-2">
              admissions@vrdoctors.in
            </p>
          </div>

          <div className="shadow-lg rounded-xl p-6">
            <h3 className="font-bold text-orange-500">
              Address
            </h3>
            <p className="mt-2">
              Hyderbad, Telangana
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}