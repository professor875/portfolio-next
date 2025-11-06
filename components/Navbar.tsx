"use client";

import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {motion, AnimatePresence} from "framer-motion";
import icon from "@/public/mk.png";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="sticky md:top-10 z-50">
            {/* Top Navbar */}
            <div
                className=" top-10 p-1 px-8 border border-white/30 rounded-full mt-7 bg-black/80 shadow-lg text-xl font-bold flex justify-between items-center"
            >
                {/* Logo */}
                <Image
                    src={icon}
                    alt="MK Logo"
                    className="w-[30px] scale-180 md:w-[70px] md:scale-180"
                />

                {/* Desktop Nav */}
                <div className="items-center justify-between gap-8 hidden md:inline-flex">
                    <Link href={"#skills"}>Skills</Link>
                    <Link href={"#projects"}>Projects</Link>
                    <Link href={"#contact"}>Contact</Link>
                </div>

                {/* Mobile Nav Button */}
                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="white"
                            stroke="white"
                            strokeLinecap="round"
                            strokeWidth="1.5"
                            d="M4 7h16M4 12h16M4 17h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu (Animated) */}
            <div className="relative">
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{scaleY: 0, opacity: 0}}
                            animate={{scaleY: 1, opacity: 1}}
                            exit={{scaleY: 0, opacity: 0}}
                            transition={{duration: 0.4, ease: "easeInOut"}}
                            className="absolute w-full origin-top md:hidden bg-black/80 backdrop-blur-md border border-white/20 rounded-2xl mt-3 p-6 text-center space-y-4 shadow-lg"
                        >
                            <Link
                                href={"#skills"}
                                onClick={() => setMenuOpen(false)}
                                className="block hover:text-cyan-400 transition hover:bg-white/10 py-1"
                            >
                                Skills
                            </Link>
                            <Link
                                href={"#projects"}
                                onClick={() => setMenuOpen(false)}
                                className="block hover:text-cyan-400 transition hover:bg-white/10 py-1"
                            >
                                Projects
                            </Link>
                            <Link
                                href={"#contact"}
                                onClick={() => setMenuOpen(false)}
                                className="block hover:text-cyan-400 transition hover:bg-white/10 py-1"
                            >
                                Contact
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
