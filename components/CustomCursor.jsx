"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// A fluttering golden snitch replaces the pointer: the ball tracks the
// mouse with spring lag, the wings flap on a fast independent loop, and
// a short gold-dust trail follows the motion.
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [sparkles, setSparkles] = useState([]);
  const lastSparkleAt = useRef(0);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 18, stiffness: 220, mass: 0.5 });
  const springY = useSpring(y, { damping: 18, stiffness: 220, mass: 0.5 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const now = performance.now();
      if (now - lastSparkleAt.current > 55) {
        lastSparkleAt.current = now;
        const id = now + Math.random();
        setSparkles((prev) => [
          ...prev.slice(-12),
          {
            id,
            x: e.clientX + (Math.random() * 12 - 6),
            y: e.clientY + (Math.random() * 12 - 6),
            size: 2.5 + Math.random() * 2.5,
          },
        ]);
        setTimeout(() => {
          setSparkles((prev) => prev.filter((s) => s.id !== id));
        }, 600);
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="pointer-events-none fixed z-[9998] rounded-full"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            background: "#E7C873",
            boxShadow: "0 0 6px 1px rgba(201,162,39,0.7)",
            animation: "snitch-dust-fade 600ms ease-out forwards",
          }}
        />
      ))}

      <motion.div
        className="pointer-events-none fixed z-[9999] top-0 left-0"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{ y: [0, -3, 0, 2, 0], rotate: [0, 4, 0, -4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "relative", width: 30, height: 20 }}
        >
          <motion.svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            style={{ position: "absolute", left: -2, top: 3, transformOrigin: "100% 50%" }}
            animate={{ scaleX: [1, 0.55, 1] }}
            transition={{ duration: 0.35, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M16 7 C 9 0, 2 1, 0 7 C 2 13, 9 14, 16 7 Z" fill="rgba(240,236,224,0.85)" />
          </motion.svg>
          <motion.svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            style={{ position: "absolute", right: -2, top: 3, transformOrigin: "0% 50%" }}
            animate={{ scaleX: [1, 0.55, 1] }}
            transition={{ duration: 0.35, repeat: Infinity, ease: "easeInOut", delay: 0.02 }}
          >
            <path d="M0 7 C 7 0, 14 1, 16 7 C 14 13, 7 14, 0 7 Z" fill="rgba(240,236,224,0.85)" />
          </motion.svg>

          <svg width="30" height="20" viewBox="0 0 30 20" style={{ position: "absolute", left: 0, top: 0 }}>
            <circle cx="15" cy="10" r="6.5" fill="#C9A227" />
            <circle cx="13" cy="8" r="2.2" fill="#F2E1A0" opacity="0.8" />
          </svg>
        </motion.div>
      </motion.div>

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
    </>
  );
}
