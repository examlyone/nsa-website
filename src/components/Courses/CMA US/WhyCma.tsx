"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const WhyCma = () => {
  const reasons = [
    {
      title: "Complete 2 Exams in 6-9 Months",
      description:
        "Commit for just 10-12 hrs of study time per week for the CMA exam and expect to clear it in just 6-9 months.",
      icon: "/cma-images/image 162.svg",
    },
    {
      title: "Highest Level of Certification",
      description:
        "For over 45 years, the CMA has established a globally recognized standard of excellence for finance professionals and accountants.",
      icon: "/cma-images/image 162 (1).svg",
    },
    {
      title: "Global Passport in just 180 days",
      description:
        "Get your Global Passport. Due to global recognition, a CMA USA can always find the best place to work across the world.",
      icon: "/cma-images/image 162 (2).svg",
    },
    {
      title: "Careers @Big 4s & Top MNCs",
      description:
        "Looking for a job with Big 4's/MNCs/Global accounting firms, then CMA is your ticket to achieve a highly paying job.",
      icon: "/cma-images/image 162 (3).svg",
    },
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 md:px-2 py-12">
      <h2 className="text-xl md:text-2xl lg:text-4xl font-bold lg:mb-8 mb-6 text-start">
        Why{" "}
        <span className="bg-gradient-to-r from-[#EC2017] to-[#861216] bg-clip-text text-transparent">
          CMA
        </span>{" "}
        Course?
      </h2>

      <div className="flex flex-col md:flex-row gap-15 items-start">
        <div className="md:w-1/2 flex flex-col gap-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {reasons.map((reason, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.01 }}
          className="flex flex-col items-center border border-gray-300 rounded-lg lg:p-4 md:p-3 p-4 bg-[#FCF3F0] shadow hover:shadow-lg transition"
        >
          <div className="flex flex-col sm:flex-row items-center w-full mb-4 lg:gap-6 md:gap-2 gap-4">
            <h3 className="font-semibold text-base md:text-[12px] lg:text-xl flex-1 text-center sm:text-left">
              {reason.title}
            </h3>
            <Image
              src={reason.icon}
              alt={reason.title}
              width={80}
              height={80}
              className="object-contain w-20 h-20 md:w-14 md:h-14 lg:w-20 lg:h-20"
            />
          </div>

          <p className="text-gray-600 text-sm md:text-xs lg:text-base text-center sm:text-left w-full">
            {reason.description}
          </p>
        </motion.div>
      ))}
    </div>
          <div className="w-full bg-white p-6 md:p-4 rounded shadow">
            <h2 className="text-md lg:text-2xl md:text-xl font-semibold text-gray-800 lg:mb-4 md:mb-2 mb-2 text-start">
              Register for{" "}
              <span className="bg-gradient-to-r from-[#EC2017] to-[#861216] bg-clip-text text-transparent">
                Free CMA Webinar
              </span>
            </h2>
            <p className="text-start text-gray-600 text-md md:text-sm lg:text-base lg:mb-4 md:mb-2">
              Get expert insights into CMA USA certification.
            </p>

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none bg-[#F5F5F5]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none bg-[#F5F5F5]"
              />

              <div className="grid grid-cols-2 gap-4">
                <select className="w-full px-4 py-2 border rounded-md focus:outline-none bg-[#F5F5F5]">
                  <option>Select Course</option>
                </select>
                <input
                  type="text"
                  placeholder="Ph. Number"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none bg-[#F5F5F5]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <select className="w-full px-4 py-2 border rounded-md focus:outline-none bg-[#F5F5F5]">
                  <option>Select Your Type</option>
                </select>
                <input
                  type="text"
                  placeholder="Your City Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none bg-[#F5F5F5]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
              >
                Register for free Webinar
              </button>

              <p className="text-xs text-gray-500 mb-2">
                By submitting, I authorize Northstar Academy & its representatives to contact me with
                updates and notifications via Email/SMS/WhatsApp/Call.
              </p>
            </form>
          </div>
        </div>
        <div className="md:w-1/2 sticky top-24 self-start items-center">
          <div className="w-full">
            <Image
              src="/cma-images/Youtube Video.png"
              alt="CMA USA Course"
              width={500}
              height={500}
              className="object-contain rounded lg:w-[600px] md:w-[400px] items-center"
            />
          </div>

          <div className="w-full flex flex-col items-start justify-center space-y-4">
          <h2 className="text-xl md:text-xl lg:text-3xl font-bold text-gray-800 text-center lg:mt-5 md:mt-3 lg:px-15 md:px-5">
  All About Our
  <span className="bg-gradient-to-r from-[#EC2017] to-[#861216] bg-clip-text text-transparent"> CMA US </span>Course
</h2>

            <div className="flex flex-wrap  lg:mt-2 bg-gray-100 rounded">
  {[
    "Globally Recognized Certification",
    "Study Material from Becker",
    "50,000+ Successful Alumni",
  ].map((item, index) => (
    <div
      key={index}
      className=" text-gray-800 px-4 py-2 text-sm flex-1 text-center"
    >
      {item}
    </div>
  ))}
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCma;
