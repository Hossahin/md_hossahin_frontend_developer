import AboutSection from "@/components/AboutSection";
import BackgroundLock from "@/components/BackgroundLock";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <BackgroundLock />
      <div className="flex flex-col min-h-screen">
        {/* Navbar top */}
        <header>
          <Navbar></Navbar>
        </header>

        {/* Main content */}
        <main className="flex-1 w-full max-w-screen-2xl mx-auto">
          {/* Your main content goes here */}
          <HeroSection />
          <AboutSection />
        </main>

        {/* Footer */}
        <footer></footer>
      </div>
    </>
  );
};

export default page;
