"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/data";
import ScrollReveal from "@/components/ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-28">
      <ScrollReveal>
        <h2 className="section-heading text-gold">Chronicle of Work</h2>
      </ScrollReveal>

      <div className="ink-rule my-6 w-24" />

      <div className="relative mt-12 space-y-16 border-l border-parchment/15 pl-8">
        {experience.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative"
          >
            <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full border border-gold bg-ink shadow-[0_0_8px_1px_rgba(201,162,39,0.5)]" />
            <p className="font-display text-[0.65rem] tracking-[0.2em] text-gold/70">
              {job.period}
            </p>
            <h3 className="mt-2 font-display text-xl text-parchment md:text-2xl">
              {job.role}
            </h3>
            <p className="mt-1 italic text-parchment/60">
              {job.company} · {job.location}
            </p>
            <ul className="mt-4 space-y-2 text-parchment/80">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold/70" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
