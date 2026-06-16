import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-12 md:py-16 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Visit & Connect
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mt-4">
            Connect With VR Doctors
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Whether you're a student, parent, alumnus or visitor,
            we'd love to hear from you and welcome you to our campus.
          </p>

        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-5">

          {/* Phone */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition">

            <div className="flex items-start gap-4">

              <FaPhone className="text-2xl text-orange-500 mt-1 shrink-0" />

              <div>
                <h3 className="font-bold text-blue-900">
                  Call Us
                </h3>

                <p className="mt-1 text-gray-600 text-sm leading-relaxed">
                  +91 9256 9256 40/41/42/43
                </p>
              </div>

            </div>

          </div>

          {/* Email */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition">

            <div className="flex items-start gap-4">

              <FaEnvelope className="text-2xl text-orange-500 mt-1 shrink-0" />

              <div>
                <h3 className="font-bold text-blue-900">
                  Email Us
                </h3>

                <p className="mt-1 text-gray-600 text-sm break-words">
                  admissions@vrdoctors.in
                </p>
              </div>

            </div>

          </div>

          {/* Location */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition">

            <div className="flex items-start gap-4">

              <FaMapMarkerAlt className="text-2xl text-orange-500 mt-1 shrink-0" />

              <div className="w-full">

                <h3 className="font-bold text-blue-900">
                  Campus Location
                </h3>

                <p className="mt-1 text-gray-600 text-sm">
                  Hyderabad, Telangana
                </p>

                <a
                  href="https://maps.app.goo.gl/NWiLz9Ka59mfEv1PA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 bg-blue-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-800 transition"
                >
                  Open In Maps
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}