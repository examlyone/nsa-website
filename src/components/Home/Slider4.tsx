"use client";
import React from "react";

export default function HeroSection4() {
  const positions = [
    "rotate(0deg) translate(140px) rotate(0deg)",
    "rotate(60deg) translate(140px) rotate(-60deg)",
    "rotate(120deg) translate(140px) rotate(-120deg)",
    "rotate(180deg) translate(140px) rotate(-180deg)",
    "rotate(240deg) translate(140px) rotate(-240deg)",
    "rotate(300deg) translate(140px) rotate(-300deg)",
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-20 py-10 gap-10">
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
          Join <span className="text-red-600">2,00,000+</span> <br />
          Finance Professionals!
        </h1>

        <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
          Craft your path to Financial Brilliance with our wide range of
          Professional Courses including CPA, CMA, ACCA, EA and more!
        </p>

        <div className="mt-6">
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 transition">
            Schedule a Call
          </button>
        </div>
      </div>

      {/* Circle Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="relative w-[90vw] max-w-[400px] h-[90vw] max-h-[400px] rounded-full flex items-center justify-center">
          {/* Center Image */}
          <CircleImage />

          {/* Around the Circle */}
          {positions.map((pos, idx) => (
            <div
              key={idx}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `translate(-50%, -50%) ${pos}`,
              }}
            >
              <CircleImage />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const CircleImage = () => (
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden shadow-md bg-white">
      <img
        src="/PlacementImg/img-1.png"
        alt="profile"
        className="w-full h-full object-cover"
      />
    </div>
    {/* <span className="mt-1 px-2 py-0.5 bg-white border rounded-full text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-semibold text-red-600 shadow">
      DUPONT
    </span> */}
  </div>
);
