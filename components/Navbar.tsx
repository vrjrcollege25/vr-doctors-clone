"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false); // desktop hover dropdown
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false); // mobile accordion

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "World of Bipc", href: "/bipc-careers" },
    { label: "About", href: "/about" },
    {
      label: "Courses",
      href: "/courses",
      children: [
        { label: "Intermediate + Neet", href: "/courses#intermediate + neet" },
        { label: "Long Term", href: "/courses#Longterm" },
        { label: "Short Term", href: "/courses#shortterm" },
      ],
    },
    { label: "Results", href: "/results" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50"
      initial={prefersReducedMotion() ? false : { y: -100 }}
      animate={prefersReducedMotion() ? false : { y: 0 }}
      transition={prefersReducedMotion() ? {} : { duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="relative">
            <Image
              src="/logo.webp"
              alt="VR Doctors Logo"
              width={50}
              height={50}
              className="rounded-lg group-hover:shadow-lg transition-shadow"
            />
          </div>
          <div>
            <h1 className="font-bold text-blue-900 text-lg">VR Doctors</h1>
            <p className="text-xs text-orange-500 font-semibold">
              An exclusive NEET academy
            </p>
          </div>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-1">
          {menuItems.map((item, i) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setCoursesOpen(true)}
                onMouseLeave={() => setCoursesOpen(false)}
              >
                <motion.a
                  href={item.href}
                  className="px-4 py-2 text-blue-900 font-medium relative group flex items-center gap-1"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item.label}
                  <motion.span
                    animate={{ rotate: coursesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs mt-0.5"
                  >
                    ▾
                  </motion.span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>

                <AnimatePresence>
                  {coursesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full mt-1 min-w-[220px] bg-white rounded-lg shadow-lg border border-gray-100 py-2 overflow-hidden"
                    >
                      {item.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-blue-900 font-medium hover:bg-orange-50 hover:text-orange-600 transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-blue-900 font-medium relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-2xl text-blue-900 relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={menuOpen ? { rotate: 90 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            ☰
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item, i) =>
              item.children ? (
                <div key={item.href}>
                  <button
                    onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                    className="w-full flex items-center justify-between px-6 py-4 text-blue-900 font-medium hover:bg-orange-50"
                  >
                    {item.label}
                    <motion.span
                      animate={{ rotate: mobileCoursesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      ▾
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {mobileCoursesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-orange-50/50 overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <a
                            key={child.href}  
                            href={child.href}
                            onClick={() => setMenuOpen(false)}
                            className="block px-10 py-3 text-sm text-blue-900 hover:bg-orange-100"
                          >
                            {child.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-4 text-blue-900 font-medium hover:bg-orange-50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {item.label}
                </motion.a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}