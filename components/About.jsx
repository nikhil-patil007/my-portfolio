"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/data";
import ScrollReveal from "@/components/ScrollReveal";
import {
  staggerItemVariants,
  staggerContainerVariants,
} from "@/lib/animations";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-28">
      <ScrollReveal>
        <h2 className="section-heading text-gold">The Profile</h2>
      </ScrollReveal>

      <div className="ink-rule my-6 w-24" />

      <ScrollReveal delay={0.1}>
        <p className="text-lg leading-relaxed text-parchment/85">
          {profile.summary}
        </p>
      </ScrollReveal>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainerVariants}
        className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-parchment/60"
      >
        {[profile.location, profile.phone, profile.email].map((info, i) => (
          <motion.span key={i} variants={staggerItemVariants}>
            {info}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
