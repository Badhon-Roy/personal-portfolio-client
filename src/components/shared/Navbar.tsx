"use client";

import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import LogoImg from "../../app/assets/images/personal_logo.png";

const Navbar = () => {
  return (
    <div className="py-2 md:px-10 px-2 z-30 md:flex justify-between items-center sticky md:top-5 top-0 bg-opacity-10 bg-gray-100 backdrop-filter backdrop-blur-lg">
      <div>
        <ScrollLink to="home" spy={true} smooth={true} offset={-150} duration={500}>
          <Image className="w-[65px] hidden md:inline-block" src={LogoImg} alt="logo-image" width={65} height={65} />
        </ScrollLink>
      </div>
      <ul className="flex justify-center items-center md:gap-5 gap-1 md:text-base text-sm bg-[#314245] px-5 py-2 rounded-full text-white">
        {["home", "about", "skills", "resume", "project", "contact"].map((section, index) => (
          <ScrollLink
            key={index}
            to={section}
            activeClass="underline-animation text-[#029bc0] font-bold"
            className={`p-2 cursor-pointer ${section === "project" ? "hidden md:block" : ""}`}
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            hashSpy={true}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </ScrollLink>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
