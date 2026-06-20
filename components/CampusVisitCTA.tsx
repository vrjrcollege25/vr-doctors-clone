export default function CampusVisitCTA() {
  return (
    <section className="py-10 md:py-16 bg-blue-900 text-white">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm md:text-base">
          Admissions Open
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mt-3 md:mt-4">
          Experience VR Doctors In Person
        </h2>

        <p className="mt-4 md:mt-6 text-base md:text-lg text-blue-100 leading-relaxed">
          Visit our campus, interact with faculty, explore hostel facilities,
          experience the learning environment and discover why hundreds of
          students have transformed their dreams into medical careers.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mt-6 md:mt-10">

          <a
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition text-sm md:text-base"
          >
            Book A Campus Visit
          </a>

          <a
            href="tel:+919256925640"
            className="border border-white hover:bg-white hover:text-blue-900 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition text-sm md:text-base"
          >
            Call Admissions
          </a>

        </div>

      </div>

    </section>
  );
}