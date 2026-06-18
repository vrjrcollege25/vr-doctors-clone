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
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Healthcare Ecosystem
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-blue-900">
            Explore The World Of BiPC
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr] gap-6">
          {/* L1 */}
          <div className="bg-white rounded-3xl p-4 shadow-lg">
            <h3 className="font-bold text-blue-900 mb-4">
              Ecosystems
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
                    className={`w-full flex items-center gap-3 p-4 rounded-xl transition ${
                      activeEcosystem === index
                        ? "bg-blue-900 text-white"
                        : "bg-blue-50 text-blue-900"
                    }`}
                  >
                    <Icon />
                    {item.title}
                  </button>
                );
              })}
            </div>
          </div>
          {/* L2 */}
          <div
            ref={careersRef}
             className="scroll-mt-32 bg-white rounded-3xl p-4 shadow-lg"          >
            <h3 className="font-bold text-blue-900 mb-4">
              Careers
            </h3>
            <div className="space-y-2">
              {selectedEcosystem.careers.map(
                (career, index) => (
                  <button
                    key={career.title}
                    onClick={() => {
                      setActiveCareer(index);

                      scrollOnMobile(detailsRef);
                    }}
                    className={`w-full text-left p-4 rounded-xl transition ${
                      activeCareer === index
                        ? "bg-orange-500 text-white"
                        : "bg-blue-50 text-blue-900"
                    }`}
                  >
                    {career.title}
                  </button>
                )
              )}
            </div>
          </div>
          {/* L3 */}
          <div
            ref={detailsRef}
            className="bg-white rounded-3xl p-6 shadow-lg"
          >
            <h3 className="text-3xl font-bold text-blue-900">
              {selectedCareer.title}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">
                  Duration
                </p>
                <p className="font-bold">
                  {selectedCareer.duration}
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">
                  Entrance
                </p>
                <p className="font-bold">
                  {selectedCareer.entrance}
                </p>
              </div>
            </div>
            <div className="mt-4 bg-blue-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Focus
              </p>
              <p className="font-bold text-blue-900">
                {selectedCareer.focus}
              </p>
            </div>
            <div className="mt-4 bg-blue-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Career Paths
              </p>
              <p className="font-bold text-blue-900">
                {selectedCareer.paths}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}