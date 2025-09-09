"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { navLinks } from "@/data/navlink.data";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                    <Link href="/">
                        <img src="/nsa-logo-dark.svg" alt="Logo" className="h-10" />
                    </Link>
                    <button className="hidden lg:flex items-center bg-red-600 text-white px-4 py-2 rounded-lg">
                        Courses <FiChevronDown className="ml-1" />
                    </button>
                </div>
                <div className="flex items-center space-x-4">
                    <nav className="hidden lg:flex space-x-6 text-[15px]">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}>
                                {link.label}
                            </Link>
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
                    <button
                        className="lg:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="lg:hidden bg-gray-50 border-t">
                    <nav className="flex flex-col space-y-2 p-4 font-regular">
                        <button className="flex items-center bg-red-600 text-white px-4 py-2 rounded w-fit">
                            Courses <FiChevronDown className="ml-1" />
                        </button>

                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}>
                                {link.label}
                            </Link>
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
    );
}
