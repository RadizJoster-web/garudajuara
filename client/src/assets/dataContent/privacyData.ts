export interface PrivacySectionItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  content: string[];
}

export interface PrivacyPolicyData {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  lastUpdated: string;
  effectiveDate: string;
  sections: PrivacySectionItem[];
}

export const PRIVACY_POLICY_DATA: PrivacyPolicyData = {
  badge: "DOKUMEN LEGAL",
  title: "Kebijakan Privasi",
  subtitle: "Komitmen Transparansi dan Perlindungan Data Pribadi Pembaca Garuda Juara.",
  description:
    "Kebijakan Privasi ini menjelaskan bagaimana Garuda Juara mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi Anda saat mengunjungi situs atau menggunakan layanan berita digital kami.",
  lastUpdated: "21 Juli 2026",
  effectiveDate: "01 Januari 2026",
  sections: [
    {
      id: "pengumpulan-data",
      number: "PASAL 01",
      title: "Informasi yang Kami Kumpulkan",
      summary: "Rincian mengenai data yang Anda berikan secara langsung maupun yang tercatat secara otomatis.",
      content: [
        "Informasi yang Anda Berikan: Saat Anda berlangganan newsletter, mengisi formulir kontak, membuat akun pembaca, atau berpartisipasi dalam jajak pendapat, kami mengumpulkan nama, alamat email, dan identitas kontak Anda.",
        "Informasi Otomatis (Log Server & Analytics): Sistem kami mencatat alamat IP, jenis peramban (browser), penyedia layanan internet (ISP), halaman yang dirujuk/diakses, serta stempel waktu kunjungan secara anonim.",
        "Data Perangkat: Jenis perangkat yang digunakan (desktop, mobile, tablet), resolusi layar, dan preferensi bahasa untuk optimasi tampilan UI.",
      ],
    },
    {
      id: "penggunaan-cookie",
      number: "PASAL 02",
      title: "Penggunaan Cookie & Teknologi Pelacak",
      summary: "Pengaturan cookie peramban untuk preferensi tema dark/light dan jaringan iklan.",
      content: [
        "Pengalaman Pengguna: Kami menggunakan cookie lokal (Local Storage) untuk mengingat pilihan mode tampilan (Dark Mode / Light Mode) dan preferensi bacaan Anda.",
        "Mitra Iklan & Analytics: Kami bekerja sama dengan penyedia analytics independen (Google Analytics) dan jaringan adtech (seperti Google AdSense). Mitra ini dapat menempatkan cookie DART untuk menyajikan iklan yang relevan berdasarkan kunjungan Anda.",
        "Kontrol Pengguna: Anda dapat menonaktifkan cookie melalui pengaturan peramban web Anda kapan saja tanpa menghalangi Anda membaca artikel berita utama kami.",
      ],
    },
    {
      id: "tujuan-pemrosesan",
      number: "PASAL 03",
      title: "Tujuan Pengolahan Informasi",
      summary: "Penggunaan data hanya untuk meningkatkan kualitas layanan jurnalistik dan keamanan situs.",
      content: [
        "Mengoperasikan dan menyajikan konten berita olahraga real-time secara lancar tanpa hambatan teknis.",
        "Mengirimkan buletin mingguan atau pemberitahuan breaking news hanya jika Anda telah menyetujui opsi langganan (opt-in).",
        "Mendeteksi dan mencegah serangan siber, percobaan peretasan, spam komentar, serta penyalahgunaan hak cipta.",
        "Memahami tren topik olahraga populer agar redaksi dapat menyajikan ulasan yang paling relevan bagi komunitas pembaca.",
      ],
    },
    {
      id: "keamanan-data",
      number: "PASAL 04",
      title: "Perlindungan & Keamanan Data",
      summary: "Penerapan enkripsi SSL 256-bit dan pembatasan akses data internal.",
      content: [
        "Kami mengintegrasikan enkripsi HTTPS (SSL/TLS) pada seluruh halaman situs untuk menjamin kerahasiaan komunikasi data antara peramban Anda dan server Garuda Juara.",
        "Garuda Juara tidak pernah menjual, menyewakan, atau memperdagangkan data pribadi pembaca kepada pihak ketiga mana pun.",
        "Akses data pribadi di tingkat internal dibatasi secara ketat hanya kepada staf berwenang yang terikat kewajiban kerahasiaan.",
      ],
    },
    {
      id: "hak-pembaca",
      number: "PASAL 05",
      title: "Hak dan Pilihan Pengguna",
      summary: "Hak Anda untuk mengakses, memperbarui, atau menghapus informasi pribadi.",
      content: [
        "Hak Akses & Koreksi: Anda berhak meminta salinan data pribadi yang kami simpan atau mengajukan pembetulan jika terdapat kesalahan data.",
        "Hak Penghapusan (Right to be Forgotten): Anda dapat mengajukan permohonan penghapusan akun pembaca dan langganan email kapan saja melalui kontak privacy@garudajuara.com.",
        "Pembatalan Langganan (Unsubscribe): Setiap email buletin berita yang kami kirimkan menyertakan tautan 'Unsubscribe' instan di bagian footer.",
      ],
    },
    {
      id: "perubahan-kebijakan",
      number: "PASAL 06",
      title: "Pembaruan Kebijakan Privasi",
      summary: "Prosedur pemberitahuan saat terjadi penyesuaian aturan hukum atau teknis.",
      content: [
        "Garuda Juara berhak memperbarui Kebijakan Privasi ini sewaktu-waktu sesuai dengan perkembangan regulasi pelindungan data pribadi (UU PDP) di Indonesia.",
        "Perubahan signifikan akan diumumkan melalui pengumuman di halaman depan situs atau pemberitahuan via email bagi pengguna terdaftar.",
      ],
    },
  ],
};
