"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-50/90 backdrop-blur-md border-b border-cream-200 py-3.5 shadow-sm shadow-khaki-300/20"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <Link href="#" className="group flex items-center gap-3 transition-colors">
          <span className="w-9 h-9 rounded-lg bg-forest-800 flex items-center justify-center font-mono text-xs font-semibold text-cream-50 group-hover:bg-forest-700 transition-colors shadow-sm">
            IS
          </span>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-ink-900">
              {portfolioData.name}
            </span>
            <span className="text-[11px] font-mono text-khaki-600 tracking-wide">
              Quality Assurance Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/80 border border-cream-200 px-2.5 py-1.5 rounded-full shadow-sm">
          {portfolioData.navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-ink-700 hover:text-forest-800 px-4 py-1.5 rounded-full transition-colors hover:bg-forest-50"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#contact"
            className="text-xs font-semibold px-4 py-2.5 rounded-lg bg-forest-800 hover:bg-forest-700 text-cream-50 transition-all shadow-sm hover:shadow-md active:scale-95"
          >
            Hubungi Saya
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-ink-700 hover:text-forest-800 rounded-lg border border-cream-200 bg-white/80"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-cream-200 bg-cream-50/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-2"
          >
            {portfolioData.navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-ink-700 hover:text-forest-800 py-2.5 px-2 rounded-md hover:bg-forest-50 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center text-xs font-semibold px-4 py-3 rounded-lg bg-forest-800 text-cream-50 hover:bg-forest-700 mt-2 transition-colors"
            >
              Hubungi Saya
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
