import Image from "next/image";

export default function LongTermNeet() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-widest">
              Long-Term NEET Program
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-blue-900">
              Comprehensive Preparation For Medical Aspirants
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              A dedicated residential NEET program focused on concept
              building, continuous practice, testing and mentoring.
              Designed for students committed to securing a medical
              seat through disciplined preparation.
            </p>

            <ul className="mt-8 space-y-3 text-gray-700">

              <li>✓ Complete NEET Syllabus Coverage</li>
              <li>✓ Concept Building & Application</li>
              <li>✓ Weekly Tests & Grand Tests</li>
              <li>✓ Performance Tracking</li>
              <li>✓ Personalized Academic Support</li>

            </ul>

            <a
              href="/contact"
              className="inline-block mt-8 bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition"
            >
              Learn More →
            </a>

          </div>

          <div>

            <Image
              src="/courses/long-term-neet.webp"
              alt="Long Term NEET Program"
              width={1200}
              height={900}
              className="w-full rounded-3xl shadow-xl object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}