import Image from "next/image";

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
    name: "Tailwind CSS",
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
];

const Skills = () => {
  return (
    <div className="mt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-animated-gradient">
          My Skills
        </h2>

        <p className="text-lg lg:text-xl text-center text-gray-400 mb-2 md:mb-4  w-full lg:w-3/4 mx-auto leading-relaxed">
          Here are some of the technologies and tools I work with:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group relative flex flex-col items-center justify-center bg-gray-800 rounded-xl p-4 w-full overflow-hidden
              transform transition-all duration-500 ease-in-out
              hover:-translate-y-2 hover:shadow-2xl
              ${skill.shadowColor} hover:shadow-lg`}
            >
              {/* Background overlay for subtle effect */}
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
      </div>
    </div>
  );
};

export default Skills;
