"use client";
import Image from "next/image";
import React from "react";
import { GoDownload } from "react-icons/go";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from "react-scroll";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link
          to="home"
          spy={true}
          duration={1000}
          offset={-80}
          activeClass="text-blue-400 font-bold border-b-2 border-blue-400 pb-1 transition-all duration-300"
          className="cursor-pointer hover:text-blue-400 hover:scale-110 transition-all duration-300"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="about"
          spy={true}
          duration={1000}
          offset={-80}
          activeClass="text-blue-400 font-bold border-b-2 border-blue-400 pb-1 transition-all duration-300"
          className="cursor-pointer hover:text-blue-400 hover:scale-110 transition-all duration-300"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          spy={true}
          duration={1000}
          offset={-80}
          activeClass="text-blue-400 font-bold border-b-2 border-blue-400 pb-1 transition-all duration-300"
          className="cursor-pointer hover:text-blue-400 hover:scale-110 transition-all duration-300"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          spy={true}
          duration={1000}
          offset={-120}
          activeClass="text-blue-400 font-bold border-b-2 border-blue-400 pb-1 transition-all duration-300"
          className="cursor-pointer hover:text-blue-400 hover:scale-110 transition-all duration-300"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          spy={true}
          duration={1000}
          offset={-80}
          activeClass="text-blue-400 font-bold border-b-2 border-blue-400 pb-1 transition-all duration-300"
          className="cursor-pointer hover:text-blue-400 hover:scale-110 transition-all duration-300"
        >
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar max-w-screen-2xl mx-auto flex justify-center items-center bg-black/30 backdrop-blur-md fixed top-0 left-1/2 -translate-x-1/2 z-50 md:mt-1.5 border border-blue-700/40 md:rounded-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="cursor-pointer pl-4 lg:hidden"
          >
            <MdOutlineMenu size={24} className="text-white" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-10 mt-3 w-52 p-2 shadow text-white gap-5"
          >
            {navLinks}
          </ul>
        </div>

        <div className="relative pl-0 md:pl-2 inline-block w-fit">
          {/* <h3 className="text-2xl md:text-3xl font-bold text-gray-400 tracking-wide">
            <span className="text-blue-500">&lt;</span>
            Md <span className="text-blue-500">Hossahin</span>
            <span className="text-blue-500">/&gt;</span>
          </h3> */}

          <Image
            src="/favicon.png"
            alt="Md Hossahin"
            width={45}
            height={45}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4 text-white">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end pr-4">
        <a
          href="/File/md_hossahin_frontend_developer.pdf"
          download="md_hossahin_frontend_developer.pdf"
          className="flex justify-center px-3 py-1 md:px-4 md:py-2 lg:px-6 lg:py-2 gap-1 items-center font-bold bg-blue-500 text-white rounded-lg
                         cursor-pointer transition-all duration-300 ease-in-out 
                         hover:bg-blue-400 hover:shadow-lg hover:text-white shadow-blue"
        >
          Resume <GoDownload size={20} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
