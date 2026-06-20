"use client";
import { useState, useRef } from "react";
import {
  FaUserDoctor,
  FaPaw,
  FaPills,
  FaLeaf,
  FaSeedling,
  FaFlask,
} from "react-icons/fa6";
const ecosystems = [
  {
    title: "Patient Care",
    icon: FaUserDoctor,
    careers: [
      {
        title: "MBBS",
        duration: "5.5 Years",
        entrance: "NEET",
        focus: "Diagnosis and treatment of patients",
        paths: "Doctor • Surgeon • Specialist",
      },
      {
        title: "BDS",
        duration: "5 Years",
        entrance: "NEET",
        focus: "Oral health and dentistry",
        paths: "Dentist • Orthodontist",
      },
      {
        title: "Nursing",
        duration: "4 Years",
        entrance: "State Entrance / Merit",
        focus: "Patient care and healthcare support",
        paths: "Nurse • Clinical Coordinator",
      },
    ],
  },
  {
    title: "Animal Care",
    icon: FaPaw,
    careers: [
      {
        title: "BVSc",
        duration: "5.5 Years",
        entrance: "NEET",
        focus: "Animal diagnosis and treatment",
        paths: "Veterinary Doctor • Research Officer",
      },
      {
        title: "Animal Husbandry",
        duration: "4 Years",
        entrance: "State Entrance",
        focus: "Livestock management",
        paths: "Consultant • Livestock Manager",
      },
    ],
  },
  {
    title: "Medicines & Treatment",
    icon: FaPills,
    careers: [
      {
        title: "B.Pharmacy",
        duration: "4 Years",
        entrance: "EAPCET",
        focus: "Medicines and pharmaceuticals",
        paths: "Pharmacist • Drug Research",
      },
      {
        title: "Pharm D",
        duration: "6 Years",
        entrance: "EAPCET",
        focus: "Clinical pharmacy",
        paths: "Clinical Pharmacist",
      },
    ],
  },
  {
    title: "Traditional Medicine",
    icon: FaLeaf,
    careers: [
      {
        title: "BAMS",
        duration: "5.5 Years",
        entrance: "NEET",
        focus: "Ayurvedic medicine",
        paths: "Ayurvedic Practitioner",
      },
      {
        title: "BHMS",
        duration: "5.5 Years",
        entrance: "NEET",
        focus: "Homeopathy",
        paths: "Homeopathic Doctor",
      },
    ],
  },
  {
    title: "Food & Agriculture",
    icon: FaSeedling,
    careers: [
      {
        title: "B.Sc Agriculture",
        duration: "4 Years",
        entrance: "EAPCET",
        focus: "Crop sciences and agriculture",
        paths: "Agriculture Officer • Scientist",
      },
    ],
  },
  {
    title: "Research & Life Sciences",
    icon: FaFlask,
    careers: [
      {
        title: "Biotechnology",
        duration: "4 Years",
        entrance: "Merit / Entrance",
        focus: "Biological research",
        paths: "Research Scientist • Biotech Professional",
      },
      {
        title: "Microbiology",
        duration: "3 Years",
        entrance: "Merit",
        focus: "Microorganisms and disease",
        paths: "Microbiologist",
      },
    ],
  },
];
export default function HealthcareEcosystem() {
  const [activeEcosystem, setActiveEcosystem] = useState(0);
  const [activeCareer, setActiveCareer] = useState(0);

  const careersRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const scrollOnMobile = (ref: { current: HTMLDivElement | null }) => {
    if (window.innerWidth < 768) {
      setTimeout(() => {
        ref.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
    }
  };

  const selectedEcosystem = ecosystems[activeEcosystem];
  const selectedCareer =
    selectedEcosystem.careers[activeCareer];
  return (
    <section className="py-12 md:py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm md:text-base">
            Healthcare Ecosystem
          </p>
          <h2 className="mt-3 md:mt-4 text-3xl md:text-5xl font-bold text-blue-900">
            Explore Careers In BiPC
          </h2>
          <p className="max-w-3xl mx-auto mt-4 md:mt-6 text-sm md:text-base text-gray-600">
            BiPC opens doors to diverse healthcare and life sciences careers beyond just medicine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
          {/* L1 - Ecosystems Sidebar */}
          <div className="bg-white rounded-2xl p-4 shadow-md">
            <h3 className="font-bold text-blue-900 mb-3 text-sm">
              Field of Study
            </h3>
            <div className="space-y-2">
              {ecosystems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.title}
                    onClick={() => {
                      setActiveEcosystem(index);
                      setActiveCareer(0);
                      scrollOnMobile(careersRef);
                    }}
                    className={`w-full flex items-center gap-2.5 p-3 rounded-lg transition text-sm ${
                      activeEcosystem === index
                        ? "bg-blue-900 text-white"
                        : "bg-blue-50 text-blue-900 hover:bg-blue-100"
                    }`}
                  >
                    <Icon className="flex-shrink-0" />
                    <span className="font-medium truncate">{item.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* L2 + L3 - Careers and Details */}
          <div className="space-y-5">
            {/* Careers */}
            <div
              ref={careersRef}
              className="scroll-mt-32 bg-white rounded-2xl p-4 shadow-md"
            >
              <h3 className="font-bold text-blue-900 mb-3 text-sm">
                Career Options
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {selectedEcosystem.careers.map((career, index) => (
                  <button
                    key={career.title}
                    onClick={() => {
                      setActiveCareer(index);
                      scrollOnMobile(detailsRef);
                    }}
                    className={`p-3 rounded-lg transition text-xs md:text-sm font-medium ${
                      activeCareer === index
                        ? "bg-orange-500 text-white"
                        : "bg-blue-50 text-blue-900 hover:bg-blue-100"
                    }`}
                    title={career.title}
                  >
                    {career.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div
              ref={detailsRef}
              className="bg-white rounded-2xl p-5 md:p-6 shadow-md scroll-mt-24"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
                {selectedCareer.title}
              </h3>

              <div className="grid sm:grid-cols-2 gap-3 mt-5">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-xs text-gray-600 font-semibold mb-1">
                    Duration
                  </p>
                  <p className="font-bold text-blue-900 text-sm">
                    {selectedCareer.duration}
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-xs text-gray-600 font-semibold mb-1">
                    Entrance Exam
                  </p>
                  <p className="font-bold text-blue-900 text-sm">
                    {selectedCareer.entrance}
                  </p>
                </div>
              </div>

              <div className="mt-3 bg-orange-50 rounded-lg p-4 border border-orange-200">
                <p className="text-xs text-gray-600 font-semibold mb-1">
                  Focus Area
                </p>
                <p className="font-bold text-blue-900 text-sm">
                  {selectedCareer.focus}
                </p>
              </div>

              <div className="mt-3 bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-xs text-gray-600 font-semibold mb-1">
                  Career Paths
                </p>
                <p className="font-bold text-blue-900 text-sm">
                  {selectedCareer.paths}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}