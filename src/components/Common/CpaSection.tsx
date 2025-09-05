"use client";
import { programsData } from "@/data/CourseSectionData";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/mousewheel';

export default function CPASection() {
  return (
    <section className="container mx-auto md:mt-12 mt-8 md:px-8 px-4">
      <div className="mb-6">
          <h2 className="text-xl md:text-3xl font-bold text-center md:text-left">
          Choose your <span className=" font-bold bg-gradient-to-r from-[#EC2027] to-[#861216] text-transparent bg-clip-text">Next Big Step</span>
          </h2>
          <div  className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-3 mt-6">
          <button className="bg-[#EC2027] hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105">Finance & Accounting</button>
          <button className="bg-gray-200 hover:bg-gray-[#a9a9a9] text-black px-6 py-2 rounded-md font-medium transition-all duration-300  hover:shadow-gray-500/25 transform hover:scale-105">Investment Banking</button>
          <button className="bg-gray-200 hover:bg-red-600 text-black px-6 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105">Auditing & Taxation</button>
          <button className="bg-gray-200 hover:bg-red-600 text-black px-6 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105">Executive Programs</button>
          </div>
          </div>
      <Swiper 
      direction={"vertical"}
      slidesPerView={1}
      spaceBetween={40}
       mousewheel={true}
       modules={[Mousewheel]}
       className="h-[50vh] overflow-y-auto pr-2"
  >
        {programsData.map((program) => (
          <SwiperSlide key={program.id}>
        <div className="flex flex-row items-center pb-4 bg-gradient-to-r from-[#FCF8F3] to-[#FDE8E8] gap-4 sm:gap-6 md:gap-8 p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg w-full">
  <div className="flex-1 min-w-0 space-y-2 sm:space-y-1 md:space-y-2">
    <h2 className="text-sm sm:text-sm  md:text-lg lg:text-2xl font-bold text-red-700 leading-snug ">
      {program.title}
    </h2>

    <p className="text-gray-700 text-xs sm:text-sm xs:text-xs md:text-sm leading-relaxed text-justify whitespace-wrap">
      {program.description}
    </p>

    <div className="grid grid-cols-2 gap-x-3  text-gray-700 text-xs sm:text-sm md:text-sm">
      {program.details.map((detail, idx) => (
        <div key={idx} className="flex items-center space-x-2">
          <span className="text-red-600 text-sm sm:text-base">
            {detail.icon}
          </span>
          <span className="truncate">{detail.text}</span>
        </div>
      ))}
    </div>

    <div className="flex flex-row gap-1 sm:gap-3 mt-3 md:flex-nowrap flex-wrap lg:gap-6">
      <button className="bg-[#EC2027] text-white px-3 sm:px-4 md:px-3 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-xs md:whitespace-nowrap md:text-[14px] transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105">
        View Program
      </button>
      <button className="bg-black text-white px-3 sm:px-4 md:px-3 py-2 sm:py-2.5 rounded-lg font-semibold text-xs  md:whitespace-nowrap sm:text-sm md:text-[14px] hover:bg-white hover:text-black hover:border hover:border-black transition transition-all duration-300 hover:shadow-lg  transform hover:scale-105">
        Download Brochure
      </button>
    </div>
  </div>

  <div className="flex-1 flex justify-center">
    <Image
      src={program.image}
      alt={program.title}
      width={500}
      height={400}
      className="object-contain rounded-lg w-full h-auto max-w-[250px] sm:max-w-[300px] md:max-w-[380px] lg:max-w-[420px]"
    />
  </div>
</div>

        </SwiperSlide>
        ))}
      </Swiper>
      

    </section>
  );
}
