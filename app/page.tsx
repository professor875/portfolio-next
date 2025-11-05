import Image from "next/image";
import Link from "next/link";
import icon from "../public/mk.png"
import meImg from "../public/me.png"
import meImg1 from "../public/me1.png"
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

            <div className="w-full flex-col md:flex-row flex justify-between items-center py-16">
                <div className="flex-1 flex justify-center flex-col xl:px-0 sm:px-16 px-6">
                    <div className="flex justify-between items-center w-full text-white mb-3">
                        <h1 className="flex-1 font-semibold sm:text-[52px] text-[52px] text-black leading-[40px] [text-shadow:2px_2px_8px_white]">
                            Hi, there!<br className="sm:block hidden"/> I am
                        </h1>
                    </div>

                    <h1 className="font-semibold sm:text-[68px] text-[52px] text-white sm:leading-[80px] leading-[80px] w-full [text-shadow:4px_4px_4px_black]">
                        <span className="name-gradient">Mubashir Khan</span>
                    </h1>
                    <p className="text-[18px] leading-[30.8px] max-w-[470px] mt-5 [text-shadow:4px_4px_8px_black]">
                        Full Stack Engineer —
                        Building
                        Seamless Web Experiences Powered by Clean Code, Smart Systems, and Artificial Intelligence.</p>
                </div>

                <div
                    className="group rounded-full relative bg-black shadow-lg max-w-[400px] hover:shadow-2xl hover:shadow-[rgb(22, 189, 174)] transition-all duration-300">
                    <Image
                        src={meImg}
                        alt="MK Logo"
                        className="rounded-full  aspect-square object-contain hover:scale-110 transition-all duration-300 relative"
                    />
                    <Image
                        src={meImg1}
                        alt="MK Logo"
                        className=" rounded-full  aspect-square object-contain hover:scale-110 duration-600 absolute inset-0 opacity-0 hover:opacity-100 transition-all"
                    />

                </div>
            </div>

            <h1 className="mb-5 font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px] [text-shadow:4px_4px_4px_black]">Skills</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div
                    className="bg-black/70 border-2 border-white/30 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-4 text-cyan-400">🧱 Frontend Development</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><b>Languages:</b> HTML5, CSS3, JavaScript (ES6+), TypeScript</li>
                        <li><b>Frameworks:</b> Vue.js, Nuxt.js, React.js, Next.js, Alpine.js, jQuery</li>
                        <li><b>Styling:</b> SCSS/SASS, Tailwind CSS, Bootstrap, Vuetify, Bladewind UI</li>
                    </ul>
                </div>

                <div
                    className="bg-black/70 border-2 border-white/30 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-4 text-green-400">⚙️ Backend Development</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><b>Languages:</b> PHP, Python</li>
                        <li><b>Frameworks:</b> Laravel, Livewire, Filament</li>
                        <li><b>Databases:</b> MySQL, PostgreSQL, MongoDB, Redis</li>
                        <li><b>APIs:</b> RESTful APIs, Laravel Sanctum/Passport</li>
                    </ul>
                </div>

                <div
                    className="bg-black/70 border-2 border-white/30 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-4 text-yellow-400">☁️ DevOps & Cloud</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>AWS (EC2, S3, etc.)</li>
                        <li>Docker</li>
                        <li>Hostinger Deployment</li>
                        <li>Git, GitHub & GitLab</li>
                    </ul>
                </div>

                <div
                    className="bg-black/70 border-2 border-white/30 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-4 text-purple-400">🔍 Search & Data Tools</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>Typesense</li>
                        <li>Algolia</li>
                        <li>Supabase (Database & Auth)</li>
                    </ul>
                </div>

                <div
                    className="bg-black/70 border-2 border-white/30 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-4 text-pink-400">🧠 Other Skills</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>Responsive & Accessible UI Design</li>
                        <li>Performance Optimization</li>
                        <li>Deployment Automation</li>
                        <li>Database Design & Query Optimization</li>
                    </ul>
                </div>

                <div
                    className="bg-black/70 border-2 border-white/30 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-4 text-white">🎨 Animations & Graphics</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>3D & Visuals: Three.js, tsParticles / Particles.js</li>
                        <li>Animations: Framer Motion, AOS (Animate On Scroll)</li>
                        <li>Interactive UI: Parallax effects, smooth scroll, motion-based transitions</li>
                    </ul>
                </div>
            </div>

        </>
    );
}
