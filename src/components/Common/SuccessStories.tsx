"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const stories = [
  {
    id: 1,
    type: "text",
    content:
      "Excited to announce my graduation 🎓 from CPA program. This journey has been a transformative experience for me.",
    avatar: "/images/success-logo.jpg",
    name: "Abhinish K.",
    role: "CPA Graduate",
    icon: "/images/linkedin-icon.png",
  },
  {
    id: 2,
    type: "text",
    content:
      "As I commenced studies for my CMA journey, the support from mentors was phenomenal. I’m truly grateful.",
    avatar: "/images/success-logo.jpg",
    name: "Rahul Phansori",
    role: "CMA Candidate",
    icon: "/images/linkedin-icon.png",
  },
  {
    id: 3,
    type: "text",
    content:
      "I received an international placement with Big 4 after completing my CPA. Couldn’t be happier!",
    avatar: "/images/success-logo.jpg",
    name: "Nikhil Pandey",
    role: "CPA Graduate, PwC",
    icon: "/images/linkedin-icon.png",
  },
  {
    id: 4,
    type: "text",
    content:
      "The CPA course was the best step in my career. It helped me land a role in Google Finance team.",
    avatar: "/images/success-logo.jpg",
    name: "Amit Verma",
    role: "Financial Analyst, Google",
    icon: "/images/linkedin-icon.png",
  },
  {
    id: 5,
    type: "video",
    thumbnail: "/images/alumni1.jpg",
    videoUrl: "https://example.com/video1.mp4",
    name: "Mohan Krishnan",
    role: "CPA Graduate, KPMG",
    avatar: "/images/success-logo.jpg",
    icon: "/images/linkedin-icon.png",
  },
  {
    id: 6,
    type: "text",
    content:
      "I am thrilled to share that I have cleared all levels of CMA in my first attempt with excellent guidance.I am thrilled to share that I have cleared all levels of CMA in my first attempt with excellent guidance.",
    avatar: "/images/success-logo.jpg",
    name: "Nidhi Varsh",
    role: "CMA Candidate",
    icon: "/images/linkedin-icon.png",
  },
  {
    id: 7,
    type: "video",
    thumbnail: "/images/alumni2.jpg",
    videoUrl: "https://example.com/video2.mp4",
    name: "Tushar Banerji",
    role: "CPA Graduate, Deloitte",
    avatar: "/images/success-logo.jpg",
    icon: "/images/linkedin-icon.png",
  },
  {
    id: 8,
    type: "text",
    content:
      "My decision to join CPA coaching was the best career investment. I’m now working with EY as a Tax Consultant.My decision to join CPA coaching was the best career investment. I’m now working with EY as a Tax Consultant.",
    avatar: "/images/success-logo.jpg",
    name: "Kaustav Sen",
    role: "Tax Consultant, EY",
    icon: "/images/linkedin-icon.png",
  },
];

export default function SuccessStories() {
  return (
    <section className="container mx-auto px-4 md:px-8 py-12 bg-text-[#F7F7F7]">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
        <span className="bg-gradient-to-r from-[#EC2027] to-[#861216] text-transparent bg-clip-text">Success Stories</span> of Our Alumni
      </h2>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stories.map((story) => (
          <motion.div
            key={story.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col justify-between relative"
          >
            {story.type === "text" ? (
              <>
                {story.icon && (
                  <motion.div>
                    <Image
                      src={story.icon}
                      alt="icon"
                      width={40}
                      height={40}
                      className="rounded-md object-cover w-10 h-10 absolute top-1 right-[-8px] cursor-pointer"
                    />
                  </motion.div>
                )}
                <p className="text-gray-700 text-sm leading-relaxed mb-4 px-3">
                  {story.content}
                </p>
                <div className="mt-auto flex gap-4">
                  <motion.div>
                    {story.avatar && (
                      <Image
                        src={story.avatar}
                        alt={`${story.name}'s avatar`}
                        width={40}
                        height={40}
                        className="rounded-full object-cover w-12 h-12"
                      />
                    )}
                  </motion.div>
                  <div className="flex flex-col">
                    <p className="font-semibold text-gray-900">{story.name}</p>
                    <p className="text-gray-500 text-sm">{story.role}</p>
                  </div>
                </div>
              </>
            ) : (
              <div className="relative">
                <motion.div>
                  <Image
                    src={""}
                    alt={story.name}
                    width={400}
                    height={150}
                    className="rounded-lg object-cover w-full h-48"
                  />
                </motion.div>
                {/* <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button> */}
                <div className="mt-3">
                  <p className="font-semibold text-gray-900">{story.name}</p>
                  <p className="text-gray-500 text-sm">{story.role}</p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className=" border bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition hover:bg-white hover:text-black"
        >
          View All Stories
        </motion.button>
      </div>
    </section>
  );
}
