import Image from "next/image";

const faculty = [
  {
    name: "Faculty Name",
    subject: "Biology",
    experience: "12+ Years Experience",
    image: "/faculty/faculty-1.webp",
  },
  {
    name: "Faculty Name",
    subject: "Physics",
    experience: "10+ Years Experience",
    image: "/faculty/faculty-2.webp",
  },
  {
    name: "Faculty Name",
    subject: "Chemistry",
    experience: "15+ Years Experience",
    image: "/faculty/faculty-3.webp",
  },
  {
    name: "Faculty Name",
    subject: "Botany",
    experience: "8+ Years Experience",
    image: "/faculty/faculty-4.webp",
  },
  {
    name: "Faculty Name",
    subject: "Zoology",
    experience: "9+ Years Experience",
    image: "/faculty/faculty-5.webp",
  },
  {
    name: "Faculty Name",
    subject: "Academic Mentor",
    experience: "10+ Years Experience",
    image: "/faculty/faculty-6.webp",
  },
];

export default function FacultySection() {
  return (
    <section className="py-12 md:py-16 bg-blue-50">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="text-center mb-10">

          <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm md:text-base">
            Meet Our Faculty
          </p>

          <h2 className="mt-3 md:mt-4 text-3xl md:text-5xl font-bold text-blue-900">
            Expert Educators, Personal Mentors
          </h2>

          <p className="max-w-3xl mx-auto mt-4 md:mt-6 text-sm md:text-base text-gray-600">
            Experienced educators dedicated to guiding students through every stage of their academic journey.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">

          {faculty.map((member) => (
            <div
              key={member.image}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >

              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">

                <h3 className="text-lg font-bold text-blue-900">
                  {member.name}
                </h3>

                <p className="mt-1 text-sm font-semibold text-orange-500">
                  {member.subject}
                </p>

                <p className="mt-1 text-xs md:text-sm text-gray-600">
                  {member.experience}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}