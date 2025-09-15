
"use client";
import React, { useEffect, useState } from 'react';

export default function CmaFooter() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className={`fixed bottom-0 left-0 w-full bg-white shadow-lg transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-8xl bg-[#FCF3F0] mx-auto flex flex-col md:flex-row justify-between items-center lg:py-4 md:py-2 py-2 px-4 md:px-0">
        <div>
          <h1 className='text-md lg:text-2xl md:text-xl font-bold lg:px-18 md:px-10 px-5'>
            Start your{' '}
            <span className="bg-gradient-to-r from-[#EC2027] to-[#861216] bg-clip-text text-transparent">
              CMA
            </span>{' '}
            journey Today
          </h1>
        </div>
        <div className="flex flex-row gap-4 mt-4 md:mt-0 lg:px-5 md:px-5 px-4 ">
          <button className="bg-[#EC2027] p-2 text-sm hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105">
            Enroll Now
          </button>
          <button className="bg-black text-white p-2 text-sm hover:bg-white hover:text-black hover:border border-[#EC2027] px-6 py-2 rounded-md font-medium transition-all duration-300 transform hover:scale-105">
            Download Perspective
          </button>
        </div>
      </div>
    </section>
  );
}
