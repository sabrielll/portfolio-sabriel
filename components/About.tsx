"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function About() {
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
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 relative scroll-mt-20">
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
                // 01
              </span>
              <div className="h-[1px] w-8 bg-zinc-800" />
              <span className="font-mono text-xs uppercase text-zinc-400 tracking-wider">
                Tentang Saya
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Dedikasi untuk Kualitas & Kode yang Teruji
            </h2>
          </motion.div>

          {/* Main Story & Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Primary Bio Card */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 p-8 relative overflow-hidden backdrop-blur-sm"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-white/[0.02] rounded-full blur-2xl pointer-events-none" />

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal mb-6">
                {portfolioData.about}
              </p>

              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Saya memadukan ketelitian pengujian mutu (QA Engineering) dengan keahlian
                rekayasa perangkat lunak modern. Pendekatan saya berpusat pada pencegahan bug sejak dini,
                validasi skenario kritis (edge-cases), serta penulisan kode terstruktur yang siap diskalakan.
              </p>

              {/* Education Snippet */}
              <div className="pt-6 border-t border-zinc-800/80 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 text-zinc-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-200">
                    {portfolioData.bioDetails.university}
                  </h4>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    Program Studi {portfolioData.bioDetails.major}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Side Focus Pillars */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 flex flex-col gap-4"
            >
              <div className="rounded-2xl bg-zinc-900/30 border border-zinc-800/80 p-6">
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                  Area Fokus Utama
                </h3>
                <ul className="space-y-3">
                  {portfolioData.bioDetails.focus.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-sm text-zinc-300"
                    >
                      <span className="text-xs font-mono text-zinc-400">
                        0{index + 1}.
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quality Mindset Box */}
              <div className="rounded-2xl bg-zinc-950 border border-zinc-800/60 p-6 flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold font-mono text-white">100%</div>
                  <div className="text-xs text-zinc-400 mt-1">
                    Komitmen Integritas & Kualitas
                  </div>
                </div>
                <div className="h-10 w-[1px] bg-zinc-800" />
                <div>
                  <div className="text-2xl font-bold font-mono text-white">E2E</div>
                  <div className="text-xs text-zinc-400 mt-1">
                    API & Web Automation
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
