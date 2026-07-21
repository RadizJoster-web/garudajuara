export interface BenefitItem {
  iconName: "globe" | "clock" | "zap";
  title: string;
  description: string;
}

export interface PositionItem {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  status: "open" | "closed" | "talent-pool";
  description: string;
}

export interface CareerData {
  badge: string;
  title: string;
  description: string;
  benefitsTagline: string;
  benefitsHeading: string;
  benefits: BenefitItem[];
  positionsHeading: string;
  positionsDescription: string;
  positions: PositionItem[];
  careerEmail: string;
}

export const CAREER_DATA: CareerData = {
  badge: "GABUNG BERSAMA KAMI",
  title: "Tumbuh dan Berkarya Bersama Garuda Juara",
  description:
    "Kami selalu mencari talenta berbakat yang memiliki passion mendalam di bidang olahraga, jurnalistik digital, riset data, dan pengembangan teknologi platform.",
  benefitsTagline: "BUDAYA KERJA",
  benefitsHeading: "Mengapa Berkarir di Garuda Juara?",
  benefits: [
    {
      iconName: "globe",
      title: "100% Remote-First",
      description:
        "Bekerja dari mana saja secara fleksibel dengan fokus pada hasil dan dampak nyata, bukan jam kehadiran fisik.",
    },
    {
      iconName: "clock",
      title: "Keseimbangan Kerja & Kreativitas",
      description:
        "Ruang luas untuk mengeksplorasi ide tulisan, analisis taktik, serta inovasi fitur media digital.",
    },
    {
      iconName: "zap",
      title: "Dampak Langsung ke Pembaca",
      description:
        "Karyamu akan dibaca dan menjadi rujukan bagi ribuan pencinta olahraga di seluruh Indonesia.",
    },
  ],
  positionsHeading: "Posisi yang Tersedia",
  positionsDescription:
    "Saat ini kami belum membuka posisi full-time baru. Namun, kami selalu terbuka untuk talenta hebat melalui program Talent Pool.",
  positions: [
    {
      id: "pos-1",
      title: "Freelance Sports Writer (Sepak Bola & Esports)",
      department: "Redaksi",
      type: "Part-time / Freelance",
      location: "Remote",
      status: "talent-pool",
      description:
        "Menulis analisis ulasan pertandingan, kabar transfer, dan profil atlet secara mendalam.",
    },
    {
      id: "pos-2",
      title: "Social Media Specialist",
      department: "Marketing",
      type: "Part-time",
      location: "Remote",
      status: "talent-pool",
      description:
        "Mengelola konten kreatif, visual infografis skor, dan interaksi komunitas di platform media sosial.",
    },
  ],
  careerEmail: "karir@garudajuara.com",
};
