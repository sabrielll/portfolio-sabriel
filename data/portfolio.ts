export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "QA Engineering" | "Fullstack Web" | "Automation";
  description: string;
  techStack: string[];
  keyHighlights: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface SkillItem {
  name: string;
  category: "Testing & QA" | "Development" | "Tools & DevOps";
  level?: string;
  description: string;
}

export interface PortfolioData {
  name: string;
  tagline: string;
  about: string;
  bioDetails: {
    university: string;
    major: string;
    focus: string[];
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
    focus: [
      "Automated & Manual API Testing",
      "End-to-End QA Automation",
      "Fullstack Web Development",
      "Continuous Integration & Quality Standards",
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
      level: "Advanced",
      description: "API testing, automated collection runners, environment mocking, dan assertions.",
    },
    {
      name: "Katalon",
      category: "Testing & QA",
      level: "Intermediate",
      description: "Automated web UI & API testing, regression test suite, dan cross-browser validation.",
    },
    {
      name: "Docker",
      category: "Tools & DevOps",
      level: "Intermediate",
      description: "Containerization environment pengujian terisolasi dan deployment konsisten.",
    },
    {
      name: "Figma",
      category: "Tools & DevOps",
      level: "Intermediate",
      description: "UI/UX design inspection, wireframing, dan verifikasi kesesuaian implementasi visual.",
    },
    {
      name: "Python",
      category: "Development",
      level: "Intermediate",
      description: "Scripting test automation, automated data validation, dan web scraping.",
    },
    {
      name: "Go",
      category: "Development",
      level: "Intermediate",
      description: "High-performance backend API services dan concurrency handling.",
    },
    {
      name: "Next.js",
      category: "Development",
      level: "Advanced",
      description: "Fullstack React framework, Server Components, App Router, dan SSR/SSG.",
    },
    {
      name: "Javascript",
      category: "Development",
      level: "Advanced",
      description: "Modern ES6+, DOM manipulation, asynchronous programming, dan script testing.",
    },
  ],
  projects: [
    {
      id: "ecommerce-api-testing",
      title: "E-Commerce API & Automation Testing Suite",
      tagline: "Comprehensive Automated QA & Performance Pipeline",
      category: "QA Engineering",
      description:
        "Suite pengujian otomatis menyeluruh untuk platform e-commerce yang mencakup autentikasi JWT, alur transaksi pembayaran, manajemen inventaris, dan validasi beban traffic tinggi. Dilengkapi dokumentasi Postman terstruktur dan automated regression pipeline.",
      techStack: ["Postman", "Katalon", "Docker", "Python", "Javascript"],
      keyHighlights: [
        "120+ Automated API Test Cases dengan assertion ketat",
        "Pipeline verifikasi integrasi payment gateway sandbox",
        "Laporan eksekusi otomatis dengan status pass rate 99.2%",
      ],
      githubUrl: "https://github.com/sabrielll",
      liveUrl: "https://github.com/sabrielll",
    },
    {
      id: "ml-guide-app",
      title: "Mobile Legends Guide & Hero Analytics Web App",
      tagline: "Interactive Fullstack Game Guide & Build Optimizer",
      category: "Fullstack Web",
      description:
        "Aplikasi web interaktif untuk strategi hero, rekomendasi build item berbasis meta game, dan kalkulator kombo Mobile Legends. Dibangun dengan Next.js App Router dan microservice backend cepat menggunakan Go, diuji dengan end-to-end integration test.",
      techStack: ["Next.js", "Go", "Docker", "Javascript", "Figma"],
      keyHighlights: [
        "Desain antarmuka monokromatik modern & responsif",
        "Fast REST API query latency di bawah 80ms menggunakan Go",
        "Implementasi automated testing untuk keandalan kalkulasi status item",
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
    availability: "Tersedia untuk Magang, Part-time, & Full-time Opportunities",
  },
  navLinks: [
    { name: "Tentang", href: "#about" },
    { name: "Keahlian", href: "#skills" },
    { name: "Proyek", href: "#projects" },
    { name: "Kontak", href: "#contact" },
  ],
};
