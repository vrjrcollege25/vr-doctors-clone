import Image from "next/image";

export default function ChairmanMessage() {
  return (
    <section className="py-12 md:py-16 bg-white">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">

          {/* Image */}

          <div className="w-full">

            <Image
              src="/Campus/infra-2.webp"
              alt="VR Doctors Leadership"
              width={500}
              height={500}
              sizes="(min-width: 768px) 50vw, 80vw"
              className="w-full h-auto rounded-2xl shadow-lg"
            />

          </div>

          {/* Message */}

          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-wide md:tracking-widest text-sm md:text-base">
              Our Commitment
            </p>

            <h2 className="mt-3 md:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
              Excellence In Every Endeavor
            </h2>

            <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-600 leading-relaxed">
              Success is not achieved overnight. It is built through
              discipline, consistency and the willingness to improve
              every day.
            </p>

            <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-600 leading-relaxed">
              At VR Doctors Academy, our mission is to create an
              environment where students can focus on their goals,
              develop confidence and unlock their full potential.
              We remain committed to guiding every aspiring doctor
              with sincerity, dedication and academic excellence.
            </p>

            <p className="mt-6 md:mt-8 font-bold text-blue-900 text-sm md:text-base">
              The VR Doctors Team
            </p>

            <p className="text-orange-500 text-sm md:text-base">
              Dedicated to Your Success
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}