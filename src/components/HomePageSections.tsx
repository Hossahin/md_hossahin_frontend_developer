"use client";

import React from "react";
import { Element } from "react-scroll";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import Skills from "./Skills";
import PortfolioShowcase from "./PortfolioShowcase";
import MyGitHubCalendar from "./MyGitHubCalendar";
import ContactSection from "./ContactSection";

const HomePageSections = () => {
  return (
    <div>
      <Element name="home">
        <HeroSection />
      </Element>

      <Element name="about">
        <AboutSection />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="projects">
        <PortfolioShowcase />
      </Element>

      <Element name="contact">
        <MyGitHubCalendar />
        <ContactSection />
      </Element>
    </div>
  );
};

export default HomePageSections;
