import Image from "next/image";
import { PiDownloadSimple } from "react-icons/pi";
import { Typography } from "./Typography";

export default function LMSSection() {
  return (
    <section className="container mx-auto bg-white py-10 px-4 md:px-8 md:mt-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10"> 
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <Typography variant="h2" className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug mb-4">
            Learn with ease <br />
            <span className="text-red-600">Mobile & Laptop LMS App</span>
          </Typography>
          <Typography variant="body1" className="text-gray-600 mt-1 text-xs sm:text-sm md:text-base lg:text-md text-justify">
            NorthStar Academy's online training programs offer a unique, enjoyable learning
            experience. Our virtual classes allow you to learn from the comfort of your own home. 
            Our approach to learning will help you acquire skills faster than traditional methods.
          </Typography>
          <button className="mt-1 px-5 py-2 sm:px-6 sm:py-3 bg-red-600 text-white text-sm sm:text-base sm:justify-center rounded-lg flex items-center gap-2 self-center md:self-start hover:bg-red-700 transition">
  Download App <PiDownloadSimple size={24} />
</button>

        </div>

        <div className="w-full md:w-1/2 relative flex justify-end ">
          <Image
            src="/images/laptop.png"
            alt="Laptop"
            width={600}
            height={600}
            sizes="100vw"
            className="object-contain rounded-lg w-full h-auto max-w-[550px] md:max-w-[550px] self-end"
            priority
          />
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2">
            <Image
              src="/images/nsa.png"
              alt="Logo"
              width={100}
              height={100}
              sizes="100vw"
              className="object-contain w-[60px] sm:w-[70px] md:w-[80px] lg:w-[150px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
