"use client";
import Image from "next/image";
import { Typography } from "./Typography";

export default function ContentPartnersSection() {
  return (
    <section className="container mx-auto md:mt-12 mt-8 md:px-8 px-4">
      <div className="flex flex-col overflow-hidden md:flex-row items-center md:items-stretch rounded-lg py-6 gap-10 bg-gradient-to-r from-[#FCF8F3] to-[#FDE8E8]">
        <div className=" md:w-1/2 flex justify-center md:justify-start h-full ">
          <Image
            src="/images/ContentPartner.png"
            alt="Content Partners"
            width={500}
            height={500}
            className="object-contain md: bolck lg:block hidden xl:scale-100 scale-[1.5] relative top-12 -left-24 xl:top-0 xl:left-0"
          />
        </div>

        <div className="w-full lg:w-1/2 md:w-full flex flex-col justify-center text-center md:text-left space-y-4 h-full md:px-8 md:py-5 px-4 py-3">
          <Typography
            variant="h2"
            className="text-sm sm:text-xl md:text-2xl lg:text-4xl font-semibold leading-snug"
          >
            Our Trusted <br />
            <span className="bg-gradient-to-r from-[#EA2229] to-[#841317] bg-clip-text text-transparent">
              Content Partners
            </span>
          </Typography>

          <Typography
            variant="body1"
            className="text-gray-700 text-sm sm:text-base md:text-lg mb-2 sm:mb-4"
          >
            World-class resources, officially licensed for your success.
          </Typography>

          <Typography
            variant="body2"
            className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed text-justify"
          >
            NorthStar Academy partners with global leaders like AICPA and Becker
            International to provide world-class study materials and interactive
            LMS access. With premium resources and proven tools, we help you
            master concepts, practice effectively, and succeed with confidence.
          </Typography>
        </div>
      </div>
    </section>
  );
}
