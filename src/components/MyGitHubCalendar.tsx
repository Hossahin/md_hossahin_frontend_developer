"use client";

import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import BlurText from "./BlurText";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { FiExternalLink, FiGitBranch, FiActivity } from "react-icons/fi";

const MyGitHubCalendar = () => {
  const [blockSize, setBlockSize] = useState(12);

  useEffect(() => {
    const updateBlockSize = () => {
      const width = window.innerWidth;
      if (width < 640) setBlockSize(8);
      else if (width < 1024) setBlockSize(12);
      else setBlockSize(15);
    };
    updateBlockSize();
    window.addEventListener("resize", updateBlockSize);
    return () => window.removeEventListener("resize", updateBlockSize);
  }, []);

  return (
    <section className="relative mt-12 px-4 overflow-hidden rounded-xl">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-62.5 h-37.5 bg-blue-600/10 blur-[120px] rounded-full opacity-50" />
      <div className="absolute bottom-0 right-0 w-31.25 h-31.25 bg-purple-600/10 blur-[120px] rounded-full opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-medium mb-3 backdrop-blur-md"
          >
            <FiActivity className="animate-pulse" />
            <span className="flex items-center gap-2">
              LIVE REPO ACTIVITY
              <span className="relative flex w-3 h-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex w-3 h-3 rounded-full bg-blue-500"></span>
              </span>
            </span>
          </motion.div>

          <BlurText
            text="My GitHub Journey"
            delay={500}
            animateBy="words"
            direction="top"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          />

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 w-full md:w-4/5 lg:w-3/5 leading-relaxed">
            Tracking my coding journey one commit at a time — showcasing
            dedication, growth, and impactful contributions.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Contribution Graph */}
          <motion.div
            whileHover={{ y: -4 }}
            className="lg:col-span-3 p-4 md:p-6 rounded-3xl bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-white/5 backdrop-blur-xl shadow-2xl relative group overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start md:items-center gap-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-blue-400">
                  <FiGitBranch size={24} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Contribution Graph
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Activity across all repositories
                  </p>
                </div>
              </div>

              <Link
                href="https://github.com/Hossahin"
                target="_blank"
                className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors"
              >
                View Profile{" "}
                <FiExternalLink className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="overflow-x-auto flex justify-center">
              <div className="min-w-[320px] sm:min-w-125 md:min-w-162.5 lg:min-w-200 text-gray-400 pt-4">
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
          </motion.div>

          {/* Streak Card */}
          <motion.div
            whileHover={{ y: -4 }}
            className="lg:col-span-2 rounded-3xl bg-gradient-to-br from-gray-900/80 to-blue-900/20 border border-white/5 backdrop-blur-xl flex flex-col justify-center items-center p-4 md:p-6 min-h-[200px]"
          >
            <div className="w-full aspect-4/1 sm:aspect-4/1 lg:aspect-4/1 relative">
              <Image
                src="https://nirzak-streak-stats.vercel.app?user=Hossahin&theme=transparent&hide_border=true&date_format=j%20M%5B%20Y%5D"
                alt="GitHub Streak"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </motion.div>

          {/* GitHub Follow Card */}
          <motion.div
            whileHover={{ y: -4 }}
            className="hidden lg:flex p-6 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 border border-white/10 flex-col justify-between group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <FaGithub size={100} />
            </div>

            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Connect on GitHub
              </h3>
              <p className="text-blue-100/70 text-sm sm:text-base">
                Connect to see real-time coding activity, personal projects, and
                open-source contributions.
              </p>
            </div>

            <Link
              href="https://github.com/Hossahin"
              target="_blank"
              className="mt-6 bg-white text-blue-600 px-5 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-center group-hover:bg-blue-50 transition-colors relative z-10"
            >
              Follow @Hossahin
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MyGitHubCalendar;
