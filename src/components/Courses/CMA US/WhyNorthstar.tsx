"use client";

import Image from "next/image";

const reasons = [
  {
    title: "F&A Basic Classes",
    description: "Beginner-friendly Finance & Accounting classes for newcomers.",
    icon: "/cma-images/Why NSA - Images - 6.svg",
  },
  {
    title: "Official & Training Partner",
    description: "Top 1% CPA, CMA, ACCA instructors for your finance success.",
    icon: "/cma-images/Why NSA - Images - 5.svg",
  },
  {
    title: "Comprehensive Training",
    description: "Comprehensive training for success in finance and accounting.",
    icon: "/cma-images/Why NSA - Images - 2.svg",
  },
  {
    title: "90% Pass Percentage",
    description: "90% pass rate with top mentors and international study materials.",
    icon: "/cma-images/Why NSA - Images - 1.svg",
  },
  {
    title: "100% Syllabus Coverage",
    description: "Complete syllabus coverage and expert support for exam success.",
    icon: "/cma-images/Why NSA - Images - 4.svg",
  },
  {
    title: "End-To-End Support",
    description: "360-degree support from classes to certification and placement.",
    icon: "/cma-images/Why NSA - Images - 3.svg",
  },
];

export default function WhyNorthStar() {
  return (
    <section className="container mx-auto px-4 sm:px-6 md:px-2 py-12">
      <div className="flex flex-col md:flex-row md:gap-10 gap-8 items-start">
      <div className="md:w-1/2 md:sticky md:top-24">
  <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
    Why <span className="bg-gradient-to-r from-[#EC2017] to-[#861216] bg-clip-text text-transparent">NorthStar</span><br /> is Students No.1 Choice?
  </h2>
  <p className="mt-4 text-gray-600 text-sm md:text-xs lg:text-base lg:pr-20 md:pr-10">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </p>

  <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-3">
    <div className="flex items-center">
      <Image
        src="/cma-images/image 141.png"
        alt="Google Rating"
        width={162}
        height={162}
        className="w-[100px] sm:w-[122px] md:w-[122px] lg:w-[162px] h-auto object-contain"
      />
    </div>

    <div className="flex items-center">
      <Image
        src="/cma-images/image 142.png"
        alt="NorthStar Rating"
        width={162}
        height={162}
        className="w-[100px] sm:w-[122px] md:w-[122px] lg:w-[162px] h-auto object-contain"
      />
    </div>
  </div>
</div>


        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
  {reasons.map((reason, index) => (
    <div
      key={index}
      className="flex flex-col border border-gray-300 rounded-lg p-4 md:p-2 bg-white shadow hover:shadow-lg transition"
    >
      <div className="flex items-center justify-between w-full mb-2">
        <h3 className="font-semibold text-xs md:text-sm lg:text-lg flex-1 text-center lg:p-4 sm:text-left">
          {reason.title}
        </h3>
        <Image
          src={reason.icon}
          alt={reason.title}
          width={80}
          height={80}
          className="object-contain w-12 h-12 md:w-14 md:h-14 lg:w-20 lg:h-20"
        />
      </div>
      <p className="text-gray-600 text-xs md:text-[12px] lg:text-[16px] p-2 text-center sm:text-left">
        {reason.description}
      </p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
