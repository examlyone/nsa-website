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
          <div  className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-4 mt-6">
          <button className="bg-[#EC2027] hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105">Finance & Accounting</button>
          <button className="bg-gray-200 hover:bg-red-600 text-black px-6 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105">Investment Banking</button>
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
          <div
            key={program.id}
            className="flex flex-row flex-wrap items-center bg-gradient-to-r from-[#FCF8F3] to-[#FDE8E8]"
          >
            <div className="flex-1 min-w-[300px] space-y-4 gap-8">
              <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-[#EC2027] to-[#861216] text-transparent bg-clip-text">
                {program.title}
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {program.description}
              </p>

              <div className="grid grid-cols-2 gap-2 text-gray-700 text-sm md:text-base">
                {program.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center space-x-1">
                    <span className="text-red-600 text-lg">{detail.icon}</span>
                    <span>{detail.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-row gap-4 mt-4 flex-wrap">
                <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition sm:px-4 sm:py-2">
                  View Program
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition sm:px-4 sm:py-2">
                  Download Brochure
                </button>
              </div>
            </div>

            <div className="flex-1 min-w-[300px] flex justify-center ">
              <Image
                src={program.image}
                alt={program.title}
                width={550}
                height={500}
                className="object-contain rounded-lg w-full h-auto max-w-[550px] md:max-w-[600px]"
              />
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
      

    </section>
  );
}
