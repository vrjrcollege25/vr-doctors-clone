export default function ContactCTA() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="text-orange-400 font-semibold uppercase tracking-widest">
          Admissions Open
        </p>

        <h2 className="mt-4 text-4xl md:text-6xl font-bold">
          Ready To Begin Your
          <span className="text-orange-400"> Medical Journey?</span>
        </h2>

        <p className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto">
          Whether you're aiming for NEET, exploring the world of BiPC,
          or looking for the right residential academic environment,
          our team is ready to guide you every step of the way.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

          <a
            href="tel:+919256925640"
            className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold shadow-lg"
          >
            📞 Call Admissions
          </a>

          <a
            href="https://wa.me/15559412484?text=Hi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl font-semibold shadow-lg"
          >
            💬 WhatsApp Now
          </a>

        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">

          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="text-3xl font-bold text-orange-400">
              Residential
            </h3>

            <p className="mt-2 text-blue-100">
              Campus Environment
            </p>
          </div>

          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="text-3xl font-bold text-orange-400">
              NEET
            </h3>

            <p className="mt-2 text-blue-100">
              Focused Programs
            </p>
          </div>

          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="text-3xl font-bold text-orange-400">
              BiPC
            </h3>

            <p className="mt-2 text-blue-100">
              Specialized Courses
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}