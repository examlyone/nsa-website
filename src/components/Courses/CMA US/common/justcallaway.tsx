"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function JustCallAway() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const showPopupPeriodically = () => {
      setShowPopup(true);
    };

    const interval = setInterval(showPopupPeriodically, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-10">
      <div className="bg-white rounded-xl md:mt-10 p-2 w-[90%] max-w-[300px] relative flex flex-col items-center shadow-lg animate-fadeIn">
        <button
          onClick={handleClose}
          className="absolute bg-red-600 top-0 rounded-full w-9 h-9 right-0 text-white hover:text-gray-700 text-4xl font-bold"
        >
          &times;
        </button>

        <Image
          src="/cma-images/justcallaway.png"
          alt="JustCallAway"
          width={500}
          height={300}
          className="object-contain lg:w-[200px] md:w-[150px] w-[120px] h-auto"
        />

        <h2 className="text-center text-xl lg:text-3xl md:text-2xl font-semibold">
          Just a{" "}
          <span className="bg-gradient-to-r from-[#EC2027] to-[#861216] bg-clip-text text-transparent">
            Call Away
          </span>
        </h2>

        <p className="text-center text-xs mb-2">
          Schedule a Call <br /> for Guidance and Support for Your Next Step
        </p>

        <input
          type="email"
          placeholder="Email Address"
          className="border border-gray-300 rounded px-4 py-2 w-3/4 mb-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="border border-gray-300 rounded px-3 py-2 w-3/4 mb-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition w-full text-sm sm:text-base">
          Schedule a Call
        </button>
      </div>
    </div>
  );
}
