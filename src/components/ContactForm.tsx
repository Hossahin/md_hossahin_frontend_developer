"use client";
import React, { useRef } from "react";
import { FaPhone, FaRegUser } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineEmail, MdSubject } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Get current date & time
    const now = new Date();
    const time = now.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    const day = now.getDate();
    const month = now.toLocaleString("en-US", { month: "long" });
    const year = now.getFullYear();
    const date = `${day} ${month} ${year}`;

    // Set hidden fields
    const timeInput = formRef.current.querySelector<HTMLInputElement>("#time");
    const dateInput = formRef.current.querySelector<HTMLInputElement>("#date");

    if (timeInput) timeInput.value = time;
    if (dateInput) dateInput.value = date;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        Swal.fire({
          title: "Message Sent!",
          text: "Thanks! I’ll get back to you soon.",
          icon: "success",
          background: "#1f2937",
          color: "#ffffff",
          confirmButtonText: "Ok",
          confirmButtonColor: "#3b82f6",
          timer: 5000,
          timerProgressBar: true,
        }).then(() => formRef.current?.reset());
      })
      .catch(() => {
        Swal.fire({
          title: "Oops...",
          text: "Please try again later.",
          icon: "error",
          background: "#1f2937",
          color: "#ffffff",
          confirmButtonText: "Try Again",
          confirmButtonColor: "#ef4444",
          timer: 5000,
          timerProgressBar: true,
        });
      });
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-gray-900/50 p-2 md:p-6 rounded-xl w-full border border-gray-700/50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Hidden fields for time and date */}
      <input type="hidden" name="time" id="time" />
      <input type="hidden" name="date" id="date" />

      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="relative flex-1">
            <FaRegUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full pl-10 pr-3 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="relative flex-1">
            <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              id="phone"
              type="tel"
              name="phone"
              required
              placeholder="Your Phone"
              className="w-full pl-10 pr-3 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
        </div>

        <div className="relative">
          <MdOutlineEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full pl-10 pr-3 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div className="relative flex-1">
          <MdSubject className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            id="subject"
            type="text"
            name="subject"
            required
            placeholder="Subject"
            className="w-full pl-10 pr-3 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div className="relative">
          <FiMessageSquare className="absolute left-3 top-4 text-gray-400" />
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows={5}
            className="w-full pl-10 pr-3 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="cursor-pointer w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition shadow-blue hover:shadow-lg"
          >
            Send Message
          </button>
        </div>
      </div>
    </motion.form>
  );
};

export default ContactForm;
