"use client"
import { motion } from "framer-motion";
import { useMemo } from "react";

export default function BackgroundLock() {
  const rows = 12; 
  const cols = 20; 

  const particles = useMemo(
    () =>
      Array.from({ length: 100 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 10,
        duration: Math.random() * 10 + 10,
        xInitial: Math.random() * 20 - 10,
        xFinal: Math.random() * 20 - 10,
      })),
    []
  );

  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-r from-gray-900 via-black to-gray-900 animated-gradient overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
        }}
      >
        {Array.from({ length: rows * cols }).map((_, i) => (
          <motion.div
            key={i}
            className="border border-gray-700/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.02,
            }}
          />
        ))}
      </div>

      {/* Snow particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/90 shadow-xl"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          initial={{ y: "-10%", x: `${p.xInitial}vw`, opacity: 0 }}
          animate={{
            y: "120%",
            x: `${p.xFinal}vw`,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent_60%)]" />
    </div>
  );
}
