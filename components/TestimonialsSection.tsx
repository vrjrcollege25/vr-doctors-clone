"use client";

import { useEffect, useRef, useCallback } from "react";

const testimonials = [
  {
    name: "Anumalla Akshitha",
    college: "Osmania University",
    score: "Score: 617 · AIR 206",
    quote:
      "I am very proud to be a part of VR Doctors Academy — homely food, hygienic rooms and excellent faculty helped me fulfill my dream.",
    avatar: "👩",
  },
  {
    name: "Annangi Akhila",
    college: "Osmania University",
    score: "MBBS Seat Secured",
    quote:
      "They provide great infrastructure with well experienced faculties and stress free education. Thank you VR.",
    avatar: "👩",
  },
  {
    name: "Bisaoi Vamshi Krishna",
    college: "Osmania University",
    score: "MBBS Seat Secured",
    quote:
      "The academics here are excellent with standardized and supportive lecturers. I want to thank the entire VR team.",
    avatar: "👨",
  },
  {
    name: "Dodla Vaishnavi",
    college: "Govt. College, Siddipet",
    score: "MBBS Seat Secured",
    quote:
      "Well experienced faculties, healthy food and stress free education. VR Doctors changed my life.",
    avatar: "👩",
  },
  {
    name: "Ravi Kumar",
    college: "Gandhi Medical College",
    score: "MBBS Seat Secured",
    quote:
      "The mentoring and study culture at VR Doctors is unmatched. I got my seat because of the discipline I built here.",
    avatar: "👨",
  },
];

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const cardWidthRef = useRef(0);
  const GAP = 12;

  const isMobile = () =>
    typeof window !== "undefined" && window.innerWidth <= 640;

  const visibleCount = () => (isMobile() ? 1 : 2);

  const build = useCallback(() => {
    if (!trackRef.current || !containerRef.current) return;
    const v = visibleCount();
    const containerWidth = containerRef.current.offsetWidth;
    cardWidthRef.current =
      v === 1 ? containerWidth : (containerWidth - GAP) / 2;
    const step = cardWidthRef.current + GAP;

    const extended = [
      ...testimonials,
      ...testimonials.slice(0, v + 1),
    ];

    trackRef.current.innerHTML = extended
      .map(
        (t) => `
        <div style="
          background: #1e3a5f;
          border-radius: 16px;
          padding: 1.25rem;
          width: ${cardWidthRef.current}px;
          flex-shrink: 0;
          box-sizing: border-box;
        ">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:0.75rem;">
            <div style="
              width:40px;height:40px;border-radius:50%;
              background:#2d5a8e;border:2px solid #f97316;
              display:flex;align-items:center;justify-content:center;
              font-size:15px;flex-shrink:0;
            ">${t.avatar}</div>
            <div>
              <div style="color:#f97316;font-size:13px;font-weight:600;">${t.name}</div>
              <div style="color:#93b4d4;font-size:11px;margin-top:2px;">${t.college}</div>
              <div style="
                background:#f97316;color:#fff;font-size:10px;
                font-weight:600;padding:2px 7px;border-radius:20px;
                margin-top:4px;display:inline-block;
              ">${t.score}</div>
            </div>
          </div>
          <div style="color:#f97316;font-size:18px;font-weight:700;margin-bottom:4px;">"</div>
          <div style="color:#cbd5e1;font-size:12px;line-height:1.6;">${t.quote}</div>
        </div>
      `
      )
      .join("");

    trackRef.current.style.transition = "none";
    trackRef.current.style.transform = `translateX(-${
      currentRef.current * step
    }px)`;
  }, []);

  const next = useCallback(() => {
    if (!trackRef.current) return;
    const step = cardWidthRef.current + GAP;
    currentRef.current =
      (currentRef.current + 1) % testimonials.length;

    trackRef.current.style.transition =
      "transform 0.6s cubic-bezier(0.4,0,0.2,1)";
    trackRef.current.style.transform = `translateX(-${
      currentRef.current * step
    }px)`;

    if (currentRef.current === 0) {
      setTimeout(() => {
        if (!trackRef.current) return;
        trackRef.current.style.transition = "none";
        trackRef.current.style.transform = "translateX(0)";
      }, 650);
    }
  }, []);

  const startTimer = useCallback(() => {
    timerRef.current = setInterval(next, 5000);
  }, [next]);

  const stopTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    build();
    startTimer();
    window.addEventListener("resize", build);
    return () => {
      stopTimer();
      window.removeEventListener("resize", build);
    };
  }, [build, startTimer, stopTimer]);

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-8 items-center">

          {/* Left — Fixed */}
          <div>
            <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm">
              Testimonials
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-3 leading-tight">
              What our students have to say
            </h2>

            <div className="w-12 h-1 bg-orange-500 rounded-full mt-4" />

            <a
              href="/results"
              className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-xl font-semibold text-sm"
            >
              View All Results →
            </a>
          </div>

          {/* Right — Scrolling Cards */}
          <div
            ref={containerRef}
            className="overflow-hidden relative h-[210px]"
          >
            <div
              ref={trackRef}
              className="flex absolute top-0 left-0"
              style={{ gap: `${GAP}px` }}
              onMouseEnter={stopTimer}
              onMouseLeave={startTimer}
            />
          </div>

        </div>

      </div>
    </section>
  );
}