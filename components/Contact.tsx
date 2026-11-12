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

  return (
    <section id="contact" className="pt-24 pb-12 relative scroll-mt-20 bg-cream-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl bg-forest-800 text-cream-50 p-8 sm:p-12 lg:p-14 shadow-xl shadow-forest-900/10 relative overflow-hidden"
        >
          {/* Subtle decorative khaki/green accents */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-forest-700/50 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-16 w-64 h-64 rounded-full bg-khaki-500/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Intro */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-khaki-300 uppercase tracking-widest">
                  04 / Hubungi Saya
                </span>
                <div className="h-[1px] w-10 bg-khaki-400/50" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-cream-50 leading-tight">
                Mari Berdiskusi Tentang Proyek &amp; Kualitas Sistem
              </h2>

              <p className="text-sm sm:text-base text-forest-100 leading-relaxed max-w-lg">
                Terbuka untuk peluang magang, kolaborasi proyek, maupun diskusi seputar
                Quality Assurance dan pengembangan web. Silakan hubungi saya melalui email
                atau GitHub.
              </p>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-forest-900/60 border border-forest-700 text-xs text-khaki-200 font-mono">
                <span className="w-2 h-2 rounded-full bg-khaki-300 animate-pulse" />
                <span>{portfolioData.contact.location}</span>
              </div>
            </div>

            {/* Right Contact Channels */}
            <div className="lg:col-span-6 space-y-4">
              {/* Email Box */}
              <div className="p-6 rounded-2xl bg-forest-900/65 border border-forest-700/80 backdrop-blur-sm space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-khaki-300 tracking-wider block">
                      Email Langsung
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-cream-50 mt-1 break-all">
                      {portfolioData.contact.email}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-forest-800 border border-forest-600 flex items-center justify-center text-khaki-300 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={`mailto:${portfolioData.contact.email}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cream-50 hover:bg-white text-forest-900 text-xs font-bold transition-colors shadow-sm"
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
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-khaki-200 border border-khaki-400/40 text-xs font-mono transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                      />
                    </svg>
                    <span>{copied ? "Email Disalin!" : "Salin Alamat Email"}</span>
                  </button>
                </div>
              </div>

              {/* GitHub Box */}
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-forest-900/65 hover:bg-forest-900 border border-forest-700/80 hover:border-khaki-300/60 transition-all flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-800 border border-forest-600 flex items-center justify-center text-cream-50 shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-khaki-300 tracking-wider block">
                      GitHub Repository
                    </span>
                    <div className="text-base font-bold text-cream-50 group-hover:text-khaki-200 transition-colors">
                      github.com/{portfolioData.contact.githubUsername}
                    </div>
                  </div>
                </div>

                <svg
                  className="w-5 h-5 text-khaki-300 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Clean Editorial Footer */}
        <footer className="pt-12 mt-12 border-t border-cream-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-500">
          <div className="font-medium">
            &copy; {new Date().getFullYear()} <span className="text-ink-900 font-semibold">{portfolioData.name}</span>. All rights reserved.
          </div>
          <div className="font-mono flex items-center gap-3 text-khaki-700">
            <span>Next.js 14</span>
            <span>&bull;</span>
            <span>Tailwind CSS</span>
            <span>&bull;</span>
            <span>Framer Motion</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
