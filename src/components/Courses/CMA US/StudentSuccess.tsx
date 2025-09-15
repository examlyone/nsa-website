"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const successStories = [
  {
    id: 1,
    avatar: "/cma-images/Ellipse.png",
    name: "Kunal Sharma",
    companyLogo: "/cma-images/dupont.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  },
  {
    id: 2,
    avatar: "/cma-images/Ellipse-1.png",
    name: "Akriti Pathak",
    companyLogo: "/cma-images/Delloite.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  },
  {
    id: 3,
    avatar: "/cma-images/Ellipse-2.png",
    name: "Vivek Oberoy",
    companyLogo: "/cma-images/KPMG-Logo 1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  },
  {
    id: 4,
    avatar: "/cma-images/Ellipse.png",
    name: "Kunal Sharma",
    companyLogo: "/cma-images/dupont.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  },
  {
    id: 5,
    avatar: "/cma-images/Ellipse-2.png",
    name: "Vivek Oberoy",
    companyLogo: "/cma-images/KPMG-Logo 1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  },
];

export default function SuccessStories() {
  return (
    <section className="relative w-full px-4 py-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          <span className="text-red-500">Success Stories</span> of Our Alumni
        </h2>
        <p className="text-gray-600 mt-2">
          Discover where determination and guidance can take you
        </p>
      </div>

      {/* Navigation Buttons */}
      <button className="swiper-button-prev absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-md">
        <BsChevronLeft className="w-5 h-5 text-gray-800" />
      </button>
      <button className="swiper-button-next absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-md">
        <BsChevronRight className="w-5 h-5 text-gray-800" />
      </button>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        loop
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="py-6"
      >
        {successStories.map((story) => (
          <SwiperSlide key={story.id} className="flex justify-center">
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4 lg:px-6 md:px-4 w-full max-w-md text-left">
              <div className="flex flex-col items-center gap-4 ">
                <Image
                  src={story.avatar}
                  alt={story.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover w-20 h-20 lg:w-28 lg:h-28 md:w-24 md:h-24"
                />
                <div className="text-center">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {story.name}
                  </h3>
                  <Image
                    src={story.companyLogo}
                    alt={`${story.name} company`}
                    width={100}
                    height={40}
                    className="mx-auto  object-contain"
                  />
                  <div className="flex justify-center gap-1 text-yellow-400 text-base">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <span key={index}>★</span>
                      ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm sm:text-base text-center">
                {story.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-6 text-center">
        <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black transition-all duration-300 transform hover:scale-105">
          View All Stories
        </button>
      </div>
    </section>
  );
}
