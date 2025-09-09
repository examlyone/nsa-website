import React from 'react';

export default function OurLegacy() {
  return (
    <section className="container mx-auto px-4 py-10 text-center">
      
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
        Our <span className="bg-gradient-to-r from-[#EC2027] to-[#861216] bg-clip-text text-transparent">Legacy</span>
      </h2>
      
      <p className="text-sm sm:text-base text-gray-700 mt-2">
        Guiding finance aspirants from Bangalore to global recognition since 2011
      </p>
      
      <div className="mt-8">
        <img
          src="/About-Images/legacy-group-photo.PNG"
          alt="Our Legacy Group"
          className="w-full h-auto rounded-lg object-cover max-h-[600px]"
        />
      </div>

    </section>
  );
}
