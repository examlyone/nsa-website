"use client";
import React from "react";
import Image from "next/image";

const teamMembers = [
  { name: "Navneeth K.", role: "MARKETING", imageSrc: "/About-Images/ExecutiveTeam.png" },
  { name: "Navneeth K.", role: "MARKETING", imageSrc: "/About-Images/ExecutiveTeam.png" },
  { name: "Navneeth K.", role: "MARKETING", imageSrc: "/About-Images/ExecutiveTeam.png" },
  { name: "Navneeth K.", role: "MARKETING", imageSrc: "/About-Images/ExecutiveTeam.png" },
  { name: "Navneeth K.", role: "MARKETING", imageSrc: "/About-Images/ExecutiveTeam.png" },
  { name: "Navneeth K.", role: "MARKETING", imageSrc: "/About-Images/ExecutiveTeam.png" },
];

export default function ExecutiveTeam() {
  return (
    <section className="container mx-auto py-12 px-6 text-center overflow-hidden">
      <h2 className="text-3xl font-bold">
        Our <span className="text-red-600">Executive</span> Team
      </h2>
      <p className="text-gray-600 mt-2 mb-8">
        United by purpose, committed to your success.
      </p>

      <div className=" relative w-full overflow-hidden">
       <div className="pointer-events-none absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10" />
       <div className="pointer-events-none absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="flex animate-marquee6 whitespace-nowrap">
          {teamMembers.concat(teamMembers).map((member, index) => (
            <div key={index} className="inline-block text-center px-6">
              <Image
                src={member.imageSrc}
                alt={member.name}
                width={100}
                height={100}
                className="rounded-full"
                priority
              />
              <h3 className="font-semibold mt-2">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}