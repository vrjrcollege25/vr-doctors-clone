"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Anumalla Akshitha",
    college: "Osmania Medical College",
    rank: "Score 617/720",
    quote:
      "VR Doctors Academy gave me the discipline, faculty support and confidence to achieve my dream.",
    image: "/students/anumalla.webp",
  },
  {
    name: "Annangi Akhila",
    college: "Osmania Medical College",
    rank: "Govt Seat Secured",
    quote:
      "Excellent faculty, stress-free learning and a wonderful residential environment helped me succeed.",
    image: "/students/akhila.webp",
  },
  {
    name: "Bisaoi Vamshi Krishna",
    college: "Gandhi Medical College",
    rank: "AIR 507",
    quote:
      "The study culture and mentoring at VR Doctors made all the difference in my preparation.",
    image: "/students/vamshi.webp",
  },
  {
    name: "Dodla Vaishnavi",
    college: "Government Medical College, Siddipet",
    rank: "MBBS Seat Secured",
    quote:
      "Healthy food, experienced lecturers and constant motivation helped me achieve my goal.",
    image: "/students/vaishnavi.webp",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 h-full flex flex-col">

      {/* Header */}

      <div className="flex justify-between items-start">

        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={96}
          height={96}
          className="rounded-full object-cover border-[3px] border-orange-500 shadow-m"
        />

        <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-2 rounded-full">
          {testimonial.rank}
        </span>

      </div>

      {/* Quote */}

      <p className="mt-6 text-gray-700 leading-relaxed italic flex-grow">
        "{testimonial.quote}"
      </p>

      {/* Divider */}

      <div className="border-t my-6"></div>

      {/* College */}

      <p className="text-xs uppercase tracking-wider text-gray-500">
        Now Studying At
      </p>

      <h3 className="text-lg font-bold text-blue-900 mt-1">
        {testimonial.college}
      </h3>

      <p className="text-sm text-gray-500 mt-1">
        {testimonial.name}
      </p>

    </div>
  );
}

export default function TestimonialsSectionV2() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);

    return () => clearInterval(timer);
  }, [current]);
    const visibleCards = 2;

  const visibleTestimonials = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Heading */}

        <div className="grid grid-cols-1 md:grid-cols-[38%_62%] gap-10 items-start">

          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm">
              Testimonials
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-3 leading-tight">
              What our students have to say
            </h2>

            <div className="w-12 h-1 bg-orange-500 rounded-full mt-4" />

            <a
              href="/results"
              className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-xl font-semibold"
            >
              View All Results →
            </a>

          </div>

          {/* Desktop */}

          <div className="hidden md:grid grid-cols-2 gap-6">

            {visibleTestimonials.map((student) => (

              <TestimonialCard
                key={student.name}
                testimonial={student}
              />

            ))}

          </div>

          {/* Mobile */}

          <div className="md:hidden">

            <TestimonialCard
              testimonial={testimonials[current]}
            />

          </div>

        </div>

        {/* Controls */}

        <div className="flex justify-center items-center gap-6 mt-10">

          <button
            onClick={prev}
            className="w-11 h-11 rounded-full bg-white border shadow hover:bg-orange-500 hover:text-white transition"
          >
            <FaChevronLeft className="mx-auto" />
          </button>

          <div className="flex gap-2">

            {testimonials.map((_, index) => (

              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current
                    ? "bg-orange-500 scale-125"
                    : "bg-gray-300"
                }`}
              />

            ))}

          </div>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full bg-white border shadow hover:bg-orange-500 hover:text-white transition"
          >
            <FaChevronRight className="mx-auto" />
          </button>

        </div>

      </div>
    </section>
  );
}