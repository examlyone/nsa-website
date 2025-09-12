"use client";

import React from "react";
import Image from "next/image";

export default function NsaEcosystem() {
  const data = [
    {
      image: "/cma-images/NSA Eco System - images - 3.png",
      describtion:
        "We connect you directly to top-tier job opportunities through an exclusive platform designed to help you advance your career after earning your CMA US journey.",
      title: "Job Opportunity Platform",
      button: "Enquire Now",
    },
    {
      image: "/cma-images/NSA Eco System - images - 2.png",
      describtion:
        "Join a vibrant community of peers, mentors, and industry experts on NorthStar Academy’s platform, fostering connections that last well beyond your CMA US journey.",
      title: "Community Platform",
      button: "Enquire Now",
    },
    {
      image: "/cma-images/NSA Eco System - images - 1.png",
      describtion:
        "We understand the challenges of preparing for high-stakes exams. That’s why we’ve developed an all-in-one Exam Preparation Platform designed to help you excel in CMA US journey.",
      title: "Exam Prep Platform",
      button: "Enquire Now",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">

      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          NorthStar Academy<br />
          <span className="bg-gradient-to-r from-[#EC2027] to-[#861216] bg-clip-text text-transparent">
            Ecosystem
          </span>
        </h1>
        <p className="text-sm font-medium sm:text-base max-w-2xl mx-auto">
          NorthStar Academy provides expert-led CMA US training with comprehensive support and high<br />
          pass rates—designed to fast-track your accounting career.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {data.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-full">

            <h2 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h2>

            <Image
              src={item.image}
              alt={item.title}
              width={350}
              height={250}
              className="object-contain w-full max-w-[300px] h-auto mb-4"
            />

            <p className="text-sm text-gray-600 flex-grow mb-6 whitespace-normal">
              {item.describtion}
            </p>

            <button className="bg-[#EC2027] transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105 text-white px-8 py-2 rounded-md text-sm">
              {item.button}
            </button>

          </div>
        ))}

      </div>
    </section>
  );
}
