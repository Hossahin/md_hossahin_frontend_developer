import Image from "next/image";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { FaCode, FaGithub } from "react-icons/fa6";
import BlurText from "./BlurText";
import { BorderBeam } from "./ui/border-beam";

export default function ProjectsSection() {
  const projects = [
    {
      name: "AppOrbit",
      img: "/projects/AppOrbit.png",
      live: "https://assignment-12-apporbit.web.app/",
      details: "/projects/appOrbit/details",
      subDescription:
        "Community-driven platform to discover, review, and share Web Apps, AI tools, software, and games.",
      description:
        "Tech Discovery Platform — A modern, community-driven platform for discovering, sharing, and reviewing the latest technology products. Inspired by Product Hunt, this platform empowers tech enthusiasts to explore innovations across Web Apps, AI tools, Software, Games, and Mobile Apps.",
      keyHighlights: [
        "Product submission and management system",
        "Upvote and rating functionality driven by community feedback",
        "Honest, detailed user reviews",
        "Role-based dashboards for Users, Moderators, and Admins",
        "Moderation tools to maintain content quality",
        "Stripe payment integration for premium access",
        "Trending & featured product sections",
        "Real-time review updates",
        "Analytics dashboard for product owners",
      ],
      technologies: ["React", "JavaScript", "Firebase", "Express", "MongoDB"],
      clientSide: "https://github.com/Hossahin/apporbit",
      serverSide: "https://github.com/Hossahin/apporbit-server",
    },
    {
      name: "HelpingHub",
      img: "/projects/HelpingHub.png",
      live: "https://assignment-11-category-10.web.app/",
      details: "/projects/HelpingHub/details",
      subDescription:
        "HelpingHub is a volunteer platform to create, join, and manage opportunities with Firebase authentication.",
      description:
        "Volunteer Management Platform HelpingHub is a web platform where users can create, manage, and join volunteer opportunities. Users can post volunteer needs, sign up for others’ posts, and manage their activities in a simple, organized way.",
      keyHighlights: [
        "Create, read, update, delete volunteer posts",
        "Search and join volunteer opportunities",
        "Protected routes using Firebase Auth",
        "Fully responsive and mobile-friendly design",
        "Dark and light theme toggle",
      ],
      technologies: ["React", "JavaScript", "Firebase", "Express", "MongoDB"],
      clientSide: "https://github.com/Hossahin/HelpingHub-Project-Clients",
      serverSide: "https://github.com/Hossahin/HelpingHub-Project-Server",
    },
    {
      name: "HobbyHub",
      img: "/projects/HobbyHub.png",
      live: "https://assignment-papaya.web.app/",
      details: "/projects/HobbyHub/details",
      subDescription:
        "HobbyHub lets users find, join, and create hobby groups with responsive design and real-time features.",
      description:
        "Local Hobby Group Organizer HobbyHub is a platform to find, join, and create local hobby groups like art, reading, and cooking. It offers a clean, responsive design with dark/light modes, Firebase authentication, and real-time group management for a seamless user experience.",
      keyHighlights: [
        "Hero slider banner",
        "Six featured groups of the day",
        "Animated statistics using CountUp",
        "Why People Love HobbyHub testimonial section",
        "Browse all user-created groups",
        "Firebase pre-fills user name and email",
      ],
      technologies: ["React", "JavaScript", "Firebase", "Express", "MongoDB"],
      clientSide: "https://github.com/Hossahin/HobbyHub-Project-Client",
      serverSide: "https://github.com/Hossahin/HobbyHub-Project-Server",
    },
  ];

  return (
    <div className="px-4 mt-12">
      {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-center text-animated-gradient">
        Projects Showcase
      </h2> */}
      

      <div className="w-full flex justify-center">
          <div className="text-center">
            <BlurText
              text="Projects Showcase"
              delay={500}
              animateBy="words"
              direction="top"
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 inline-block"
            />
          </div>
        </div>

      <p className="text-lg lg:text-xl text-center text-gray-400  w-full lg:w-3/4 mx-auto leading-relaxed">
        A selection of my top projects highlighting my skills in modern web
        development and design.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden p-2 lg:p-6 bg-blue-700/10 border border-blue-600/30 rounded-lg max-w-md mx-auto md:max-w-none md:w-full transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
          >
            <BorderBeam
              duration={8}
              size={400}
              borderWidth={3}
              reverse
              className="from-transparent via-blue-400/70 to-transparent blur-[2px]"
            />

            {/* Image container */}
            {/* Image container with full-screen preview */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="rounded-lg w-full overflow-hidden relative aspect-[4/3] cursor-pointer hover:scale-105 transition-transform duration-300">
                  <Image
                    src={project.img}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </DialogTrigger>

              <DialogOverlay className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
              <DialogContent className="!max-w-none w-full h-full p-0 bg-transparent flex justify-center items-center">
                <Image
                  src={project.img}
                  alt={project.name}
                  fill
                  className="object-contain max-h-full max-w-full"
                />
              </DialogContent>
            </Dialog>

            <h1 className="mt-4 text-lg sm:text-xl font-semibold text-blue-700">
              {project.name}
            </h1>
            <p className="mt-2 text-gray-400 text-sm sm:text-base leading-relaxed">
              {project.subDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              <Link
                href={project.live}
                target="_blank"
                className="flex-1 flex justify-center items-center gap-1 px-4 py-2 rounded-lg bg-blue-700/20 border border-blue-500 text-blue-700 font-medium transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:shadow-lg hover:border-transparent hover:underline"
              >
                Live Demo <LuExternalLink />
              </Link>

              <div className="flex-1 flex justify-center items-center gap-1 ">
                <Dialog>
                  <DialogTrigger className="w-full flex justify-center items-center gap-2 cursor-pointer px-4 py-2 rounded-lg bg-blue-700 border border-blue-500 text-white font-medium transition-all duration-300 ease-in-out hover:bg-blue-700/20 hover:text-blue-700 hover:shadow-lg hover:border-blue-700 hover:underline">
                    Details <FaArrowRight />
                  </DialogTrigger>
                  <DialogOverlay className="fixed inset-0 bg-black/40 backdrop-blur-sm opacity-0 data-[state=open]:opacity-100 transition-opacity duration-600" />

                  <DialogContent className="!max-w-none w-[80vw] h-[80vh] p-6 rounded-xl bg-gray-800 border border-blue-700/40 overflow-hidden">
                    <DialogHeader>
                      <DialogTitle className="text-gray-200 text-2xl md:text-3xl font-bold">
                        Project Details
                      </DialogTitle>
                    </DialogHeader>

                    <ScrollArea className="h-[calc(80vh-6rem)] pr-2">
                      <div className="bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg space-y-8">
                        {/* Project Title & Overview */}

                        <section>
                          <h1 className="text-3xl font-bold text-blue-400 border-b-4 border-blue-400 pb-1 inline-block">
                            {project?.name}
                          </h1>
                          <p className="mt-4 text-gray-300 leading-relaxed">
                            {project?.description}
                          </p>

                          <div className="mt-4">
                            <h2 className="text-xl font-semibold text-blue-400 mb-3">
                              Key Highlights
                            </h2>
                            <ul className="space-y-2">
                              {project.keyHighlights?.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-gray-300 text-sm sm:text-base md:text-lg"
                                >
                                  <FaCheckCircle className="text-blue-400 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-1" />
                                  <span className="flex-1">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </section>

                        {/* Technologies */}
                        <section>
                          <h1 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-blue-400 border-b-4 w-fit border-blue-400 pb-1">
                            <FaCode /> Technologies Used
                          </h1>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {project.technologies?.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-4 py-1 rounded-lg bg-blue-400/10 border border-blue-400 text-blue-400 font-medium 
              cursor-pointer transition-all duration-300 ease-in-out 
              hover:bg-blue-500 hover:text-white hover:shadow-lg"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </section>

                        {/* Links */}
                        <section className="flex flex-col sm:flex-row gap-4">
                          <Link
                            href={project.clientSide}
                            target="_blank"
                            className="flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white font-medium 
          transition-all duration-300 hover:bg-blue-400 hover:shadow-lg w-full sm:w-auto"
                          >
                            <FaGithub /> Client
                          </Link>
                          <Link
                            href={project.serverSide}
                            target="_blank"
                            className="flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-transparent border border-blue-400 text-blue-400 font-medium 
          transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg w-full sm:w-auto"
                          >
                            <FaGithub /> Server
                          </Link>
                        </section>
                        {/* live link */}
                        <section className="mt-4">
                          <Link
                            href={project.live}
                            target="_blank"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                          >
                            Live Demo <LuExternalLink className="w-5 h-5" />
                          </Link>
                        </section>
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
