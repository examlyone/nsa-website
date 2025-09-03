"use client";
import Image from "next/image";
import { logosRow1, logosRow2 } from "@/data/partnerData";
import { PiDownloadSimple } from "react-icons/pi";

export default function PlacementPartners() {
  const renderLogos = (logos: string[]) => (
    <>
      {logos.map((logo, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-[80px] sm:w-[80px] md:w-[100px] lg:w-[120px] aspect-[3/2] flex justify-center items-center rounded-lg bg-gray-50 border border-gray-200 shadow-sm mx-2 p-2 transition-transform hover:scale-105"
        >
          <img
            src={logo}
            alt={`logo-${index}`}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      ))}
    </>
  );

  return (
    <section className="container mx-auto bg-white py-10 overflow-hidden">
      <div className="text-center mb-6 px-4">
        <h2 className="text-2xl md:text-3xl font-bold leading-snug">
          Work with <br />
          Industry <span className="text-red-600">Leaders</span>
        </h2>
      </div>

      <div className="space-y-6">
        {/* Row 1 */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee4 gap-3">
            {renderLogos(logosRow1)}
            {renderLogos(logosRow1)}
          </div>
        </div>

        {/* Row 2 */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee-reverse4 gap-3">
            {renderLogos(logosRow2)}
            {renderLogos(logosRow2)}
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-7">
          <button className="px-4 py-2 bg-red-600 text-white rounded-full text-xs sm:text-sm md:text-base shadow-md hover:bg-red-700 flex items-center gap-2 mx-auto">
            Download Placement Report <PiDownloadSimple size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
