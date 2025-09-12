"use client";

import Image from "next/image";

export default function PartnerStats() {
  return (
    <section className="container mx-auto px-4 py-6">
      <div className="bg-white  flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full flex flex-col md:flex-row items-center gap-3 shadow rounded-lg">
          <div className="md:w-1/2 w-full flex flex-col gap-6 text-center md:text-left p-5">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:whitespace-nowrap font-bold">
              Content <span className="bg-gradient-to-r from-[#EA2229] to-[#841317] bg-clip-text text-transparent">Partner</span>
            </h2>
            <p className="text-sm sm:text-base md:text-[14px] text-gray-600">
              NorthStar partners with AICPA for expert CMA training and Becker International for world-class study materials and LMS access.we also partner with Becker International for world-class study materials and LMS access.
            </p>
            <p className="text-sm sm:text-base md:text-md lg:text-md font-semibold md:whitespace-nowrap ">
              NorthStar Academy + Becker =Success ✅
            </p>
          </div>

          <div className="md:w-1/2 w-full flex flex-col items-center">
            <Image
              src="/cma-images/contentpartner-img.png"
              alt="Certificates"
              width={300}
              height={100}
              className="object-contain w-full lg:w-[280px] md:w-[250px] mb-3"
            />
            <Image src="/cma-images/logos.png" alt="AICPA" width={250} height={100} className="object-contain w-full lg:w-[20s0px] md:w-[200px] mb-3"/>
          </div>
        </div>

        <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center ">
          <div className="bg-white shadow rounded-lg p-4 lg:p-5">
            <h3 className="text-xl sm:text-2xl font-bold text-red-500">49+</h3>
            <p className="text-sm sm:text-base">On Going Batches</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4 lg:p-5">
            <h3 className="text-xl sm:text-2xl font-bold text-red-500">35+</h3>
            <p className="text-sm sm:text-base">Countries Covered</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4 lg:p-5">
            <h3 className="text-xl sm:text-2xl font-bold text-red-500">128+</h3>
            <p className="text-sm sm:text-base">Hiring Partners</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4 lg:p-5">
            <h3 className="text-xl sm:text-2xl font-bold text-red-500">90%</h3>
            <p className="text-sm sm:text-base">Pass Percentage</p>
          </div>
        </div>

      </div>
    </section>
  );
}
