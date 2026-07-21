export interface AboutStatItem {
  value: string;
  label: string;
}

export interface AboutValueItem {
  iconName: "zap" | "shield" | "award";
  title: string;
  description: string;
}

export interface AboutData {
  badge: string;
  title: string;
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
  values: AboutValueItem[];
}

export const ABOUT_DATA: AboutData = {
  badge: "TENTANG GARUDA JUARA",
  title: "Rumah Utama Berita & Analisis Olahraga Indonesia",
  description:
    "Garuda Juara adalah portal berita olahraga independen yang hadir untuk memberikan ruang analisis mendalam, skor real-time, dan narasi perjuangan atlet Merah Putih secara cepat, akurat, dan terpercaya.",
  stats: [
    { value: "100%", label: "Independen & Objektif" },
    { value: "24/7", label: "Pembaruan Berita Real-Time" },
    { value: "15+", label: "Cabang Olahraga Diliput" },
  ],
  vision: {
    tagline: "VISI KAMI",
    heading: "Menghubungkan Jutaan Pendukung dengan Olahraga Favorit Mereka",
    paragraph1:
      "Kami percaya bahwa olahraga bukan sekadar pertandingan 90 menit atau perolehan poin di papan skor. Olahraga adalah tentang semangat, kerja keras, dan persatuan bangsa.",
    paragraph2:
      "Melalui platform digital yang modern dan intuitif, Garuda Juara berdedikasi menjadi jembatan informasi utama bagi para pencinta sepak bola, bulu tangkis, esports, hingga balap motor di tanah air.",
    imageUrl:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    imageCaption:
      '"Semangat pantang menyerah untuk kejayaan olahraga Indonesia."',
  },
  valuesTagline: "PRINSIP REDAKSI",
  valuesHeading: "Pilar Utama Penulisan Kami",
  values: [
    {
      iconName: "zap",
      title: "Kecepatan Informasi",
      description:
        "Menyajikan kabar dan skor pertandingan terkini secara cepat tanpa mengorbankan kualitas analisis.",
    },
    {
      iconName: "shield",
      title: "Akurasi & Anti-Hoax",
      description:
        "Setiap data statistik, kutipan, dan fakta berita melalui proses riset serta verifikasi yang ketat.",
    },
    {
      iconName: "award",
      title: "Perspektif Skuad Garuda",
      description:
        "Berkomitmen penuh mengawal perjuangan atlet Indonesia di kancah nasional maupun internasional.",
    },
  ],
};
