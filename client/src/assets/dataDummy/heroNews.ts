export interface Article {
  id: number;
  title: string;
  slug: string;
  category: string;
  image: string;
  author: string;
  publishedAt: string;
  readTime: string;
}

export const MAIN_HEADLINER: Article = {
  id: 1,
  title:
    "Drama 90 Menit! Timnas Indonesia Tekuk Vietnam 2–1, Pastikan Tiket Semifinal Piala AFF 2026",
  slug: "drama-90-menit-timnas-indonesia-tekuk-vietnam-2-1",
  category: "TIMNAS INDONESIA",
  image:
    "https://asset.kompas.com/crops/GIH88ejFxB6WQoeVuss8dQpFRJs=/184x0:905x481/1200x800/data/photo/2024/07/16/6695f6b7b8732.jpg",
  author: "Rizky Pratama",
  publishedAt: "2 jam lalu",
  readTime: "5 menit baca",
};

export const TRENDING_NEWS: Article[] = [
  {
    id: 2,
    title: "Shin Tae-yong Bongkar Strategi Redam Serangan Balik Thailand",
    slug: "shin-tae-yong-bongkar-strategi-redam-serangan-balik-thailand",
    category: "TIMNAS",
    image:
      "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=300&q=80",
    author: "Dimas Anggara",
    publishedAt: "3 jam lalu",
    readTime: "3 menit baca",
  },
  {
    id: 3,
    title: "Persib Kokoh di Puncak Usai Pesta Gol ke Gawang PSM",
    slug: "persib-kokoh-di-puncak-usai-pesta-gol-ke-gawang-psm",
    category: "LIGA 1",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=300&q=80",
    author: "Budi Santoso",
    publishedAt: "4 jam lalu",
    readTime: "4 menit baca",
  },
  {
    id: 4,
    title: "Fajar/Rian Melaju ke Final Indonesia Open Usai Comeback 3 Gim",
    slug: "fajar-rian-melaju-ke-final-indonesia-open",
    category: "BULU TANGKIS",
    image:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=300&q=80",
    author: "Siti Rahma",
    publishedAt: "5 jam lalu",
    readTime: "3 menit baca",
  },
  {
    id: 5,
    title: "RRQ Melaju ke Grand Final M-Series Usai Sapu Bersih Playoff",
    slug: "rrq-melaju-ke-grand-final-m-series",
    category: "ESPORTS",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=300&q=80",
    author: "Kevin Wijaya",
    publishedAt: "6 jam lalu",
    readTime: "2 menit baca",
  },
];
