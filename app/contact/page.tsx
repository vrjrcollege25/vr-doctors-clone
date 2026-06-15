import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-orange-400 font-semibold uppercase tracking-widest">
            Contact VR Doctors
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-4">
            Let's Talk About
            <span className="text-orange-400"> Your Future</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-blue-100">
            Whether you're planning for NEET, looking for admissions,
            or want to know more about our programs, we're here to help.
          </p>

        </div>

      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-900">
                📞 Call Us
              </h3>

              <p className="mt-4 text-gray-600">
                +91 99999 99999
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-900">
                ✉ Email
              </h3>

              <p className="mt-4 text-gray-600">
                admissions@vrdoctors.in
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-900">
                📍 Visit Us
              </h3>

              <p className="mt-4 text-gray-600">
                Hyderabad, Telangana
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Enquiry Form */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-3xl mx-auto px-6">

          <div className="text-center mb-10">

            <h2 className="text-4xl font-bold text-blue-900">
              Admission Enquiry
            </h2>

            <p className="mt-4 text-gray-600">
              Fill out the form and our team will contact you.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Student Name"
                className="w-full border rounded-lg p-4"
              />

              <input
                type="text"
                placeholder="Parent Name"
                className="w-full border rounded-lg p-4"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg p-4"
              />

              <input
                type="text"
                placeholder="Current Class"
                className="w-full border rounded-lg p-4"
              />

              <textarea
                placeholder="Message"
                rows={5}
                className="w-full border rounded-lg p-4"
              />

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-4 rounded-lg hover:bg-blue-800 transition"
              >
                Submit Enquiry
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-10">

            <h2 className="text-4xl font-bold text-blue-900">
              Find Us
            </h2>

          </div>

          <div className="h-96 rounded-2xl bg-gray-200 flex items-center justify-center text-xl text-gray-600">
            Google Maps Location
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Admissions Open 2026
          </h2>

          <p className="mt-6 text-blue-100 text-lg">
            Connect with our counsellors and start your journey
            towards a medical career.
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