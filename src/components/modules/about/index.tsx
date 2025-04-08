"use client"
import Image from "next/image";
import ProfileImg from "../../../app/assets/images/profile.png";
import { Languages, Mail, MapPin, Phone } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { useEffect, useState } from "react";

const About = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const size = windowWidth < 480 ? 20 :
        windowWidth < 640 ? 20 :
            windowWidth < 768 ? 50 :
                windowWidth < 1024 ? 100 :
                    windowWidth < 1440 ? 150 :
                        300;
    return (

        <section id="about" className="relative py-16 bg-gradient-to-br from-[#0c1445] to-[#021024] text-white rounded-lg md:mx-0 mx-4">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(2,155,192,0.2),_transparent)]"> </div>
            <BorderBeam
                duration={6}
                size={size}
                className="from-transparent via-[#34d29a] to-transparent"
            />
            <BorderBeam
                duration={6}
                delay={3}
                size={size}
                className="from-transparent via-[#60a5f9] to-transparent"
            />

            <div className="relative z-10 max-w-6xl px-8 mx-auto text-center">


                {/* Title */}
                <h2 className="text-4xl font-bold text-center text-[#019fc7] mb-12 relative">
                    About Me
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 border-b-2 border-white md:w-44 w-28"></span>
                </h2>

                {/* About Content */}
                <div className="flex flex-col items-center justify-center mt-12 lg:flex-row md:gap-12">

                    {/* Profile Image */}
                    <div
                        className="flex items-center justify-center relative p-2 transition-transform duration-500 rounded-full bg-gradient-to-r from-[#60a5f9] to-[#34d29a]"
                        data-aos="fade-right"
                    >


                        <Image
                            src={ProfileImg}
                            alt="Profile Image"
                            width={350}
                            height={350}
                            className="rounded-full"
                        />
                        <div className="absolute inset-0 rounded-full bg-white opacity-5 blur-lg"></div>
                    </div>

                    {/* Info Section */}
                    <div className="flex-1 mt-10 md:mt-0 lg:w-1/2" data-aos="fade-right">

                        <p className="mt-4 text-gray-300 leading-relaxed text-start">
                            Hi! I'm Badhon Roy, a passionate MERN Stack Developer focused on creating modern, responsive, and user-friendly web applications. I specialize in React.js, Node.js, Express.js, MongoDB, and Next.js.

                            I believe in writing clean, efficient code and prioritizing user experience in every project. I'm always eager to learn and grow in the fast-evolving world of web development.
                        </p>

                        <div className="grid md:grid-cols-2 text-start my-4 gap-4">
                            <p className="mb-3 px-4 py-2 rounded-lg bg-red-500/10 backdrop-blur-sm border border-red-500/20 text-red-400 flex items-center gap-2"><Mail /> roybadhon286@gmail.com</p>
                            <p className="mb-3 px-4 py-2 rounded-lg bg-pink-500/10 backdrop-blur-sm border border-pink-500/20 text-pink-400 flex items-center gap-2"><Phone /> 01825009171</p>
                            <p className="mb-3 px-4 py-2 rounded-lg bg-pink-500/10 backdrop-blur-sm border border-blue-500/20 text-[#60a5f9] flex items-center gap-2"><MapPin /> Dinajpur, Bangladesh</p>
                            <p className="mb-3 px-4 py-2 rounded-lg bg-pink-500/10 backdrop-blur-sm border border-green-500/20 text-[#34d29a] flex items-center gap-2"><Languages /> English (Fresher), Bangla (Native)</p>
                        </div>


                        {/* Stats Section */}
                        <div className="grid grid-cols-2 gap-6 mt-6 md:grid-cols-3">
                            <div className="p-4 text-center border rounded-lg shadow-xl bg-[#021024]/50 border-[#60a5f9]">
                                <h2 className="text-3xl font-bold text-white">10+</h2>
                                <p className="text-sm text-gray-300 mt-2">Total Projects</p>
                            </div>
                            <div className="p-4 text-center border rounded-lg shadow-xl bg-[#021024]/50 border-[#60a5f9]">
                                <h2 className="text-3xl font-bold text-white">1.5+</h2>
                                <p className="text-sm text-gray-300 mt-2">Years Experience</p>
                            </div>
                            <div className="p-4 text-center border rounded-lg shadow-xl bg-[#021024]/50 border-[#60a5f9]">
                                <h2 className="text-3xl font-bold text-white">2+</h2>
                                <p className="text-sm text-gray-300 mt-2">Certifications</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
