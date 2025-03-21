"use client";

import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import LogoImg from "../../app/assets/images/personal_logo.png";
import { useState } from "react";
import { MenuIcon, SidebarClose } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    setIsOpen(false); 
  };

  return (
    <>
      <div className="container mx-auto py-2 md:px-10 px-2 z-30 md:flex justify-between items-center sticky md:top-5 top-0 bg-opacity-10 bg-[#154059b6] backdrop-filter backdrop-blur-lg hidden">
        <div>
          <ScrollLink to="home" spy={true} smooth={true} offset={-150} duration={500}>
            <Image className="w-[65px] hidden md:inline-block" src={LogoImg} alt="logo-image" width={65} height={65} />
          </ScrollLink>
        </div>
        <ul className="flex justify-center items-center md:gap-5 gap-1 md:text-base text-sm bg-[#314245] border px-5 py-2 rounded-full text-white">
          {["home", "about", "skills", "resume", "project", "blog", "contact"].map((section, index) => (
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
      {/* Mobile Drawer */}
      <div className="relative z-40 md:hidden">
        {/* Drawer Toggle Button */}
        <button
          onClick={toggleDrawer}
          className="fixed z-50 p-3 bg-[#029bc0] text-white rounded-full top-4 right-4 shadow-md"
        >
          <MenuIcon size={24} />
        </button>

        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Close Button */}
          <button
            onClick={toggleDrawer}
            className="absolute top-4 left-4 p-3 bg-[#029bc0] text-white rounded-full shadow-md"
          >
            <SidebarClose size={24} />
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col px-6 mt-20 space-y-6 font-bold">
            {["home", "about", "skills", "resume", "project", "blog", "contact"].map((section, index) => (
              <ScrollLink
                key={index}
                to={section}
                activeClass="underline-animation text-[#029bc0] font-bold"
                className={`p-2 cursor-pointer text-black ${section === "project" ? "hidden md:block" : ""}`}
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                hashSpy={true}
                onClick={handleNavClick} // Close the drawer when any link is clicked
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
