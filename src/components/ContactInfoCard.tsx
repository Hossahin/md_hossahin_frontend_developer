"use client";

import { useState } from "react";
import {
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdContentCopy,
} from "react-icons/md";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ContactInfo = () => {
  const [toast, setToast] = useState({ show: false, message: "" });

  const contactData = [
    {
      id: 1,
      icon: <MdOutlineEmail className="text-blue-400 w-6 h-6" />,
      label: "Email",
      value: "hossahin321@gmail.com",
      href: "mailto:hossahin321@gmail.com",
      copyable: true,
    },
    {
      id: 2,
      icon: <FaPhone className="text-blue-400 w-5 h-5" />,
      label: "Phone",
      value: "+880 1315 163647",
      href: "tel:+8801315163647",
      copyable: true,
    },
    {
      id: 3,
      icon: <MdOutlineLocationOn className="text-red-400 w-6 h-6" />,
      label: "Location",
      value: "Rajshahi, Bangladesh",
      href: "https://www.google.com/maps/search/?api=1&query=Rajshahi,Bangladesh",
      copyable: false,
    },
  ];

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setToast({ show: true, message: `${text} copied!` });
      setTimeout(() => setToast({ show: false, message: "" }), 3000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <motion.div
      className="relative bg-gray-900/50 p-4 sm:p-6 rounded-xl text-center flex flex-col justify-center border border-gray-700/50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Header */}
      <div className="text-center mb-4 sm:mb-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-blue-500 tracking-tight">
          Contact Info
        </h3>
        <p className="text-gray-400 mt-2 text-sm sm:text-base leading-relaxed">
          Feel free to reach out via email or phone.
        </p>
      </div>

      {/* Contact List */}
      <div className="grid gap-3">
        {contactData.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col sm:flex-row items-center sm:justify-between p-2.5 rounded-2xl bg-gray-900/40 border border-gray-800/50 hover:border-blue-500/50 hover:bg-gray-800/60 transition-all duration-300 cursor-pointer"
          >
            {/* Left Icon */}
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-800 group-hover:bg-blue-500/10 transition-colors duration-300 mb-2 sm:mb-0">
              {item.icon}
            </div>

            {/* Middle Text */}
            <div className="flex-1 text-center sm:text-left sm:ml-4">
              <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-widest">
                {item.label}
              </p>
              {item.copyable ? (
                <p className="text-gray-200 font-medium group-hover:text-blue-400 transition-colors break-words">
                  {item.value}
                </p>
              ) : (
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 font-medium hover:text-blue-400 transition-colors break-words"
                >
                  {item.value}
                </Link>
              )}
            </div>

            {/* Right Copy Icon */}
            {item.copyable && (
              <MdContentCopy
                onClick={() => handleCopy(item.value)}
                className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 cursor-pointer hover:text-blue-400 transition-opacity duration-200 mt-2 sm:mt-0"
                title="Copy"
              />
            )}
          </div>
        ))}
      </div>

      {/* WhatsApp Button */}
      <div className="pt-4 sm:pt-6">
        <Link
          href="https://wa.me/8801315163647"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 w-full bg-emerald-600/10 border border-emerald-500/30 text-emerald-400 font-bold py-3 sm:py-4 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all duration-300"
        >
          <FaWhatsapp className="w-6 h-6" />
          <span>Message on WhatsApp</span>
        </Link>
      </div>

      {/* Custom Toast */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="fixed top-5 right-5 z-50 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg border border-gray-700"
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContactInfo;
