import Image from "next/image";
import { Typography } from "../Common/Typography";

export default function CpaHero() {
  return (
    <section className="container mx-auto mb-8  ">
      <div className=" grid md:grid-cols-2 gap-8 sm:gap-1 items-center">
        <div className="text-center md:text-left space-y-2">
          <Typography variant="h2" className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug mb-4 md:px-8">
            We Will Help You <br />
            <span className="text-red-600">To Reach The Stars</span>
          </Typography>
          <Typography variant="body1" className="text-gray-700 text-xs md:text-sm text-gray-400 text-justify md:px-8 ">
            NorthStar Academy, Honored As ‘Best Emerging Educational Institute
            In Bangalore’ In 2017 By The IndoGlobal Foundation, Has Educated
            Over 15,000 Students. We Are The Top Choice In Bengaluru For Finance
            And Accounting Courses Such As CA, CPA, CMA (USA), ACCA, CMA (India),
            And CS, With Exciting Plans For Growth Ahead.
          </Typography>
        </div>
        <div className="flex justify-center">
          <div >
            <Image
              src="/images/cpasection.png"
              alt="CPA Explained"
              height={550}
              width={550}
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className=" w-[95%] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 mt-5">
        {[
          { value: "49+", label: "On Going Batches" },
          { value: "35+", label: "Countries Covered" },
          { value: "128+", label: "Hiring Partners" },
          { value: "90%", label: "Pass Percentage" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl text-center p-1 shadow hover:shadow-lg transition"
          >
            <Typography variant="h5" className="text-2xl md:text-2xl font-bold text-red-600 py-1">
              {stat.value}
            </Typography>
            <Typography variant="body1" className="text-gray-700 text-sm md:text-base md:text-sm">{stat.label}</Typography>
          </div>
        ))}
      </div>
    </section>
  );
}
