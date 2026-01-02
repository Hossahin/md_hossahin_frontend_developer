import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-12 bg-gray-900/40 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-4">
        {/* Top Grid */}
        <div className="grid gap-6 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="space-y-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Hossahin Logo"
                width={120}
                height={42}
                className="rounded-lg"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              Frontend Web Developer focused on building modern, responsive, and
              user-friendly web applications using React, Next.js, and Tailwind
              CSS.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Core Skills
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>HTML5, CSS3 & Modern JavaScript (ES6+)</li>
              <li>TypeScript, React & Next.js</li>
              <li>Tailwind CSS & Component-Based UI Design</li>
              <li>Node.js, Express & RESTful APIs</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <p className="mb-3 text-sm">
              Open to freelance and full-time opportunities.
            </p>

            <div className="flex items-center gap-4 text-lg">
              <Link
                href="https://github.com/Hossahin"
                target="_blank"
                className="hover:text-white transition"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://www.linkedin.com/in/hossahin/"
                target="_blank"
                className="hover:text-white transition"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://wa.me/8801315163647"
                target="_blank"
                className="hover:text-white transition"
              >
                <FaWhatsapp />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center gap-1.5 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Hossahin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
