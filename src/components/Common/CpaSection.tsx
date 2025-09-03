import Image from "next/image";

export default function CPASection() {
  return (
    <section className="container mx-auto md:mt-12 mt-8 md:px-8 px-4">
      <div className="mb-6">
          <h2 className="text-xl md:text-3xl font-bold">
          Choose your <span className=" font-bold bg-gradient-to-r from-[#EC2027] to-[#861216] text-transparent bg-clip-text">Next Big Step</span>
          </h2>
          <div  className="flex flex-row gap-4 mt-6">
          <button className="bg-[#EC2027] hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105">Finance & Accounting</button>
          <button className="bg-gray-200 hover:bg-red-600 text-black px-6 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105">Investment Banking</button>
          <button className="bg-gray-200 hover:bg-red-600 text-black px-6 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105">Auditing & Taxation</button>
          <button className="bg-gray-200 hover:bg-red-600 text-black px-6 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105">Executive Programs</button>
          </div>
          </div>
      <div className="flex flex-row flex-wrap items-center gap-8">
        <div className="flex-1 min-w-[300px] space-y-4">
          <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-[#EC2027] to-[#861216] text-transparent bg-clip-text">
            Certified Public Accountant
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Gain globally recognized CPA certification with expert guidance, exclusive
            resources, and a guaranteed pathway to work in the US.
          </p>
          <div className="grid grid-cols-2 gap-2 text-gray-700 text-sm md:text-base mt-2">
            <div className="flex items-center space-x-1">
              <span className="text-red-600 text-lg">📅</span>
              <span>25 Aug 2025</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-red-600 text-lg">⏳</span>
              <span>12 Months</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-red-600 text-lg">🎥</span>
              <span>Live / Recorded</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-red-600 text-lg">✅</span>
              <span>AICPA Certified</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-red-600 text-lg">📚</span>
              <span>Guide, LMS Access, Tests</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-red-600 text-lg">🤝</span>
              <span>Mentorship & Placement</span>
            </div>
          </div>

          <div className="flex flex-row gap-4 mt-4 flex-wrap">
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition sm:px-4 sm:py-2">
              View Program
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition sm:px-4 sm:py-2">
              Download Brochure
            </button>
          </div>
        </div>
        <div className="flex-1 min-w-[300px] flex justify-center self-center">
          <Image
            src="/images/cpa-student.png"
            alt="CPA Explained"
            width={550}
            height={500}
            className="object-contain rounded-lg w-full h-auto max-w-[450px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
