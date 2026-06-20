"use client";

import { useState } from "react";
import Image from "next/image";

const steps = [
{
title: "LEARN",
heading: "Concept Building",
image: "/approach/learn.webp",
description:
"Strong concepts form the foundation of every successful NEET aspirant. Our faculty ensures students understand subjects deeply rather than relying on memorization.",
},
{
title: "PRACTISE",
heading: "Smart Material",
image: "/approach/practise.webp",
description:
"Carefully designed study material and assignments help students strengthen concepts and build confidence through continuous practice.",
},
{
title: "PERFORM",
heading: "Skill Tests",
image: "/approach/perform.webp",
description:
"Regular assessments simulate exam conditions and help students improve speed, accuracy and time management.",
},
{
title: "ANALYSE",
heading: "Paper Discussions",
image: "/approach/analyse.webp",
description:
"Detailed discussions after every test help students identify mistakes, improve weak areas and develop better exam strategies.",
},
{
title: "ACHIEVE",
heading: "NEET Success",
image: "/approach/achieve.webp",
description:
"The result of disciplined preparation, expert mentoring and consistent effort is success in NEET and admission into top medical colleges.",
},
];

export default function DreamersSection() {
const [activeStep, setActiveStep] = useState(0);

return ( <section id="approach" className="py-8 md:py-16 bg-gray-50">

```
  <div className="max-w-6xl mx-auto px-4 md:px-6">

    {/* Heading */}
    <div className="text-center mb-12">

      <p className="text-orange-500 font-semibold uppercase tracking-widest">
        Our Approach
      </p>

      <h2 className="text-3xl md:text-6xl font-bold text-blue-900 mt-4">
        Learn → Practise → Perform → Analyse → Achieve
      </h2>

      <p className="max-w-3xl mx-auto mt-6 text-gray-600">
        A structured methodology designed to transform
        student aspirations into medical careers.
      </p>

    </div>

    {/* Tabs */}
    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">

      {steps.map((step, index) => (
        <button
          key={step.title}
          onClick={() => setActiveStep(index)}
          className={`px-4 md:px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            activeStep === index
              ? "bg-blue-900 text-white shadow-lg"
              : "bg-white text-blue-900 border border-gray-200 hover:border-blue-900"
          }`}
        >
          {step.title}
        </button>
      ))}

    </div>

    {/* Content */}
    <div className="border border-gray-100 rounded-3xl bg-gray-50 p-4 md:p-8">

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Image */}
        <div className="relative h-[220px] md:h-[380px] rounded-3xl overflow-hidden shadow-lg">

          <Image
            src={steps[activeStep].image}
            alt={steps[activeStep].heading}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">

            <p className="uppercase tracking-widest text-sm">
              {steps[activeStep].title}
            </p>

            <h3 className="text-3xl md:text-5xl font-bold mt-4">
              {steps[activeStep].heading}
            </h3>

          </div>

        </div>

        {/* Text */}
        <div>

          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            {steps[activeStep].title}
          </p>

          <h3 className="text-3xl md:text-5xl font-bold text-blue-900 mt-3">
            {steps[activeStep].heading}
          </h3>

          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
            {steps[activeStep].description}
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
);
}