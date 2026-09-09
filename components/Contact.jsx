"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/data";
import ScrollReveal from "@/components/ScrollReveal";
import { contactSequenceVariants } from "@/lib/animations";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden px-6 py-10 text-parchment md:px-12 md:py-12"
    >
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="flex items-center justify-between"
        >
          <span className="font-display text-[10px] uppercase tracking-[0.35em] text-parchment/40">
            04 — Contact
          </span>

          <span className="hidden text-[9px] uppercase tracking-[0.3em] text-parchment/30 md:block">
            Open to select opportunities
          </span>
        </motion.div>

        {/* Main */}
        <div className="flex flex-1 items-center">
          <div className="grid w-full md:grid-cols-12">
            {/* Empty space */}
            <div className="hidden md:col-span-3 md:block" />

            {/* Contact note */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0,
                  },
                },
              }}
              className="relative md:col-span-7 md:col-start-5"
            >
              {/* tiny index */}
              <motion.div
                custom={0}
                variants={contactSequenceVariants}
                className="mb-8 flex items-center gap-3"
              >
                <span className="h-px w-8 bg-gold/60" />

                <span className="text-[9px] uppercase tracking-[0.3em] text-gold/70">
                  A small invitation
                </span>
              </motion.div>

              {/* Statement */}
              <motion.h1
                custom={1}
                variants={contactSequenceVariants}
                className="max-w-2xl font-display text-4xl leading-[1.05] tracking-[-0.02em] text-parchment sm:text-5xl md:text-6xl lg:text-7xl"
              >
                If you&apos;ve come this far,
                <br />
                <span className="text-gold">we should probably talk.</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                custom={2}
                variants={contactSequenceVariants}
                className="mt-8 max-w-md text-sm leading-7 text-parchment/50"
              >
                For projects, ideas, collaborations, or simply a good
                conversation. My inbox is open.
              </motion.p>

              {/* Email */}
              <motion.div
                custom={3}
                variants={contactSequenceVariants}
                className="mt-12"
              >
                <p className="mb-3 text-[9px] uppercase tracking-[0.3em] text-parchment/35">
                  Write to
                </p>

                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex max-w-full items-center gap-5"
                >
                  <span className="break-all border-b border-parchment/20 pb-2 font-display text-base text-parchment transition-colors duration-300 group-hover:border-gold group-hover:text-gold sm:text-xl">
                    {profile.email}
                  </span>

                  <motion.span
                    className="shrink-0 text-lg text-gold opacity-50 transition-all duration-300"
                    whileHover={{ x: 5, opacity: 1 }}
                  >
                    ↗
                  </motion.span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="border-t border-parchment/10 pt-6"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-parchment/35">
                Elsewhere
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.18em] text-parchment/55 transition-colors hover:text-gold"
              >
                GitHub ↗
              </a>

              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.18em] text-parchment/55 transition-colors hover:text-gold"
              >
                LinkedIn ↗
              </a>

              <a
                href={profile.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.18em] text-parchment/55 transition-colors hover:text-gold"
              >
                Instagram ↗
              </a>
            </nav>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
