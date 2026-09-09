"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Loader from "@/components/Loader";
import MoonlitBranches from "@/components/MoonlitBranches";
import ParallaxBackground from "@/components/ParallaxBackground";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Minimum show time so the loader reads as a deliberate moment,
    // not a flash — even on a fast connection.
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      <MoonlitBranches />
      <ParallaxBackground />
      <Navigation />

      <main className="relative">
        <Hero />
        <About />
        <div className="ink-rule mx-auto max-w-3xl" />
        <Experience />
        <div className="ink-rule mx-auto max-w-3xl" />
        <Projects />
        <div className="ink-rule mx-auto max-w-3xl" />
        <Skills />
        <div className="ink-rule mx-auto max-w-3xl" />
        <Education />
        <div className="ink-rule mx-auto max-w-3xl" />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
