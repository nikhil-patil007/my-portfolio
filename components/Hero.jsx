"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/data";
import { heroTextVariants } from "@/lib/animations";

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
      aria-hidden="true"
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

  // Important:
  // Keep the initial server/client render identical.
  const [mounted, setMounted] = useState(false);
  const [animationsDisabled, setAnimationsDisabled] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check reduced-motion preference only in the browser.
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    setAnimationsDisabled(mediaQuery.matches);

    const handleChange = (event) => {
      setAnimationsDisabled(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const subY = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  /*
   * Do NOT apply MotionValue styles during SSR/hydration.
   * This is what prevents:
   *
   * Server: style={{ opacity: "1" }}
   * Client: style={{ opacity: 0 }}
   */
  const scrollStyle = mounted && !animationsDisabled ? { opacity } : undefined;

  const titleStyle =
    mounted && !animationsDisabled
      ? {
          opacity,
          y: titleY,
        }
      : undefined;

  const subtitleStyle =
    mounted && !animationsDisabled
      ? {
          opacity,
          y: subY,
        }
      : undefined;

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      {/* =========================================================
          HERO SMALL TITLE
      ========================================================= */}

      <motion.p
        custom={0}
        initial={
          animationsDisabled
            ? {
                opacity: 1,
                filter: "blur(0px)",
              }
            : heroTextVariants.hidden
        }
        animate={
          animationsDisabled
            ? {
                opacity: 1,
              }
            : "visible"
        }
        variants={!animationsDisabled ? heroTextVariants : undefined}
        className="font-display text-xs tracking-[0.35em] text-gold/80"
      >
        {profile.title}
      </motion.p>

      {/* =========================================================
          HERO NAME
      ========================================================= */}

      <motion.h1
        custom={1}
        initial={
          animationsDisabled
            ? {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }
            : heroTextVariants.hidden
        }
        animate={
          animationsDisabled
            ? {
                opacity: 1,
              }
            : "visible"
        }
        variants={!animationsDisabled ? heroTextVariants : undefined}
        style={titleStyle}
        className="
          mt-6
          max-w-4xl
          font-harryp
          text-[clamp(2.4rem,7vw,5.5rem)]
          leading-[1.05]
          text-parchment
        "
      >
        {profile.name}
      </motion.h1>

      {/* =========================================================
          TAGLINE
      ========================================================= */}

      <motion.p
        custom={2}
        initial={
          animationsDisabled
            ? {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }
            : heroTextVariants.hidden
        }
        animate={
          animationsDisabled
            ? {
                opacity: 1,
              }
            : "visible"
        }
        variants={!animationsDisabled ? heroTextVariants : undefined}
        style={subtitleStyle}
        className="
          mt-8
          max-w-xl
          text-lg
          italic
          text-parchment/75
        "
      >
        {profile.tagline}
      </motion.p>

      {/* =========================================================
          DOWNLOAD CV BUTTON
      ========================================================= */}

      <motion.a
        href="/Nikhil_Patil_Python_Developer_4_Years_Experience.pdf"
        download
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: animationsDisabled ? 0 : 0.8,
          duration: 0.6,
          ease: "easeOut",
        }}
        whileHover={
          animationsDisabled
            ? undefined
            : {
                scale: 1.04,
              }
        }
        whileTap={
          animationsDisabled
            ? undefined
            : {
                scale: 0.97,
              }
        }
        className="
          group
          relative
          mt-8
          inline-flex
          items-center
          gap-3
          border
          border-gold/50
          bg-black/20
          px-7
          py-3
          font-display
          text-xs
          tracking-[0.25em]
          text-parchment
          backdrop-blur-sm
          transition-all
          duration-300
          hover:border-gold
          hover:bg-gold/10
          hover:text-gold
        "
      >
        {/* Quill */}
        <span
          className="
            opacity-70
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        >
          <QuillIcon />
        </span>

        {/* Button text */}
        <span>DOWNLOAD CV</span>

        {/* Magical underline */}
        <span
          className="
            absolute
            bottom-0
            left-1/2
            h-px
            w-0
            -translate-x-1/2
            bg-gold
            transition-all
            duration-300
            group-hover:w-[70%]
          "
        />
      </motion.a>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}

      <motion.div
        style={scrollStyle}
        className="
          mt-16
          flex
          flex-col
          items-center
          gap-2
          text-parchment/50
        "
      >
        {/* SCROLL text */}
        <span
          className="
            font-display
            text-[0.6rem]
            tracking-[0.3em]
          "
        >
          SCROLL
        </span>

        {/* Scroll line + falling quill */}
        <div className="relative h-10 w-px">
          {/* Faint vertical guide line */}
          <div
            className="
              absolute
              inset-y-0
              left-0
              w-px
              bg-gradient-to-b
              from-gold/40
              via-gold/20
              to-transparent
            "
          />

          {/* Falling quill */}
          <motion.div
            className="
              absolute
              left-1/2
              top-0
              -translate-x-1/2
            "
            animate={
              animationsDisabled
                ? undefined
                : {
                    y: [0, 40],
                    opacity: [0, 1, 1, 0],
                    rotate: [0, 8, -6, 4, 0],
                  }
            }
            transition={
              animationsDisabled
                ? undefined
                : {
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          >
            <QuillIcon />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
