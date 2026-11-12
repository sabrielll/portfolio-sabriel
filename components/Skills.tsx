"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData, SkillItem } from "@/data/portfolio";

type SkillCategoryFilter = "Semua" | SkillItem["category"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategoryFilter>("Semua");

  const categories: SkillCategoryFilter[] = [
    "Semua",
    "Testing & QA",
    "Development",
    "Tools",
  ];

  const filteredSkills =
    activeCategory === "Semua"
      ? portfolioData.skills
      : portfolioData.skills.filter((s) => s.category === activeCategory);

  const renderSkillIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "postman":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case "katalon":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "docker":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        );
      case "figma":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        );
      case "python":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case "go":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        );
      case "next.js":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
    }
  };

  return (
    <section id="skills" className="py-24 relative scroll-mt-20 bg-cream-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="space-y-10"
        >
          {/* Header + Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2.5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-khaki-600 uppercase tracking-widest">
                  02 / Keahlian
                </span>
                <div className="h-[1px] w-10 bg-khaki-300" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink-900">
                Teknologi &amp; Perangkat Kerja
              </h2>
              <p className="text-sm text-ink-500 max-w-xl">
                Perangkat pengujian QA, bahasa pemrograman, dan tools pendukung yang
                saya gunakan dalam belajar maupun mengerjakan proyek.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 bg-cream-100 p-1.5 rounded-xl border border-cream-200 self-start md:self-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-forest-800 text-cream-50 shadow-sm"
                      : "text-ink-700 hover:text-forest-800 hover:bg-white/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredSkills.map((skill) => {
              const isQA = skill.category === "Testing & QA";
              const isTools = skill.category === "Tools";

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group p-6 rounded-2xl bg-white border border-cream-200 hover:border-forest-500/40 hover:shadow-md hover:shadow-khaki-300/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                          isQA
                            ? "bg-forest-50 border-forest-200 text-forest-800 group-hover:bg-forest-800 group-hover:text-cream-50"
                            : isTools
                            ? "bg-khaki-50 border-khaki-200 text-khaki-700 group-hover:bg-khaki-600 group-hover:text-cream-50"
                            : "bg-cream-100 border-cream-200 text-ink-900 group-hover:bg-forest-700 group-hover:text-cream-50"
                        }`}
                      >
                        {renderSkillIcon(skill.name)}
                      </div>

                      <span
                        className={`text-[10px] font-mono font-medium px-2.5 py-1 rounded-md border ${
                          isQA
                            ? "bg-forest-50 text-forest-800 border-forest-200"
                            : isTools
                            ? "bg-khaki-50 text-khaki-700 border-khaki-200"
                            : "bg-cream-100 text-ink-700 border-cream-200"
                        }`}
                      >
                        {skill.category}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-ink-900 group-hover:text-forest-800 transition-colors">
                      {skill.name}
                    </h3>

                    <p className="text-xs text-ink-500 mt-2 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
