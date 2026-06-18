import Image from "next/image";

export default function ShortTermRevision() {
  return (
    <section className="py-16 md:py-24 bg-white">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <Image
              src="/courses/short-term-neet.webp"
              alt="Short Term NEET Revision"
              width={1200}
              height={900}
              className="w-full rounded-3xl shadow-xl object-cover"
            />

          </div>

          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-widest">
              Short-Term Revision Program
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-blue-900">
              Intensive Revision Before NEET
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Designed for students who need focused revision,
              exam strategy and high-yield practice before the
              NEET examination. This program emphasizes speed,
              accuracy and confidence-building.
            </p>

            <ul className="mt-8 space-y-3 text-gray-700">

              <li>✓ Fast-Track Revision</li>
              <li>✓ Mock Exams & Analysis</li>
              <li>✓ High-Yield Question Practice</li>
              <li>✓ Exam Strategy Sessions</li>
              <li>✓ Final Preparation Support</li>

            </ul>

            <a
              href="/contact"
              className="inline-block mt-8 bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition"
            >
              Learn More →
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}