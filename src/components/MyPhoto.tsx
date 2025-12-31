"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const MyPhoto = () => {
  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96 h-auto rounded-full shadow-blue overflow-hidden"
    >
      <Image
        src="/MyPhoto/MyPhoto.png"
        alt="Md Hossahin"
        width={384}
        height={384}
        className="object-cover w-full h-full"
        priority 
      />
    </motion.div>
  );
};

export default MyPhoto;