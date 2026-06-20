import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function CampusInfo() {
  return (
    <section className="py-16 md:py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">

          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Visit Our Campus
          </p>
          

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-blue-900">
            Connect With VR Doctors
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Visit our campus, speak with our admissions team,
            and experience the learning environment firsthand.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}

          <div className="space-y-5">

            {/* Phone */}

            <div className="bg-blue-50 rounded-2xl p-6">

              <div className="flex items-center gap-4 mb-4">

                <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="font-bold text-blue-900">
                    Admissions Helpline
                  </h3>

                  <p className="text-sm text-gray-600">
                    Speak directly with our admissions team
                  </p>
                </div>

              </div>

              <div className="grid grid-cols-2 gap-3">

                <a
                  href="tel:+919256925640"
                  className="bg-white rounded-xl p-3 text-center font-semibold text-blue-900 hover:shadow-md transition"
                >
                  9256925640
                </a>

                <a
                  href="tel:+919256925641"
                  className="bg-white rounded-xl p-3 text-center font-semibold text-blue-900 hover:shadow-md transition"
                >
                  9256925641
                </a>

                <a
                  href="tel:+919256925642"
                  className="bg-white rounded-xl p-3 text-center font-semibold text-blue-900 hover:shadow-md transition"
                >
                  9256925642
                </a>

                <a
                  href="tel:+919256925643"
                  className="bg-white rounded-xl p-3 text-center font-semibold text-blue-900 hover:shadow-md transition"
                >
                  9256925643
                </a>

              </div>

            </div>

            {/* WhatsApp */}

            <div className="bg-green-50 rounded-2xl p-6">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center">
                  <FaWhatsapp />
                </div>

                <div>
                  <h3 className="font-bold text-green-700">
                    WhatsApp Admissions
                  </h3>

                  <p className="text-sm text-gray-600">
                    Get quick answers from our team
                  </p>
                </div>

              </div>

              <a
                href="https://wa.me/15559412484?text=Hi"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block bg-white text-center rounded-xl p-4 font-semibold text-green-700 hover:shadow-md transition"
              >
                Start WhatsApp Chat
              </a>

            </div>

            {/* Email */}

            <div className="bg-blue-50 rounded-2xl p-6">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-bold text-blue-900">
                    Email
                  </h3>

                  <a
                    href="mailto:admissions@vrdoctors.in"
                    className="text-gray-600 hover:text-blue-900"
                  >
                    admissions@vrdoctors.in
                  </a>
                </div>

              </div>

            </div>

            {/* Location */}

            <div className="bg-orange-50 rounded-2xl p-6">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-bold text-orange-600">
                    Campus Location
                  </h3>

                  <p className="text-gray-600">
                    Hyderabad, Telangana
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* MAP */}

          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7610.530788602768!2d78.36287829999999!3d17.4948401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb937ee93c897b%3A0x8e7c4b7dc00d672a!2sVR%20Doctors%20Academy!5e0!3m2!1sen!2sin!4v1781867913509!5m2!1sen!2sin"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />

          </div>

        </div>

      </div>

    </section>
  );
}