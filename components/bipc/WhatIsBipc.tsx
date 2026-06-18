import Image from "next/image";

export default function WhatIsBipc() {
  return (
    <section className="py-16 md:py-24 bg-white">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-widest">
              What Is BiPC?
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-blue-900">
              More Than Just Biology, Physics & Chemistry
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              BiPC is often viewed as the pathway to becoming a doctor.
              In reality, it opens doors to a vast ecosystem of careers
              focused on improving human life, animal welfare,
              healthcare innovation and scientific discovery.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Students who choose BiPC are stepping into a world of
              medicine, pharmacy, veterinary sciences, public health,
              biotechnology, agriculture and many other fields that
              contribute to society in meaningful ways.
            </p>

          </div>

          <div>

            <Image
              src="/bipc/bipc-intro.webp"
              alt="World of BiPC"
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