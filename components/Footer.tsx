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

        <div className="grid md:grid-cols-4 gap-8 md:gap-12">

          {/* Brand */}

          <div>
            <h3 className="text-2xl font-bold text-orange-400">
              VR Doctors
            </h3>

            <p className="mt-4 text-gray-300 leading-relaxed">
              VR Doctors Academy helps BiPC students build successful
              careers in medicine, healthcare and life sciences through
              academic excellence, discipline and mentorship.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="font-bold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                <a href="/" className="hover:text-orange-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/bipc-careers" className="hover:text-orange-400 transition">
                  World of BiPC
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-orange-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="/courses" className="hover:text-orange-400 transition">
                  Courses
                </a>
              </li>

              <li>
                <a href="/results" className="hover:text-orange-400 transition">
                  Results
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-orange-400 transition">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="font-bold text-lg mb-4">
              Contact Information
            </h3>

            <div className="space-y-4 text-gray-300">

              <div className="flex items-start gap-3">
                <FaPhone className="mt-1 text-orange-400 shrink-0" />
                <div>
                  <p>9256925640/9256925641</p>
                  <p>9256925642/9256925643</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-orange-400 shrink-0" />
                <span>
                  admissions@vrdoctors.in
                </span>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-orange-400 shrink-0" />
                <span>
                  VR Doctors Academy
                  <br />
                  Plot No 29,Mathrusree Nagar
                  <br />
                  Hafeezpet, Miyapur
                  <br />
                  Hyderabad, Telangana 500049
                </span>
              </div>

            </div>
          </div>

          {/* Social */}

          <div>
            <h3 className="font-bold text-lg mb-4">
              Connect With Us
            </h3>

            <p className="text-gray-300 mb-5">
              Follow student achievements,
              campus life and important updates.
            </p>

            <div className="flex gap-5 text-2xl">

              <a
                href="https://www.facebook.com/VR.Jr.College"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/vr_junior.college/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.youtube.com/@VR_JuniorCollege"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-blue-800 mt-12 pt-6 text-center text-gray-400 text-sm">
          © 2026 VR Doctors Academy. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}