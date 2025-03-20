"use client";

import { Download } from "lucide-react";
import Image from "next/image";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import BannerImg from "../../../app/assets/images/banner.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section
            id="home"
            className="relative flex items-center justify-center h-screen px-8 md:px-16 text-white"
        >
            <div className="z-10 flex flex-col-reverse items-center justify-between w-full gap-8 md:flex-row">

                {/* LEFT CONTENT */}
                <div className="flex-1 text-center md:text-left" data-aos="fade-right">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#029bc0] rounded-full animate-pulse"></div>
                        <h4 className="text-xl font-semibold md:text-2xl text-[#029bc0] font-mono">
                            Welcome, to my world,
                        </h4>
                    </div>
                    <h1 className="text-4xl font-bold md:text-7xl lg:text-[80px] my-4">
                        Badhon Roy
                    </h1>
                    <p className="text-[#029bc0] font-bold md:text-2xl text-lg my-4">
                        <TypeAnimation
                            sequence={[
                                "A Passionate Web Developer 🚀",
                                1000,
                                "Building Awesome UI/UX 🎨",
                                1000,
                                "React & MERN Stack Enthusiast 💻",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </p>
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                        I specialize in **crafting dynamic user experiences** and **building modern web applications**. I love solving problems and creating visually appealing, functional designs.
                    </p>

                    {/* BUTTONS */}
                    <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start mt-6">
                        <button className="my-4 BTN">
                            <Link to="contact" className="p-2 cursor-pointer md:text-xl" spy={true} smooth={true} offset={-150} duration={500}>
                                Hire me
                            </Link>
                        </button>

                        <a
                            className="flex items-center gap-2 BTN btn"
                            href="https://drive.google.com/uc?export=download&id=1V-QJGQSKLJhxuUuVShPB_DXw5Qz6ihQZ"
                            download="Badhon Roy Resume.pdf">
                            Download CV
                            <Download className="text-xl" />
                        </a>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex-1 flex justify-center items-center">
                    <Image
                        src={BannerImg}
                        alt="Badhon Roy"
                        width={600}
                        height={600}
                        data-aos="zoom-in"
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;
