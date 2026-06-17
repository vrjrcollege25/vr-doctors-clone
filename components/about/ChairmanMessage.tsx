import Image from "next/image";

export default function ChairmanMessage() {
  return (
    <section className="py-12 md:py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">

          {/* Image */}

          <div className="w-4/5 mx-auto md:w-full">

            <Image
              src="/about/chairman.webp"
              alt="Chairman"
              width={700}
              height={700}
              sizes="(min-width: 768px) 50vw, 80vw"
              className="w-full h-auto rounded-3xl shadow-xl"
            />

          </div>

          {/* Message */}

          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-wide md:tracking-widest text-sm md:text-base">
              Chairman's Message
            </p>

            <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
              A Message To Students & Parents
            </h2>

            <p className="mt-6 md:mt-8 text-gray-600 leading-relaxed">
              Success is not achieved overnight. It is built through
              discipline, consistency and the willingness to improve
              every day.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">
              At VR Doctors Academy, our mission is to create an
              environment where students can focus on their goals,
              develop confidence and unlock their full potential.
              We remain committed to guiding every aspiring doctor
              with sincerity, dedication and academic excellence.
            </p>

            <p className="mt-8 font-bold text-blue-900">
              Chairman
            </p>

            <p className="text-orange-500">
              VR Doctors Academy
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}