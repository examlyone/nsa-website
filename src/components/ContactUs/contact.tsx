"use client";
import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function ContactUs() {
  return (
    <section className="container mx-auto py-6  lg:px-12 md:px-6 xs:px-2">
        <div className="flex flex-col gap-2">
      <h3 className="font-semibold flex items-center gap-2">
        <span>▶</span> Contact Us
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold mt-2">
        Get <span className="text-red-500">Learning</span> Support
      </h2>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="bg-white p-5 rounded-lg shadow-lg rouded-lg">
          <p className="mb-6 font-semibold text-md lg:text-lg md:text-md">
            Reach out for quick answers, personalized advice, or support with your learning and enrollment.
          </p>
          <form className="space-y-3">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none bg-[#F5F5F5]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none bg-[#F5F5F5]"
          />

          <div className="grid grid-cols-2 gap-4">
            <select className="w-full px-4 py-2 border rounded-md focus:outline-none bg-[#F5F5F5]">
              <option>Select Course</option>
            </select>
            <input
              type="text"
              placeholder="Ph. Number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none bg-[#F5F5F5]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <select className="w-full px-4 py-2 border rounded-md focus:outline-none bg-[#F5F5F5]">
              <option>Select Your Type</option>
            </select>
            <input
              type="text"
              placeholder="Your City Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none bg-[#F5F5F5]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition bg-[#F5F5F5]"
          >
            Register for free Webinar
          </button>

          <p className="text-xs text-gray-500 mb-2">
            By submitting, I authorize Northstar Academy & its representatives to contact me with updates and
            notifications via Email/SMS/WhatsApp/Call.
          </p>
        </form>
        </div>

        <div className="bg-gradient-to-r from-[#FCF8F3] to-[#FDE8E8] p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex flex-col lg:mt-5">
              <h4 className="font-bold lg:text-2xl md:text-lg">Address 📍</h4>
              <p className="text-black font-bold text-sm lg:mt-3 md:mt-2">
                NorthStar Academy, 8, Hosur Main Road, DRC Post, Chikku Lakshmaiah Layout,
                Koramangala, Bengaluru, Karnataka 560030
              </p>
            </div>
<div className="flex flex-row justify-between lg:mt-10">
            <div className="flex flex-col gap-2">
              <h4 className="font-bold lg:text-2xl md:text-lg">Contact</h4>
              <p className="text-black font-normal text-sm">📞 919 - XXX - XXX</p>
              <p className="text-black font-normal text-sm">📧 dummyemail@nsa.com</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold lg:text-2xl md:text-lg">Open Time</h4>
              <p className="text-black font-normal text-sm">Mon - Sat — 10:00 AM to 8:00 PM</p>
              <p className="text-black font-normal text-sm">Sun—10:00 AM to 6:30 PM</p>
            </div>
</div>
<div className="flex lg:flex-row justify-between lg:mt-18 md:flex-col md:items-center">
            <div className="flex flex-col gap-2">
            <h4 className="font-bold lg:text-2xl md:text-lg">Socials</h4>
              <div className="flex gap-4">
                <a href="#" className=""><RiInstagramFill  size={26}/></a>
                <a href="#" className=""><FaFacebook size={26}/></a>
                <a href="#" className=""><FaLinkedin size={26}/></a>
              </div>
            </div>
            
          <div className="mt-6 text-center ">
            <img src="/nsa-logo-dark.svg" alt="NorthStar Academy Logo" className="mx-auto h-12" />
          </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
