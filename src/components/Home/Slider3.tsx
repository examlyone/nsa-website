"use client";
import React from "react";

export default function HeroSection3() {
  return (
    <section className="container mx-auto  md:px-20 py-12 flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/2 text-left">
        <h1 className="text-2xl md:text-3xl font-bold leading-snug">
          Your <span className="text-red-600">Global Finance Career</span> <br />
          Starts Here
        </h1>

        <p className="text-gray-600 mt-4 text-base md:text-lg">
          Designed for Students and Working Professionals in India. <br />
          Learn from industry experts and boost your career.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg shadow hover:bg-red-700">
            Schedule a Call
          </button>
          <button className="bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-900">
            Explore Courses
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center relative">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[320px] h-[320px] md:w-[400px] md:h-[400px]  rounded-3xl rotate-6" />
        </div>
        <img
          src="/images/banner.png"
          alt="Student"
          className="relative z-10 max-h-[420px] object-contain p-4"
        />
      </div>
    </section>
  );
}
