"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const timelineData = [
    { year: "2017", imageSrc: "/About-Images/image-1.png", heading: "Indo-Global Education Award" },
    { year: "2020", imageSrc: "/About-Images/image-2.png", heading: "Indian Education Awards" },
    { year: "2020", imageSrc: "/About-Images/image-3.png", heading: "Recognised as IMA's official training partners" },
    { year: "2020", imageSrc: "/About-Images/image-4.png", heading: "India's 1st ACCA Pan India meetup" },
    { year: "2020", imageSrc: "/About-Images/image-5.png", heading: "Online, Offline & Hybrid Mode of classes Since 2020. Impacting 15000+ Students Globally." },
    { year: "2021", imageSrc: "/About-Images/image-6.png", heading: "Launch of NSA's own LMS and own F&A Study materials" },
    { year: "2021", imageSrc: "/About-Images/image-7.png", heading: "Recognised Beckers Official Training Partner" },
    { year: "NEP-2022", imageSrc: "/About-Images/image-8.png", heading: "India's top universities meet up" },
    { year: "F&A Conclave", imageSrc: "/About-Images/image-9.png", heading: "Top School Principal Meetup" },
];

export default function MissionValues() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === timelineData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentItem = timelineData[currentIndex];

  return (
    <section className="container mx-auto py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="text-center md:text-left">
          <Image
            src={currentItem.imageSrc}
            alt={currentItem.heading}
            width={500}
            height={300}
            className="rounded-lg md:rounded-md shadow-lg object-cover lg:w-[600px] lg:h-[300px] md:w-[600px] md:h-[300px]"
            priority
          />
          <h2 className="mt-4 text-xl h-20 md:text-xl lg:text-2xl text-center font-semibold text-red-500 border border-red-300 rounded-lg p-4 bg-[#FCF3F0] bg-gradient-to-r from-[#EC2027] to-[#861216] text-transparent bg-clip-text">
            {currentItem.heading}
          </h2>
        </div>

        <div className="text-gray-700 space-y-8 lg:mt-6 md:mt-3 text-center md:text-left">

          <p className="text-base md:text-sm leading-relaxed text-justify">
            <strong>Founded in 2011 as Irfat&apos;s Classes,</strong> NorthStar Academy emerged with a singular vision—to provide the right mentorship and guidance for aspiring finance and accounting professionals.
          </p>

          <p className="text-base md:text-sm">
            Over the years, our in-depth, concept-driven methodology and global partnerships have empowered more than <strong>15,000 + students</strong>. Recognized for excellence, including the 'Best Emerging Educational Institute in Bangalore' by Indo-Global Foundation, NSA remains dedicated to shaping confident professionals.
          </p>

          <div className="relative pt-8 border border-gray-300 px-6 rounded-lg mt-10 lg:mt-30">

            {/* Timeline Progress Bar */}
            <div className="absolute top-10 left-0 right-0  bg-gray-300">
              <div
                className="h-1 bg-red-600 transition-all duration-1000"
                style={{
                  width: `${(currentIndex / (timelineData.length - 1)) * 100}%`,
                }}
              />
            </div>

            {/* Horizontal Timeline Container */}
            <div className="flex space-x-12 relative z-10 overflow-x-auto no-scrollbar">
              {timelineData.map((item, index) => (
                <div key={index} className="flex flex-col items-center min-w-[80px]">
                  
                  <div
                    className={`w-5 h-5 rounded-full transition-colors duration-1000 ${
                      index <= currentIndex ? "bg-red-600" : "bg-gray-300"
                    }`}
                  />

                  <span
                    className={`mt-2 text-sm whitespace-nowrap ${
                      index === currentIndex
                        ? "font-bold text-red-600"
                        : "text-gray-500"
                    }`}
                  >
                    {item.year}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
