import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ResultsPage() {
  return (
    <main>
      <Navbar />


      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center">

            <p className="text-orange-400 font-semibold tracking-widest uppercase">
              NEET Results 2025
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mt-4">
              Results That
              <span className="text-orange-400"> Create Doctors</span>
            </h1>

            <p className="max-w-3xl mx-auto mt-6 text-lg text-blue-100">
              VR Doctors continues its tradition of excellence with
              outstanding NEET results, top ranks and medical seats
              secured across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

              <a
                href="#rankers"
                className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-lg font-semibold"
              >
                View Top Rankers
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                className="border border-white hover:bg-white hover:text-blue-900 transition px-8 py-4 rounded-lg font-semibold"
              >
                Admission Enquiry
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-blue-900 text-white rounded-2xl p-8 text-center shadow-lg">
              <h2 className="text-5xl font-bold text-orange-400">
                101+
              </h2>

              <p className="mt-3">
                Medical Seats Secured
              </p>
            </div>

            <div className="bg-blue-900 text-white rounded-2xl p-8 text-center shadow-lg">
              <h2 className="text-5xl font-bold text-orange-400">
                219
              </h2>

              <p className="mt-3">
                Students Appeared
              </p>
            </div>

            <div className="bg-blue-900 text-white rounded-2xl p-8 text-center shadow-lg">
              <h2 className="text-5xl font-bold text-orange-400">
                617
              </h2>

              <p className="mt-3">
                Highest Score
              </p>
            </div>

            <div className="bg-blue-900 text-white rounded-2xl p-8 text-center shadow-lg">
              <h2 className="text-5xl font-bold text-orange-400">
                AIR 206
              </h2>

              <p className="mt-3">
                Top Rank
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Rankers Section Placeholder */}
      <section
        id="rankers"
        className="py-20 bg-gray-50"
      >

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-blue-900">
            Hall Of Fame
          </h2>

          <p className="mt-4 text-gray-600">
            Meet the students who transformed their dreams into
            medical careers.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="w-28 h-28 rounded-full bg-gray-200 mx-auto"></div>

              <h3 className="mt-6 text-xl font-bold">
                Student Name
              </h3>

              <p className="text-orange-500 font-semibold">
                AIR 206
              </p>

              <p className="mt-2 text-gray-600">
                617 Marks
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="w-28 h-28 rounded-full bg-gray-200 mx-auto"></div>

              <h3 className="mt-6 text-xl font-bold">
                Student Name
              </h3>

              <p className="text-orange-500 font-semibold">
                Top Rank
              </p>

              <p className="mt-2 text-gray-600">
                Marks
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="w-28 h-28 rounded-full bg-gray-200 mx-auto"></div>

              <h3 className="mt-6 text-xl font-bold">
                Student Name
              </h3>

              <p className="text-orange-500 font-semibold">
                Top Rank
              </p>

              <p className="mt-2 text-gray-600">
                Marks
              </p>
            </div>

          </div>

        </div>

      </section>
{/* Results Gallery */}
<section className="py-20 bg-white">

  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center mb-12">

      <p className="text-orange-500 font-semibold uppercase tracking-wider">
        Achievements
      </p>

      <h2 className="text-4xl font-bold text-blue-900 mt-2">
        Results Gallery
      </h2>

      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        A glimpse of the outstanding performance of our students in
        NEET 2025 and the medical seats they secured.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
        <div className="h-96 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-900 font-bold text-xl">
          Poster 1
        </div>

        <div className="p-5">
          <h3 className="font-bold text-lg text-blue-900">
            NEET 2025 Highlights
          </h3>

          <p className="text-gray-600 mt-2">
            Combined results poster showcasing top achievers.
          </p>
        </div>
      </div>

      <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
        <div className="h-96 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-orange-700 font-bold text-xl">
          Poster 2
        </div>

        <div className="p-5">
          <h3 className="font-bold text-lg text-blue-900">
            Medical Seats Secured
          </h3>

          <p className="text-gray-600 mt-2">
            Students who earned admissions into top colleges.
          </p>
        </div>
      </div>

      <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
        <div className="h-96 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-green-700 font-bold text-xl">
          Poster 3
        </div>

        <div className="p-5">
          <h3 className="font-bold text-lg text-blue-900">
            Top Rankers
          </h3>

          <p className="text-gray-600 mt-2">
            Celebrating students who achieved exceptional ranks.
          </p>
        </div>
      </div>

    </div>

  </div>

</section>

{/* Success Stories */}
<section className="py-20 bg-gray-50">

  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center mb-12">

      <p className="text-orange-500 font-semibold uppercase tracking-wider">
        Student Success Stories
      </p>

      <h2 className="text-4xl font-bold text-blue-900 mt-2">
        Hear It From Our Students
      </h2>

      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Real journeys, real results and real medical seats.
        Watch our students share how they achieved success.
      </p>

    </div>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Video 1 */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg">

        <div className="aspect-video bg-gray-200 flex items-center justify-center">
          YouTube Video 1
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Top Ranker Success Story
          </h3>

          <p className="mt-2 text-gray-600">
            Student shares preparation strategy and NEET journey.
          </p>
        </div>

      </div>

      {/* Video 2 */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg">

        <div className="aspect-video bg-gray-200 flex items-center justify-center">
          YouTube Video 2
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-blue-900">
            MBBS Admission Journey
          </h3>

          <p className="mt-2 text-gray-600">
            From classroom preparation to medical college admission.
          </p>
        </div>

      </div>

      {/* Video 3 */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg">

        <div className="aspect-video bg-gray-200 flex items-center justify-center">
          YouTube Video 3
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Repeater To Doctor
          </h3>

          <p className="mt-2 text-gray-600">
            How focused mentoring transformed performance.
          </p>
        </div>

      </div>

      {/* Video 4 */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg">

        <div className="aspect-video bg-gray-200 flex items-center justify-center">
          YouTube Video 4
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Parent & Student Feedback
          </h3>

          <p className="mt-2 text-gray-600">
            Real feedback from families and successful students.
          </p>
        </div>

      </div>

    </div>

  </div>

</section>

{/* Admissions CTA */}
<section className="py-24 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">

  <div className="max-w-5xl mx-auto px-6 text-center">

    <p className="text-orange-400 font-semibold uppercase tracking-widest">
      Admissions Open 2026
    </p>

    <h2 className="text-4xl md:text-6xl font-bold mt-4">
      Ready To Become A Doctor?
    </h2>

    <p className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto">
      Join a proven system that has helped hundreds of students
      secure medical seats and achieve their dreams.
      Start your journey with VR Doctors today.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

      <a
        href="tel:+919999999999"
        className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold shadow-lg"
      >
        📞 Call Now
      </a>

      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl font-semibold shadow-lg"
      >
        💬 WhatsApp Now
      </a>

    </div>

    <div className="mt-12 grid md:grid-cols-3 gap-6">

      <div className="bg-white/10 rounded-xl p-6">
        <h3 className="text-3xl font-bold text-orange-400">
          101+
        </h3>

        <p className="mt-2">
          Medical Seats
        </p>
      </div>

      <div className="bg-white/10 rounded-xl p-6">
        <h3 className="text-3xl font-bold text-orange-400">
          AIR 206
        </h3>

        <p className="mt-2">
          Top Rank
        </p>
      </div>

      <div className="bg-white/10 rounded-xl p-6">
        <h3 className="text-3xl font-bold text-orange-400">
          617
        </h3>

        <p className="mt-2">
          Highest Score
        </p>
      </div>

    </div>

  </div>

</section>

        <Footer />

    </main>
  );
}