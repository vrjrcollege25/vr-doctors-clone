import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-8 md:gap-14">

          {/* College Info */}
          <div>

            <h3 className="text-2xl font-bold text-orange-400">
              VR Doctors
            </h3>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Vision Into Reality Junior College dedicated to helping
              students achieve success in NEET, MPC and other
              competitive examinations through structured learning,
              discipline and mentorship.
            </p>

          </div>

          {/* Quick Links */}
          <div className="md:justify-self-center">

            <h3 className="font-bold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                <a
                  href="/"
                  className="hover:text-orange-400 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="hover:text-orange-400 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/results"
                  className="hover:text-orange-400 transition"
                >
                  Results
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="hover:text-orange-400 transition"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact Information */}
          <div>

            <h3 className="font-bold text-lg mb-4">
              Contact Information
            </h3>

            <div className="space-y-4 text-gray-300">

              <div className="flex items-start gap-3">
                <FaPhone className="mt-1 text-orange-400" />
                <span>
                  +91 9256 9256 40/41/42/43
                </span>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-orange-400" />
                <span>
                  admissions@vrdoctors.in
                </span>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-orange-400" />
                <span>
                  Hyderabad, Telangana
                </span>
              </div>

            </div>

          </div>

          {/* Social Media */}
          <div className="md:justify-self-center">

            <h3 className="font-bold text-lg mb-4">
              Follow Our Journey
            </h3>

            <p className="text-gray-300 mb-5 leading-relaxed">
              Stay connected with campus life,
              student achievements and updates.
            </p>

            <div className="flex gap-5 text-2xl">

              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-orange-400 transition"
              >
                <FaFacebook />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-orange-400 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-orange-400 transition"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-blue-800 mt-12 pt-6 text-center text-gray-400 text-sm">

          © 2026 VR Doctors. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}