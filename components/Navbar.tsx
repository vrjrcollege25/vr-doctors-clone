"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">

      <div className="flex items-center justify-between px-6 py-4">

        <div className="flex items-center gap-3">
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
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#" className="hover:text-orange-500 transition">
            Home
          </a>
          <a href="#about" className="hover:text-orange-500 transition">
            About
          </a>
          <a href="#results" className="hover:text-orange-500 transition">
            Results
          </a>
          <a href="#contact" className="hover:text-orange-500 transition">
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white">

          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-3 hover:bg-gray-100"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-3 hover:bg-gray-100"
          >
            About
          </a>

          <a
            href="#results"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-3 hover:bg-gray-100"
          >
            Results
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-3 hover:bg-gray-100"
          >
            Contact
          </a>

        </div>
      )}
    </nav>
  );
}