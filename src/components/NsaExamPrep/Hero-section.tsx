import React from 'react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className='container mx-auto py-10  md:px-12'>
        <div className='grid grid-col-1 md:grid-cols-2 gap-2'>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-6 md:mb-2 leading-snug lg:mb-7 md:mb-6">
        Ace Your Exams with <br/>NorthStar Academy's<br/>
            <span className="bg-gradient-to-r from-[#EC2017] to-[#861216] bg-clip-text text-transparent">
            Exam Preparation Platform
            </span>{' '}
            
        </h1>
        <p className="mb-6 md:mb-2 text-base md:text-md lg:text-lg text-justify lg:mb-5 md:mb-4">NorthStar Academy offers an all-in-one platform for <br/> <span className="font-semibold">CPA, CMA, CFA, ACCA, EA,</span>and more—designed for<br/> exam success.</p>
        <button className="w-[200px] h-[45px] bg-[#EC2027] text-white px-3 sm:px-4 md:px-3 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-xs  md:text-[14px] transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105">
        Start Learning
      </button>
      </div>
      <div className="flex justify-center md:justify-end">
      <Image 
      src="/NsaExam-img/hero-section-img.png" alt="" 
      width={500}
      height={500}
      className='object-contain w-full max-w-[250px] sm:max-w-[300px] md:max-w-[380px] lg:max-w-[620px]'
      />
      </div>
    </div>
    </section>
  )
}

