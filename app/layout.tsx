import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ibnu Sabriel | Quality Assurance Engineer & Web Developer",
  description:
    "Portofolio resmi Ibnu Sabriel - Quality Assurance Engineer & Fullstack Web Developer. Spesialisasi dalam API testing, automated regression, dan modern web application.",
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
      "Portofolio Ibnu Sabriel - Mahasiswa Sistem Informasi Universitas Gunadarma, minat dalam QA Testing dan Fullstack Web Development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`dark ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#09090b] text-[#fafafa] font-sans antialiased selection:bg-zinc-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
