import React from 'react';

export default function Introduction() {
  return (
    <section
      className="container relative bg-cover bg-center rounded-lg px-6 md:px-12 sm:px-6 xs:px-2 md:mt-12 sm:mt-8 xs:mt-8"
      style={{ backgroundImage: "url('/images/bg-intro.png')" }}
    >

      <div className=" w-full relative flex flex-col md:flex-row items-center">
      <div className="md:w-3/4 flex flex-col justify-center md:mb-6 mt-4 space-y-5">
  <p className="text-sm md:text-sm lg:text-lg text-[#FFFFFF] text-justify font-roboto">
    At NorthStar Academy, we know that upskilling is the key to unlocking new career opportunities and personal growth. As a finance coach and founder, I am dedicated to helping you achieve these prestigious certifications. Let us be your guiding star on the path to success.
  </p>

  <div className="flex justify-center">
  <div className="space-y-2 text-center px-12">
  <div className="flex flex-col md:flex-row justify-center items-end gap-8">
    <div className="flex flex-col">
      <h3 className="text-[#FFD45D] font-semibold text-lg md:text-xl">M.Irfat</h3>
      <p className="text-sm md:text-base sm:text-xs xs:text-xs text-white">India's leading expert</p>
      <span className="text-sm md:text-base font-normal  whitespace-nowrap text-[#FFD45D]">CA - CMA USA - CPA - CIMA UK</span>
    </div>

    <div className="flex flex-col mx-auto whitespace-nowrap">
      <p className="text-sm md:text-base font-semibold text-[#FFD45D]">Founder & Director</p>
      <p className="text-sm md:text-sm font-semibold text-white">NorthStar Academy</p>
    </div>
  </div>
</div>

  </div>
</div>
        <div className="md:w-1/2 flex justify-center md:justify-end md:-mt-10 lg:-mt-12">
          <img
            src="/images/hero-img.png"
            alt="M.Irfat"
            className="w-45 h-65 md:h-65 md:w-65 lg:w-68 lg:h-83 rounded-lg object-top"
          />
        </div>
      </div>
    </section>
  );
}
