"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData, Project } from "@/data/portfolio";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-24 relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                // 03
              </span>
              <div className="h-[1px] w-8 bg-zinc-800" />
              <span className="font-mono text-xs uppercase text-zinc-400 tracking-wider">
                Portofolio Proyek
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Hasil Karya & Studi Kasus
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl">
              Kombinasi implementasi automasi pengujian mutu perangkat lunak dan pengembangan
              aplikasi web fungsional.
            </p>
          </motion.div>

          {/* Project Cards List */}
          <div className="grid grid-cols-1 gap-8">
            {portfolioData.projects.map((project: Project, index: number) => (
              <motion.article
                key={project.id}
                variants={itemVariants}
                className="group rounded-2xl bg-zinc-900/40 border border-zinc-800/90 hover:border-zinc-700 transition-all duration-300 overflow-hidden backdrop-blur-sm"
              >
                <div className="p-7 sm:p-9 flex flex-col justify-between">
                  {/* Top Bar: Category & Index */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-800/90 text-zinc-300 border border-zinc-700/60 font-medium">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">
                        PROJ_0{index + 1}
                      </span>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                        aria-label={`Lihat kode sumber ${project.title}`}
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        <span>GitHub</span>
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-xs font-medium text-zinc-950 transition-colors"
                          aria-label={`Lihat demo ${project.title}`}
                        >
                          <span>Live Demo</span>
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-zinc-200 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-zinc-400 mb-4">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6 p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/60">
                    <span className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider block mb-2">
                      Poin Kunci & Hasil Pengujian:
                    </span>
                    <ul className="space-y-1.5">
                      {project.keyHighlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2 text-xs text-zinc-300"
                        >
                          <svg
                            className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-zinc-800/80">
                    <span className="text-[11px] font-mono text-zinc-400 mr-1">
                      Stack:
                    </span>
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-zinc-800/60 border border-zinc-700/60 text-[11px] font-mono text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
