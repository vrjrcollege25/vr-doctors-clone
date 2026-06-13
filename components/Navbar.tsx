import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-sm bg-white">
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

      <div className="hidden md:flex gap-6 font-medium">
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">Results</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}