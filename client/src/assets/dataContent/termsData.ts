export interface TermsSectionItem {
  id: string;
  title: string;
  content: string[];
}

export interface TermsData {
  badge: string;
  title: string;
  description: string;
  lastUpdated: string;
  sections: TermsSectionItem[];
}

export const TERMS_DATA: TermsData = {
  badge: "ATURAN PENGGUNAAN",
  title: "Syarat & Ketentuan",
  description:
    "Dengan mengakses dan menggunakan platform Garuda Juara, Anda dianggap telah membaca, memahami, dan menyetujui seluruh aturan yang berlaku di bawah ini.",
  lastUpdated: "Terakhir diperbarui: Juli 2026",
  sections: [
    {
      id: "terms-1",
      title: "1. Hak Kekayaan Intelektual",
      content: [
        "Seluruh materi dalam platform Garuda Juara—termasuk teks artikel, tata letak, grafik, logo, dan karya fotografi—dilindungi oleh undang-undang hak cipta.",
        "Pengutipan artikel untuk kepentingan akademis atau jurnalistik non-komersial diperbolehkan dengan syarat mencantumkan kredit 'GarudaJuara.id' beserta link aktif menuju artikel sumber.",
        "Dilarang keras menyalin, mendistribusikan ulang, atau mereproduksi seluruh isi artikel secara otomatis (scraping) tanpa izin tertulis dari pihak Redaksi.",
      ],
    },
    {
      id: "terms-2",
      title: "2. Ketentuan Komentar & Interaksi Pengguna",
      content: [
        "Pengguna bertanggung jawab penuh atas isi komentar atau opini yang diunggah dalam platform.",
        "Dilarang mengunggah konten yang mengandung SARA, ujaran kebencian, fitnah, promosi judi/spam, atau materi yang melanggar hukum di Indonesia.",
        "Redaksi berhak menghapus komentar atau menangguhkan akun pengguna yang melanggar ketentuan tanpa pemberitahuan terlebih dahulu.",
      ],
    },
    {
      id: "terms-3",
      title: "3. Perubahan Layanan & Ketentuan",
      content: [
        "Garuda Juara berhak memperbarui atau mengubah Syarat & Ketentuan ini sewaktu-waktu sesuai perkembangan hukum dan teknis.",
        "Penggunaan berkelanjutan atas platform ini setelah perubahan dianggap sebagai persetujuan Anda terhadap Syarat & Ketentuan yang diperbarui.",
      ],
    },
  ],
};
