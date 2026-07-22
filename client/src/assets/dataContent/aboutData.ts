export interface AboutStatItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface AboutValueItem {
  iconName: "zap" | "shield" | "award" | "trending-up" | "users" | "globe";
  title: string;
  description: string;
}

export interface AboutMilestoneItem {
  year: string;
  title: string;
  description: string;
}

export interface AboutData {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  stats: AboutStatItem[];
  vision: {
    tagline: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
    imageUrl: string;
    imageCaption: string;
  };
  valuesTagline: string;
  valuesHeading: string;
  valuesDescription: string;
  values: AboutValueItem[];
  milestonesTagline: string;
  milestonesHeading: string;
  milestones: AboutMilestoneItem[];
}

export const ABOUT_DATA: AboutData = {
  badge: "TENTANG GARUDA JUARA",
  title: "Rumah Utama Berita & Analisis Olahraga Modern Indonesia",
  subtitle: "Independen, Cepat, Akurat, dan Berdedikasi Menyajikan Narasi Kejayaan Olahraga Merah Putih.",
  description:
    "Garuda Juara hadir sebagai platform media digital olahraga independen generasi baru yang mengombinasikan kecepatan informasi real-time dengan kedalaman analisis data, statistik taktikal, dan sudut pandang mendalam mengenai perjuangan atlet Indonesia di kancah nasional maupun dunia.",
  stats: [
    { value: "2.5M+", label: "Pembaca Bulanan", sublabel: "Komunitas aktif pencinta olahraga" },
    { value: "100%", label: "Independen & Objektif", sublabel: "Bebas dari intervensi pihak luar" },
    { value: "24/7", label: "Pembaruan Berita", sublabel: "Liputan langsung & skor real-time" },
    { value: "15+", label: "Cabang Olahraga", sublabel: "Sepak Bola, Badminton, Esports, dll" },
  ],
  vision: {
    tagline: "VISI & MISI KAMI",
    heading: "Menghubungkan Jutaan Pendukung dengan Olahraga Favorit Mereka",
    paragraph1:
      "Kami percaya bahwa olahraga bukan sekadar pertandingan 90 menit atau perolehan skor di atas kertas. Olahraga adalah simbol kerja keras, persatuan, dan kehormatan bangsa.",
    paragraph2:
      "Dengan standar jurnalistik tinggi dan pemanfaatan teknologi digital terdepan, Garuda Juara berkomitmen menghadirkan kabar terpercaya, ulasan taktikal tajam, serta cerita inspiratif di balik layar para pahlawan olahraga Indonesia.",
    imageUrl:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
    imageCaption: '"Semangat pantang menyerah untuk mengawal perjuangan Garuda di panggung dunia."',
  },
  valuesTagline: "NILAI UTAMA",
  valuesHeading: "Pilar Jurnalistik & Inovasi Garuda Juara",
  valuesDescription: "Prinsip dasar yang memandu setiap artikel, analisis, dan karya jurnalistik yang kami sajikan.",
  values: [
    {
      iconName: "zap",
      title: "Kecepatan Tanpa Mengorbankan Kualitas",
      description:
        "Menyajikan kabar terkini dan analisis pertandingan secara presisi dalam hitungan detik setelah peluit akhir berbunyi.",
    },
    {
      iconName: "shield",
      title: "Akurasi & Integritas Teruji",
      description:
        "Setiap data statistik, wawancara, dan fakta berita melalui proses riset serta klarifikasi multi-sumber yang ketat.",
    },
    {
      iconName: "award",
      title: "Fokus Prestasi Merah Putih",
      description:
        "Berkomitmen mengawal secara intensif perjuangan atlet serta kontingen Indonesia dari tingkat daerah hingga Olimpiade.",
    },
    {
      iconName: "trending-up",
      title: "Analisis Berbasis Data",
      description:
        "Memanfaatkan infografis, heatmap, dan visualisasi data statistik untuk menyajikan ulasan taktikal yang mudah dipahami.",
    },
    {
      iconName: "users",
      title: "Komunitas Pembaca Inklusif",
      description:
        "Membangun ruang diskusi yang sehat, respek, dan konstruktif bagi seluruh pengikut dan suporter olahraga.",
    },
    {
      iconName: "globe",
      title: "Wawasan Olahraga Global",
      description:
        "Menghubungkan dinamika industri dan tren olahraga internasional dengan dampaknya bagi perkembangan olahraga nasional.",
    },
  ],
  milestonesTagline: "PERJALANAN KAMI",
  milestonesHeading: "Jejak Langkah Perkembangan Media",
  milestones: [
    {
      year: "2024",
      title: "Inisiasi Garuda Juara",
      description: "Didirikan sebagai blog analisis statistik sepak bola nasional dan liputan khusus Timnas Indonesia.",
    },
    {
      year: "2025",
      title: "Peluncuran Platform Multi-Sport",
      description: "Ekspansi liputan ke cabang bulu tangkis, balap motor, esports, dan pengembangan tim redaksi independen.",
    },
    {
      year: "2026",
      title: "Redesign Portal Modern SaaS",
      description: "Mentransformasi pengalaman pembaca dengan desain ultra-modern, live-score engine, dan media kit bisnis.",
    },
  ],
};
