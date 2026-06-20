"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/hero-dream.webp",
    title: "Every Doctor Begins With A Dream",
    subtitle: "Vision Into Reality",
    description:
      "Do you dream of wearing a white coat? Every successful doctor starts with a vision for the future.",
  },
  {
    image: "/hero-preparation.webp",
    title: "The Journey Starts Here",
    subtitle: "Vision Into Reality",
    description:
      "Expert faculty, structured preparation, mentoring and a focused residential environment help students reach their goals.",
  },
  {
    image: "/hero-success.webp",
    title: "Dreams Become Reality",
    subtitle: "Vision Into Reality",
    description:
      "NEET success, medical seats and future doctors. Your journey begins with the choices you make today.",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative h-[65vh] md:h-[85vh] overflow-hidden">

      {/* Background Image */}
      <Image
        src={slides[current].image}
        alt={slides[current].title}
        fill
        priority
        className="object-cover transition-all duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-4 md:px-6">

        <div className="max-w-2xl text-white">

          <p className="uppercase tracking-[3px] md:tracking-[4px] text-orange-400 font-semibold text-sm md:text-base">
            {slides[current].subtitle}
          </p>

          <h1 className="text-3xl md:text-7xl font-bold mt-4 leading-tight">
            {slides[current].title}
          </h1>

          <p className="mt-4 md:mt-6 text-sm md:text-lg text-gray-200 max-w-xl">
            {slides[current].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-8">

            <a
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-center"
            >
              Start Your Journey
            </a>

            <a
              href="#approach"
              className="border border-white hover:bg-white hover:text-blue-900 transition px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-center"
            >
              Explore Our Approach
            </a>

          </div>

        </div>

      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-white/40 transition"
      >
        ←
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-white/40 transition"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index
                ? "bg-orange-500"
                : "bg-white/50"
            }`}
          />
        ))}

      </div>

    </section>
  );
}