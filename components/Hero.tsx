import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <Image
        src="/hero-bg.jpg"
        alt="VR Doctors Results"
        width={1600}
        height={900}
        priority
        className="w-full h-auto"
      />
    </section>
  );
}