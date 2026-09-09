"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/data/data";
import { heroTextVariants, getAnimationDisabled } from "@/lib/animations";

// Small quill feather SVG icon
function QuillIcon() {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-sm"
    >
      {/* Feather shaft */}
      <path
        d="M 8 0 Q 7.5 2, 7.8 4 Q 8 6, 8 8 Q 8 10, 7.8 12 Q 7.5 14, 8 16 L 8 18"
        stroke="#EDE3C7"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Left feather barb */}
      <path
        d="M 8 2 Q 5 3.5, 3.5 5"
        stroke="#EDE3C7"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M 8 6 Q 4.5 7.5, 2 10"
        stroke="#EDE3C7"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M 8 10 Q 4 11, 2.5 14"
        stroke="#EDE3C7"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Right feather barb */}
      <path
        d="M 8 2 Q 11 3.5, 12.5 5"
        stroke="#EDE3C7"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M 8 6 Q 11.5 7.5, 14 10"
        stroke="#EDE3C7"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M 8 10 Q 12 11, 13.5 14"
        stroke="#EDE3C7"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const disabled = getAnimationDisabled();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const subY = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <motion.p
        custom={0}
        initial={
          disabled
            ? { opacity: 1, filter: "blur(0px)" }
            : heroTextVariants.hidden
        }
        animate={disabled ? { opacity: 1 } : "visible"}
        variants={!disabled ? heroTextVariants : undefined}
        style={disabled ? undefined : { opacity }}
        className="font-display text-xs tracking-[0.35em] text-gold/80"
      >
        {/* FULL STACK PYTHON DEVELOPER */}
        {profile.title}
      </motion.p>

      <motion.h1
        custom={1}
        initial={
          disabled
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : heroTextVariants.hidden
        }
        animate={disabled ? { opacity: 1 } : "visible"}
        variants={!disabled ? heroTextVariants : undefined}
        style={disabled ? undefined : { opacity, y: titleY }}
        className="mt-6 max-w-4xl font-harryp text-[clamp(2.4rem,7vw,5.5rem)] leading-[1.05] text-parchment"
      >
        {profile.name}
      </motion.h1>

      <motion.p
        custom={2}
        initial={
          disabled
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : heroTextVariants.hidden
        }
        animate={disabled ? { opacity: 1 } : "visible"}
        variants={!disabled ? heroTextVariants : undefined}
        style={disabled ? undefined : { opacity, y: subY }}
        className="mt-8 max-w-xl text-lg italic text-parchment/75"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        style={disabled ? undefined : { opacity }}
        className="mt-16 flex flex-col items-center gap-2 text-parchment/50"
      >
        <span className="font-display text-[0.6rem] tracking-[0.3em]">
          SCROLL
        </span>

        {/* Scroll indicator with falling quill */}
        <div className="relative h-10 w-px">
          {/* Faint vertical guide line (ink trail) */}
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />

          {/* Falling quill animation */}
          <motion.div
            className="absolute left-1/2 top-0 -translate-x-1/2"
            animate={{
              y: [0, 40],
              opacity: [0, 1, 1, 0],
              rotate: [0, 8, -6, 4, 0],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <QuillIcon />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
