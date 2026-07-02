import Image from "next/image";

export default function LongTermNeet() {
  return (
    <section id="Longterm" className="py-12 md:py-16 bg-blue-50 scroll-mt-24">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm md:text-base">
              Long-Term NEET Program
            </p>

            <h2 className="mt-3 md:mt-4 text-3xl md:text-5xl font-bold text-blue-900">
              Complete Medical Preparation
            </h2>

            <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-600 leading-relaxed">
              Our flagship program combines concept mastery, intensive practice, regular testing and personalized mentoring. Perfect for committed students aiming for top medical colleges.
            </p>

            <ul className="mt-6 md:mt-8 space-y-2.5 text-gray-700 text-sm md:text-base">

              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                <span>Complete NEET Syllabus Coverage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                <span>Concept Building & Application</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                <span>Weekly Tests & Grand Tests</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                <span>Performance Tracking & Analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                <span>Personalized Academic Support</span>
              </li>

            </ul>

            <a
              href="/contact"
              className="inline-block mt-8 bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:from-blue-800 hover:to-blue-700 transition font-semibold text-sm md:text-base shadow-lg"
            >
              Start Your NEET Journey →
            </a>

          </div>

          <div>

            <Image
              src="/Campus/academics-3.webp"
              alt="Long Term NEET Program"
              width={1200}
              height={900}
              className="w-full rounded-2xl shadow-lg object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}