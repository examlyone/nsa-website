"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function InfiniteImageSlider() {
  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Scrolling Images */}
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={{ x: "-90%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        <Image
          src="/images/imagescroll.png"
          alt="Infinite slider"
          width={1800}
          height={300}
          className="flex-shrink-0"
        />
        <Image
          src="/images/imagescroll.png"
          alt="Infinite slider duplicate"
          width={1800}
          height={300}
          className="flex-shrink-0"
        />
      </motion.div>
      <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />
    </div>
  );
}
