import React from "react";
import { Link } from "react-scroll";

const HireMe = () => {
  return (
    <Link
      to="contactme"
      spy={true}
      duration={1000}
      offset={-80}
      className="flex justify-center px-3 py-1 md:px-4 md:py-2 lg:px-6 lg:py-2 gap-1 items-center font-bold bg-blue-500 text-white rounded-lg
                 cursor-pointer transition-all duration-300 ease-in-out 
                 hover:bg-blue-400 hover:shadow-lg hover:text-white shadow-blue"
    >
      Hire Me
    </Link>
  );
};

export default HireMe;
