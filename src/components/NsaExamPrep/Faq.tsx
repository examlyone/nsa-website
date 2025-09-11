"use client"
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const faqData = [
    {
        question: 'What is NSA Exam Review?',
        answer: 'NSA Exam Review is a comprehensive learning platform offering structured content, interactive quizzes, and expert guidance to prepare for exams.',
    },
    {
        question: 'Why NSA Exam Review?',
        answer: 'We are not confined to CPA US or CMA US, we are providing all-round Exam prep for any course and all questions are unique and exam oriented.',
    },
    {
        question: 'Is NSA Exam Review regularly updated for Exam changes?',
        answer: 'Yes, our content is continuously updated by experts to reflect the latest syllabus and exam trends.',
    },
]

export default function FAQSection() {
    const [activeIndex, setActiveIndex] =useState<number | null>(null)
    return (
        <section className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-center">
                Frequently Asked <span className="text-red-500">Questions</span>
            </h1>
            <p className="text-center text-gray-600 mt-2">
                Explore frequently asked questions and get the clarity you need to start your journey with confidence.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-6">
    {['General', 'Courses', 'Placements', 'App'].map((cat, index) => (
        <button
            key={cat}
            className={`text-sm font-semibold px-4 py-2 rounded-md ${
                index === 0
                    ? 'bg-[#EC2027] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-[#EC2027] hover:text-white transition-all duration-300'
            }`}
        >
            {cat}
        </button>
    ))}
</div>


            <div className="mt-8 space-y-4 max-w-3xl mx-auto">
                {faqData.map((item, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg shadow-sm">
                        <button
                            onClick={() => setActiveIndex(activeIndex === index ? null : index as number)}
                            className={`w-full text-left px-5 py-4 flex items-center justify-between ${
                                activeIndex === index ? ' text-red-500 font-semibold' : 'text-black font-medium'
                            }`}
                        >
                            <span className="flex items-center space-x-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                    activeIndex === index ? 'bg-[#EC2027] text-white' : 'bg-white text-black'
                                }`}>
                                    {index + 1}
                                </div>
                                <span className="font-medium transition-all duration-300">{item.question}</span>
                            </span>
                            <span>{activeIndex === index ? <FiChevronUp size={24} className="text-red-500" /> : <FiChevronDown size={24} className="text-gray-600" />}</span>
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
            {item.answer}
        </motion.div>
    )}
</AnimatePresence>

                    </div>
                ))}
            </div>
        </section>
    )
}
