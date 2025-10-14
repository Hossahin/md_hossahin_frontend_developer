import React from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import HireMe from "./HireMe";
import MyPhoto from "./MyPhoto";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center min-h-screen pt-24 md:pt-28 lg:pt-20 px-4 sm:px-6 md:px-8">
      <div className="flex-1 mt-8 md:mt-0 text-center md:text-left w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold md:w-full">
          <span className="text-animated-gradient">Frontend Developer</span>
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-gray-400 w-full sm:w-11/12 md:w-10/12 lg:w-4/5 mx-auto md:mx-0">
          I create responsive, modern, and user-friendly web experiences that
          captivate and engage.
        </p>

        <div className="mt-6 sm:mt-8 flex justify-center md:justify-start gap-3 sm:gap-4">
          <Link
            href={"https://www.linkedin.com/in/hossahin/"}
            target="_blank"
            className="text-white bg-blue-700/20 border border-blue-700 p-2 rounded-full hover:scale-105 hover:rotate-6 transition-all duration-300 ease-in-out"
          >
            <TiSocialLinkedin
              size={28}
              className="text-gray-400 hover:text-white"
            />
          </Link>
          <Link
            href={"https://github.com/Hossahin"}
            target="_blank"
            className="text-white bg-blue-700/20 border border-blue-700 p-2 rounded-full hover:scale-105 hover:rotate-6 transition-all duration-300 ease-in-out"
          >
            <FaGithub size={28} className="text-gray-400 hover:text-white" />
          </Link>
          <Link
            href={"https://wa.me/8801315163647"}
            target="_blank"
            className="text-white bg-blue-700/20 border border-blue-700 p-2 rounded-full hover:scale-105 hover:rotate-6 transition-all duration-300 ease-in-out"
          >
            <FaWhatsapp size={28} className="text-gray-400 hover:text-white" />
          </Link>
        </div>

        <div className="mt-8 sm:mt-10 flex justify-center md:justify-start">
          <HireMe />
        </div>
      </div>

      <div className="flex-1 flex justify-center md:justify-end items-center p-2 sm:p-4">
        <MyPhoto />
      </div>
    </div>
  );
};

export default HeroSection;
