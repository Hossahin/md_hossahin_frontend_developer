import React from "react";
import { GoDownload } from "react-icons/go";
import { BorderBeam } from "./ui/border-beam";
import { SparklesText } from "./ui/sparkles-text";
import { ShimmerButton } from "./ui/shimmer-button";

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
    <div className="w-full bg-black/30 backdrop-blur-md fixed top-0 left-1/2 -translate-x-1/2 z-20 mt-2">
      <div className="navbar relative overflow-hidden max-w-screen-2xl mx-auto flex justify-center items-center border border-blue-700 rounded-full">
        <BorderBeam
          duration={6}
          size={400}
          borderWidth={2.5}
          className="from-transparent via-sky-400/80 to-transparent blur-[1px]"
        />
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

          <div className="relative pl-0 md:pl-5 inline-block w-fit">
            <SparklesText
              sparklesCount={5} // increase for full coverage
              colors={{
                first: "#38bdf8",
                second: "#a855f7",
              }}
              className="relative text-2xl text-white tracking-wide z-10"
            >
              Md Hossahin
            </SparklesText>

            {/* optional glow backdrop */}
            <div className="absolute inset-0 blur-[8px] bg-gradient-to-r from-sky-400/10 via-purple-500/10 to-pink-500/10 rounded-md"></div>
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
    </div>
  );
};

export default Navbar;
