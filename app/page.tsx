import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#09090b] text-[#fafafa] selection:bg-zinc-800 selection:text-white overflow-hidden">
      {/* Sticky Translucent Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Grid Section */}
      <Skills />

      {/* Projects Showcase Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
