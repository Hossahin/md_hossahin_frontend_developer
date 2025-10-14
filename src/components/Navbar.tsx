import React from "react";
import { GoDownload } from "react-icons/go";

const Navbar = () => {
  const navLinks = (
    <>
      <li>Home</li>
      <li>About</li>
      <li>Skills</li>
      <li>Projects</li>
      <li>Contact</li>
    </>
  );
  return (
    <div className="navbar flex justify-center items-center w-11/12 mx-auto bg-black/30 backdrop-blur-md px-2 sm:px-4 fixed top-0 left-1/2 -translate-x-1/2 z-10 border border-blue-700 rounded-full mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-50 mt-3 w-52 p-2 shadow text-white"
          >
            {navLinks}
          </ul>
        </div>

        <p className="text-xl text-white pl-0 md:pl-5">Hossahin</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4 text-white">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end pr-4">
        <a
          href="/File/Resume.pdf"
          download="Resume.pdf"
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
