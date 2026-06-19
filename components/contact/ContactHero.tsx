export default function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20 md:py-28">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-orange-400 font-semibold uppercase tracking-widest">
          Contact VR Doctors
        </p>

        <h1 className="mt-4 text-4xl md:text-7xl font-bold leading-tight">
          Let's Plan Your
          <span className="text-orange-400"> Medical Journey</span>
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-lg text-blue-100">
          Whether you're a student exploring BiPC, a parent seeking
          guidance, or someone preparing for NEET, our team is here
          to help you make the right decision.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

          <a
            href="tel:+919256925640"
            className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold shadow-lg"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/15559412484?text=Hi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl font-semibold shadow-lg"
          >
            💬 WhatsApp Us
          </a>

        </div>

      </div>

    </section>
  );
}