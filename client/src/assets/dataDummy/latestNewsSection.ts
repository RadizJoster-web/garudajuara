export interface ArticleItem {
  id: number;
  title: string;
  slug: string;
  category: string;
  image: string;
  author: string;
  publishedAt: string;
}

export interface FifaRank {
  rank: number;
  country: string;
  flag: string;
  points: number;
  isIndonesia?: boolean;
}

export interface Liga1Rank {
  rank: number;
  club: string;
  logo: string;
  points: number;
}

export interface SocialLink {
  name: string;
  handle: string;
  url: string;
  icon: "instagram" | "twitter" | "youtube" | "tiktok";
}

// Data Berita Terbaru (Sisi Kiri)
export const LATEST_NEWS_DATA: ArticleItem[] = [
  {
    id: 101,
    title: "PSSI Konfirmasi Laga Uji Coba Kontra Australia Bulan Depan",
    slug: "pssi-konfirmasi-laga-uji-coba-kontra-australia",
    category: "TIMNAS",
    image:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80",
    author: "Fajar Nugroho",
    publishedAt: "25 menit lalu",
  },
  {
    id: 102,
    title: "Persija Datangkan Gelandang Asing Jelang Putaran Kedua",
    slug: "persija-datangkan-gelandang-asing-jelang-putaran-kedua",
    category: "LIGA 1",
    image:
      "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=600&q=80",
    author: "Wulan Sari",
    publishedAt: "48 menit lalu",
  },
  {
    id: 103,
    title: "PBSI Rilis Daftar Pebulutangkis untuk Kejuaraan Asia 2026",
    slug: "pbsi-rilis-daftar-pebulutangkis-kejuaraan-asia",
    category: "BULU TANGKIS",
    image:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=600&q=80",
    author: "Rizky Pratama",
    publishedAt: "1 jam lalu",
  },
  {
    id: 104,
    title: "Satria Muda Amankan Kemenangan Dramatis di Detik Terakhir",
    slug: "satria-muda-amankan-kemenangan-dramatis",
    category: "BASKET",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80",
    author: "Dimas Anggara",
    publishedAt: "2 jam lalu",
  },
];

// Data Most Read Minggu Ini
export const MOST_READ_WEEKLY: ArticleItem[] = [
  {
    id: 201,
    title: "Profil Lengkap Skuad Timnas Indonesia untuk Piala AFF 2026",
    slug: "profil-lengkap-skuad-timnas-piala-aff-2026",
    category: "TIMNAS",
    image: "",
    author: "",
    publishedAt: "",
  },
  {
    id: 202,
    title: "Jadwal Lengkap Liga 1 Pekan Ini di Semua Stadion",
    slug: "jadwal-lengkap-liga-1-pekan-ini",
    category: "LIGA 1",
    image: "",
    author: "",
    publishedAt: "",
  },
  {
    id: 203,
    title: "Kenapa Naturalisasi Jadi Kunci Kekuatan Baru Garuda?",
    slug: "kenapa-naturalisasi-jadi-kunci-kekuatan-baru-garuda",
    category: "TIMNAS",
    image: "",
    author: "",
    publishedAt: "",
  },
  {
    id: 204,
    title: "Daftar Gaji dan Nilai Pasar Pemain Bintang Liga 1 Indonesia",
    slug: "daftar-gaji-dan-nilai-pasar-pemain-liga-1",
    category: "LIGA 1",
    image: "",
    author: "",
    publishedAt: "",
  },
];

// Data Ranking FIFA (2 di atas Indonesia, Indonesia di tengah, 2 di bawah)
export const FIFA_RANKINGS_DATA: FifaRank[] = [
  { rank: 125, country: "Malaysia", flag: "🇲🇾", points: 1142.1 },
  { rank: 126, country: "Madagascar", flag: "🇲🇬", points: 1139.8 },
  {
    rank: 127,
    country: "INDONESIA",
    flag: "🇮🇩",
    points: 1135.6,
    isIndonesia: true,
  },
  { rank: 128, country: "Rwanda", flag: "🇷🇼", points: 1130.4 },
  { rank: 129, country: "Gambia", flag: "🇬🇲", points: 1125.2 },
];

// Data Top 5 Klasemen Liga 1
export const LIGA1_STANDINGS_DATA: Liga1Rank[] = [
  { rank: 1, club: "Persib Bandung", logo: "⚽", points: 48 },
  { rank: 2, club: "Persija Jakarta", logo: "⚽", points: 45 },
  { rank: 3, club: "Borneo FC", logo: "⚽", points: 43 },
  { rank: 4, club: "Bali United", logo: "⚽", points: 40 },
  { rank: 5, club: "Persebaya Surabaya", logo: "⚽", points: 38 },
];

// Data Social Media Links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Instagram",
    handle: "@garudajuara.id",
    url: "https://instagram.com",
    icon: "instagram",
  },
  {
    name: "X (Twitter)",
    handle: "@garudajuara_id",
    url: "https://x.com",
    icon: "twitter",
  },
  {
    name: "YouTube",
    handle: "Garuda Juara TV",
    url: "https://youtube.com",
    icon: "youtube",
  },
  {
    name: "TikTok",
    handle: "@garudajuara",
    url: "https://tiktok.com",
    icon: "tiktok",
  },
];
