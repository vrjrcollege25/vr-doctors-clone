"use client";

import { useState } from "react";
import Image from "next/image";

const collegeImages = [
  "/medical admissions/Universities-07.webp",
  "/medical admissions/Universities-02.webp",
  "/medical admissions/Universities-03.webp",
  "/medical admissions/Universities-04.webp",
  "/medical admissions/Universities-01.webp",
  "/medical admissions/Universities-06.webp",
];

export default function MedicalAdmissions() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-12 md:py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm md:text-base">
            Medical Admissions
          </p>

          <h2 className="mt-3 md:mt-4 text-3xl md:text-5xl font-bold text-blue-900">
            Top Medical Colleges
          </h2>

          <p className="max-w-3xl mx-auto mt-4 md:mt-6 text-sm md:text-base text-gray-600">
            Our students have secured admissions into respected medical
            institutions across Telangana and India.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {collegeImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <Image
                src={image}
                alt={`Medical Admission ${index + 1}`}
                width={800}
                height={1000}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                priority={index < 3}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Image Viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-6 text-white text-5xl font-light hover:text-gray-300 transition"
          >
            &times;
          </button>

          {/* Full Image */}
          <Image
            src={selectedImage}
            alt="Selected Medical Admission"
            width={1600}
            height={2000}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}