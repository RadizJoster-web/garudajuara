export interface FeaturedArticle {
  id: number;
  title: string;
  slug: string;
  category: string;
  image: string;
  author: string;
  publishedAt: string;
}

export const FEATURED_NEWS: FeaturedArticle[] = [
  {
    id: 1,
    title: "Ernando Ari Jadi Pahlawan Lewat 4 Penyelamatan Krusial",
    slug: "ernando-ari-jadi-pahlawan-lewat-4-penyelamatan-krusial",
    category: "TIMNAS",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=600&q=80",
    author: "Andi Wijaya",
    publishedAt: "3 jam lalu",
  },
  {
    id: 2,
    title: "Klasemen Liga 1 Memanas, Tiga Tim Bersaing Ketat di Puncak",
    slug: "klasemen-liga-1-memanas-tiga-tim-bersaing-ketat-di-puncak",
    category: "LIGA 1",
    image:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80",
    author: "Dian Kusuma",
    publishedAt: "4 jam lalu",
  },
  {
    id: 3,
    title: "Gregoria Tembus Semifinal Usai Singkirkan Unggulan Jepang",
    slug: "gregoria-tembus-semifinal-usai-singkirkan-unggulan-jepang",
    category: "BULU TANGKIS",
    image:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=600&q=80",
    author: "Sinta Ayu",
    publishedAt: "5 jam lalu",
  },
  {
    id: 4,
    title: "IBL All-Star 2026 Resmi Digelar di Jakarta Bulan Depan",
    slug: "ibl-all-star-2026-resmi-digelar-di-jakarta-bulan-depan",
    category: "BASKET",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80",
    author: "Bagas Prasetyo",
    publishedAt: "6 jam lalu",
  },
];
    