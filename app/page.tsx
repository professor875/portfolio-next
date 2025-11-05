import Image from "next/image";
import Link from "next/link";
import icon from "../public/mk.png"
import meImg from "../public/me.png"
import meImg1 from "../public/me1.png"
import SkillsSection from "../components/Skills";
import ProjectsSection from "../components/Projects";

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

            <div className="w-full flex-col md:flex-row flex justify-between items-center py-16 gap-5">
                <div className="flex-1 flex justify-center flex-col xl:px-0 sm:px-16 px-6">
                    <div className="flex justify-between items-center w-full text-white mb-3">
                        <h1 className="flex-1 font-semibold sm:text-[52px] text-[52px] text-black leading-[40px] [text-shadow:2px_2px_8px_white]">
                            Hi, there!<br className="sm:block hidden"/> I am
                        </h1>
                    </div>

                    <h1 className="font-semibold sm:text-[68px] text-[52px] text-white sm:leading-[80px] leading-[80px] w-full [text-shadow:4px_4px_4px_black]">
                        <span className="name-gradient">Mubashir Khan</span>
                    </h1>
                    <p className="text-[18px] leading-[20.8px] max-w-[470px] mt-5 [text-shadow:4px_4px_8px_black]">
                        <b className="font-bold text-cyan-400">Full Stack Engineer — </b> <br/>
                        I build intelligent, scalable web experiences powered by clean code and <b
                        className="font-bold text-cyan-400">AI innovation</b>. br I care deeply about every project I
                        take on — and <b className="font-bold text-cyan-400">I’m not satisfied until you are</b>. Let’s
                        build something you’ll be proud to launch.</p>
                </div>

                <div
                    className="group rounded-full relative bg-black shadow-lg max-w-[400px] hover:shadow-2xl hover:shadow-[rgb(22, 189, 174)] transition-all duration-300">
                    <Image
                        src={meImg}
                        alt="MK Logo"
                        className="rounded-full  aspect-square object-contain transition-all duration-300 relative"
                    />
                    <Image
                        src={meImg1}
                        alt="MK Logo"
                        className=" rounded-full  aspect-square object-contain hover:scale-110 duration-600 absolute inset-0 opacity-0 hover:opacity-100 transition-all"
                    />

                </div>
            </div>

            <h1 className="mb-5 font-semibold sm:text-[55px] text-[45px] text-white sm:leading-[80px] leading-[80px] [text-shadow:4px_4px_4px_black]">Skills</h1>

            <SkillsSection/>

            {/*<ProjectsSection />*/}

            <div className="grid md:grid-cols-2 gap-8 mt-20 mx-auto max-w-[1100px]">
                <div className="text-[22px]">
                    <h3 className="font-bold md:text-[45px] text-[45px] text-white md:leading-[80px] leading-[80px] [text-shadow:4px_4px_4px_black]">All Creative Works.</h3>

                    <p className="responsive mt-1 [text-shadow:4px_4px_4px_black]">Here's some of my projects that I have worked on.</p>

                    <p className="responsive text-cyan-400 cursor-pointer [text-shadow:4px_4px_4px_black]">Explore more <span
                        className="text-2xl font-medium">→</span></p>
                </div>


                <div className="border-2 border-white shadow-xl w-full grid rounded-[10px] overflow-hidden bg-black p-8">
                    <Image src={meImg1} alt="myimage" className="w-full aspect-square object-cover"/>

                    <div className="flex justify-between items-center my-2">
                        <h3 className="text-xl">Capital Club</h3>
                        <p>-+</p>
                    </div>

                    <hr className="border border-white/30 w-full my-2"/>

                    <p className="text-white/60">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur illo in iure qui quod suscipit ut voluptatum! Hic in, iure laborum neque numquam quasi repellat sapiente sint tempore voluptate.</p>
                </div>

                <div className="border-2 border-white shadow-xl w-full grid rounded-[10px] overflow-hidden bg-black p-8 translate-y-[-50%]">
                    <Image src={meImg1} alt="myimage" className="w-full aspect-square object-cover"/>

                    <div className="flex justify-between items-center my-2">
                        <h3 className="text-xl">Capital Club</h3>
                        <p>-+</p>
                    </div>

                    <hr className="border border-white/30 w-full my-2"/>

                    <p className="text-white/60">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur illo in iure qui quod suscipit ut voluptatum! Hic in, iure laborum neque numquam quasi repellat sapiente sint tempore voluptate.</p>
                </div>

                <div className="border-2 border-white shadow-xl w-full grid rounded-[10px] overflow-hidden bg-black p-8">
                    <Image src={meImg1} alt="myimage" className="w-full aspect-square object-cover"/>

                    <div className="flex justify-between items-center my-2">
                        <h3 className="text-xl">Capital Club</h3>
                        <p>-+</p>
                    </div>

                    <hr className="border border-white/30 w-full my-2"/>

                    <p className="text-white/60">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur illo in iure qui quod suscipit ut voluptatum! Hic in, iure laborum neque numquam quasi repellat sapiente sint tempore voluptate.</p>
                </div>


            </div>


        </>
    );
}
