"use client";

import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import BlurText from "./BlurText";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";

const MyGitHubCalendar = () => {
  const [blockSize, setBlockSize] = useState(12);

  useEffect(() => {
    const updateBlockSize = () => {
      const width = window.innerWidth;
      if (width < 640) setBlockSize(12);
      else if (width < 1024) setBlockSize(16);
      else setBlockSize(20);
    };

    updateBlockSize();
    window.addEventListener("resize", updateBlockSize);
    return () => window.removeEventListener("resize", updateBlockSize);
  }, []);

  return (
    <section className="relative mt-12 m-4 px-4 sm:px-6 md:px-8 py-10 bg-gray-900/30 border border-blue-700/30 rounded-xl overflow-hidden">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl"></div>
      <div className="relative z-10">
        <div className="w-full flex justify-center">
          <div className="text-center">
            <BlurText
              text="My GitHub Contributions"
              delay={500}
              animateBy="words"
              direction="top"
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 inline-block"
            />
          </div>
        </div>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
          A visual representation of my daily coding activity on GitHub.
          I&apos;m passionate about open-source and continuous learning.
        </p>

        <div className="overflow-x-auto flex justify-center">
          <div className="min-w-[320px] sm:min-w-125 md:min-w-162.5 lg:min-w-200 text-gray-400">
            <GitHubCalendar
              username="hossahin"
              blockSize={blockSize}
              blockMargin={5}
              blockRadius={3}
              fontSize={12}
              colorScheme="dark"
              hideTotalCount={false}
              hideColorLegend={false}
              hideMonthLabels={false}
              showWeekdayLabels={true}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6 flex-wrap">
          {/* GitHub Stats */}
          {/* <div className="w-full sm:w-[420px] aspect-[3/1] relative">
            <Image
              src="https://github-readme-stats.vercel.app/api?username=Hossahin&theme=transparent&hide_border=true&include_all_commits=false&count_private=false"
              alt="GitHub Stats"
              fill
              className="rounded-lg object-contain"
              unoptimized
            />
          </div> */}

          {/* GitHub Streak */}
          <div className="w-full sm:w-105 aspect-3/1 relative">
            <Image
              src="https://nirzak-streak-stats.vercel.app/?user=Hossahin&theme=transparent&hide_border=true"
              alt="GitHub Streak"
              fill
              className="rounded-lg object-contain"
              unoptimized
            />
          </div>

          {/* Most Used Languages */}
          {/* <div className="w-full sm:w-[420px] aspect-[3/1] relative">
            <Image
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Hossahin&theme=transparent&hide_border=true&include_all_commits=false&count_private=false&layout=compact"
              alt="Most Used Languages"
              fill
              className="rounded-lg object-contain"
              unoptimized
            />
          </div> */}
        </div>

        {/* Follow on Github */}
        <div className="flex justify-center items-center animate-bounce">
          <motion.div
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="relative"
          >
            <Link
              href="https://github.com/Hossahin"
              target="_blank"
              className="group inline-flex items-center gap-2 text-sm font-medium text-blue-500"
            >
              {/* Icon */}
              <motion.span
                variants={{
                  rest: { scale: 1, opacity: 0.8 },
                  hover: { scale: 1.15, opacity: 1 },
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaGithub className="text-lg" />
              </motion.span>

              {/* Text */}
              <span className="relative">
                Follow me on GitHub
                {/* Animated underline */}
                <motion.span
                  variants={{
                    rest: { width: 0 },
                    hover: { width: "100%" },
                  }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="absolute left-0 -bottom-1 h-0.5 bg-blue-500"
                />
              </span>
              <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-blue-500"></span>
              </span>
            </Link>

            {/* Soft glow */}
            <motion.div
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 -z-10 rounded-lg blur-md bg-blue-500/20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MyGitHubCalendar;
