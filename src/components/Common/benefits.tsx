"use client";

import { FaUserTie } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";

const benefits = [
  {
    icon: <FaUserTie className="text-2xl md:text-3xl text-gray-700" />,
    title: "Connect with Top Experts",
  },
  {
    icon: <MdGroups className="text-2xl md:text-3xl text-gray-700" />,
    title: "Community-Centric Learning",
  },
  {
    icon: <GiBookshelf className="text-2xl md:text-3xl text-gray-700" />,
    title: "Experiential Learning",
  },
];

export default function BenefitsSection() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <span className="bg-yellow-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
        NSA Benefits
        </span>

        {/* Title */}
        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">
          Get ready to change your mind about<br/>
          <span className="bg-gradient-to-r from-[#EC2027] to-[#861216] text-transparent bg-clip-text">Finance & Accounting!</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-black text-sm md:text-base">
        Experience the Northstar Academy Advantage.<br/></p>
          <p className="text-gray-600 text-sm md:text-base">Elevate Your Learning Journey with Expert Coaching and Unparalleled Support</p>

        {/* Benefits List */}
        <div className="mt-10 flex justify-start md:justify-around rounded-2xl bg-red-50 flex-row gap-4 overflow-x-auto scrollbar-hide flex-shrink-0">
  {benefits.map((item, idx) => (
    <div
      key={idx}
      className="flex items-center gap-2 bg-red-50 px-6 py-6 sm:px-2"
    >
      <span className="flex-wrap justify-start">{item.icon}</span>
      <p className=" text-[#000000] font-semibold text-xs sm:text-sm md:text-base">
  {item.title}
</p>

    </div>
  ))}
</div>
      </div>
    </section>  
  );
}
