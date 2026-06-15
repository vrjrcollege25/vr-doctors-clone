import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-orange-400 font-semibold uppercase tracking-widest">
            About VR Doctors
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-4">
            Building Future
            <span className="text-orange-400"> Doctors</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-blue-100">
            At VR Doctors, we believe that every aspiring medical
            student deserves the right guidance, mentorship and
            environment to achieve success in NEET and beyond.
          </p>

        </div>

      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold text-blue-900">
              Our Story
            </h2>

            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Vision Into Reality Junior College was founded with a
              simple mission — to transform ambitious students into
              successful medical professionals through disciplined
              preparation, expert faculty and personalized mentoring.
            </p>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold text-blue-900">
              Why Parents Trust VR Doctors
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-orange-500">
                Experienced Faculty
              </h3>

              <p className="mt-4 text-gray-600">
                Learn from dedicated educators who understand the
                challenges of competitive medical entrance exams.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-orange-500">
                Personalized Mentoring
              </h3>

              <p className="mt-4 text-gray-600">
                Every student receives focused guidance and regular
                performance reviews to stay on track.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-orange-500">
                Proven Results
              </h3>

              <p className="mt-4 text-gray-600">
                Consistent NEET results and successful medical seat
                conversions year after year.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-blue-900 text-white rounded-2xl p-10">

              <h2 className="text-3xl font-bold">
                Our Vision
              </h2>

              <p className="mt-4 text-blue-100">
                To become one of the most trusted institutions in
                India for medical entrance preparation and academic
                excellence.
              </p>

            </div>

            <div className="bg-orange-500 text-white rounded-2xl p-10">

              <h2 className="text-3xl font-bold">
                Our Mission
              </h2>

              <p className="mt-4">
                To provide students with quality education,
                disciplined preparation and the confidence required
                to achieve their dreams.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Chairman Message */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-blue-900">
            Chairman's Message
          </h2>

          <p className="mt-8 text-lg text-gray-700 leading-relaxed">
            "Success is not achieved by chance. It is achieved through
            discipline, determination and the right guidance. At VR
            Doctors, we are committed to helping every student unlock
            their potential and transform their dreams into reality."
          </p>

          <p className="mt-6 font-bold text-orange-500">
            — Chairman, VR Doctors
          </p>

        </div>

      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-blue-900 text-white rounded-2xl p-8 text-center shadow-lg">
              <h3 className="text-4xl font-bold text-orange-400">
                101+
              </h3>
              <p className="mt-2">Medical Seats</p>
            </div>

            <div className="bg-blue-900 text-white rounded-2xl p-8 text-center shadow-lg">
              <h3 className="text-4xl font-bold text-orange-400">
                219
              </h3>
              <p className="mt-2">Students Appeared</p>
            </div>

            <div className="bg-blue-900 text-white rounded-2xl p-8 text-center shadow-lg">
              <h3 className="text-4xl font-bold text-orange-400">
                AIR 206
              </h3>
              <p className="mt-2">Top Rank</p>
            </div>

            <div className="bg-blue-900 text-white rounded-2xl p-8 text-center shadow-lg">
              <h3 className="text-4xl font-bold text-orange-400">
                617
              </h3>
              <p className="mt-2">Highest Score</p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Your Medical Journey Starts Here
          </h2>

          <p className="mt-6 text-blue-100 text-lg">
            Join hundreds of successful students who trusted VR Doctors
            to help them achieve their goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

            <a
              href="tel:+919999999999"
              className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl font-semibold"
            >
              💬 WhatsApp Now
            </a>

          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}