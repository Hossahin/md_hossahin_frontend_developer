"use client";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
   <motion.div
      className="bg-gray-900/50 p-6 rounded-xl text-center flex flex-col justify-center border border-gray-700/50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h3 className="text-2xl font-semibold text-animated-gradient tracking-wide">
        Contact Info
      </h3>
      <p className="text-gray-400 mt-4 leading-relaxed text-base">
        Feel free to reach out via email or phone.
      </p>
      <div className="mt-4 space-y-2">
        <p className="text-gray-300 text-base flex items-center justify-center gap-2">
          <MdOutlineEmail className="text-blue-400 w-5 h-5" />
          <strong>Email:</strong> hossahin321@gmail.com
        </p>
        <p className="text-gray-300 text-base mt-2 flex items-center justify-center gap-2">
          <FaPhone className="text-blue-400 w-5 h-5" />
          <strong>Phone:</strong> +8801315163647
        </p>

        <div className="mt-6 flex justify-center">
          <Link
            href="https://wa.me/8801315163647"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[0.8rem] bg-green-600/20 border border-green-500/40 text-green-400 font-semibold px-[1.618rem] py-[0.8rem] rounded-full hover:bg-green-600/30 hover:scale-[1.05] transition-all duration-300"
          >
            <FaWhatsapp className="w-[1.5rem] h-[1.5rem]" />
            WhatsApp Chat
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
