"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import personalPhoto from "@/personal_photo.jpeg";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-cream-50">
      {/* Subtle architectural grid & warm ambient gradients */}
      <div className="absolute inset-0 bg-architect-grid opacity-55 pointer-events-none" />
      <div className="absolute -top-24 right-0 w-[480px] h-[480px] bg-forest-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] bg-khaki-100/80 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Introduction */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-forest-100/80 border border-forest-200 text-xs text-forest-800 font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-forest-600 animate-pulse" />
              <span>{portfolioData.contact.availability}</span>
            </motion.div>

            {/* Name & Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-900 leading-[1.12]">
                {portfolioData.name}
              </h1>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-khaki-500 rounded-full" />
                <p className="text-base sm:text-xl font-semibold text-forest-700 font-mono tracking-tight">
                  {portfolioData.tagline}
                </p>
              </div>
            </motion.div>

            {/* Modest, Authentic Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg text-ink-700 max-w-xl leading-relaxed"
            >
              Mahasiswa Sistem Informasi di Universitas Gunadarma yang berfokus pada
              pengujian kualitas perangkat lunak dan pengembangan aplikasi web modern.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-forest-800 hover:bg-forest-700 text-cream-50 font-semibold text-sm transition-all shadow-sm hover:shadow-md active:scale-[0.98]"
              >
                <span>Lihat Proyek</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-khaki-50 text-ink-900 border border-khaki-300 hover:border-khaki-400 font-semibold text-sm transition-all shadow-sm active:scale-[0.98]"
              >
                <span>Hubungi Saya</span>
              </Link>

              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-cream-100 hover:bg-khaki-100 text-ink-700 hover:text-forest-800 border border-cream-200 text-sm font-mono transition-all"
                aria-label="GitHub Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span className="text-xs">@{portfolioData.contact.githubUsername}</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Clean Editorial Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] group">
              {/* Layered Khaki & Sage Decorative Offset Backing */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-khaki-200/70 border border-khaki-300/60 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4 pointer-events-none" />
              <div className="absolute -inset-2 -translate-x-2 -translate-y-2 rounded-3xl border border-forest-200/60 pointer-events-none" />

              {/* Main Cream White Card Frame */}
              <div className="relative rounded-3xl bg-white p-2.5 border border-cream-200 shadow-xl shadow-khaki-300/25">
                <div className="relative aspect-[4/4.5] w-full rounded-2xl overflow-hidden bg-cream-100">
                  <Image
                    src={personalPhoto}
                    alt={portfolioData.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  {/* Soft atmospheric gradient at bottom for clean legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/55 via-transparent to-transparent pointer-events-none" />

                  {/* Translucent Caption Pill */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 px-4 py-3 rounded-xl bg-cream-50/90 backdrop-blur-md border border-cream-200/90 shadow-sm flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold text-ink-900">
                        {portfolioData.name}
                      </p>
                      <p className="text-[11px] font-mono text-forest-700 mt-0.5">
                        {portfolioData.bioDetails.university}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-khaki-100 text-khaki-700 border border-khaki-200 text-[10px] font-mono font-semibold shrink-0">
                      {portfolioData.bioDetails.major}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
