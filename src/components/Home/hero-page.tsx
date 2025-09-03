"use client";
import React from "react";
import { Typography } from "../Common/Typography";

export default function HeroPage() {
  const ScrollLogo = [
    { icon: "/images/image 8.png" },
    { icon: "/images/image 11.png" },
    { icon: "/images/image 13.png" },
    { icon: "/images/image 15.png" },
    { icon: "/images/Chegg.png" },
    { icon: "/images/cognizant.png" },
    { icon: "/images/deloitte.png" },
  ];

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16 flex justify-center items-center">
    <div className="flex flex-row items-center justify-between gap-6 px-2 sm:px-4 md:px-10 lg:px-15 py-6 md:py-10 w-full max-w-[1280px] mx-auto">
      {/* Left Content */}
      <div className="w-1/2 flex flex-col justify-center text-left">
        <Typography
          variant="h1"
          className="text-xl sm:text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 leading-snug"
        >
          Get Certified in <br />
          CMA, CPA, ACCA & EA <br />
          with <span className="text-red-600">NorthStar Academy</span>
        </Typography>

        <div className="flex gap-2 sm:gap-3 md:gap-4 mb-3 md:mb-4">
          <button className="bg-red-600 text-white text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-lg shadow hover:bg-red-700 transition">
            Schedule a Call
          </button>
          <button className="bg-black text-white text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-lg shadow hover:bg-gray-900 transition">
            Explore Courses
          </button>
        </div>

        <p className="text-gray-700 text-xs sm:text-sm md:text-base">
          Our <span className="font-bold text-red-500">50,000+ </span> Alumni are part of
        </p>

        <div className="overflow-hidden relative w-full bg-white rounded-lg py-2 sm:py-3 md:py-4 mt-3 md:mt-4 shadow-sm">
          <div className="flex gap-6 sm:gap-8 animate-marquee3 whitespace-nowrap mx-auto w-max">
            {ScrollLogo.map((logo, idx) => (
              <img
                key={idx}
                src={logo.icon}
                alt={`logo-${idx}`}
                className="h-5 sm:h-6 md:h-8 inline-block object-contain"
              />
            ))}
            {ScrollLogo.map((logo, idx) => (
              <img
                key={`dup-${idx}`}
                src={logo.icon}
                alt={`logo-${idx}`}
                className="h-5 sm:h-6 md:h-8 inline-block object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-1/2 relative flex justify-center items-center">
        <img
          src="/images/hero-img.png"
          alt="Hero"
          className="max-h-[220px] sm:max-h-[280px] md:max-h-[350px] lg:max-h-[420px] w-auto object-contain"
        />

        <img
          src="/images/cma.png"
          alt="CMA"
          className="absolute left-2 sm:left-4 md:left-10 top-1/3 h-6 sm:h-8 md:h-10 w-auto object-contain"
        />

        <span className="absolute right-2 sm:right-4 md:right-12 top-1/4 bg-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-md shadow text-red-600 font-bold text-[10px] sm:text-xs md:text-sm lg:text-base">
          ACCA
        </span>

        <img
          src="/images/cpa.png"
          alt="CPA"
          className="absolute right-3 sm:right-6 md:right-1 bottom-3 sm:bottom-4 md:bottom-15 h-6 sm:h-8 md:h-10 w-auto object-contain"
        />
      </div>
    </div>
    </section>
  );
}
