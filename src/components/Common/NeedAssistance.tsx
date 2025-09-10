'use client';
import { useState } from 'react';

export default function NeedAssistance() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="fixed top-1/2 right-0 translate-y-[-170%] bg-[#d41c1c] text-white font-semibold px-2 py-0.5 rounded-l-[16px] z-30 shadow-md text-[10px] sm:text-xs"
        onClick={() => setIsOpen(true)}
        style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}
      >
        Need Assistance
      </button>

      {isOpen && (
        <div className="fixed  inset-0 bg-opacity-10 z-40 flex items-center justify-end">
          <div className=" relative bg-white w-full max-w-md h-[58vh] sm:w-[70%] sm:h-[58vh] overflow-y-auto rounded-lg p-3 shadow-lg animate-slide-in-left transition-all duration-300 ease-in-out">
            
            <button
              className="absolute left-[-36px] top-1/2 -translate-y-1/2 bg-[#d41c1c] text-white font-semibold px-2 py-2 rounded-r-[16px] z-50 shadow-md text-[10px] sm:text-xs"
              style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}
            >
              Need Assistance
            </button>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-2 mt-2">
              Elevate Your <span className="text-[#d41c1c]">Career Trajectory</span>
            </h2>

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
      )}
    </>
  );
}
