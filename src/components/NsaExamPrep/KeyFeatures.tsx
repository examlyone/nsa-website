import React from 'react'
import Image from 'next/image'
export default function KeyFeatures() {
    const data=[
        {
            icon:'/NsaExam-img/Icon-1.png',
            head:'Interactive Learning Dashboard',
            para:'Track your progress, manage schedules, and access all resources in one place.'
        },
        {
            icon:'/NsaExam-img/Icon-2.png',
            head:'Expert-Led Video Lectures',
            para:'High-quality, easy-to-follow sessions from experienced mentors.'
        },
        {
            icon:'/NsaExam-img/Icon-3.png',
            head:'Extensive Question Bank',
            para:'Practice with 10,000+ exam-style questions and detailed solutions.'
        },
        {
            icon:'/NsaExam-img/Icon-4.png',
            head:'Smart Quiz & Mock Tests',
            para:'Assess your readiness with adaptive quizzes and full-length mock exams.'
        },
        {
            icon:'/NsaExam-img/Icon-5.png',
            head:'Performance Analytics',
            para:'Identify strengths and improvement areas with real-time insights and reports.'
        },
        {
            icon:'/NsaExam-img/Icon-6.png',
            head:'Integrated Study Materials',
            para:'Official content from partners like Becker & AICPA for trusted preparation.'
        },
        // {
        //     icon:'/NsaExam-img/Icon-7.png',
        //     head:'Seamless Access Anytimes',
        //     para:'Learn on desktop or mobile with cloud-synced progress.'
        // },
        
    ]
    return (
        <>
          <section className='container mx-auto px-4 md:px-8 py-10'>
                <div className="w-full flex flex-col items:center justify-center">
                <h1 className='text-base sm:text-md md:text-2xl lg:text-3xl font-bold text-center'>
                Key <span className='bg-gradient-to-r from-[#EC2027] to-[#861216] bg-clip-text text-transparent'>Features</span> That Set Us Apart
                </h1>
                <p className='text-sm md:text-base lg:text-md text-gray-500 text-center lg:mt-4'>
                Our key features ensure effective learning, smarter practice,<br/> and stronger results for every student.
                </p>
                <div className="grid grid-row-1 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-4 lg:px-15 lg:py-12 md:py-6 justify-center">
                  {data.map((item,index)=>(
                    <div key={index} className="bg-white p-6 md:p-2  rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className='flex flex-col justify-center items-center  mb-2'>
                        <Image src={item.icon} alt={item.head} width={50} height={50} className="object-contain mb-4 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-12 sm:h-12 w-10 h-10"/>
                        <h3 className='text-md lg:text-xl font-semibold mb-2 text-center lg:w-50 md:w-40 sm:w-32'>{item.head}</h3>
                        <p className='text-sm md:text-md lg:text-md text-gray-500 text-center lg:px-7 md:px-5 whitespace-wrap'>{item.para}</p>
                    </div>
                    </div>
                  ))}
                </div>
                </div>
            </section>
        </>
    )
}
