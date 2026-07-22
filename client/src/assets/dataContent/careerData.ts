export interface BenefitItem {
  iconName: "globe" | "clock" | "zap" | "award" | "trending-up" | "users";
  title: string;
  description: string;
}

export interface PositionItem {
  id: string;
  title: string;
  department: string;
  type: "Full-time" | "Part-time" | "Freelance" | "Internship";
  location: string;
  status: "open" | "closed" | "talent-pool";
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface CareerData {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  benefitsTagline: string;
  benefitsHeading: string;
  benefits: BenefitItem[];
  positionsTagline: string;
  positionsHeading: string;
  positionsDescription: string;
  departments: string[];
  positions: PositionItem[];
  careerEmail: string;
}

export const CAREER_DATA: CareerData = {
  badge: "GABUNG SKUAD GARUDA JUARA",
  title: "Bekerja, Berkarya, dan Membangun Masa Depan Media Olahraga",
  subtitle: "Lingkungan Kerja Inovatif, Remote-First, dan Berorientasi pada Dampak Jurnalistik Nyata.",
  description:
    "Kami mencari talenta kreatif yang menyukai olahraga, disiplin data, teknologi web modern, serta penulisan narasi berkualitas tinggi untuk bergabung membawa media olahraga Indonesia ke standar SaaS kelas dunia.",
  benefitsTagline: "BUDAYA & BENEFIT",
  benefitsHeading: "Mengapa Mengembangkan Karier di Garuda Juara?",
  benefits: [
    {
      iconName: "globe",
      title: "100% Remote & Work Anywhere",
      description: "Kebebasan bekerja dari lokasi terbaik Anda. Kami berfokus pada kualitas output dan kolaborasi yang efektif.",
    },
    {
      iconName: "zap",
      title: "Akses Liputan Event Olahraga",
      description: "Peluang mendapatkan akreditasi pers dan hadir langsung dalam event olahraga nasional maupun internasional.",
    },
    {
      iconName: "award",
      title: "Kompensasi Kompetitif & Bonus",
      description: "Struktur gaji adil berpatokan pasar, bonus performa artikel, dan apresiasi atas kontribusi khusus.",
    },
    {
      iconName: "trending-up",
      title: "Budget Pengembangan Diri",
      description: "Dukungan dana bulanan untuk pelatihan jurnalisme, lisensi software, maupun kursus data analytics.",
    },
    {
      iconName: "clock",
      title: "Jam Kerja Fleksibel",
      description: "Kelola waktu kerja mandiri dengan prinsip keseimbangan kehidupan pribadi dan profesionalisme.",
    },
    {
      iconName: "users",
      title: "Tim Suportif & Tanpa Birokrasi",
      description: "Struktur organisasi pipih (flat hierarchy) di mana ide dan masukan Anda langsung didengar dan dieksekusi.",
    },
  ],
  positionsTagline: "LOWONGAN TERSEDIA",
  positionsHeading: "Temukan Peran Terbaik Anda",
  positionsDescription: "Pilih posisi yang sesuai dengan keahlian Anda. Kami juga terbuka menerima aplikasi Talent Pool sepanjang tahun.",
  departments: ["Semua", "Redaksi & Jurnalisme", "Data & Technology", "Creative & Media", "Marketing & Business"],
  positions: [
    {
      id: "pos-1",
      title: "Senior Football Analyst & Writer",
      department: "Redaksi & Jurnalisme",
      type: "Full-time",
      location: "Remote (Indonesia)",
      status: "open",
      description: "Bertanggung jawab menyajikan analisis taktik mendalam, statistik pertandingan Timnas & Liga Top Eropa, serta feature story eksklusif.",
      responsibilities: [
        "Menulis ulasan taktis pasca-pertandingan dengan statistik opta/wyscout.",
        "Mengawal perkembangan berita rumor transfer dan profil pemain muda berbakat.",
        "Melakukan wawancara eksklusif dengan atlet atau narasumber olahraga.",
      ],
      requirements: [
        "Pengalaman minimal 2 tahun sebagai jurnalis atau penulis olahraga siber.",
        "Pemahaman mendalam tentang statistik sepak bola (xG, heatmap, pass map).",
        "Bahasa Indonesia baku yang sangat baik dan lancar membaca dokumen Inggris.",
      ],
    },
    {
      id: "pos-2",
      title: "Frontend Developer (React & TypeScript)",
      department: "Data & Technology",
      type: "Full-time",
      location: "Remote",
      status: "open",
      description: "Mengembangkan UI/UX web portal berita Garuda Juara agar selalu responsif, ultra-fast, serta mendukung fitur interactive widgets.",
      responsibilities: [
        "Mengembangkan komponen UI modern dengan React, TypeScript, dan Tailwind CSS.",
        "Mengoptimalkan Core Web Vitals dan kecepatan rendering halaman berita.",
        "Pengintegrasian API live score dan widget infografis interaktif.",
      ],
      requirements: [
        "Menguasai React 18+, TypeScript, Tailwind CSS, dan Next.js/Vite.",
        "Memiliki portofolio aplikasi web dengan desain ultra-clean & modern.",
        "Terbiasa menggunakan Git, CI/CD, dan mengutamakan clean architecture.",
      ],
    },
    {
      id: "pos-3",
      title: "Freelance Esports Journalist (Mobile Legends & VALORANT)",
      department: "Redaksi & Jurnalisme",
      type: "Freelance",
      location: "Remote",
      status: "open",
      description: "Menulis ulasan turnamen esports kelas internasional, rekap MPL/VCT, serta pergerakan transfer pro-player.",
      responsibilities: [
        "Menyajikan liputan cepat saat turnamen besar berlangsung di akhir pekan.",
        "Menulis breakdown strategi draft pick dan meta terkini.",
      ],
      requirements: [
        "Paham mendalam ekosistem esports Indonesia dan global.",
        "Gaya penulisan santai namun tetap informatif dan akurat.",
      ],
    },
    {
      id: "pos-4",
      title: "Social Media & Visual Designer",
      department: "Creative & Media",
      type: "Part-time",
      location: "Remote",
      status: "talent-pool",
      description: "Merancang infografis skor, quote card pemain, dan video singkat carousel untuk Instagram dan TikTok Garuda Juara.",
      responsibilities: [
        "Membuat materi visual matchday, statistik breaking news, dan meme olahraga sehat.",
        "Mengelola kalender konten media sosial harian.",
      ],
      requirements: [
        "Mahir Figma, Adobe Photoshop / Illustrator, dan CapCut / Premiere.",
        "Kreatif dan mengikuti tren meme & desain olahraga dunia.",
      ],
    },
  ],
  careerEmail: "karir@garudajuara.com",
};
