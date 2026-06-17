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
    <section className="py-16 md:py-24 bg-blue-50">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Meet Our Faculty
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-blue-900">
            The Mentors Behind Student Success
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600">
            Experienced educators dedicated to guiding students
            through every stage of their academic journey.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {faculty.map((member) => (
            <div
              key={member.image}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-xl transition"
            >

              <Image
                src={member.image}
                alt={member.name}
                width={500}
                height={500}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold text-blue-900">
                  {member.name}
                </h3>

                <p className="mt-2 text-orange-500 font-semibold">
                  {member.subject}
                </p>

                <p className="mt-2 text-gray-600">
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