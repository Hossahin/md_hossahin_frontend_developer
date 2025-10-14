import React from "react";
import { GoDownload } from "react-icons/go";
import { IoCodeSlash } from "react-icons/io5";
const AboutSection = () => {
  return (
    <div className="mt-12 px-4 sm:px-6 md:px-8 rounded-lg">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-animated-gradient">
        About Me
      </h2>

      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-gray-400 w-full sm:w-11/12 md:w-10/12 lg:w-3/4 mx-auto leading-relaxed">
        I'm a Frontend Developer creating modern, responsive, and user-friendly
        websites with clean, maintainable code. Skilled in React, Tailwind CSS,
        and Firebase, I deliver fast, accessible digital experiences. Passionate
        about growth, I'm expanding into full-stack development to build
        scalable, secure web applications.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8 justify-center">
        <button
          className="flex justify-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 lg:px-10 lg:py-4 gap-2 items-center font-bold bg-blue-500 text-white rounded-lg
             cursor-pointer transition-all duration-300 ease-in-out 
             hover:bg-blue-600 hover:shadow-lg hover:text-white shadow-blue"
        >
          Resume <GoDownload size={18} className="sm:text-lg md:text-xl" />
        </button>
        <button
          className="flex justify-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 lg:px-10 lg:py-4 gap-2 items-center font-bold bg-blue-500/10 text-blue-400 border border-blue-500 rounded-lg
             cursor-pointer transition-all duration-300 ease-in-out 
             hover:bg-blue-500 hover:text-white shadow-blue"
        >
          Projects <IoCodeSlash size={18} className="sm:text-lg md:text-xl" />
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
