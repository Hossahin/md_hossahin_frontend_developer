"use client";
import Image from "next/image";
import BlurText from "./BlurText";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import { FaStream, FaTh } from "react-icons/fa";

const skills = [
  {
    name: "HTML",
    icon: "/skilIcon/HTML.png",
    shadowColor: "shadow-orange-500/40",
  },
  {
    name: "CSS",
    icon: "/skilIcon/CSS.png",
    shadowColor: "shadow-blue-500/40",
  },
  {
    name: "JavaScript",
    icon: "/skilIcon/JavaScript.png",
    shadowColor: "shadow-yellow-500/40",
  },
  {
    name: "Tailwind",
    icon: "/skilIcon/TailwindCSS.png",
    shadowColor: "shadow-cyan-500/40",
  },
  {
    name: "React",
    icon: "/skilIcon/React.png",
    shadowColor: "shadow-sky-500/40",
  },
  {
    name: "Firebase",
    icon: "/skilIcon/Firebase.png",
    shadowColor: "shadow-amber-500/40",
  },
  {
    name: "Node.js",
    icon: "/skilIcon/NodeJs.png",
    shadowColor: "shadow-green-500/40",
  },
  {
    name: "Express.js",
    icon: "/skilIcon/ExpressJs.png",
    shadowColor: "shadow-gray-500/40",
  },
  {
    name: "MongoDB",
    icon: "/skilIcon/MongoDB.png",
    shadowColor: "shadow-green-700/40",
  },
  {
    name: "Next.js",
    icon: "/skilIcon/NextJs.png",
    shadowColor: "shadow-gray-800/40",
  },
  {
    name: "TypeScript",
    icon: "/skilIcon/TypeScript.png",
    shadowColor: "shadow-blue-700/40",
  },
];

const Skills = () => {
  const [layout, setLayout] = useState("flex");
  return (
    <div className="mt-12">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-animated-gradient">
          My Skills
        </h2> */}

        <div className="flex justify-center">
          <BlurText
            text="My Skills"
            delay={500}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          />
        </div>

        <p className="text-lg lg:text-xl text-center text-gray-400 mb-2 md:mb-4  w-full lg:w-3/4 mx-auto leading-relaxed">
          Here are some of the technologies and tools I work with:
        </p>

        {/* Layout */}
        <div className="flex flex-col sm:flex-row gap-2 mb-6">
          <button
            onClick={() => setLayout("flex")}
            className={`flex items-center justify-center cursor-pointer gap-2 px-4 py-2 rounded w-full sm:w-auto ${
              layout === "flex"
                ? "bg-blue-500 text-white"
                : "bg-gray-900 text-white"
            }`}
          >
            <FaStream /> Flex Layout
          </button>
          <button
            onClick={() => setLayout("grid")}
            className={`flex items-center justify-center cursor-pointer gap-2 px-4 py-2 rounded w-full sm:w-auto ${
              layout === "grid"
                ? "bg-blue-500 text-white"
                : "bg-gray-900 text-white"
            }`}
          >
            <FaTh /> Grid Layout
          </button>
        </div>

        {/* Skills Grid */}
        {layout === "grid" && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-6 justify-items-center">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`group relative flex flex-col items-center justify-center bg-gray-800 rounded-xl p-4 w-full overflow-hidden
              transform transition-all duration-500 ease-in-out
              hover:-translate-y-2 hover:shadow-2xl
              ${skill.shadowColor} hover:shadow-lg`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3 relative">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white text-center tracking-wide">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Marquee Flex Box */}
        {layout === "flex" && (
          <>
            <div className="relative overflow-visible">
              <div
                className="overflow-hidden border border-gray-700 py-6"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "100% 100%",
                  maskImage:
                    "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
                  maskRepeat: "no-repeat",
                  maskSize: "100% 100%",
                }}
              >
                <Marquee
                  pauseOnHover
                  speed={80}
                  gradient={false}
                  className="!overflow-visible [&>div]:!overflow-visible [&>div>div]:!overflow-visible"
                >
                  <div className="flex gap-6 sm:gap-10 px-4 overflow-visible">
                    {skills.map((skill, index) => (
                      <div
                        key={index}
                        className={`group relative flex flex-col items-center justify-center h-full
                    rounded-2xl p-6 w-30 sm:w-35 md:w-48 backdrop-blur-md
                    bg-white/5 border border-white/10 
                    transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                    hover:-translate-y-3 hover:scale-[1.05] hover:z-20
                    ${skill.shadowColor}`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                        <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 mb-3 transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3">
                          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,white_0%,transparent_60%)] opacity-0 group-hover:opacity-30 blur-md transition-all duration-500"></div>
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            fill
                            className="object-contain"
                            priority
                          />
                        </div>
                        <h3 className="relative z-10 text-sm sm:text-base font-semibold text-white tracking-wide text-center group-hover:text-cyan-300 transition-colors duration-300">
                          {skill.name}
                        </h3>
                      </div>
                    ))}
                  </div>
                </Marquee>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Skills;
