'use client';
import { AboutusLogo } from '@/data/partnerData'
export default function EduacationalPartner(){
    const renderLogos=(logos:string[])=>(
        <>
        {logos.map((logo,index)=>(
            <div key={index} className='flex-shrink-0 w-[80px] sm:w-[80px] md:w-[100px] lg:w-[120px] aspect-[3/2] flex justify-center items-center rounded-lg  rounded-lg mx-4 p-1 transition-transform hover:scale-105'>
          <img src={logo}
          alt={`logo-${index}`}
          className='max-h-full max-w-full object-contain'
          />
            </div>
        )
        )}
        </>
    )
  return (
    <>
    <section className='container px-4 py-10 mx-auto text-center'>
     <div className='w-full space-y-5 sm:space-y-6'>
  <div className='flex flex-col justify-center items:center'>
 <h1 className='lg:text-3xl md:text-2xl sm:text-xl font-bold text-[1.6rem] mb-4'>
    Strategics<span className='bg-gradient-to-r from-[#EA2229] to-[#841317] bg-clip-text text-transparent'> Partnerships</span> </h1>
    <p className='text-gray-700 text-xs sm:text-sm md:text-base px-1 sm:px-4 md:px-8 leading-relaxeds'>
        Collaborating with global leaders to provide world-class resources, training, and<br/>opportunities for our students’ success.
    </p>
      <div className="space-y-6 mt-4">
     <div className="relative w-full overflow-hidden">
       <div className="pointer-events-none absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10" />
       <div className="pointer-events-none absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10" />
       <div className="flex animate-marquee4 gap-5">
         {renderLogos(AboutusLogo)}
         {renderLogos(AboutusLogo)}
         {renderLogos(AboutusLogo)}
       </div>
  </div>
     </div>
     </div>
     </div>
    </section>
    </>
  )
}

