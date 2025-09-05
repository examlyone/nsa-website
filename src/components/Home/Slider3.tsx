"use client";
import React from "react";

export default function HeroSection3() {
  return (
    <section className="container mx-auto px-4 sm:px-6 md:px-14 lg:px-20 py-8 sm:py-12 lg:py-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold leading-snug">
          Your{" "}
          <span className="text-red-600">Global Finance Career</span> <br className="hidden sm:block" />
          Starts Here
        </h1>

        <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base md:text-md lg:text-xl ">
          Designed for Students and Working Professionals in India. <br className="hidden sm:block" />
          Learn from industry experts and boost your career.
        </p>

            
    <div className="flex flex-row gap-1 sm:gap-3 mt-3 md:flex-nowrap flex-wrap lg:gap-6 mb-3 md:mb-4">
      <button className="bg-[#EC2027] text-white px-3 sm:px-4 md:px-3 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-xs md:whitespace-nowrap md:text-[14px] transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105">
        Schedule a Call
      </button>
      <button className="bg-black text-white px-3 sm:px-4 md:px-3 py-2 sm:py-2.5 rounded-lg font-semibold text-xs  md:whitespace-nowrap sm:text-sm md:text-[14px] hover:bg-white hover:text-black hover:border hover:border-black transition transition-all duration-300 hover:shadow-lg  transform hover:scale-105">
        Explore Courses
      </button>
    </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center relative mt-8 md:mt-0">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px]  rounded-3xl rotate-6" />
        </div>
        <img
          src="/images/banner.png"
          alt="Student"
          className="relative z-10 max-h-[260px] sm:max-h-[320px] md:max-h-[400px] lg:max-h-[460px] object-contain p-2 sm:p-4"
        />
      </div>
    </section>
  );
}
