import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="py-12 md:py-20 bg-white">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">

          {/* Images */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">

            <Image
              src="/Campus/academics-1.webp"
              alt="VR Doctors Campus"
              width={400}
              height={400}
              sizes="(min-width: 768px) 25vw, 45vw"
              className="w-full aspect-square object-cover rounded-2xl"
            />

            <Image
              src="/Campus/academics-2.webp"
              alt="Students"
              width={400}
              height={400}
              sizes="(min-width: 768px) 25vw, 45vw"
              className="w-full aspect-square object-cover rounded-2xl md:mt-8"
            />

            <Image
              src="/Campus/infra-1.webp"
              alt="Faculty"
              width={400}
              height={400}
              sizes="(min-width: 768px) 25vw, 45vw"
              className="w-full aspect-square object-cover rounded-2xl md:mt-8"
            />

            <Image
              src="/Campus/events-1.webp"
              alt="Academic Environment"
              width={400}
              height={400}
              sizes="(min-width: 768px) 25vw, 45vw"
              className="w-full aspect-square object-cover rounded-2xl"
            />

          </div>

          {/* Content */}
          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-wide md:tracking-widest text-sm md:text-base">
              Who We Are
            </p>

            <h2 className="mt-3 md:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
              A Vision That Became Reality
            </h2>

            <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-600 leading-relaxed">
              VR Doctors Academy was founded in 2019 with a simple
              vision — helping students transform their dream of
              becoming a doctor into reality through disciplined
              preparation, expert mentoring and a focused learning
              environment.
            </p>

            <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-600 leading-relaxed">
              What started with just 95 students has grown into a
              thriving academic ecosystem supporting more than 1000
              students every year across Hyderabad. Through consistent
              results, residential learning and student-centric
              mentoring, VR Doctors Academy continues to guide
              aspiring medical professionals across India.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}