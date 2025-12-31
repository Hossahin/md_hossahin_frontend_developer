"use client";
import { motion, Variants } from "framer-motion";

interface AnimationProps {
  children: React.ReactNode;
  type?: "fade" | "slideUp" | "slideLeft" | "slideRight" | "scale" | "rotate" | "zoomOut";
  duration?: number;
  delay?: number;
  staggerChildren?: number;
  viewport?: object;
}

const variantsMap: Record<string, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  rotate: {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0 },
  },
  zoomOut: {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 1, scale: 1 },
  },
};

export default function Animation({
  children,
  type = "slideUp",
  duration = 0.6,
  delay = 0,
  staggerChildren = 0,
  viewport = { once: true, amount: 0.2 },
}: AnimationProps) {
  const variants = variantsMap[type];

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ duration, delay, staggerChildren }}
    >
      {children}
    </motion.div>
  );
}
