"use client"
import { Download } from "lucide-react";
import Image from "next/image";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";


const Home = () => {
    return (
        <div id="home" className="md:pt-32 pt-2">

            <div className="z-10 flex-row-reverse items-center justify-between gap-4 px-10 md:flex">


                <div className="relative">
                    <Image src={'https://anuragverma-portfolio.netlify.app/static/media/giphy.2e92bac81a336bfaf69e.gif'} alt="banner-image" width={500} height={500} />
                    <div className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-[#029bc0] to-[#00c4ff] transform scale-100 transition-transform duration-1000 hover:scale-110"></div>
                </div>

                <div className="flex-1 mt-8 text-center md:text-left">
                    <h4 className="z-10 text-2xl text-white md:text-3xl">Hello , I&apos;m</h4>
                    <h1 className="lg:text-[96px] md:text-7xl text-4xl font-bold text-white">Badhon Roy</h1>
                    <p className="md:text-[16px] text-[9px] font-bold text-[#029bc0] my-2">
                        <TypeAnimation
                            sequence={[
                                'Junior Web Developer 🤖',
                                1000,
                                'Front-end Developer 👨‍💻',
                                1000,
                                'React JS Developer 🤡',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        /></p>
                    <div className="flex items-center justify-center gap-4 px-10 md:justify-start">
                        <button className="hidden my-4 BTN md:block">
                            <Link to="contact" className="p-2 cursor-pointer md:text-xl" spy={true} smooth={true} offset={-150} duration={500}>
                                Hire me
                            </Link>
                        </button>
                        <button className="block my-4 BTN btn md:hidden">
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

            </div>
        </div>
    );
};

export default Home;