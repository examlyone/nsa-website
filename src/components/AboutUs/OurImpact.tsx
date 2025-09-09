import React from 'react';

export default function OurImpact() {
  const data = [
    { number: '50,000+', text: 'Alumni' },
    { number: '100+', text: 'Corporate Partners' },
    { number: '95%', text: 'Pass Rates' }
  ];

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="flex flex-col sm:flex-row items-stretch gap-6">

        <div className="sm:w-1/2 bg-[#F5F5F5] px-7 py-5 rounded-lg flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            <span className="bg-gradient-to-r from-[#EC2027] to-[#861216] bg-clip-text text-transparent">Impact</span>{' '}
            <span className="text-black">NSA Created</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mt-4">
            At NorthStar, our impact is measured by the success of our students worldwide. With thousands of alumni placed across leading firms, global certifications earned, and careers transformed, we continue to empower learners to achieve their dreams and shape the future of finance and accounting.
          </p>
          <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 pt-4 lg:mt-10">
            Choosing NorthStar isn’t just education—<br />
            it’s the Smartest step toward a Successful Global Career
          </p>
        </div>

        <div className="sm:w-1/3 flex justify-center items-center">
          <img
            src="/About-Images/impact-logo.PNG"
            alt="NSA Impact"
            className="rounded-lg object-contain w-full h-auto max-h-[400px]"
          />
        </div>

        <div className="sm:w-1/4 flex flex-col justify-center gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[#FCF3F0] rounded-lg py-6 px-4 text-center flex-1"
            >
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-black">{item.number}</p>
              <p className="text-sm sm:text-base text-gray-600 mt-1">{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
