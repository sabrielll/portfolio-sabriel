"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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
    <section id="contact" className="py-24 relative scroll-mt-20">
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
                // 04
              </span>
              <div className="h-[1px] w-8 bg-zinc-800" />
              <span className="font-mono text-xs uppercase text-zinc-400 tracking-wider">
                Kontak & Kolaborasi
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Mari Terhubung & Berdiskusi
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl">
              Tertarik bekerja sama untuk posisi QA Engineer, Web Developer, atau ingin
              berdiskusi seputar proyek testing? Silakan hubungi saya melalui saluran di bawah.
            </p>
          </motion.div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email Card */}
            <motion.div
              variants={itemVariants}
              className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/90 hover:border-zinc-700 transition-all backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-zinc-800/90 border border-zinc-700/60 flex items-center justify-center text-zinc-200 mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">
                  Email Langsung
                </span>
                <h3 className="text-lg font-semibold text-white mb-2 break-all">
                  {portfolioData.contact.email}
                </h3>
                <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                  Kirim pesan kapan saja untuk tawaran kerja, proyek lepas, atau pertanyaan teknis.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-800/80">
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-medium transition-colors"
                >
                  <span>Kirim Email</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/60 text-xs font-mono transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    />
                  </svg>
                  <span>{copied ? "Tersalin ke Clipboard!" : "Salin Email"}</span>
                </button>
              </div>
            </motion.div>

            {/* GitHub Card */}
            <motion.div
              variants={itemVariants}
              className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/90 hover:border-zinc-700 transition-all backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-zinc-800/90 border border-zinc-700/60 flex items-center justify-center text-zinc-200 mb-6">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>

                <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">
                  GitHub Profile
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">
                  github.com/{portfolioData.contact.githubUsername}
                </h3>
                <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                  Eksplorasi repository publik, automated test scripts, proyek web, dan kontribusi kode saya.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/80">
                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-800/90 hover:bg-zinc-700 text-white text-xs font-medium border border-zinc-700/80 transition-colors w-full justify-center"
                >
                  <span>Buka Profil GitHub</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Footer Area */}
          <motion.div
            variants={itemVariants}
            className="pt-16 mt-16 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400"
          >
            <div>
              &copy; {new Date().getFullYear()} {portfolioData.name}. Dibuat dengan tema Dark & Monokromatik.
            </div>
            <div className="flex items-center gap-4">
              <span>Next.js 14+</span>
              <span>&bull;</span>
              <span>Tailwind CSS</span>
              <span>&bull;</span>
              <span>Framer Motion</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
