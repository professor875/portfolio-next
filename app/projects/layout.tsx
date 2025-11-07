"use client";

import Image from "next/image";
import Link from "next/link";
import icon from "@/public/mk.png";

function ProjectNav() {

    return (
        <div
            className="sticky top-5 md:top-10 z-50 p-1 px-8 border border-white/30 rounded-full mt-7 bg-black/80 shadow-lg text-xl font-bold flex justify-between items-center"
        >
            {/* Logo */}
            <Image
                src={icon}
                alt="MK Logo"
                className="w-[30px] scale-180 md:w-[70px] md:scale-180"
            />

            <Link href='/' className="text-sm md:text-xl">Home</Link>
        </div>
    );
}


export default function RootLayout({children}: { children: React.ReactNode }) {
    return (<>

        {ProjectNav()}

        <main className="my-10 max-w-[1100px] mx-auto">{children}</main>
    </>);
}
