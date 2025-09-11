"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdHeadsetMic } from "react-icons/md";

const accordionData = [
  {
    title: "24/7 Contact Support",
    content: "Get round-the-clock assistance from our support team.",
    icon: <MdHeadsetMic />,
    image: "/images/faq-1.png", 

  },
  {
    title: "World Class Trainers",
    content:
      "Comprehensive, up-to-date study materials. Tailored resources designed specifically for the exams. Access to exclusive content to aid your exam preparation.",
    icon: "👩‍🏫",
    image: "/images/faq-1.png", 
  },
  {
    title: "Live Classes",
    content: "Attend interactive live sessions with expert instructors.",
    icon: "📹",
    image: "/images/faq-1.png", 

  },
  {
    title: "Original Study Material",
    content: "Access authentic and curated study material for exam success.",
    icon: "📚",
    image: "/images/faq-1.png", 

  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" lg:mt-6 mt-4 space-y-4 max-w-4xl mx-auto my-10 sm:px-6 lg:px-8">
      {accordionData.map((item, index) => (
        <div
          key={index}
          className="border rounded-lg bg-[#F5F5F5] border-gray-300 last:border-none md:px-8"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between py-3 text-left focus:outline-none"
          >
            <div className="flex items-center gap-3">
                {activeIndex === index ? (
                    <span className="text-xl bg-[#EC2027] bg-clip-text">{item.icon}</span>
                ) : (
                    <span className="text-xl">{item.icon}</span>
                )}
              {activeIndex === index ? (
                <span className="font-semibold  text-[#EC2027]">{item.title}</span>
              ) : (
                <span className="font-semibold text-black">{item.title}</span>
              )}
            </div>
            {activeIndex === index ? (
              <FiChevronUp size={24} className="text-[#EC2027]" />
            ) : (
              <FiChevronDown size={24} className="text-gray-600" />
            )}
          </button>
          
          <AnimatePresence initial={false}>
    {activeIndex === index && (
        <motion.div
            key="content"
            initial={{ opacity: 0, scaleY: 0, transformOrigin: 'top' }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="px-5 py-4 text-gray-700 bg-[#F7F7F7] border-t border-gray-300"
        >
            <div className="pb-4 text-black flex flex-col sm:flex-row gap-4 px-4">
                {item.image && (
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full sm:w-48 object-cover rounded"
                    />
                )}
                <p className="flex-1">{item.content}</p>
            </div>
        </motion.div>
    )}
</AnimatePresence>
          </div>
      ))}
    </div>
  );
}
