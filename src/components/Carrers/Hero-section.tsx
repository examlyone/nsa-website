"use client";

import Image from "next/image";
import React from "react";

export default function CarrerHero() {
  return (
    <section className="relative container mx-auto py-6  md:px-8 lg:px-12 text-center">
      
      <div className="relative w-full">
        <Image
          src="/carrer/Rectangle 938.png"
          alt="Career Background"
          width={1920}
          height={600}
          className="w-full h-auto rounded-lg object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-white">
            <p className="text-sm sm:text-base md:text-lg text-gray-100 max-w-xl lg:mb-6 md:mb-4 text-white">Find the work that makes you happy</p>
          <h1 className="text-base sm:text-3xl md:text-4xl font-bold lg:mb-4 md:mb-2 text-red-600">
            More than a job
          </h1>

          <p className="text-xs  md:text-sm lg:text-md text-gray-100 max-w-xl lg:mb-6 text-white">
            Find the work that makes you happy. The right job and career opportunity where the team works as family.
          </p>

          {/* Logos / Icons */}
          <div className="flex justify-center gap-6 flex-wrap">
            <Image
              src="/carrer/Frame 110.svg"
              alt="Frame 110"
              width={162}
              height={162}
              className="w-[50px] sm:w-[100px] md:w-[120px] lg:w-[162px] h-auto object-contain"
            />

            <Image
              src="/carrer/Ambition Box.svg"
              alt="Ambition Box"
              width={162}
              height={162}
              className="w-[50px] sm:w-[100px] md:w-[120px] lg:w-[162px] h-auto object-contain"
            />

            <Image
              src="/carrer/Frame 114.svg"
              alt="Frame 114"
              width={162}
              height={162}
              className="w-[50px] sm:w-[100px] md:w-[120px] lg:w-[162px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
      
    </section>
  );
}
