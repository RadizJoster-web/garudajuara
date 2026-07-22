export interface CategoryArticleItem {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
  publishedAt: string;
  readTime: string;
  isHeadline?: boolean;
}

export const DUMMY_CATEGORY_ARTICLES: CategoryArticleItem[] = [
  // Headline Utama Kategori
  {
    id: 101,
    title:
      "Skenario Kelolosan Timnas Indonesia ke Putaran Final Piala Asia 2027",
    slug: "skenario-kelolosan-timnas-indonesia-piala-asia-2027",
    excerpt:
      "Skuad Garuda menyisakan dua laga krusial. Kemenangan atas Vietnam menjadi kunci utama mengunci tiket otomatis tanpa bergantung hasil tim lain.",
    category: "TIMNAS",
    image:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",
    author: "Radiz Dirganta",
    publishedAt: "10 menit lalu",
    readTime: "4 min baca",
    isHeadline: true,
  },
  // Daftar Berita Terbaru Kategori (5 Artikel)
  {
    id: 102,
    title:
      "Kondisi Fisik Pemain Timnas Membaik Jelang Laga Penentu di Gelora Bung Karno",
    slug: "kondisi-fisik-pemain-timnas-membaik-gbk",
    excerpt:
      "Tim medis mengonfirmasi seluruh pilar utama dalam kondisi fit dan siap diturunkan sejak menit awal.",
    category: "TIMNAS",
    image:
      "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=600&q=80",
    author: "Rizky Pratama",
    publishedAt: "1 jam lalu",
    readTime: "3 min baca",
  },
  {
    id: 103,
    title: "Taktik Transisi Cepat Coach Shin Tae-yong Jadi Sorotan Media Asia",
    slug: "taktik-transisi-cepat-sty-sorotan-media-asia",
    excerpt:
      "Analisis statistik menunjukkan peningkatan skema efisiensi serangan balik skuad Indonesia hingga 35%.",
    category: "TIMNAS",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80",
    author: "Fajar Nugroho",
    publishedAt: "3 jam lalu",
    readTime: "5 min baca",
  },
  {
    id: 104,
    title: "Daftar Pemain Muda Liga 1 yang Berpotensi Dipanggil Skuad Garuda",
    slug: "daftar-pemain-muda-liga-1-potensi-dipanggil-timnas",
    excerpt:
      "Performa konsisten di kompetisi domestik membentangkan jalan bagi 3 talenta baru untuk masuk radar pelatih.",
    category: "TIMNAS",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=600&q=80",
    author: "Wulan Sari",
    publishedAt: "5 jam lalu",
    readTime: "4 min baca",
  },
  {
    id: 105,
    title: "Tiket Pertandingan Timnas Ludes Terjual dalam Hitungan Menit",
    slug: "tiket-pertandingan-timnas-ludes-terjual",
    excerpt:
      "Antusiasme suporter Merah Putih melonjak drastis menjelang partai panas akhir pekan ini.",
    category: "TIMNAS",
    image:
      "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=600&q=80",
    author: "Budi Santoso",
    publishedAt: "8 jam lalu",
    readTime: "2 min baca",
  },
  {
    id: 106,
    title: "Dukungan Penuh Suporter Garuda Siap Memerahkan Stadion Utama GBK",
    slug: "dukungan-penuh-suporter-garuda-siap-memerahkan-gbk",
    excerpt:
      "Koreografi raksasa disiapkan kelompok suporter untuk membakar semangat para pemain di lapangan.",
    category: "TIMNAS",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=600&q=80",
    author: "Radiz Dirganta",
    publishedAt: "12 jam lalu",
    readTime: "3 min baca",
  },
  {
    id: 107,
    title: "Dukungan Penuh Suporter Garuda Siap Memerahkan Stadion Utama GBK",
    slug: "dukungan-penuh-suporter-garuda-siap-memerahkan-gbk",
    excerpt:
      "Koreografi raksasa disiapkan kelompok suporter untuk membakar semangat para pemain di lapangan.",
    category: "TIMNAS",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=600&q=80",
    author: "Radiz Dirganta",
    publishedAt: "12 jam lalu",
    readTime: "3 min baca",
  },
];
  