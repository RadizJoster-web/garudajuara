export interface TermsSectionItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  content: string[];
}

export interface TermsData {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  lastUpdated: string;
  effectiveDate: string;
  sections: TermsSectionItem[];
}

export const TERMS_DATA: TermsData = {
  badge: "DOKUMEN LEGAL",
  title: "Syarat & Ketentuan Layanan",
  subtitle: "Aturan Pengunaan Situs, Hak Kekayaan Intelektual, dan Etika Komunitas Pembaca.",
  description:
    "Selamat datang di Garuda Juara. Dengan mengakses atau menggunakan portal media siber ini, Anda menyatakan setuju untuk terikat oleh Syarat & Ketentuan berikut.",
  lastUpdated: "21 Juli 2026",
  effectiveDate: "01 Januari 2026",
  sections: [
    {
      id: "ketentuan-umum",
      number: "PASAL 01",
      title: "Ketentuan Umum Penggunaan",
      summary: "Penerimaan persetujuan dan batasan usia penggunaan portal.",
      content: [
        "Akses Layanan: Seluruh konten berita, analisis, infografis, dan data pertandingan di situs Garuda Juara disediakan untuk tujuan informasi publik dan hiburan semata.",
        "Persetujuan Pengguna: Jika Anda tidak menyetujui salah satu poin dalam ketentuan ini, Anda disarankan untuk tidak melanjutkan penggunaan layanan kami.",
        "Kapasitas Hukum: Pengguna menyatakan memiliki kapasitas hukum yang sah menurut ketentuan perundang-undangan Republik Indonesia.",
      ],
    },
    {
      id: "hak-cipta",
      number: "PASAL 02",
      title: "Hak Kekayaan Intelektual (HAKI)",
      summary: "Perlindungan konten teks, karya visual, dan tata cara sitasi berita.",
      content: [
        "Kepemilikan Konten: Seluruh artikel, narasi berita, desain antarmuka, tata letak, infografis, dan logo Garuda Juara merupakan hak cipta yang dilindungi Undang-Undang Hak Cipta No. 28 Tahun 2014.",
        "Ketentuan Pengutipan: Pengutipan berita atau analisis Garuda Juara oleh media lain diperbolehkan maksimal 20% dari total panjang tulisan dengan WAJIB menyertakan atribusi sumber 'Garuda Juara' dan tautan aktif (backlink) menuju halaman artikel asli.",
        "Larangan Scraping: Dilarang keras melakukan penggandaan otomatis (web scraping), komersialisasi ulang, atau redistribusi konten tanpa izin tertulis dari manajemen Garuda Juara.",
      ],
    },
    {
      id: "etika-komentar",
      number: "PASAL 03",
      title: "Etika Komentar & Konten Pengguna",
      summary: "Pedoman interaksi pembaca dan larangan ujaran kebencian/SARA.",
      content: [
        "Tanggung Jawab Pembaca: Komentar atau masukan yang dituliskan pembaca pada kolom yang disediakan merupakan tanggung jawab pribadi penulis komentar tersebut.",
        "Larangan SARA & Judol: Dilarang menuliskan komentar yang mengandung ujaran kebencian, suku, agama, ras, ujaran ad-hominem, promosi judi online, pornografi, spam, maupun hoaks.",
        "Moderasi Redaksi: Tim redaksi berhak menghapus komentar, memblokir akun pembaca, atau mengambil langkah hukum apabila ditemukan pelanggaran etika interaksi.",
      ],
    },
    {
      id: "pembatasan-tanggung-jawab",
      number: "PASAL 04",
      title: "Penafian & Pembatasan Tanggung Jawab",
      summary: "Sifat data real-time dan jaminan ketersediaan server.",
      content: [
        "Keakuratan Data: Meskipun tim redaksi melakukan verifikasi ketat, Garuda Juara tidak memberikan jaminan mutlak tanpa cela terhadap data statistik pertandingan dari pihak ketiga (vendor live score).",
        "Ketersediaan Layanan: Kami berupaya menjaga ketersediaan portal 24/7, namun tidak bertanggung jawab atas gangguan teknis sementara akibat perbaikan server, bencana alam, atau force majeure.",
      ],
    },
    {
      id: "hukum-yang-berlaku",
      number: "PASAL 05",
      title: "Hukum yang Berlaku & Yurisdiksi",
      summary: "Penyelesaian perselisihan berdasarkan hukum Republik Indonesia.",
      content: [
        "Syarat dan Ketentuan ini diatur dan ditafsirkan sesuai dengan Hukum Republik Indonesia.",
        "Segala perselisihan yang timbul dari pengoperasian situs ini akan diselesaikan secara musyawarah mufakat, atau melalui saluran Pengadilan Negeri setempat apabila mufakat tidak tercapai.",
      ],
    },
  ],
};
