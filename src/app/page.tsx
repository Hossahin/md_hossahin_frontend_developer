import AboutSection from "@/components/AboutSection";
import BackgroundLock from "@/components/BackgroundLock";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import Skills from "@/components/Skills";
import React from "react";
import Footer from "@/components/Footer";
import MyGitHubCalendar from "@/components/MyGitHubCalendar";
import Animation from "@/components/Animation";

const page = () => {
  return (
    <>
      <BackgroundLock />
      <div className="flex flex-col min-h-screen">
        {/* Navbar top */}
        <header>
          <Navbar />
        </header>

        {/* Main content */}
        <main className="flex-1 w-full max-w-screen-2xl mx-auto">
          <Animation type="zoomOut" duration={1.5} delay={0}>
            <HeroSection />
          </Animation>

          <Animation type="slideUp" duration={1.5} delay={0.2}>
            <AboutSection />
          </Animation>

          <Animation type="slideRight" duration={1.3} staggerChildren={0.2}>
            <Skills />
          </Animation>

          <Animation type="scale" duration={1.3} delay={0.3}>
            <PortfolioShowcase />
          </Animation>

          <Animation type="scale" duration={1.2} delay={0.2}>
            <MyGitHubCalendar />
          </Animation>

          <Animation type="scale" duration={1.2} delay={0.3}>
            <ContactSection />
          </Animation>
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
