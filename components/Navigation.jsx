"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { getAnimationDisabled } from "@/lib/animations";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState("hero");
  const disabled = getAnimationDisabled();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 md:block">
      <motion.div
        initial={disabled ? { opacity: 1 } : { opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="relative flex flex-col items-center gap-6 pr-2">
          <div className="absolute right-[7px] top-0 h-full w-px bg-parchment/15" />
          <motion.div
            className="absolute right-[7px] top-0 w-px origin-top bg-gold"
            style={{ height: "100%", scaleY: scrollYProgress }}
          />
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => handleClick(s.id)}
              className="group relative flex items-center"
              aria-label={`Go to ${s.label}`}
            >
              <span
                className={`absolute right-4 whitespace-nowrap font-display text-[0.65rem] tracking-[0.2em] opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                  active === s.id ? "text-gold" : "text-parchment/70"
                }`}
              >
                {s.label.toUpperCase()}
              </span>
              <span
                className={`h-2.5 w-2.5 rounded-full border transition-all duration-300 ${
                  active === s.id
                    ? "border-gold bg-gold shadow-[0_0_10px_2px_rgba(201,162,39,0.6)]"
                    : "border-parchment/40 bg-transparent group-hover:border-gold"
                }`}
              />
            </button>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
