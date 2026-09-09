"use client";

import { motion } from "framer-motion";
import {
  scrollRevealVariants,
  VIEWPORT_CONFIG,
  getAnimationDisabled,
} from "@/lib/animations";

/**
 * ScrollReveal: Reusable wrapper for consistent section reveal animations
 *
 * Usage:
 * <ScrollReveal>
 *   <h2>Section Title</h2>
 *   <p>Content here</p>
 * </ScrollReveal>
 *
 * Props:
 * - children: React nodes to animate
 * - delay: Optional delay before animation starts (default: 0)
 * - duration: Custom duration (default: 0.8s)
 * - once: Animate only once (default: true)
 */
export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.8,
  once = true,
  className = "",
}) {
  const disabled = getAnimationDisabled();

  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...VIEWPORT_CONFIG, once }}
      variants={{
        hidden: { opacity: 0, y: 35 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
