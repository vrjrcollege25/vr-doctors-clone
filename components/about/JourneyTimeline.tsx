"use client";

import { useState } from "react";
import Image from "next/image";

const timeline = [
  {
    year: "2019",
    image: "/journey/2019.webp",
    title: "VR Doctors Academy Founded",
    description:
      "Started with a vision to help aspiring medical students transform their dreams into reality.",
  },
  {
    year: "2020",
    image: "/journey/2020.webp",
    title: "Produced Our First Batch Of Doctors",
    description:
      "The first successful batch marked the beginning of a journey that would impact hundreds of future medical professionals.",
  },
  {
    year: "2022",
    image: "/journey/2022.webp",
    title: "Strengthened Residential NEET Programs",
    description:
      "Built a disciplined residential ecosystem designed to maximize student success and consistency.",
  },
  {
    year: "2023",
    image: "/journey/2023.webp",
    title: "Launched VRIIT",
    description:
      "Expanded academic offerings to support IIT aspirants through a dedicated program.",
  },
  {
    year: "2024",
    image: "/journey/2024.webp",
    title: "Expanded Through VR Junior College",
    description:
      "Broadened academic pathways and strengthened the educational ecosystem for students.",
  },
  {
    year: "2026",
    image: "/journey/2026.webp",
    title: "Building The Next Chapter",
    description:
      "Continuing our efforts to provide quality education to future healthcare professionals.",
  },
];

export default function JourneyTimeline() {
  const [activeYear, setActiveYear] = useState(0);

  const current = timeline[activeYear];

  return (
    <section className="py-12 md:py-16 bg-white">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="text-center mb-10">

          <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm md:text-base">
            Our Journey
          </p>

          <h2 className="mt-3 md:mt-4 text-3xl md:text-5xl font-bold text-blue-900">
            VR Doctors Story
          </h2>

          <p className="max-w-3xl mx-auto mt-4 md:mt-6 text-sm md:text-base text-gray-600">
            Every milestone represents our commitment to helping students achieve success in NEET and beyond.
          </p>

        </div>

        {/* Desktop Timeline */}

        <div className="hidden md:flex justify-center items-center gap-2 mb-10 flex-wrap">

          {timeline.map((item, index) => (
            <button
              key={item.year}
              onClick={() => setActiveYear(index)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeYear === index
                  ? "bg-orange-500 text-white shadow-lg scale-105"
                  : "bg-blue-50 text-blue-900 hover:bg-blue-100"
              }`}
            >
              {item.year}
            </button>
          ))}

        </div>

        {/* Mobile Timeline */}

        <div className="md:hidden flex gap-2 overflow-x-auto pb-3 mb-8 -mx-4 px-4">

          {timeline.map((item, index) => (
            <button
              key={item.year}
              onClick={() => setActiveYear(index)}
              className={`whitespace-nowrap px-4 py-2 rounded-full font-semibold text-sm transition ${
                activeYear === index
                  ? "bg-orange-500 text-white"
                  : "bg-blue-50 text-blue-900"
              }`}
            >
              {item.year}
            </button>
          ))}

        </div>

        {/* Active Story Card */}

        <div className="relative overflow-hidden rounded-3xl shadow-xl">

          <div className="relative h-[40vh] md:h-[500px] min-h-[300px]">

            <Image
              src={current.image}
              alt={current.title}
              fill
              priority
              className="object-cover transition-all duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-10 text-white">

              <p className="text-orange-400 font-bold text-lg md:text-xl inline-block">
                {current.year}
              </p>

              <h3 className="mt-2 md:mt-3 text-2xl md:text-4xl font-bold leading-tight">
                {current.title}
              </h3>

              <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-200 leading-relaxed max-w-2xl">
                {current.description}
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}