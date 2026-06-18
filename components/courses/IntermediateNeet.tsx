import Image from "next/image";

export default function IntermediateNeet() {
  return (
    <section className="py-16 md:py-24 bg-white">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <Image
              src="/courses/intermediate-neet.webp"
              alt="Intermediate + NEET"
              width={1200}
              height={900}
              className="w-full rounded-3xl shadow-xl object-cover"
            />

          </div>

          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-widest">
              Intermediate + NEET
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-blue-900">
              Integrated Intermediate & NEET Preparation
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Designed for students who have completed Class 10 and
              want to pursue Intermediate education while preparing
              for NEET in a structured residential environment.
            </p>

            <ul className="mt-8 space-y-3 text-gray-700">

              <li>✓ Intermediate Academics + NEET Coaching</li>
              <li>✓ Residential Campus Environment</li>
              <li>✓ Daily Study Hours</li>
              <li>✓ Regular Assessments & Analysis</li>
              <li>✓ Faculty Mentoring & Guidance</li>

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