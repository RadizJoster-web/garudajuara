export interface SearchArticleItem {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
  publishedAt: string;
  readTime: string;
}

export const DUMMY_SEARCH_RESULTS: SearchArticleItem[] = [
  {
    id: 301,
    title:
      "Analisis Taktik: Bagaimana Formasi 3-4-3 Mengubah Gaya Main Timnas Indonesia",
    slug: "analisis-taktik-formasi-3-4-3-timnas-indonesia",
    excerpt:
      "Pendekatan berbasis penguasaan ruang dan transisi cepat menjadi kunci utama kesuksesan taktik Skuad Garuda di laga internasional.",
    category: "TIMNAS",
    image:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80",
    author: "Radiz Dirganta",
    publishedAt: "2 jam lalu",
    readTime: "4 min baca",
  },
  {
    id: 302,
    title: "Kondisi Fisik Pemain Utama Timnas Jelang Pertandingan Kualifikasi",
    slug: "kondisi-fisik-pemain-utama-timnas-kualifikasi",
    excerpt:
      "Tim medis memberikan lampu hijau untuk seluruh pilar utama yang sempat mengalami cedera ringan.",
    category: "TIMNAS",
    image:
      "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=600&q=80",
    author: "Rizky Pratama",
    publishedAt: "4 jam lalu",
    readTime: "3 min baca",
  },
  {
    id: 303,
    title: "Persiapan Penjualan Tiket Laga Timnas di Stadion GBK Pekan Depan",
    slug: "persiapan-penjualan-tiket-laga-timnas-gbk",
    excerpt:
      "Panitia pelaksana memastikan sistem tiket online diperkuat untuk mencegah gangguan antrean digital.",
    category: "TIMNAS",
    image:
      "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=600&q=80",
    author: "Budi Santoso",
    publishedAt: "6 jam lalu",
    readTime: "2 min baca",
  },
  {
    id: 304,
    title: "Deretan Pemain Muda Potensial yang Siap Masuk Skuad Utama",
    slug: "deretan-pemain-muda-potensial-skuad-utama",
    excerpt:
      "Konsistensi di liga domestik membuka peluang bagi talenta muda untuk dilirik tim nasional.",
    category: "LIGA INDONESIA",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=600&q=80",
    author: "Wulan Sari",
    publishedAt: "10 jam lalu",
    readTime: "5 min baca",
  },
  {
    id: 305,
    title: "Dukungan Suporter Merah Putih Membakar Semangat Pertandingan",
    slug: "dukungan-suporter-merah-putih-membakar-semangat",
    excerpt:
      "Atmosfer tribune penuh menjadi amunisi tambahan bagi skuad yang bertanding di kandang.",
    category: "TIMNAS",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=600&q=80",
    author: "Radiz Dirganta",
    publishedAt: "12 jam lalu",
    readTime: "3 min baca",
  },
  {
    id: 306,
    title: "Evaluasi Hasil Laga Uji Coba Internasional Pekan Lalu",
    slug: "evaluasi-hasil-laga-uji-coba-internasional",
    excerpt:
      "Catatan statistik menunjukkan peningkatan akurasi umpan dan efisiensi penyelesaian akhir.",
    category: "INTERNATIONAL",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80",
    author: "Fajar Nugroho",
    publishedAt: "1 hari lalu",
    readTime: "4 min baca",
  },
];
    