"use client"
import { Link } from "react-scroll";
import LogoImg from "../../app/assets/images/personal_logo.png"
import Image from "next/image";
import { Linkedin, X } from "lucide-react";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <p className="divider"></p>
      <footer className="items-start justify-between p-6 text-white md:p-10 md:flex gap-0p-10 footer">
        <div className="flex-1">
          <Image className="w-[100px] mb-2 object-contain" src={LogoImg} alt="logo" width={100} height={100} />
          <h2 className="md:text-xl text-[18px] ">
            Front-end developer crafting responsive, user-focused websites. Connect with me on social media to collaborate and explore new ideas&quot;
          </h2>
          <div className="flex items-center gap-4">
            <div className="inline-block p-1 border rounded-lg">
              <a href="https://www.linkedin.com/in/badhon-roy-515303297/" target="_blank" rel="noopener noreferrer">
                <span className="text-4xl"><Linkedin/></span>
              </a>
            </div>
            <div className="inline-block p-1 border rounded-lg">
              <a href="https://twitter.com/BadhonRoy40241" target="_blank" rel="noopener noreferrer">
                <span className="text-4xl"><X /></span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-around flex-1 gap-10">
          <nav>
            <header className="footer-title">Quick Links</header>
            <div className="flex flex-col items-center gap-2">
              <Link to="home" className="p-2 underline cursor-pointer" spy={true} smooth={true} offset={-150} duration={500}>
                Home
              </Link>
              <Link to="about" className="p-2 underline cursor-pointer" spy={true} smooth={true} offset={-150} duration={500}>
                About
              </Link>
              <Link to="contact" className="underline cursor-pointer" spy={true} smooth={true} offset={-150} duration={500}>
                Contact
              </Link>
            </div>
          </nav>
          <nav>
            <header className="mb-4 text-center footer-title">Contact Me</header>
            <div className="space-y-4">
              <a className="flex items-center gap-2 link link-hover">  <X className="text-xl font-bold text-white" />roybadhon@gmail.com</a>
              <a className="flex items-center gap-2 link link-hover">  <X
               className="text-xl font-bold text-white" />01825009171</a>
              <a className="flex items-center gap-2 link link-hover">  <X className="text-xl font-bold text-white" />Dinajpur , Bangladesh</a>
            </div>

          </nav>
        </div>
      </footer>
      <div>
        <p className="divider"></p>
        <p className="pb-10 text-center text-white">Copyright &copy; 2024 - All right reserved by Badhon Roy</p>
      </div>
    </div>
  );
};

export default Footer;