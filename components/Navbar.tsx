"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">

      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="VR Doctors Logo"
            width={60}
            height={60}
          />

          <div>
            <h1 className="font-bold text-blue-900">
              VR Doctors
            </h1>

            <p className="text-xs text-orange-500">
              NEET Academy
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium text-blue-900">

          <a href="/" className="hover:text-orange-500 transition">
            Home
          </a>

          <a href="/bipc-careers" className="hover:text-orange-500 transition">
            World of Bipc
          </a>


          <a href="/about" className="hover:text-orange-500 transition">
            About
          </a>

          <a href="/courses" className="hover:text-orange-500 transition">
            Courses
          </a>



          <a href="/results" className="hover:text-orange-500 transition">
            Results
          </a>

          <a href="/contact" className="hover:text-orange-500 transition">
            Contact
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-blue-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">

          <a
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-blue-900 font-medium hover:bg-gray-100"
          >
            Home
          </a>


          <a
            href="/bipc-careers"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-blue-900 font-medium hover:bg-gray-100"
          >
            World of Bipc
          </a>

          

          <a
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-blue-900 font-medium hover:bg-gray-100"
          >
            About
          </a>

          <a
            href="/results"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-blue-900 font-medium hover:bg-gray-100"
          >
            Results
          </a>

          <a
            href="/courses"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-blue-900 font-medium hover:bg-gray-100"
          >
            Courses
          </a>

          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-blue-900 font-medium hover:bg-gray-100"
          >
            Contact
          </a>

        </div>
      )}
    </nav>
  );
}