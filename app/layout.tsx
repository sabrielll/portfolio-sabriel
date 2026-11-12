import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ibnu Sabriel | Quality Assurance Engineer & Web Developer",
  description:
    "Portofolio profesional Ibnu Sabriel - Quality Assurance Engineer & Web Developer. Spesialisasi dalam API testing, test automation, dan pengembangan aplikasi web modern.",
  keywords: [
    "Ibnu Sabriel",
    "Quality Assurance",
    "QA Engineer",
    "Web Developer",
    "Postman",
    "Katalon",
    "Docker",
    "Next.js",
    "Go",
    "Python",
    "Universitas Gunadarma",
  ],
  authors: [{ name: "Ibnu Sabriel" }],
  openGraph: {
    title: "Ibnu Sabriel | Quality Assurance Engineer",
    description:
      "Portofolio Ibnu Sabriel - Mahasiswa Sistem Informasi Universitas Gunadarma, fokus pada QA Testing dan Fullstack Web Development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-cream-50 text-ink-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
