"use client";
import Image from "next/image";
import { Typography } from "./Typography";

export default function ContentPartnersSection() {
  return (
    <section className="container py-12 px-4 sm:px-6 md:px-12 lg:px-16  mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8">

      <div className="relative w-full h-[min(60vw,60vh)] flex justify-center items-center">
  <div className="absolute inset-0 flex justify-center items-center">
    <div className="w-[min(40vw,40vh)] h-[min(40vw,40vh)] rounded-full border border-gray-300 relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image src="/logos/wiley.png" alt="Wiley" width={60} height={60} className="w-[6%] h-auto"/>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <Image src="/logos/aicpa.png" alt="AICPA" width={60} height={60} className="w-[6%] h-auto"/>
      </div>
      <div className="absolute -top-[25%] -left-[25%]">
        <Image src="/logos/gleim.png" alt="Gleim" width={60} height={60} className="w-[6%] h-auto"/>
      </div>
      <div className="absolute -bottom-[25%] -right-[25%]">
        <Image src="/logos/becker.png" alt="Becker" width={60} height={60} className="w-[6%] h-auto"/>
      </div>
      <div className="absolute top-[10%] right-[10%]">
        <Image src="/logos/bpp.png" alt="BPP" width={60} height={60} className="w-[6%] h-auto"/>
      </div>
    </div>
  </div>
</div>


        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-4">
          <Typography variant="h2" className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
            Our Trusted <br />
            <span className="bg-gradient-to-r from-[#EA2229] to-[#841317] bg-clip-text text-transparent">
              Content Partners
            </span>
          </Typography>

          <Typography variant="body1" className="mb-4 sm:mb-6">
            World-class resources, officially licensed for your success.
          </Typography>

          <Typography variant="body2" className="text-justify text-sm sm:text-base">
            NorthStar Academy partners with global leaders like AICPA and Becker International
            to provide world-class study materials and interactive LMS access. With premium
            resources and proven tools, we help you master concepts, practice effectively, and succeed with confidence.
          </Typography>
        </div>
      </div>
    </section>
  );
}
