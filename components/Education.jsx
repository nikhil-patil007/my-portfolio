"use client";

import { motion } from "framer-motion";
import { education } from "@/data/data";
import ScrollReveal from "@/components/ScrollReveal";
import { timelineItemVariants } from "@/lib/animations";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-3xl px-6 py-28">
      <ScrollReveal>
        <h2 className="section-heading text-gold">Years at the College</h2>
      </ScrollReveal>

      <div className="ink-rule my-6 w-24" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-10 space-y-6"
      >
        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            custom={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <p className="font-display text-[0.65rem] tracking-[0.2em] text-gold/70">
              {e.period}
            </p>
            <h3 className="mt-2 font-display text-xl text-parchment">
              {e.degree}
            </h3>
            <p className="mt-1 italic text-parchment/60">
              {e.school} · {e.location}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
