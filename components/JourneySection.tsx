"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 5, suffix: "+", label: "Years of excellence" },
  { target: 5, suffix: "", label: "Successful batches" },
  { target: 500, suffix: "+", label: "Doctors produced" },
  { target: 101, suffix: "+", label: "Medical seats in 2025" },
];

function useCountUp(target: number, duration: number = 1800) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;

    const step = (now: number) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * ease));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [started, target, duration]);

  return { count, setStarted };
}

function StatCard({ target, suffix, label }: typeof stats[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const { count, setStarted } = useCountUp(target);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [setStarted]);

  return (
    <div
      ref={ref}
      className="text-center border border-gray-200 rounded-2xl p-6 bg-gray-50"
    >
      <h3 className="text-3xl md:text-5xl font-bold text-blue-900">
        {count}{count === target ? suffix : ""}
      </h3>
      <p className="mt-2 text-gray-600">{label}</p>
    </div>
  );
}

export default function JourneySection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-4">

        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Our Journey So Far
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mt-4">
            Turning Vision Into Reality Since 2019
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-gray-600">
            Since 2019, VR Doctors has been transforming aspirations into
            medical careers through disciplined preparation, residential
            learning and consistent results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        <p className="text-center text-gray-500 mt-8 text-sm">
          Including MBBS, BDS and AYUSH admissions across India.
        </p>

      </div>
    </section>
  );
}