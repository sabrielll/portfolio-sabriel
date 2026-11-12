import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-cream-50 text-ink-900 selection:bg-forest-800 selection:text-cream-50 overflow-hidden">
      {/* Sticky Translucent Navbar */}
      <Navbar />

      {/* Executive Split Hero Section */}
      <Hero />

      {/* Editorial About Section */}
      <About />

      {/* Categorized Skills Grid Section */}
      <Skills />

      {/* 2-Column Case Studies Section */}
      <Projects />

      {/* Executive Contact & Footer Section */}
      <Contact />
    </main>
  );
}
