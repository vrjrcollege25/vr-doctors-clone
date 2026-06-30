"use client";

import Image from "next/image";

const achievers = [
  {
    name: "Inamul Hussian",
    marks: "569 Marks",
    college: "Bidar institute of medical sciences",
    image: "/results/Asset 5.png",
  },
  {
    name: "Gopika Rani",
    marks: "597 Marks",
    college: "Osmania Medical College - Hyd",
    image: "/results/Asset 15.png",
  },
  {
    name: "VVNB Kireeti",
    marks: "588 Marks",
    college: "Apollo Medical College",
    image: "/results/Asset 22.png",
  },
  {
    name: "Chandra Mohan Reddy",
    marks: "582 Marks",
    college: "Kakatiya Medical College",
    image: "/results/Asset 6.png",
  },
  {
    name: "G Anshika Varshini",
    marks: "556 Marks",
    college: "Gandhi Medical College",
    image: "/results/Asset 20.png",
  },
  {
    name: "K Sai Devi Sree",
    marks: "551 Marks",
    college: "Governamanet Medical College",
    image: "/results/Asset 10.png",
  },
  {
    name: "D Sai Kumar",
    marks: "525 Marks",
    college: "Osmania Medical College",
    image: "/results/Asset 14.png",
  },
];

export default function TopAchieversCarousel() {
  const duplicatedAchievers = [...achievers, ...achievers];

  return (
    <section
      id="achievers"
      className="py-12 md:py-16 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}

        <div className="text-center mb-10">

          <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm md:text-base">
            Hall Of Fame
          </p>

          <h2 className="mt-3 md:mt-4 text-3xl md:text-5xl font-bold text-blue-900">
            Meet Our Top Achievers
          </h2>

          <p className="max-w-3xl mx-auto mt-4 md:mt-6 text-sm md:text-base text-gray-600">
            Students who transformed dedication into medical college admissions.
          </p>

        </div>

      </div>

      {/* Moving Marquee */}

      <div className="relative mt-8">

        <div className="flex marquee gap-5 w-max">

          {duplicatedAchievers.map((student, index) => (
            <div
              key={index}
              className="min-w-[280px] md:min-w-[320px] bg-gray-50 border border-gray-200 rounded-2xl p-4 md:p-5 flex items-center gap-3 hover:shadow-lg transition-all duration-300"
            >

              <Image
                src={student.image}
                alt={student.name}
                width={60}
                height={60}
                className="w-[60px] h-[60px] rounded-full object-cover flex-shrink-0"
              />

              <div className="min-w-0">

                <h3 className="text-sm md:text-base font-bold text-blue-900 truncate">
                  {student.name}
                </h3>

                <p className="text-orange-500 font-bold mt-0.5 text-xs md:text-sm">
                  {student.marks}
                </p>

                <p className="text-gray-600 text-xs mt-0.5 truncate">
                  {student.college}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}