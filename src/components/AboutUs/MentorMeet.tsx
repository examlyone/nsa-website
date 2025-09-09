"use client";
import React from "react";
import Image from "next/image";

export default function MentorMeet() {
  return (
    <section className="container py-12 px-6 md:px-12 lg:px-24">
      <div className="mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <h2 className="text-xl md:text-xl lg:text-3xl font-bold mb-6 md:mb-2 leading-snug md:whitespace-nowrap">
            India&apos;s{' '}
            <span className="bg-gradient-to-r from-[#EC2017] to-[#861216] bg-clip-text text-transparent">
              Leading US CMA
            </span>{' '}
            Instructor
          </h2>

          <p className="text-black font-medium mb-4 text-base md:text-md">
            From a driven accounting enthusiast to a leading CMA instructor, Mr.Irfat's journey is your roadmap to success
          </p>

          <p className="text-gray-600 mb-6 md:mb-2 text-base md:text-sm text-gray-400 text-justify">
            Mr. Irfat is a highly experienced and sought-after instructor for Finance and Management Accounting.
            Known as the &apos;God of Costing&apos; amongst his students, with 22+ years of experience, he has been
            felicitated with several awards and recognitions, including the &apos;Teaching Excellence Award&apos; in recent times.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 mt-8 md:mt-2">
            <div>
              <h3 className="text-xl md:text-md font-semibold">M.Irfat</h3>
              <p className="text-gray-500 text-sm md:text-base">India&apos;s leading expert</p>
            </div>

            <div>
              <h3 className="text-xl md:text-md font-semibold">25+</h3>
              <p className="text-gray-500 text-sm md:text-base">Years of experience</p>
            </div>

            <div>
              <h3 className="text-xl md:text-md font-semibold">Founder&Director</h3>
              <p className="text-gray-500 text-sm md:text-base md:whitespace-nowrap">Northstar Academy</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-64 sm:w-72 md:w-90 lg:w-96">
            <Image
              src="/About-Images/Mentors-img.png"
              alt="M.Irfat"
              width={400}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>  
      </div>
    </section>
  );
}
