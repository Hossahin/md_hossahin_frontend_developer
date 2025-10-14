import Image from "next/image";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";

export default function ProjectsSection() {
  const projects = [
    {
      name: "AppOrbit",
      img: "/projects/AppOrbit.png",
      live: "https://assignment-12-apporbit.web.app/",
      details: "/projects/appOrbit/details",
      description:
        "Community-driven platform to discover, review, and share Web Apps, AI tools, software, and games.",
    },
    {
      name: "HelpingHub",
      img: "/projects/HelpingHub.png",
      live: "https://assignment-11-category-10.web.app/",
      details: "/projects/HelpingHub/details",
      description:
        "HelpingHub is a volunteer platform to create, join, and manage opportunities with Firebase authentication.",
    },
    {
      name: "HobbyHub",
      img: "/projects/HobbyHub.png",
      live: "https://assignment-papaya.web.app/",
      details: "/projects/HobbyHub/details",
      description:
        "HobbyHub lets users find, join, and create hobby groups with responsive design and real-time features.",
    },
  ];

  return (
    <div className="px-4 mt-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-center text-animated-gradient">
        Projects Showcase
      </h2>

      <p className="text-lg lg:text-xl text-center text-gray-400  w-full lg:w-3/4 mx-auto leading-relaxed">
        A selection of my top projects highlighting my skills in modern web
        development and design.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-2 lg:p-6 bg-blue-700/10 border border-blue-600/50 rounded-lg max-w-md mx-auto md:max-w-none md:w-full transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Image container */}
            <div className="rounded-lg w-full overflow-hidden relative aspect-[4/3]">
              <Image
                src={project.img}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>

            <h1 className="mt-4 text-lg sm:text-xl font-semibold text-blue-700">
              {project.name}
            </h1>
            <p className="mt-2 text-gray-400 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              <Link
                href={project.live}
                target="_blank"
                className="flex-1 flex justify-center items-center gap-1 px-4 py-2 rounded-lg bg-blue-700/20 border border-blue-500 text-blue-700 font-medium transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:shadow-lg hover:border-transparent hover:underline"
              >
                Live Demo <LuExternalLink />
              </Link>
              <Link
                href={project.details}
                className="flex-1 flex justify-center items-center gap-1 px-4 py-2 rounded-lg bg-blue-700 border border-blue-500 text-white font-medium transition-all duration-300 ease-in-out hover:bg-blue-700/20 hover:text-blue-700 hover:shadow-lg hover:border-blue-700 hover:underline"
              >
                Details <FaArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
