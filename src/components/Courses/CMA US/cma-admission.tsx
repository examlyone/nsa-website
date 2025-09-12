"use client";

import Image from "next/image";

const processSteps = [
  {
    id: 1,
    icon: "/cma-images/Admission Process - Image 1.png",
    title: "Enroll in the CMA US program",
    description:
      "Start with NorthStar to ignite your finance career by enrolling as a CMA US candidate in our program.",
  },
  {
    id: 2,
    icon: "/cma-images/Admission Process - Image 2.png",
    title: "Register for the US CMA exams",
    description:
      "After your registration for CMA USA, receive an extensive training packed with the latest practices and case studies.",
  },
  {
    id: 3,
    icon: "/cma-images/Admission Process - Image 3.png",
    title: "Earn your US CMA Certificate",
    description:
      "Lift aptitude with NASBA Training Program via CMA certification from IMA after completing 2 parts of the CMA USA exam.",
  },
];

export default function CMAAdmissionProcess() {
  return (
    <section className="container mx-auto px-4 py-12">
      
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          CMA US{" "}
          <span className="bg-gradient-to-r from-[#EC2027] to-[#861216] bg-clip-text text-transparent">
            Admission Process
          </span>
        </h1>
        <p className="text-gray-600 text-sm sm:text-base font-semibold max-w-2xl mx-auto">
          Just a few steps away! Follow the admission process to launch your dream career now!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {processSteps.map((step) => (
          <div key={step.id} className="bg-[#F9F9F9] relative rounded-xl shadow-lg lg:p-6 md:p-2 flex flex-col items-center text-center mt-6">

            <div className="lg:w-32 lg:h-32 md:w-25 md:h-25 rounded-full lg:p-2 md:p-1 absolute bg-white flex items-center justify-around mb-6 top-[-65px] mb-6 rounded-full sm:mt-5">
              <Image
                src={step.icon}
                alt={`Step ${step.id} Icon`}
                width={160}
                height={160}
                className="object-contain lg:w-[320px] md:w-[150px]"
              />
            </div>

            <h3 className="text-sm lg:text-xl md:text-base md:text-base font-semibold bg-gradient-to-r from-[#EC2027] to-[#861216] bg-clip-text text-transparent lg:mt-18 md:mt-15 mb-4 md:mb-1">
              {step.title}
            </h3>

            <p className="text-sm lg:text-[14px] md:text-xs text-gray-600 leading-relaxed lg:mt-2 md:mt-1">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
