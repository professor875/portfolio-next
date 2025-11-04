import Image from "next/image";
import Link from "next/link";
import icon from "../public/mk.png"
import settingSvg from "../public/setting.svg"

export default function Home() {
    return (<>
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

        <div className="w-full flex justify-between items-center py-16">
            <div className="flex-1 flex justify-center flex-col xl:px-0 sm:px-16 px-6">
                <div className="flex justify-between items-center w-full text-white mb-3">
                    <h1 className="flex-1 font-semibold sm:text-[52px] text-[52px] text-black leading-[40px] [text-shadow:2px_2px_8px_white]">
                        Hi, there!<br className="sm:block hidden"/> I am
                    </h1>
                </div>

                <h1 className="font-semibold sm:text-[68px] text-[52px] text-white sm:leading-[80px] leading-[80px] w-full [text-shadow:4px_4px_4px_black]">
                    <span className="name-gradient">Mubashir Khan</span>
                </h1>
                <p className="text-[18px] leading-[30.8px] max-w-[470px] mt-5 [text-shadow:2px_2px_4px_black]">
                    Full Stack Engineer from Pakistan: Bridging the Gap Between Developers and Operations While Crafting the Future of Seamless Deployments.
                </p>
            </div>

            <div className="relative z-index-[5] h-[90%]">

            </div>
        </div>

        </>
        );
        }
