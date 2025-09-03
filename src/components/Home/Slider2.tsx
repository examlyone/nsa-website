"use client";
import React from "react";
import Image from "next/image";

export default function HeroSectionImage() {
  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-0 sm:px-0 md:px-0 py-10 md:py-16">
      <div className="relative w-full h-[300px] sm:h-[360px] md:h-[400px] rounded-md overflow-hidden">
        <Image
          src="/images/banner2.png"
          alt="Hero Banner"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
