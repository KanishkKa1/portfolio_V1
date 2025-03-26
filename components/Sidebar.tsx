"use client";
import { useState } from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
    HiOutlineOfficeBuilding,
    HiOutlineMail,
    HiOutlinePhone,
    HiOutlineLocationMarker,
} from "react-icons/hi";

import avatar from "../public/Kanishk_avatar.png";
import modalAvatar from "../public/Photo_Kanishk.png";

export default function Sidebar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col items-center w-full md:w-80 sidebar text-white min-h-screen p-8 shadow-lg rounded-xl bg-gradient-to-b from-gray-800 to-gray-900">
            {/* Avatar Section */}
            <div
                className="relative w-46 h-46 cursor-pointer transition-all hover:scale-105 hover:rotate-3 rounded-[20px] overflow-hidden shadow-lg hover:shadow-yellow-500"
                onClick={() => setIsModalOpen(true)}
            >
                <Image
                    src={avatar}
                    alt="Profile Picture"
                    width={184}
                    height={184}
                    className="rounded-[20px] border-4 border-gray-700"
                    priority
                />
            </div>

            {/* Name and Titles */}
            <div className="flex flex-col items-center mt-6 space-y-2">
                <h2 className="text-[36px] font-extrabold text-center tracking-wide">
                    Kanishk Agarwal
                </h2>
                <div className="mt-2 flex flex-col space-y-2 w-full items-center">
                    <p className="text-sm font-medium text-yellow-500 uppercase tracking-wider bg-gray-800 px-6 py-2 rounded-lg w-3/4 text-center hover:scale-110 transition-transform">
                        Software Engineer
                    </p>
                    <p className="text-sm font-medium text-yellow-500 uppercase tracking-wider bg-gray-800 px-6 py-2 rounded-lg w-3/4 text-center hover:scale-110 transition-transform">
                        AI/ML Enthusiast
                    </p>
                </div>
            </div>
            <hr className="w-3/4 border-gray-600 mt-2" />

            {/* Contact Information */}
            <div className="mt-6 w-full space-y-4 text-sm text-gray-400">
                <div className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                    <HiOutlineOfficeBuilding className="text-yellow-600 text-lg" />
                    <span className="text-yellow-600 text-sm hover:text-yellow-400">
                        Harman International
                    </span>
                </div>
                <div className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                    <HiOutlineMail className="text-yellow-600 text-lg" />
                    <a
                        href="mailto:agarwalkanishk12345@gmail.com"
                        className="text-yellow-600 text-sm hover:text-yellow-400"
                    >
                        agar******@gmail.com
                    </a>
                </div>
                <div className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                    <HiOutlinePhone className="text-yellow-500 text-lg" />
                    <a
                        href="tel:+918777082770"
                        className="hover:text-yellow-400 text-yellow-600 text-sm"
                    >
                        +91 87*** ***70
                    </a>
                </div>
                <div className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                    <HiOutlineLocationMarker className="text-yellow-600 text-lg" />
                    <span className="text-yellow-600 text-md hover:text-yellow-400">
                        Bangalore, India
                    </span>
                </div>
                <div className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                    <span>🎂</span>
                    <span className="text-yellow-600 text-sm hover:text-yellow-400">
                        17th May
                    </span>
                </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex space-x-6">
                <a
                    href="https://www.linkedin.com/in/kanishkaga/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-400 transition-transform hover:scale-110 relative group"
                >
                    <FaLinkedin size={28} />
                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        LinkedIn
                    </span>
                </a>
                <a
                    href="https://github.com/KanishkKa1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-400 transition-transform hover:scale-110 relative group"
                >
                    <FaGithub size={28} />
                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        GitHub
                    </span>
                </a>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 modal flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm cursor-pointer animate-fade-in"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="relative modal p-8 rounded-2xl shadow-xl border border-yellow-500 bg-gray-800 cursor-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={modalAvatar}
                            alt="Profile Picture"
                            width={350}
                            height={350}
                            className="rounded-xl border-4 border-yellow-500"
                        />
                    </div>
                </div>
            )}

            {/* Footer */}
            <div className="mt-auto text-xs text-gray-500">
                © 2025 Kanishk Agarwal. All rights reserved.
            </div>
        </div>
    );
}
