"use client";
import React from "react";

export default function HeroSection4() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full h-[400px] md:px-20 py-8">
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-left">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
          Join <span className="text-red-600">2,00,000+</span> <br />
          Finance Professionals!
        </h1>

        <p className="text-gray-600 mt-3 text-sm md:text-base lg:text-lg">
          Craft your path to Financial Brilliance with our wide range of
          Professional Courses including CPA, CMA, ACCA, EA and more!
        </p>

        {/* Button */}
        <div className="mt-5">
          <button className="bg-red-600 text-white px-5 py-2 rounded-lg shadow hover:bg-red-700">
            Schedule a Call
          </button>
        </div>
      </div>

      {/* Right Content - Floating Circles */}
      <div className="w-full md:w-1/2 relative h-full flex items-center justify-center bg-gradient-to-r from-pink-50 to-white rounded-lg overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0" />

        {/* Floating Images in exact arrangement */}
        <div className="absolute top-12 left-12">
          <CircleImage />
        </div>
        <div className="absolute top-8 right-24">
          <CircleImage />
        </div>
        <div className="absolute top-32 left-1/3">
          <CircleImage />
        </div>
        <div className="absolute top-32 right-10">
          <CircleImage />
        </div>
        <div className="absolute bottom-20 left-10">
          <CircleImage />
        </div>
        <div className="absolute bottom-4 right-1/3">
          <CircleImage />
        </div>
      </div>
    </div>
  );
}

// Circle Image Component
const CircleImage = () => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-md bg-white">
      <img
        src="/images/profile.png"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
    <span className="mt-1 px-2 py-0.5 bg-white border rounded-full text-[10px] md:text-xs font-semibold text-red-600 shadow">
      DUPONT
    </span>
  </div>
);
