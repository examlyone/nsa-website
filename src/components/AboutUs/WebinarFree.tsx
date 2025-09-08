import React from 'react'
import { Typography } from '../Common/Typography'

export default function WebinarFree(){
  return (
    <section className='container mx-auto px-4 py-10'>
        <div className='flex flex-row'>
        <div className="w-full lg:w-1/2 md:w-full flex flex-col justify-center text-center md:text-left space-y-4 h-full md:px-8 md:py-5 px-4 py-3">
                  <Typography
                    variant="h2"
                    className="text-sm sm:text-xl md:text-2xl lg:text-4xl font-semibold leading-snug"
                  >
                    Ready to <br /> Begin Your Journey?
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed text-justify"
                  >
                    Get in touch with us today and take the first step towards your future success. Our team is here to assist you!
                  </Typography>
                </div>
    <div className='w-1/2 border border-gary-400 shadow-lg rounded-lg p-4'>
       <form className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <select className="border border-gray-300 rounded px-4 py-2 w-full text-sm">
                  <option>Select Course</option>
                  <option>CMA</option>
                  <option>CPA</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border border-gray-300 rounded px-4 py-2 w-full text-sm"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <select className="border border-gray-300 rounded px-4 py-2 w-full text-sm">
                  <option>Choose Type</option>
                  <option>Student</option>
                  <option>Professional</option>
                </select>
                <input
                  type="text"
                  placeholder="Your City Name"
                  className="border border-gray-300 rounded px-4 py-2 w-full text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#d41c1c] text-white font-semibold py-2 rounded mt-2 hover:bg-red-700 transition text-sm"
              >
                Request for Call Support
              </button>
              <p className="text-xs text-gray-500 text-center mt-2">
                By submitting, you authorize us to contact you by call or text.
              </p>
            </form>
    </div>
    </div>
    </section>
  )
}

