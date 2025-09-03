import Image from "next/image";
import { PiDownloadSimple } from "react-icons/pi";
import { Typography } from "./Typography";
export default function PlacementSection() {
  const people = [
    { img: "PlacementImg/img-1.png" },
    { img: "PlacementImg/img-2.png" },
    { img: "PlacementImg/img-3.png" },
    { img: "PlacementImg/img-4.png" },
    { img: "PlacementImg/img-5.png" },
    { img: "PlacementImg/img-3.png" },

    // { img: "PlacementImg/img-6.png" },
  ];

  return (
    <section className=" container mx-auto bg-gray-50 py-14 px-6 text-center">
      <Typography variant="h2" className="text-2xl md:text-3xl font-bold mb-2">
        <span className="text-red-600">100% Placement</span>{" "}
        Guaranteed Program
      </Typography>
      <Typography variant="body1" className="text-gray-600 mb-10">
        Your Success, Our Promise: Join Our 100% Guaranteed Placement Program Today
      </Typography>
      <div
  className="flex md:flex-wrap flex-nowrap overflow-x-auto gap-15 mb-8 px-4 md:px-0 md:justify-center
             scroll-smooth snap-x snap-mandatory
             scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
>
  {people.map((person, index) => (
    <div
      key={index}
      className="flex flex-col items-center flex-shrink-0 snap-center w-full sm:w-[80%] md:w-auto"
    >
      <div className="md:w-28 w-40 relative">
        <img
          src={person.img}
          alt="image"
          className="object-contain w-full h-full mx-auto"
        />
      </div>
    </div>
  ))}
</div>




      <button className="px-4 py-2 bg-red-600 text-white rounded-full xs:whitespace-nowrap text-xs sm:text-sm md:text-base shadow-md hover:bg-red-700 flex items-center gap-2 mx-auto ">
        Download Placement Report <span><PiDownloadSimple size={20} /></span>
      </button>
    </section>
  );
}
