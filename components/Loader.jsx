"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [sparkles, setSparkles] = useState([]);
  const sparkleInterval = useRef(null);

  useEffect(() => {
    // Spawn sparkles continuously while loader is visible
    sparkleInterval.current = setInterval(() => {
      const id = Date.now() + Math.random();
      const xOffset = (Math.random() - 0.5) * 80; // Spread around hat
      const yOffset = Math.random() * 20 - 10;

      setSparkles((prev) => [
        ...prev.slice(-8),
        {
          id,
          x: xOffset,
          y: yOffset,
          size: 2 + Math.random() * 3,
          duration: 1200 + Math.random() * 400,
        },
      ]);

      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== id));
      }, 1600);
    }, 140);

    return () => clearInterval(sparkleInterval.current);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-ink"
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Sparkles container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {sparkles.map((s) => (
          <motion.div
            key={s.id}
            className="absolute rounded-full"
            style={{
              left: "50%",
              top: "40%",
              width: s.size,
              height: s.size,
              background: "#E7C873",
              boxShadow: "0 0 8px 1px rgba(201,162,39,0.8)",
              translateX: "-50%",
            }}
            initial={{ opacity: 0, y: 0, x: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: -60,
              x: s.x,
            }}
            transition={{
              duration: s.duration / 1000,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Pulsing glow behind hat */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 200,
          height: 200,
          background:
            "radial-gradient(circle, rgba(201,162,39,0.3) 0%, rgba(201,162,39,0.1) 60%, transparent 100%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Sorting Hat with bob and rotate animation */}
      <motion.div
        animate={{
          y: [0, -8, 0, 6, 0],
          rotate: [0, 2, 0, -2.5, 0],
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/sorting-hat.png"
          alt="Loading"
          width={120}
          height={120}
          priority
          className="drop-shadow-lg"
          style={{
            filter: "drop-shadow(0 0 20px rgba(201,162,39,0.3))",
          }}
        />
      </motion.div>

      <p className="mt-10 font-display text-xs tracking-[0.3em] text-gold/80 animate-flicker">
        SUMMONING THE PORTFOLIO
      </p>

      <style jsx global>{`
        @keyframes snitch-dust-fade {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.2) translateY(-5px);
          }
        }
      `}</style>
    </motion.div>
  );
}
