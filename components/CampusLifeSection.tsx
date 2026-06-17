"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  {
    tab: "Academics",
    photos: [
      { src: "/Campus/academics-1.webp", alt: "Classroom" },
      { src: "/Campus/academics-2.webp", alt: "Study Area" },
      { src: "/Campus/academics-3.webp", alt: "Library" },
      { src: "/Campus/academics-4.webp", alt: "Laboratory" },
    ],
    features: [
      {
        title: "Expert Faculty",
        description:
          "Experienced educators who understand competitive exam preparation and guide every student personally.",
      },
      {
        title: "Study Culture",
        description:
          "Structured schedules, supervised study hours and disciplined preparation for NEET success.",
      },
    ],
  },
  {
    tab: "Infrastructure",
    photos: [
      { src: "/Campus/infra-1.webp", alt: "Hostel Building" },
      { src: "/Campus/infra-2.webp", alt: "Student Rooms" },
      { src: "/Campus/infra-3.webp", alt: "Mess Hall" },
      { src: "/Campus/infra-4.webp", alt: "Dining Area" },
    ],
    features: [
      {
        title: "Residential Campus",
        description:
          "A focused residential environment designed to minimize distractions and maximize academic growth.",
      },
      {
        title: "Nutritious Food",
        description:
          "Healthy and balanced meals prepared to support student wellbeing and long study hours.",
      },
    ],
  },
  {
    tab: "Sports & Events",
    photos: [
      { src: "/Campus/events-1.webp", alt: "Cultural Festival" },
      { src: "/Campus/events-2.webp", alt: "Sports Day" },
      { src: "/Campus/events-3.webp", alt: "Student Events" },
      { src: "/Campus/events-4.webp", alt: "Celebrations" },
    ],
    features: [
      {
        title: "Events & Festivals",
        description:
          "Celebrating important occasions and cultural events to create memorable student experiences.",
      },
      {
        title: "Safe Environment",
        description:
          "A secure and supportive campus where students can focus on their goals with confidence.",
      },
    ],
  },
];

function PhotoTile({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  

  return (
    <div
      onTouchStart={() => {}}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-800 to-blue-600 aspect-square transition-transform duration-300 ease-out hover:scale-125 hover:z-20 hover:shadow-2xl active:scale-125 active:z-20 active:shadow-2xl"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 768px) 25vw, 50vw"
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
        className={`object-cover transition-all duration-500 ease-out ${
          loaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-lg scale-110"
        }`}
      />
    </div>
  );
}

export default function CampusLifeSection() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const current = categories[active];

  const handleTabClick = (index: number) => {
    if (index === active) return;
    setVisible(false);
    setTimeout(() => {
      setActive(index);
      setVisible(true);
    }, 150);
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm">
            Student Experience
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mt-3">
            Life At VR Doctors
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            More than a coaching institute. A residential ecosystem
            designed to help students learn, grow and achieve.
          </p>
        </div>

        {/* Tabs */}
        <div role="tablist" className="flex justify-center gap-3 mb-8 flex-wrap">
          {categories.map((cat, index) => (
            <button
              key={cat.tab}
              role="tab"
              aria-selected={active === index}
              onClick={() => handleTabClick(index)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-colors duration-300 ${
                active === index
                  ? "bg-blue-900 text-white shadow-md"
                  : "bg-gray-100 text-blue-900 hover:bg-gray-200"
              }`}
            >
              {cat.tab}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {current.photos.map((photo) => (
            <PhotoTile key={photo.src} src={photo.src} alt={photo.alt} />
          ))}
        </div>

        {/* Feature Cards */}
        <div
          className={`grid md:grid-cols-2 gap-4 transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {current.features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-blue-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}