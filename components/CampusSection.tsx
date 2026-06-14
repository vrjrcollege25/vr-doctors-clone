import Image from "next/image";


export default function CampusSection() {
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-blue-900">
            Campus Life
          </h2>

          <p className="mt-4 text-gray-600">
            A supportive environment that helps students
            focus, grow and succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <Image
              src="/campus-1.jpg"
              alt="Classroom"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <Image
              src="/campus-2.jpg"
              alt="Results"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <Image
              src="/campus-3.jpg"
              alt="Building"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}