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
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 relative scroll-mt-20 bg-cream-100/60 border-y border-cream-200"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="space-y-2.5 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold text-khaki-600 uppercase tracking-widest">
                03 / Studi Kasus
              </span>
              <div className="h-[1px] w-10 bg-khaki-300" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink-900">
              Proyek Pilihan &amp; Implementasi QA
            </h2>
            <p className="text-sm text-ink-500 leading-relaxed">
              Studi kasus pengujian otomatis dan pengembangan web fullstack yang mencerminkan
              pendekatan terstruktur terhadap kualitas perangkat lunak.
            </p>
          </motion.div>

          {/* 2-Column Case Study Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioData.projects.map((project: Project, index: number) => {
              const isQA = project.category === "QA Engineering";

              return (
                <motion.article
                  key={project.id}
                  variants={itemVariants}
                  className="group rounded-2xl bg-white border border-cream-200 hover:border-forest-500/50 shadow-sm hover:shadow-lg hover:shadow-khaki-300/20 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Card Strip */}
                  <div>
                    <div className="px-7 py-4 bg-cream-50 border-b border-cream-200 flex items-center justify-between">
                      <span
                        className={`text-xs font-mono font-semibold px-3 py-1 rounded-full border ${
                          isQA
                            ? "bg-forest-100 text-forest-800 border-forest-200"
                            : "bg-khaki-100 text-khaki-700 border-khaki-300"
                        }`}
                      >
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-khaki-600 font-medium">
                        CASE_0{index + 1}
                      </span>
                    </div>

                    <div className="p-7 space-y-5">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-ink-900 group-hover:text-forest-800 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-khaki-600 mt-1.5">
                          {project.tagline}
                        </p>
                      </div>

                      <p className="text-sm text-ink-700 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Deliverables Box */}
                      <div className="p-4 rounded-xl bg-cream-50 border border-cream-200 space-y-2.5">
                        <span className="text-[11px] font-mono font-semibold uppercase text-forest-800 tracking-wider block">
                          Poin Utama Proyek
                        </span>
                        <ul className="space-y-2">
                          {project.keyHighlights.map((highlight, hIdx) => (
                            <li
                              key={hIdx}
                              className="flex items-start gap-2.5 text-xs text-ink-700"
                            >
                              <svg
                                className="w-4 h-4 text-forest-700 shrink-0 mt-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Tech Stack & Links */}
                  <div className="px-7 py-5 bg-cream-50/70 border-t border-cream-200 space-y-4">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-white border border-khaki-200 text-[11px] font-mono text-khaki-700 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 pt-1">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-khaki-50 border border-khaki-300 text-xs font-semibold text-ink-900 transition-colors"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        <span>Lihat Kode</span>
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-forest-800 hover:bg-forest-700 text-xs font-semibold text-cream-50 transition-colors"
                        >
                          <span>Detail Proyek</span>
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
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
