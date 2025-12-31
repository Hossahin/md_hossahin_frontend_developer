"use client";

import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import BlurText from "./BlurText";
import Image from "next/image";

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
          <div className="min-w-[320px] sm:min-w-[500px] md:min-w-[650px] lg:min-w-[800px] text-gray-400">
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
          <div className="w-full sm:w-[420px] aspect-[3/1] relative">
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

        <p className="text-center text-sm text-gray-500 mt-8">
          “Consistency is the key to growth — every commit counts.”
        </p>
      </div>
    </section>
  );
};

export default MyGitHubCalendar;
