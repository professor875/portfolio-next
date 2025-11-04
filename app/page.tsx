import Image from "next/image";
import icon from "../public/mk.png"
import Link from "next/link";

export default function Home() {
    return (
        <div
            className="p-1 px-8 border border-white/30 rounded-full mt-7 bg-black/40 shadow-lg text-xl font-bold flex justify-between items-center">
            <Image
                src={icon}
                alt="MK Logo"
                className="w-[70px] scale-180"
            />
            <div className="flex items-center justify-between gap-8">
                <Link href={"#"}>Skills</Link>
                <Link href={"#"}>Projects</Link>
                <Link href={"#"}>Education</Link>
                <Link href={"#"}>Contact Us</Link>
            </div>
        </div>
    );
}
