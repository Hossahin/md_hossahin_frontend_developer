import BackgroundLock from "@/components/BackgroundLock";
import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import HomePageSections from "@/components/HomePageSections";
import ScrollToTop from "@/components/ScrollToTop";

const page = () => {
  return (
    <>
      <BackgroundLock />
      <div className="flex flex-col min-h-screen">
        {/* Navbar top */}
        <header className="">
          <Navbar />
        </header>

        {/* Main content */}
        <main className="flex-1 w-full max-w-7xl mx-auto">
          <HomePageSections />
        </main>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </div>
      <ScrollToTop />
    </>
  );
};

export default page;
