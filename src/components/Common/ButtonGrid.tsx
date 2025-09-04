"use client";

import { FiArrowUpRight } from "react-icons/fi";

const buttons = [
  { title: "About Us", link: "#" },
  { title: "Placement Page", link: "#" },
  { title: "Testimonial Page", link: "#" },
  { title: "Blogs Page", link: "#" },
];

export default function ButtonGrid() {
  return (
    <div className="bg-gradient-to-r from-[#FCF8F3] to-[#FDEBEA] py-12 px-2 sm:px-6 lg:px-10 relative">
      {/* Optional decorative dots */}
      <div className="absolute top-4 left-4 grid grid-cols-7 gap-1">
        {Array.from({ length: 35 }).map((_, i) => (
          <span key={i} className="block w-1 h-1 bg-white rounded-full opacity-" />
        ))}
      </div>
      <div className="absolute bottom-4 right-4 grid grid-cols-7 gap-1">
        {Array.from({ length: 35 }).map((_, i) => (
          <span key={i} className="block w-1 h-1 bg-white rounded-full opacity-" />
        ))}
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        {buttons.map((btn, index) => (
          <a
            key={index}
            href={btn.link}
            className="flex items-center justify-between border border-gray-300 rounded-full px-3 py-4 text-gray-800 font-medium hover:bg-[#EC2027] transition hover:text-white"
          >
            {btn.title}
            <FiArrowUpRight className="ml-2 text-gray-500 hover:text-white" size={25}/>
          </a>
        ))}
      </div>
    </div>
  );
}
