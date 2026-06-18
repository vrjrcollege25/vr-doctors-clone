"use client";

import { useState } from "react";

const careers = [
  {
    title: "MBBS",
    description:
      "Diagnose, treat and care for patients. One of the most sought-after careers in healthcare.",
    duration: "5.5 Years",
    scope: "Doctor, Surgeon, Specialist",
  },
  {
    title: "BDS",
    description:
      "Focus on oral healthcare, dental surgery and preventive dental medicine.",
    duration: "5 Years",
    scope: "Dentist, Orthodontist",
  },
  {
    title: "AYUSH",
    description:
      "Traditional systems including Ayurveda, Homeopathy and Unani medicine.",
    duration: "5–5.5 Years",
    scope: "AYUSH Practitioner",
  },
  {
    title: "Veterinary",
    description:
      "Medical care, surgery and welfare for animals and livestock.",
    duration: "5.5 Years",
    scope: "Veterinary Doctor",
  },
  {
    title: "Pharmacy",
    description:
      "Medicines, drug development, clinical research and pharmaceutical sciences.",
    duration: "4 Years",
    scope: "Pharmacist, Research",
  },
  {
    title: "Agriculture & Allied",
    description:
      "Food production, crop sciences, sustainability and agricultural innovation.",
    duration: "4 Years",
    scope: "Agricultural Scientist",
  },
];

export default function CareerPaths() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-blue-50">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="text-center mb-12">

          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Explore Careers
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-blue-900">
            Where Can BiPC Take You?
          </h2>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

          {careers.map((career, index) => (
            <button
              key={career.title}
              onClick={() => setActive(index)}
              className={`rounded-2xl p-5 transition-all text-left ${
                active === index
                  ? "bg-blue-900 text-white"
                  : "bg-white border border-gray-200"
              }`}
            >
              <h3 className="font-bold text-xl">
                {career.title}
              </h3>
            </button>
          ))}

        </div>

        <div className="mt-8 bg-white rounded-3xl p-8 shadow-lg">

          <h3 className="text-3xl font-bold text-blue-900">
            {careers[active].title}
          </h3>

          <p className="mt-6 text-gray-600 leading-relaxed">
            {careers[active].description}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <div className="bg-blue-50 rounded-2xl p-5">

              <p className="text-sm text-gray-500">
                Duration
              </p>

              <p className="font-bold text-blue-900">
                {careers[active].duration}
              </p>

            </div>

            <div className="bg-blue-50 rounded-2xl p-5">

              <p className="text-sm text-gray-500">
                Career Scope
              </p>

              <p className="font-bold text-blue-900">
                {careers[active].scope}
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}