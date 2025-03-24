"use client";
import { useState } from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
    HiOutlineMail,
    HiOutlinePhone,
    HiOutlineLocationMarker,
} from "react-icons/hi";

import avatar from "../public/Kanishk_avatar.png";
import modalAvatar from "../public/Photo_Kanishk.png";

export default function Sidebar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col items-center w-80 sidebar text-white min-h-screen p-8 shadow-lg rounded-xl">
            <div
                className="relative w-46 h-46 cursor-pointer transition-all hover:scale-105 rounded-[20px] overflow-hidden"
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

            <div className="flex flex-col items-center mt-6 space-y-2">
                <h2 className="text-[32px] font-bold text-center">
                    Kanishk Agarwal
                </h2>
                <p className="text-sm text-yellow-600  hover:text-yellow-400">
                    Harman International
                </p>
                <div className="mt-2 flex flex-col space-y-2 w-full items-center ">
                    <p className="text-sm font-semibold text-yellow-600  hover:text-yellow-400 bg-gray-800 px-6 py-2 rounded-lg w-3/4 text-center hover:scale-110 transition-transform">
                        Software Engineer
                    </p>
                    <p className="text-sm font-semibold text-yellow-600  hover:text-yellow-400 bg-gray-800 px-6 py-2 rounded-lg w-3/4 text-center hover:scale-110 transition-transform">
                        AI/ML Enthusiast
                    </p>
                </div>
            </div>
            <hr className="w-3/4 border-gray-600 mt-2" />

            <div className="mt-6 w-full space-y-4 text-sm text-gray-400">
                <div className="flex items-center space-x-3">
                    <HiOutlineMail className="text-yellow-600 text-lg" />
                    <span className="text-yellow-600 text-sm hover:text-yellow-400">
                        agarwalkanishk12345@gmail.com
                    </span>
                </div>
                <div className="flex items-center space-x-3">
                    <HiOutlinePhone className="text-yellow-500 text-lg" />
                    <a
                        href="tel:+918777082770"
                        className="hover:text-yellow-400 text-yellow-600 text-sm"
                    >
                        +91 87*** ***70
                    </a>
                </div>
                <div className="flex items-center space-x-3">
                    <HiOutlineLocationMarker className="text-yellow-600 text-lg" />
                    <span className="text-yellow-600 text-md hover:text-yellow-400">
                        Bangalore, India
                    </span>
                </div>
                <div className="flex items-center space-x-3">
                    <span>🎂</span>
                    <span className="text-yellow-600 text-sm hover:text-yellow-400">
                        17th May
                    </span>
                </div>
            </div>

            <div className="mt-6 flex space-x-6">
                <a
                    href="https://www.linkedin.com/in/kanishkaga/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:text-yellow-400 transition-transform hover:scale-110"
                >
                    <FaLinkedin size={28} />
                </a>
                <a
                    href="https://github.com/KanishkKa1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:text-yellow-400 transition-transform hover:scale-110"
                >
                    <FaGithub size={28} />
                </a>
            </div>

            {isModalOpen && (
                <div
                    className="fixed inset-0 modal flex justify-center items-center cursor-pointer"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="relative modal p-8 rounded-2xl shadow-xl border border-yellow-500 cursor-auto"
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
        </div>
    );
}
