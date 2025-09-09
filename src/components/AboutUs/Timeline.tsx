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
        <h1 className='text-base sm:text-md md:text-xl lg:text-3xl font-bold text-center'>
        Our Foundation for<span className='bg-gradient-to-r from-[#EC2027] to-[#861216] bg-clip-text text-transparent'> Success</span>
        </h1>
        <p className='text-sm md:text-base lg:text-md text-gray-500 text-center lg:mt-2'>
        Empowering future finance leaders with integrity, excellence, and <br/>innovation at every step of learning.
        </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-8 ">
            {data.map((data ,index)=>(
                <div key={index} className='border border-gray-500 shadow-lg text-center px-4 py-4'>
                    <img src={data.icon} className='justify-center'/>
                <h3 className="font-bold text-base md:text-md lg:text-xl mb-5">{data.head}</h3>
                <p className="text-xs md:text-sm lg:text-base text-gray-600">{data.para}</p></div>
        
            ))}
          </div>
        </div>
    </section>
  )
}