export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* College Info */}
          <div>
            <h3 className="text-2xl font-bold text-orange-400">
              VR Doctors
            </h3>

            <p className="mt-4 text-gray-300">
              Vision Into Reality Junior College dedicated
              to helping students achieve success in NEET,
              MPC and other competitive examinations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Results</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Contact Us
            </h3>

            <div className="space-y-2 text-gray-300">
              <p>📞 +91 9256 9256 40/41/42/43</p>
              <p>✉ admissions@vrdoctors.in</p>
              <p>📍 Hyderbad, Telangana</p>
            </div>
          </div>

        </div>

        <div className="border-t border-blue-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          © 2026 VR Doctors. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}