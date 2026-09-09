/**
 * Cinematic animation variants and configurations
 * Designed for a premium, atmospheric portfolio experience
 */

export const EASE = {
  smooth: [0.25, 0.46, 0.45, 0.94], // Cubic-bezier smooth/editorial ease
  slow: [0.165, 0.84, 0.44, 1], // Slow entrance ease
  project: [0.6, 0.6, 0.2, 0.8], // Subtle, controlled ease
};

export const DURATION = {
  fast: 0.5,
  normal: 0.8,
  slow: 1.0,
  verySlow: 1.3,
};

/**
 * ScrollReveal variants for consistent section animations
 */
export const scrollRevealVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASE.smooth,
    },
  },
};

/**
 * Staggered container for child animations
 */
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0,
    },
  },
};

/**
 * Individual stagger item
 */
export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASE.smooth,
    },
  },
};

/**
 * Heading reveal - scales and reveals from below
 */
export const headingRevealVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASE.smooth,
    },
  },
};

/**
 * Hero text stagger for name, tagline, description
 */
export const heroTextVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(6px)",
  },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: DURATION.verySlow,
      delay: custom * 0.15,
      ease: EASE.smooth,
    },
  }),
};

/**
 * Navigation item entrance
 */
export const navEntranceVariants = {
  hidden: {
    opacity: 0,
    y: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASE.smooth,
    },
  },
};

/**
 * Section heading with parallax protection
 */
export const sectionHeadingVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASE.smooth,
    },
  },
};

/**
 * Project card entrance
 */
export const projectCardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      delay: custom * 0.08,
      ease: EASE.smooth,
    },
  }),
};

/**
 * Experience/Education timeline item
 */
export const timelineItemVariants = {
  hidden: {
    opacity: 0,
    x: -12,
  },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.normal,
      delay: custom * 0.08,
      ease: EASE.smooth,
    },
  }),
};

/**
 * Contact section sequence
 */
export const contactSequenceVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      delay: custom * 0.1,
      ease: EASE.smooth,
    },
  }),
};

/**
 * Footer entrance - very slow and subtle
 */
export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASE.smooth,
    },
  },
};

/**
 * Parallax transform calculations
 */
export const getParallaxTransform = (scrollProgress, speed) => {
  return scrollProgress * 100 * speed;
};

/**
 * Viewport configuration for consistent reveal behavior
 */
export const VIEWPORT_CONFIG = {
  once: true,
  margin: "-80px",
  amount: "some",
};

/**
 * Reduced motion support
 */
export const getAnimationDisabled = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export const getReducedDuration = (duration) => {
  return getAnimationDisabled() ? 0 : duration;
};

export const getReducedMotionVariants = (variants) => {
  if (!getAnimationDisabled()) return variants;

  // Return minimal animation for reduced motion
  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0 } },
  };
};
