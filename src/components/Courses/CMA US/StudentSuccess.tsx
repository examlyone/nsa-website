"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
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
    <section className="container overflow-hidden  mx-auto px-4 py-12 text-center relative">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        <span className="text-red-500">Success Stories</span> of Our Alumni
      </h2>
      <p className="text-gray-600 mb-8">
        Discover where determination and guidance can take you
      </p>

      <button className="swiper-button-prev absolute top-1/2 -left-12 transform -translate-y-1/2 p-3 rounded-full shadow-lg bg-white z-10">
        <BsChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <button className="swiper-button-next absolute top-1/2 -right-12 transform -translate-y-1/2 p-3 rounded-full shadow-lg bg-white z-10">
        <BsChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        // pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        style={{ padding: "0 20px" }}
      >
        {successStories.map((story) => (
          <SwiperSlide key={story.id}>
            <div className="bg-white p-3 lg:p-5 md:p-4 border border-gray-200 rounded-lg shadow-lg max-w-[350px] mx-auto text-left">
              <div className="flex items-center gap-6 mb-4">
                <Image
                  src={story.avatar}
                  alt={story.name}
                  width={120}
                  height={120}
                  className="rounded-full mb-6"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg text-gray-800">{story.name}</h3>
                  <Image
                    src={story.companyLogo}
                    alt="Company Logo"
                    width={100}
                    height={40}
                    className="mb-2"
                  />
                  <div className="flex gap-1 text-yellow-400 text-lg">
                    {Array(5).fill(0).map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm lg:text-base">{story.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-8 text-center">
        <button className="bg-black text-white px-6 py-2 rounded hover:bg-white hover:text-black hover:border hover:border-black transition-all duration-300 hover:shadow-lg transform hover:scale-105">
          View All Stories
        </button>
      </div>
    </section>
  );
}
