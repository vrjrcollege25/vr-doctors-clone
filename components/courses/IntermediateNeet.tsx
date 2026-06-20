import Image from "next/image";

export default function IntermediateNeet() {
  return (
    <section className="py-12 md:py-16 bg-white">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          <div className="order-2 md:order-1">

            <Image
              src="/Campus/academics-1.webp"
              alt="Intermediate + NEET"
              width={1200}
              height={900}
              className="w-full rounded-2xl shadow-lg object-cover"
            />

          </div>

          <div className="order-1 md:order-2">

            <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm md:text-base">
              Intermediate + NEET
            </p>

            <h2 className="mt-3 md:mt-4 text-3xl md:text-5xl font-bold text-blue-900">
              Balanced Academics & Medical Prep
            </h2>

            <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-600 leading-relaxed">
              Complete your Intermediate education while building a strong foundation for NEET. Our integrated curriculum ensures you excel in board exams and competitive entrance tests.
            </p>

            <ul className="mt-6 md:mt-8 space-y-2.5 text-gray-700 text-sm md:text-base">

              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                <span>Intermediate Academics + NEET Coaching</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                <span>Residential Campus Environment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                <span>Structured Daily Study Plan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                <span>Regular Assessments & Analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                <span>Personal Faculty Mentoring</span>
              </li>

            </ul>

            <a
              href="/contact"
              className="inline-block mt-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition font-semibold text-sm md:text-base shadow-lg"
            >
              Enroll In Intermediate + NEET →
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}