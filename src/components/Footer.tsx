import Image from 'next/image';
import React from 'react';
import { footerSections, socialLinks } from '@/data/footer.data';

const Footer = () => {
    const  date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="bg-[#222222] text-white">
            <div className="container mx-auto px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center space-x-2">
                            <Image src="/nsa-logo-light.svg" alt='north-star-logo' width={100} height={100} />
                        </div>
                        <p className="text-gray-300 text-[12px] md:text-[16px] text-justify">
                            Working to bring significant changes in online-based learning by doing extensive research for
                            traditional and preparation, student engagement, and looking forward to the flexible education.
                        </p>

                        <div className="space-y-3">
                            <p className="text-[#7C7C7C] text-[12px] font-medium">Follow us on</p>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className={`w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gray-600 ${social.color} group`}
                                    >
                                        <Image
                                            src={social.icon}
                                            alt='social-icon'
                                            width={25}
                                            height={20}
                                            className="transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="flex space-x-4 text-[10px] md:text-[14px]">
                            <button className="bg-[#EC2027] hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105">
                                Explore Courses
                            </button>
                            <button className="border border-[#EC2027] text-[#EC2027] hover:bg-[#EC2027] hover:text-white px-6 py-2 rounded-md font-medium transition-all duration-300 transform hover:scale-105">
                                Schedule a Call
                            </button>
                        </div>
                    </div>
                    {footerSections.map((section, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-[15px] md:text-[20px] font-semibold text-[#FFFFFF] mb-4 relative">
                                {section.title}
                            </h3>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            className="text-[#D9D9D9] hover:text-white text-[12px] md:text-[16px] transition-all duration-300 hover:translate-x-1 flex items-center group"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className=" pt-8 mb-8">
                    <div className="items-center space-y-4 md:space-y-0 md:space-x-8 ">
                        <div className="flex items-center space-x-2 text-gray-300">
                            <Image src="/images/footer/location.svg" alt='location' width={20} height={20} />
                            <span className="text-[14px] text-[#D9D9D9] md:text-[18px]">NorthStar Academy 9, Hosur Main Road, Bengaluru, Karnataka 560029</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-300 text-[12px] md:text-[14px]  text-[#939393] px-4 py-4">
                            <a href="tel:+919742470767" className=" hover:text-white transition-colors duration-300">
                                +918147470707
                            </a>
                            <a href="mailto:northstaracademy@gmail.com" className=" hover:text-white transition-colors duration-300">
                                nothstaracademy@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#4D4D4D] pt-6">
                    <div className="flex text-center items-center justify-center">
                        <p className="text-gray-400 text-sm">
                            NorthStar Academy © {year}. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;