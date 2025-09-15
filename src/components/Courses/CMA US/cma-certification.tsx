import React from 'react'
import Image from 'next/image'

export default function CMACertification() {
  return (
    <section className="container mx-auto px-4 py-6 bg-[#F9F9F9]">
        <div className='flex flex-col items-center '>
            <div className='flex flex-col items-center'>
            <h1 className='text-xl lg:text-4xl md:text-2xl  font-bold text-center lg:mb-4 md:mb-2 mb-2'>CMA USA <span className='bg-gradient-to-r from-[#EC2027] to-[#861216] bg-clip-text text-transparent'>Certification</span></h1>
            <p className="text-gray-600 font-medium mx-auto 
              text-xs sm:text-base md:text-sm lg:text-md 
              px-2 sm:px-4 md:px-6 lg:px-44 
              lg:mb-6 md:mb-4 mb-2 text-center">
  Earn IMA’s CMA credential with NorthStar and gain expertise in financial planning, strategy, and global accounting
  standards. Master Capital Budgeting, Corporate Finance, IFRS, and US GAAP to advance your F&A career.
</p>

            </div>
        </div>
        <div className='flex justify-center items-center'>
            <Image
                src="/cma-images/CmaCertificate.svg"
                alt="CMA Certification"
                width={500}
                height={300}
                className="object-contain w-full max-w-[600px] h-auto mb-4"
            />
        </div>
        <div className='flex justify-center items-center'>
        <button className="bg-[#EC2027] transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105 text-white lg:text-xl md:text-lg text-sm px-6 lg:px-12 md:px-8 py-2 rounded-md">
              Enroll Now
            </button>
        </div>
    </section>
  )
}

