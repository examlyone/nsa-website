import React from 'react'
import Image from 'next/image'  
export default function Roadmap() {
  return (
    <section className="container mx-auto px-4 py-6 bg-[#F9F9F9] mb-12">
          <div className='flex flex-col items-center '>
          <div className='flex flex-col items-center lg:mb-6 md:mb-4 mb-2'>
          <h1 className='text-xl lg:text-4xl md:text-2xl  font-bold text-center lg:mb-4 md:mb-2 mb-2'>CMA USA <span className='bg-gradient-to-r from-[#EC2027] to-[#861216] bg-clip-text text-transparent'>Roadmap</span></h1>
          </div>
          <div>
            <Image
                src="/cma-images/CmaRoadmap.svg"
                alt="CMA Roadmap"
                width={500}
                height={300}
                className="object-contain w-full lg:w-[900px] md:w-[600px] h-auto mb-4  lg:mb-6 md:mb-4 mb-2"
            />
          </div>
          </div>
    </section>
  )
}

