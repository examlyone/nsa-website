"use client";
import React from "react";
import Image from "next/image";

export default function HeroSectionImage() {
  return (
    <section className="relative w-full bg-black">
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
        <Image
          src="/images/banner2.png"
          alt="Hero Banner"
          fill
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
