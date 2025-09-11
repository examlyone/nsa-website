import React from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const data = [
    { number: '6000+', text: 'MCQs' },
    { number: '95%', text: 'Pass Rate' },
    { number: '10,000+', text: 'Student Enroll' }
  ];
  return (
    <section className='container mx-auto py-10  md:px-12'>
        <div className='grid grid-col-1 md:grid-cols-2 gap-2'>
      <div className="flex flex-col gap-2  items-start lg:mt-7">
        <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-2 leading-snug lg:mb-7 md:mb-3">
        Ace Your Exams with <br/>NorthStar Academy's<br/>
            <span className="bg-gradient-to-r from-[#EC2017] to-[#861216] bg-clip-text text-transparent">
            Exam Preparation Platform
            </span>{' '}
            
        </h1>
        <p className="mb-6 md:mb-0 text-base md:text-sm md:pr-15 lg:text-lg text-justify whitespace-wrap lg:mb-5 md:mb-4 lg:pr-20">NorthStar Academy offers an all-in-one platform for <span className="font-semibold">CPA, CMA, CFA, ACCA, EA,</span>and more—designed for<br/> exam success.</p>
        <button className="w-[200px]  lg:w-[250px] w-[120px] h-[45px] bg-[#EC2027] text-white px-3 sm:px-4 md:px-2 sm:py-2 md:py-2 rounded-lg font-semibold text-xs sm:text-xs  md:text-[14px] transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105">
        Start Learning
      </button>
      </div>
      <div className="flex justify-center md:justify-end">
      <Image 
      src="/NsaExam-img/hero-section-img.png" alt="" 
      width={500}
      height={500}
      className='object-contain w-full lg:h-[400px]  max-w-[250px] md:max-w-[380px] lg:max-w-[620px]'
      />
      </div>
    </div>
    <div className="w-full mx-auto flex justify-around gap-4 bg-gradient-to-r from-[#FCF8F3] to-[#FDE8E8] rounded-md py-4 px-4">
      {data.map((item,index)=>(
        <div key={index} className="flex flex-col items-center  whitespace-nowrap">
          <p className="text-xl lg:text-3xl md:text-2xl font-bold">{item.number}</p>
          <p className="text-sm text-gray-500">{item.text}</p>
        </div>
      ))}
    </div>
    </section>
  )
}

