"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { navLinks } from "@/data/navlink.data";
import FinanceCourses from "./Common/financeCourses";
import { motion } from "framer-motion";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showCoursesModal, setShowCoursesModal] = useState(false);

    const chevronVariants = {
        open: {
            rotate: 180,
        },
        closed: {
            rotate: 0,
        },
    };

    return (
        <>
            <header className=" sticky top-0 z-50 bg-white shadow relative">
                <div className="container mx-auto flex items-center justify-between p-4">
                    <div className="flex items-center space-x-4">
                        <Link href="/">
                            <img src="/nsa-logo-dark.svg" alt="Logo" className="h-10" />
                        </Link>

                        <button
                            className="hidden lg:flex items-center bg-red-600 text-white px-4 py-2 rounded-lg"
                            onClick={() => setShowCoursesModal(true)}
                        >
                            Courses <motion.span
                                animate={showCoursesModal ? "open" : "closed"}
                                variants={chevronVariants}
                                className="ml-1"
                            >
                                <FiChevronDown />
                            </motion.span>
                        </button>
                    </div>

                    <div className="flex items-center space-x-4">
                        <nav className="hidden lg:flex space-x-6 text-[15px]">
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href}>{link.label}</Link>
                            ))}
                        </nav>
                        <a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden lg:flex items-center bg-green-600 text-white px-4 py-2 rounded-lg"
                        >
                            <FaWhatsapp className="mr-2" /> Live Chat
                        </a>
                        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                        </button>
                    </div>
                </div>

                {menuOpen && (
                    <div className="lg:hidden bg-gray-50 border-t">
                        <nav className="flex flex-col space-y-2 p-4 font-regular">
                            <button
                                className="flex items-center bg-red-600 text-white px-4 py-2 rounded w-fit"
                                onClick={() => setShowCoursesModal(!showCoursesModal)}
                            >
                                Courses<motion.span
                                    animate={showCoursesModal ? "open" : "closed"}
                                    variants={chevronVariants}
                                    className="ml-1"
                                >
                                    <FiChevronDown />
                                </motion.span>
                            </button>

                            {showCoursesModal && navLinks.map((link) => (
                                <Link key={link.href} href={link.href}>{link.label}</Link>
                            ))}

                            <a
                                href="https://wa.me/1234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center bg-green-600 text-white px-4 py-2 rounded w-fit"
                            >
                                <FaWhatsapp className="mr-2" /> Live Chat
                            </a>
                        </nav>
                    </div>
                )}
            </header>

            {showCoursesModal && (
                <div className="fixed inset-0 z-50 flex items-start justify-center top-18">
                    <div className="bg-white w-full md:w-4/5 lg:w-5/5 shadow-2xl  relative overflow-y-auto">
                        <button
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                            onClick={() => setShowCoursesModal(false)}
                        >
                        <FiX size={24} />
                        </button>
                        <FinanceCourses />
                    </div>
                </div>
            )}
        </>
    );
}
const dropdownVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    closed: {
        opacity: 0,
        y: 15,
        transition: {
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
            when: "afterChildren",
        },
    },
};

const chevronVariants = {
    open: { rotate: 180, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
    closed: { rotate: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

