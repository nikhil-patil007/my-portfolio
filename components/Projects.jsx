"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/data";
import ScrollReveal from "@/components/ScrollReveal";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-28">
      <ScrollReveal>
        <h2 className="section-heading text-gold">Artifacts Crafted</h2>
      </ScrollReveal>

      <div className="ink-rule my-6 w-24" />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.8,
              delay: (i % 2) * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="rounded-sm border border-parchment/10 bg-violet/10 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-gold/40"
          >
            <h3
              className="font-display text-2xl leading-relaxed tracking-wide text-parchment md:text-[1.7rem]"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.65)" }}
            >
              {p.name}
            </h3>
            <p className="mt-2 text-sm not-italic tracking-wide text-gold/80">
              {p.subtitle}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-parchment/75">
              {p.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-parchment/15 px-3 py-1 text-xs text-parchment/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
