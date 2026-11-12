export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "QA Engineering" | "Web Development";
  description: string;
  techStack: string[];
  keyHighlights: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface SkillItem {
  name: string;
  category: "Testing & QA" | "Development" | "Tools";
  description: string;
}

export interface InterestItem {
  title: string;
  description: string;
}

export interface PortfolioData {
  name: string;
  tagline: string;
  about: string;
  bioDetails: {
    university: string;
    major: string;
    interests: InterestItem[];
  };
  skills: SkillItem[];
  rawSkills: string[];
  projects: Project[];
  contact: {
    email: string;
    github: string;
    githubUsername: string;
    location: string;
    availability: string;
  };
  navLinks: { name: string; href: string }[];
}

export const portfolioData: PortfolioData = {
  name: "Ibnu Sabriel",
  tagline: "Sabriel - Quality Assurance Engineer",
  about:
    "Saya Ibnu Sabriel, Seorang mahasiswa di Universitas Gunadarma dengan studi Sistem Informasi yang memiliki minat di testing dan pengembangan web.",
  bioDetails: {
    university: "Universitas Gunadarma",
    major: "Sistem Informasi",
    interests: [
      {
        title: "Software Testing & QA",
        description:
          "Mempelajari dan mempraktikkan pengujian API, validasi fungsional, serta penulisan skenario uji untuk memastikan aplikasi berjalan sesuai harapan.",
      },
      {
        title: "Pengembangan Web",
        description:
          "Membangun antarmuka dan aplikasi web menggunakan teknologi modern dengan struktur kode yang rapi, responsif, dan nyaman digunakan.",
      },
    ],
  },
  rawSkills: [
    "Postman",
    "Katalon",
    "Docker",
    "Figma",
    "Python",
    "Go",
    "Next.js",
    "Javascript",
  ],
  skills: [
    {
      name: "Postman",
      category: "Testing & QA",
      description:
        "Pengujian endpoint API, manajemen collection, environment variables, dan validasi response.",
    },
    {
      name: "Katalon",
      category: "Testing & QA",
      description:
        "Pembuatan skenario pengujian otomatis untuk web UI dan API serta pengecekan alur pengguna.",
    },
    {
      name: "Docker",
      category: "Tools",
      description:
        "Menjalankan container agar lingkungan pengujian dan pengembangan tetap konsisten.",
    },
    {
      name: "Figma",
      category: "Tools",
      description:
        "Membaca desain UI/UX, membuat wireframe, dan memastikan kesesuaian tampilan dengan desain.",
    },
    {
      name: "Python",
      category: "Development",
      description:
        "Bahasa pemrograman untuk scripting pengujian, pengolahan data, dan otomasi tugas sederhana.",
    },
    {
      name: "Go",
      category: "Development",
      description:
        "Pengembangan layanan backend dan REST API dengan struktur yang ringan dan terorganisir.",
    },
    {
      name: "Next.js",
      category: "Development",
      description:
        "Framework React modern untuk membangun aplikasi web dengan routing dan rendering yang cepat.",
    },
    {
      name: "Javascript",
      category: "Development",
      description:
        "Bahasa utama untuk interaktivitas frontend, logika aplikasi web, dan test scripting.",
    },
  ],
  projects: [
    {
      id: "ecommerce-api-testing",
      title: "E-Commerce API Testing",
      tagline: "Pengujian Endpoint & Validasi Alur Transaksi",
      category: "QA Engineering",
      description:
        "Proyek pengujian API untuk sistem e-commerce yang mencakup alur registrasi, autentikasi token, manajemen keranjang belanja, dan checkout menggunakan Postman serta Katalon.",
      techStack: ["Postman", "Katalon", "Docker", "Javascript"],
      keyHighlights: [
        "Penyusunan test collection terstruktur untuk skenario positif & negatif",
        "Validasi status code, struktur JSON response, dan autentikasi pengguna",
        "Lingkungan pengujian terisolasi menggunakan Docker container",
      ],
      githubUrl: "https://github.com/sabrielll",
      liveUrl: "https://github.com/sabrielll",
    },
    {
      id: "ml-guide-app",
      title: "Mobile Legends Guide Web App",
      tagline: "Aplikasi Panduan Hero & Build Item Interaktif",
      category: "Web Development",
      description:
        "Aplikasi web panduan hero Mobile Legends yang menyajikan informasi role, rekomendasi build item, dan detail skill dengan antarmuka responsif menggunakan Next.js dan backend API berbasis Go.",
      techStack: ["Next.js", "Go", "Javascript", "Figma"],
      keyHighlights: [
        "Desain antarmuka bersih, responsif & nyaman digunakan",
        "Pencarian dan filter hero berdasarkan role secara dinamis",
        "Integrasi API menggunakan Go dengan struktur endpoint yang rapi",
      ],
      githubUrl: "https://github.com/sabrielll",
      liveUrl: "https://github.com/sabrielll",
    },
  ],
  contact: {
    email: "Ibnusabriel86@gmail.com",
    github: "https://github.com/sabrielll",
    githubUsername: "sabrielll",
    location: "Depok / Jakarta, Indonesia",
    availability: "Terbuka untuk Magang & Kolaborasi Proyek",
  },
  navLinks: [
    { name: "Tentang", href: "#about" },
    { name: "Keahlian", href: "#skills" },
    { name: "Proyek", href: "#projects" },
    { name: "Kontak", href: "#contact" },
  ],
};
