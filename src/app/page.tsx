import AboutSection from "@/components/AboutSection";
import BackgroundLock from "@/components/BackgroundLock";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import Skills from "@/components/Skills";
import React from "react";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <BackgroundLock />
      <div className="flex flex-col min-h-screen">
        {/* Navbar top */}
        <header>
          <Navbar/>
        </header>

        {/* Main content */}
        <main className="flex-1 w-full max-w-screen-2xl mx-auto">
          {/* Your main content goes here */}
          <HeroSection />
          <AboutSection />
          <Skills />
          <PortfolioShowcase />
          <ContactSection />
        </main>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default page;
