export interface DisclaimerSectionItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  content: string[];
}

export interface DisclaimerData {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  lastUpdated: string;
  effectiveDate: string;
  sections: DisclaimerSectionItem[];
}

export const DISCLAIMER_DATA: DisclaimerData = {
  badge: "DOKUMEN LEGAL",
  title: "Penafian (Disclaimer)",
  subtitle: "Pernyataan Sanggahan Informasi, Data Pertandingan, dan Tautan Pihak Ketiga.",
  description:
    "Halaman penafian ini menjelaskan batasan tanggung jawab hukum Garuda Juara terkait materi pemberitaan, analisis opini, serta tautan eksternal.",
  lastUpdated: "21 Juli 2026",
  effectiveDate: "01 Januari 2026",
  sections: [
    {
      id: "informasi-umum",
      number: "PASAL 01",
      title: "Sifat Informasi Pemberitaan",
      summary: "Tujuan jurnalistik umum dan independensi editorial.",
      content: [
        "Tujuan Informasi: Informasi yang dipublikasikan di situs Garuda Juara ditujukan semata-mata untuk keperluan informasi umum, berita olahraga, dan edukasi publik.",
        "Analisis Opini: Artikel ulasan taktik atau kolom opini penulis mencerminkan sudut pandang analitis independen dan bukan merupakan instruksi keuangan, taruhan, atau tindakan hukum.",
      ],
    },
    {
      id: "data-pertandingan",
      number: "PASAL 02",
      title: "Data Skor Real-Time & Statistik",
      summary: "Pernyataan penggunaan widget data API statistik eksternal.",
      content: [
        "Penyedia Data Pihak Ketiga: Data skor real-time, jadwal pertandingan, dan klasemen dipasok melalui API data olahraga profesional.",
        "Potensi Keterlambatan: Garuda Juara tidak bertanggung jawab atas kerugian dalam bentuk apa pun yang disebabkan oleh keterlambatan sinkronisasi data skor atau kesalahan input angka dari penyedia data eksternal tersebut.",
      ],
    },
    {
      id: "tautan-eksternal",
      number: "PASAL 03",
      title: "Tautan ke Situs Pihak Ketiga",
      summary: "Sanggahan atas konten situs eksternal yang dihubungkan.",
      content: [
        "Situs Garuda Juara mungkin memuat tautan menuju situs web pihak ketiga (seperti situs federasi resmi, akun media sosial atlet, atau mitra hak siar).",
        "Garuda Juara tidak memiliki kendali atas isi, kebijakan privasi, atau praktik situs pihak ketiga tersebut dan tidak bertanggung jawab atas kerugian akibat transaksi di luar portal kami.",
      ],
    },
    {
      id: "iklan-sponsor",
      number: "PASAL 04",
      title: "Iklan & Konten Bersponsor",
      summary: "Kejelasan transaksi antara pembaca dan pengiklan.",
      content: [
        "Tampilan banner iklan atau artikel bersponsor di situs ini tidak serta-merta mengimplikasikan rekomendasi pribadi dari redaksi Garuda Juara.",
        "Segala bentuk interaksi jual-beli atau penggunaan jasa pengiklan sepenuhnya merupakan kesepakatan langsung antara pembaca dan pihak pengiklan terkait.",
      ],
    },
  ],
};
