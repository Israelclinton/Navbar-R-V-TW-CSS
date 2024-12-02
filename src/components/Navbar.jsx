import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-4 py-6">
      <div className="container flex justify-between ">
        <div className="flex items-center">
          {/* <img
            src="your-logo.png"
            alt="Logo"
            className="h-10 w-auto mr-4"
          /> */}
          <span className="font-bold text-3xl">Brand</span>
        </div>
        <div
          className={`fixed top-0 left-0 w-80 h-full bg-gray-900 flex flex-col justify-center items-center space-y-6 transform ${
            isMobile ? "translate-x-0" : "-translate-x-full"
          } transition-transform lg:transform-none lg:relative lg:flex lg:flex-row lg:space-y-0 lg:space-x-6 lg:bg-transparent`}
        >
          <a
            href="#home"
            className="text-xl hover:text-gray-400 lg:text-base"
            onClick={() => setIsMobile(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-xl hover:text-gray-400 lg:text-base"
            onClick={() => setIsMobile(false)}
          >
            About
          </a>
          <a
            href="#services"
            className="text-xl hover:text-gray-400 lg:text-base"
            onClick={() => setIsMobile(false)}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="text-xl hover:text-gray-400 lg:text-base"
            onClick={() => setIsMobile(false)}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="text-xl hover:text-gray-400 lg:text-base"
            onClick={() => setIsMobile(false)}
          >
            Contact
          </a>
        </div>

        {/* Hamburger Menu */}
        <div
          className="text-2xl cursor-pointer lg:hidden"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
