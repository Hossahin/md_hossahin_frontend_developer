"use client";

import Image from "next/image";
import React, { useEffect, useState, useMemo } from "react";
import { GoDownload } from "react-icons/go";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { Link } from "react-scroll";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = useMemo(
    () =>
      NAV_ITEMS.map(({ id, label }) => (
        <Link
          key={id}
          to={id}
          spy={true}
          duration={600}
          offset={-70}
          onClick={() => setOpen(false)}
          activeClass="!text-blue-400 after:w-full"
          className="relative cursor-pointer px-4 py-2 text-sm font-medium text-slate-300 
                   transition-all duration-300 hover:text-white group"
        >
          {label}
          {/* Animated Underline for "Developer" look */}
          <span
            className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500/50 
                       transition-all duration-300 group-hover:w-full"
          />
        </Link>
      )),
    []
  );

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-100
    w-full max-w-7xl rounded-2xl border transform-gpu
    will-change-[transform,top,padding,background-color,box-shadow]
    transition-[transform,top,padding,background-color,box-shadow]
    duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]
    ${
      scrolled
        ? "scale-x-100 top-2 py-1.5 bg-zinc-950/80 backdrop-blur-md border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
        : "scale-x-[0.95] top-4 py-4 bg-transparent border-transparent shadow-none"
    }`}
      style={{ transformOrigin: "center" }}
    >
      <div className="flex items-center justify-between px-6">
        {/* Brand/Logo Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 -ml-2 text-white/70 hover:text-blue-400 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <MdClose size={26} /> : <MdOutlineMenu size={26} />}
          </button>

          <div className="relative group cursor-pointer">
            <Image
              src="/logo.png"
              alt="Hossahin Logo"
              width={140}
              height={45}
              priority
              className="w-24 md:w-32 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
            {/* Logo Glow Effect */}
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* Navigation - Desktop */}
        <div className="hidden lg:flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/5">
          {NavLinks}
        </div>

        {/* Action Section */}
        <div className="flex items-center gap-3">
          <a
            href="/File/md_hossahin_frontend_developer.pdf"
            download
            className="group relative flex items-center gap-2 px-5 py-2.5 text-xs md:text-sm font-bold tracking-wider
            bg-blue-500 text-white rounded-xl overflow-hidden transition-all duration-300
            hover:bg-blue-400 hover:text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
          >
            <span className="relative z-10">Resume</span>
            <GoDownload
              size={16}
              className="relative z-10 transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </a>
        </div>
      </div>

      {/* Mobile Menu - Technical Drawer Style */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
        ${
          open
            ? "max-h-96 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4"
        }`}
      >
        <div className="mx-2 rounded-2xl bg-zinc-900 border border-white/10 p-3 shadow-2xl flex flex-col gap-1">
          {NavLinks}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
