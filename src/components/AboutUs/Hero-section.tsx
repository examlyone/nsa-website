'use client';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className=" container bg-gradient-to-br from-[#FCF8F3] to-[#FDE8E8] py-10 px-4 sm:px-6 md:px-10  text-center rounded-lg">
      <div className="w-full mx-auto space-y-5 sm:space-y-6">
        <div className="flex justify-center">
          <Image
            src="/nsa-logo-dark.svg" 
            alt="NorthStar Academy Logo"
            width={150}
            height={50}
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-[1.6rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
          <span className="text-[#d41c1c]">UPSKILLING</span>
          <span className="text-black"> INDIA</span>
        </h1>

        <h2 className="uppercase text-sm sm:text-base md:text-lg font-semibold tracking-wide text-gray-800">
          FOR THE FUTURE
        </h2>

        <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed px-1 sm:px-4 md:px-8">
           <strong>About Us | North Star Academy</strong> <br />
          India’s premier Finance and Accounting training institute, empowering students to achieve their career goals through professional courses, top-notch mentorship, and placement assistance.
        </p>
      </div>
    </section>
  );
}
