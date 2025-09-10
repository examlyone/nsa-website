import Image from 'next/image'
import React from 'react'

export default function Timeline(){
    const data=[
        {
            icon:'/About-Images/img-1.png',
            head:'Student-Centered Learning',
            para:'Flexible, supportive, and tailored guidance for every learner.'
        },
        {
            icon:'/About-Images/img-2.png',
            head:'Integrity & Trust',
            para:'Transparent processes, authentic study materials, and credible partnerships.'
        },
        {
            icon:'/About-Images/img-3.png',
            head:'Global Career Readiness',
            para:'Preparing students for international opportunities in finance & accounting.'
        },
        {
            icon:'/About-Images/img-4.png',
            head:'Innovation In Learning',
            para:'Interactive LMS, real-time classes, and self-paced study options.'
        },
        {
            icon:'/About-Images/img-5.png',
            head:'Innovation In Learning',
            para:'Interactive LMS, real-time classes, and self-paced study options.'
        },
        {
            icon:'/About-Images/img-6.png',
            head:'Innovation In Learning',
            para:'Interactive LMS, real-time classes, and self-paced study options.'
        },
        
    ]
  return (
    <section className='container mx-auto px-4 md:px-8 py-10'>
        <div className="w-full flex flex-col items:center justify-center">
        <h1 className='text-base sm:text-md md:text-2xl lg:text-3xl font-bold text-center'>
        Our Foundation for<span className='bg-gradient-to-r from-[#EC2027] to-[#861216] bg-clip-text text-transparent'> Success</span>
        </h1>
        <p className='text-sm md:text-base lg:text-md text-gray-500 text-center lg:mt-2'>
        Empowering future finance leaders with integrity, excellence, and <br/>innovation at every step of learning.
        </p>
        <div className="grid grid-row-1 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-4 lg:px-15 lg:py-10 md:py-6">
          {data.map((item,index)=>(
            <div key={index} className="bg-[#F5F5F5] p-6 md:p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className='flex flex-col justfy-center items-center mb-2'>
                <Image src={item.icon} alt={item.head} width={50} height={50} className="object-contain mb-4 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-12 sm:h-12 w-10 h-10"/>
                <h3 className='text-md lg:text-xl font-semibold mb-2 text-center lg:w-50 md:w-40 sm:w-32'>{item.head}</h3>
                <p className='text-sm md:text-md lg:text-md text-gray-500 text-center'>{item.para}</p>
            </div>
            </div>
          ))}
        </div>
        </div>
    </section>
  )
}