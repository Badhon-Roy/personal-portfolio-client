"use client";

import { Download } from "lucide-react";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatedSpan, TypingAnimation } from "@/components/magicui/terminal";
import { SparklesText } from "@/components/magicui/sparkles-text";
const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section
            id="home"
            className="relative flex items-center justify-center min-h-screen px-4 text-white"
        >

            <div className="z-10 flex flex-col-reverse items-center justify-between w-full gap-8 lg:flex-row md:mt-0 mt-32">



                {/* LEFT CONTENT */}
                <div className="flex-1 text-center md:text-left relative" data-aos="fade-right">
                    <div className="inline-block animate-bounce absolute -top-15 right-10">
                        <div className="px-4 py-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-400">
                            ✨ Clean Code
                        </div>
                    </div>
                    <div className="inline-block animate-bounce absolute top-40 right-10">
                        <div className="px-4 py-2 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400">
                            💡 Continuous Learning
                        </div>
                    </div>
                    <div className="border inline-block px-4 py-2 bg-[#131c2f] rounded-full border-gray-600">
                        <SparklesText className="font-semibold md:text-start text-center text-sm" text="🎉 Welcome, to my world" />
                    </div>
                    <h1 className="text-4xl mt-8 font-bold md:text-7xl lg:text-[80px] my-4 bg-gradient-to-r from-[#60a5f9] to-[#34d29a] text-transparent bg-clip-text">
                        <span className="text-white">I'm</span> Badhon Roy
                    </h1>




                    <p className="text-[#60a5f9] font-medium md:text-xl my-4 border-[1px] border-[#60a5f9] inline-block px-4 py-2 rounded-full bg-[#041826]">
                        <TypeAnimation
                            sequence={[
                                "A Passionate Web Developer",
                                1000,
                                "MERN Stack Developer",
                                1000,
                                "Next JS Developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </p>

                    <p className="md:text-xl text-gray-200 leading-relaxed">
                        I craft dynamic, user-friendly web experiences with the MERN stack and Next.js, blending performance with aesthetics to build modern, seamless applications.
                    </p>

                    {/* BUTTONS */}
                    <div className="flex items-center justify-center md:gap-4 gap-2 md:justify-start mt-6">
                        <button className="my-4 BTN">
                            <Link to="contact" className="md:p-2 cursor-pointer md:text-xl" spy={true} smooth={true} offset={-150} duration={500}>
                                Hire me
                            </Link>
                        </button>

                        <a
                            className="flex items-center gap-2 BTN btn"
                            href="https://drive.google.com/uc?export=download&id=13-9fSHB_8xJzhpJ0xXx4b-P9w3Ezz7Wl"
                            download>
                            Download CV
                            <Download className="text-xl md:block hidden" />
                        </a>

                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex-1 gap-10 w-full">
                    <div className="relative bg-gradient-to-tr from-[#60a5f9] via-[#4cbace] to-[#34d29a] p-[2px] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                        <div className="bg-[#091121] backdrop-blur-xl text-[#D4D4D4] rounded-xl font-mono leading-relaxed relative transition-all duration-300">


                            <div className="flex items-center space-x-2 px-6 py-3 bg-[#0a2338] rounded-t-xl" >
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                <span className="text-sm text-gray-400 ml-4">developer.js</span>
                            </div>

                            {/* Code Content */}
                            <div className="whitespace-pre-wrap tracking-wide space-y-1 p-6">
                                <TypingAnimation delay={0}>{`const profile = {`}</TypingAnimation>

                                <AnimatedSpan delay={500} className="flex items-center">
                                    &nbsp;&nbsp;<span className="text-[#efbe53]">name</span>: <span className="text-[#a5d6ff]">'Badhon Roy'</span>,
                                </AnimatedSpan>

                                <AnimatedSpan delay={1000} className="flex items-center">
                                    &nbsp;&nbsp;<span className="text-[#efbe53]">title</span>: <span className="text-[#a5d6ff]">'Full-Stack Developer | MERN Developer | Next Js Developer'</span>,
                                </AnimatedSpan>

                                <AnimatedSpan delay={1500} className="flex items-center">
                                    &nbsp;&nbsp;<span className="text-[#efbe53]">skills</span>: [
                                </AnimatedSpan>

                                <AnimatedSpan delay={1800} className="flex items-center">
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a5d6ff]">'React'</span>, <span className="text-[#a5d6ff]">'NextJS'</span>, <span className="text-[#a5d6ff]">'Redux'</span>, <span className="text-[#a5d6ff]">'Node'</span>, <span className="text-[#a5d6ff]">'Express'</span>,
                                </AnimatedSpan>

                                <AnimatedSpan delay={2100} className="flex items-center">
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a5d6ff]">'JavaScript'</span>, <span className="text-[#a5d6ff]">'TypeScript'</span>, <span className="text-[#a5d6ff]">'MongoDB'</span>,
                                </AnimatedSpan>

                                <AnimatedSpan delay={2400} className="flex items-center">
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a5d6ff]">'Git'</span>, <span className="text-[#a5d6ff]">'GitHub'</span>, <span className="text-[#a5d6ff]">'Postman'</span>
                                </AnimatedSpan>

                                <AnimatedSpan delay={2700}>&nbsp;&nbsp;],</AnimatedSpan>

                                <AnimatedSpan delay={3000} className="flex items-center">
                                    &nbsp;&nbsp;<span className="text-[#efbe53]">hardWorker</span>: <span className="text-blue-400">true</span>,
                                </AnimatedSpan>

                                <AnimatedSpan delay={3300} className="flex items-center">
                                    &nbsp;&nbsp;<span className="text-[#efbe53]">quickLearner</span>: <span className="text-blue-400">true</span>,
                                </AnimatedSpan>

                                <AnimatedSpan delay={3600} className="flex items-center">
                                    &nbsp;&nbsp;<span className="text-[#efbe53]">problemSolver</span>: <span className="text-blue-400">true</span>,
                                </AnimatedSpan>

                                <AnimatedSpan delay={3900} className="flex items-center">
                                    &nbsp;&nbsp;<span className="text-[#efbe53]">yearsOfExperience</span>: <span className="text-purple-400">2</span>,
                                </AnimatedSpan>

                                <AnimatedSpan delay={4200} className="flex items-center">
                                    &nbsp;&nbsp;<span className="text-[#a5d6ff]">hireable</span>: <span className="text-pink-500">function</span>() {"{"}
                                </AnimatedSpan>

                                <AnimatedSpan delay={4500} className="flex items-center">
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-500">return</span> (
                                </AnimatedSpan>

                                <AnimatedSpan delay={4800} className="flex items-center">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a5d6ff]">this</span>.hardWorker &amp;&amp;
                                </AnimatedSpan>

                                <AnimatedSpan delay={5100} className="flex items-center">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a5d6ff]">this</span>.problemSolver &amp;&amp;
                                </AnimatedSpan>

                                <AnimatedSpan delay={5400} className="flex items-center">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a5d6ff]">this</span>.skills.length &gt;= <span className="text-purple-400">3</span> &amp;&amp;
                                </AnimatedSpan>

                                <AnimatedSpan delay={5700}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;);
                                </AnimatedSpan>

                                <AnimatedSpan delay={6000}>
                                    &nbsp;&nbsp;{"},"}
                                </AnimatedSpan>

                                <TypingAnimation delay={6300}>{"};"}</TypingAnimation>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Home;
