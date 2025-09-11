"use client";

import { Typography } from "@/components/Common/Typography";
import Image from "next/image";

export default function FinancialUnlockHero() {
  return (
    <section className="container mx-auto mb-8">
      <div className="grid md:grid-cols-2 gap-8 sm:gap-4 items-center">

        <div className="flex justify-center">
          <div>
            <Image
              src="/4e5f0088-7622-4d15-82e5-088e12c5d6cb.png"
              alt="CMA Promo"
              height={550}
              width={550}
              className="object-contain rounded-lg"
            />
          </div>
        </div>

        <div className="text-center md:text-left space-y-4">

          <Typography variant="h2" className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug mb-4">
            Unlock your Financial Potential with <span className="text-red-600">CMA</span>
          </Typography>

          <Typography variant="body1" className="text-gray-700 text-xs md:text-sm text-gray-400 text-justify">
            CMA, offered by IMA, is a prestigious credential proving mastery in financial planning, analysis, investment, and corporate finance. Join the 50,000+ alumni shaping their careers.
          </Typography>

          <div className="flex flex-wrap gap-4 mt-4">
            <span className="bg-black text-white px-3 py-1 rounded">27th Jan</span>
            <span className="bg-black text-white px-3 py-1 rounded">2 Exams</span>
            <span className="bg-black text-white px-3 py-1 rounded">6-8 Months</span>
          </div>

          <div className="flex flex-wrap items-center space-x-4 mt-4">
            <div className="flex -space-x-2 overflow-hidden">
              {Array.from({ length: 7 }).map((_, idx) => (
                <img
                  key={idx}
                  src={`https://randomuser.me/api/portraits/lego/${idx}.jpg`}
                  alt="alumni"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <Typography variant="body1" className="text-gray-600">
              Your future potential, shown by <span className="font-semibold text-red-600">50,000+ alumni</span>.
            </Typography>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition">
              Enroll Now
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
              Download Prospectus
            </button>
          </div>

          <div className="mt-6 flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Mentor M.Irfat"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <div>
              <Typography variant="body1" className="text-gray-600 uppercase text-sm">MENTOR</Typography>
              <Typography variant="h5" className="font-semibold text-lg">M.Irfat</Typography>
              <Typography variant="body1" className="text-gray-500 text-sm">Founder of Northstar Academy</Typography>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
