"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const programs = [
  {
    id: 1,
    img: "/PlacementImg/instiimg-1.png",
    title: "Rajarigi College of Management and Applied Science",
    location: "Kochi",
    features: ["CPA", "Add on Model"],
  },
  {
    id: 2,
    img: "/PlacementImg/instiimg-2.png",
    title: "Rajarigi College of Management and Applied Science",
    location: "Kochi",
    features: ["CPA", "Add on Model"],
  },
  {
    id: 3,
    img: "/PlacementImg/instiimg-3.png",
    title: "Rajarigi College of Management and Applied Science",
    location: "Kochi",
    features: ["CPA", "Add on Model"],
  },
  {
    id: 4,
    img: "/PlacementImg/instiimg-1.png",
    title: "Rajarigi College of Management and Applied Science",
    location: "Kochi",
    features: ["CPA", "Add on Model"],
  },
  {
    id: 3,
    img: "/PlacementImg/instiimg-3.png",
    title: "Rajarigi College of Management and Applied Science",
    location: "Kochi",
    features: ["CPA", "Add on Model"],
  },
  {
    id: 4,
    img: "/PlacementImg/instiimg-1.png",
    title: "Rajarigi College of Management and Applied Science",
    location: "Kochi",
    features: ["CPA", "Add on Model"],
  },
];

export default function ProgramCarousel() {
  return (
    <section className="container mx-auto py-8 px-4 bg-white">
      <div className="max-w-5xl mx-auto px-4 relative">
         <div className="swiper-button-prev !text-red-600 !w-10 !h-10 !-left-8"><BsChevronLeft /></div>
        <div className="swiper-button-next !text-red-600 !w-10 !h-10 !-right-8"><BsChevronRight /></div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {programs.map((program) => (
            <SwiperSlide key={program.id}>
              <div className="border border-[#848484] rounded-lg shadow-sm bg-white flex flex-col h-full px-3 py-2">
                <div className="w-full h-40 relative rounded-lg overflow-hidden">
                  <Image
                    src={program.img}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className=" flex flex-col flex-1">
                  <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mt-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2 text-right">
                    — {program.location}
                  </p>
                  <span className="text-gray-500">
                    <hr />
                  </span>
                  <ul className="mt-3 space-y-1 text-sm text-gray-700">
                    {program.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-black"
                      >
                        <span className="text-red-600">▶</span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <button className="mt-4 bg-[#EC2027] bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105">
                    View Program Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-pagination mt-4 flex gap-1 justify-center right-1 !w-full">asdSDAS</div>
    </section>
  );
}
