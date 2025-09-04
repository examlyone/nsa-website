"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroSection3 from "./Slider3";
import HeroSectionImage from "./Slider2";
import HeroPage from "./hero-page";
import HeroSection4 from "./Slider4";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function HeroSlider() {
  return (
    <section className="container mx-auto px-4 py-6">
      <div className="relative mx-auto w-full h-[400px] overflow-hidden rounded-lg shadow ">
        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          // pagination={{
          //   clickable: true,
          //   el: ".custom-pagination",
          //   dynamicBullets: true,
          // }}
          // autoplay={{ delay: 3000 }}
          loop={true}
          slidesPerView={1}
          className="w-full h-[400px] overflow-hidden rounded-lg shadow relative"
        >
          <SwiperSlide>
            <div className="flex justify-center items-center w-full h-[400px] bg-gray-200">
              <HeroPage />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center w-full h-[400px] bg-gray-200 object-fit">
              <HeroSection3 />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center w-full h-[400px] bg-gray-200">
              <HeroSectionImage />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center w-full h-[400px]  bg-gradient-to-r from-pink-50 to-white">
              <HeroSection4 />
            </div>
          </SwiperSlide>
          <button className="custom-prev absolute top-1/2 left-1 transform -translate-y-1/2 p-2 rounded-full shadow hover:bg-gray-100 z-10">
            <BsChevronLeft className="text-red-600 w-8 h-8" />
          </button>
          <button className="custom-next absolute top-1/2 right-4 transform -translate-y-1/2  p-2 rounded-full shadow hover:bg-gray-100 z-10">
            <BsChevronRight className="text-red-600 w-8 h-8" />
          </button>
        </Swiper>
        {/* <div className="custom-pagination flex justify-center gap-2 mt-2"></div> */}
      </div>
    </section>
  );
}
