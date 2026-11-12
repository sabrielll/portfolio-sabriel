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
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="py-24 relative scroll-mt-20 bg-cream-100/60 border-y border-cream-200"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left Column: Heading & Honest Education Card */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            <div className="space-y-2.5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-khaki-600 uppercase tracking-widest">
                  01 / Tentang Saya
                </span>
                <div className="h-[1px] w-10 bg-khaki-300" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink-900">
                Profil &amp; Minat Utama
              </h2>
              <p className="text-sm text-ink-500 leading-relaxed">
                Mengenal latar belakang pendidikan dan fokus yang sedang saya dalami di
                bidang teknologi informasi.
              </p>
            </div>

            {/* Clean Academic Card without inflated metrics */}
            <div className="p-6 rounded-2xl bg-white border border-cream-200 shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-forest-800 text-cream-50 flex items-center justify-center shrink-0 shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-khaki-600 font-medium">
                  Pendidikan Saat Ini
                </span>
                <h3 className="text-base font-bold text-ink-900 mt-0.5">
                  {portfolioData.bioDetails.university}
                </h3>
                <p className="text-xs font-medium text-forest-700 mt-1">
                  Program Studi {portfolioData.bioDetails.major}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Grounded Interests */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-white border border-cream-200 shadow-sm space-y-4">
              <div className="inline-block px-3 py-1 rounded-md bg-khaki-100 text-khaki-700 text-xs font-mono font-medium">
                Perkenalan Singkat
              </div>

              <p className="text-lg sm:text-xl text-ink-900 font-medium leading-relaxed">
                {portfolioData.about}
              </p>

              <p className="text-sm sm:text-base text-ink-700 leading-relaxed">
                Saya percaya bahwa kualitas perangkat lunak dimulai dari pemahaman alur
                sistem yang baik, ketelitian saat melakukan pengujian, serta komunikasi
                yang jelas dalam tim pengembang.
              </p>
            </div>

            {/* 2 Clean, Grounded Interest Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {portfolioData.bioDetails.interests.map((interest, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white border border-cream-200 hover:border-forest-200 hover:shadow-sm transition-all space-y-2.5"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-forest-100 text-forest-800 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                      0{index + 1}
                    </span>
                    <h4 className="text-sm font-bold text-ink-900">
                      {interest.title}
                    </h4>
                  </div>
                  <p className="text-xs text-ink-500 leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
