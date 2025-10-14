import React from "react";
import Link from 'next/link'

const HireMe = () => {
  return (
    <Link
      className="flex justify-center px-3 py-1 md:px-4 md:py-2 lg:px-6 lg:py-2 gap-1 items-center font-bold bg-blue-500 text-white rounded-lg
                 cursor-pointer transition-all duration-300 ease-in-out 
                 hover:bg-blue-400 hover:shadow-lg hover:text-white shadow-blue"
      href="#contact"
    >
      Hire Me
    </Link>
  );
};

export default HireMe;
