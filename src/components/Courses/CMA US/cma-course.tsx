import React from 'react';
import { PiDownloadSimple } from 'react-icons/pi';

export default function CMAIntro() {
  return (
    <section
      className="container relative bg-gradient-to-r from-[#FCF8F3] to-[#FDE8E8] rounded-lg px-6 md:px-12 sm:px-6 xs:px-2 md:mt-12 sm:mt-8 xs:mt-8"
    >

      <div className=" w-full relative flex flex-col md:flex-row items-center">
      <div className="md:w-3/4 flex flex-col justify-center md:mb-6 mt-4 space-y-5 ">
  <p className="text-sm  lg:text-3xl md:text-md font-bold text-[#FFFFFF] text-justify text-black font-roboto">
  Get a Head Start on your CMA USA Course! <br/>
  Download the <span className='bg-gradient-to-r from-[#EC2027] to-[#861216] bg-clip-text text-transparent'> US CMA Syllabus </span> and Dive into it.
  </p>
  <div className="flex justify-start">
      <button className="px-4 py-2 bg-red-600 text-white rounded-full text-xs sm:text-sm md:text-base shadow-md hover:bg-red-700 flex items-center gap-2">
        Download CMA Syllabus <PiDownloadSimple size={20} />
      </button>
    </div>
</div>
        <div className="md:w-1/2 flex justify-center md:justify-end md:-mt-10  lg:-mt-12">
          <img
            src="/cma-images/CmaCourse.svg"
            alt="M.Irfat"
            className="w-45 h-65 md:h-45 md:w-45 lg:w-60 lg:h-60 rounded-lg object-top"
          />
        </div>
      </div>
    </section>
  );
}
