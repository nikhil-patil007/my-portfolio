"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/data";
import ScrollReveal from "@/components/ScrollReveal";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/animations";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-3xl px-6 py-28">
      <ScrollReveal>
        <h2 className="section-heading text-gold">Spellbook of Skills</h2>
      </ScrollReveal>

      <div className="ink-rule my-6 w-24" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainerVariants}
        className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2"
      >
        {Object.entries(skills).map(([category, items]) => (
          <motion.div key={category} variants={staggerItemVariants}>
            <h3 className="font-display text-sm tracking-[0.15em] text-parchment/60">
              {category.toUpperCase()}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gold/25 bg-gold/5 px-3 py-1 text-sm text-parchment/85"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
