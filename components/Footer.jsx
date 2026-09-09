"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/data";
import { footerVariants, VIEWPORT_CONFIG } from "@/lib/animations";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
      variants={footerVariants}
      className="border-t border-parchment/10 px-6 py-10 text-center text-xs text-parchment/40"
    >
      <p>
        © {new Date().getFullYear()} {profile.name}. Crafted with Next.js.
      </p>
    </motion.footer>
  );
}
