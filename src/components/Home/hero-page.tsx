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
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-6 py-10 md:py-12 flex justify-center items-center">
    <div className="flex flex-row items-center justify-between gap-6 px-2 sm:px-4 md:px-10 lg:px-15 py-6 md:py-10 w-full max-w-[1280px] mx-auto">
      {/* Left Content */}
      <div className="w-1/2 flex flex-col justify-center text-left">
        <Typography
          variant="h1"
          className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold mb-3 md:mb-4 leading-snug"
        >
          Get Certified in <br />
          CMA, CPA, ACCA & EA <br />
          with <span className="text-red-600">NorthStar Academy</span>
        </Typography>

       
    <div className="flex flex-row gap-1 sm:gap-3 mt-3 md:flex-nowrap flex-wrap lg:gap-6 mb-3 md:mb-4">
      <button className="bg-[#EC2027] text-white px-3 sm:px-4 md:px-3 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-xs md:whitespace-nowrap md:text-[14px] transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105">
        View Program
      </button>
      <button className="bg-black text-white px-3 sm:px-4 md:px-3 py-2 sm:py-2.5 rounded-lg font-semibold text-xs  md:whitespace-nowrap sm:text-sm md:text-[14px] hover:bg-white hover:text-black hover:border hover:border-black transition transition-all duration-300 hover:shadow-lg  transform hover:scale-105">
        Download Brochure
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
          width={500}
          className=" object-contain"
        />
      </div>
    </div>
    </section>
  );
}
