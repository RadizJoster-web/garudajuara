export interface PolicyArticle {
  number: string;
  title: string;
  points: string[];
}

export interface CyberMediaPolicyData {
  badge: string;
  title: string;
  description: string;
  lastUpdated: string;
  articles: PolicyArticle[];
}

export const CYBER_MEDIA_POLICY_DATA: CyberMediaPolicyData = {
  badge: "STANDAR DEWAN PERS",
  title: "Pedoman Pemberitaan Media Siber",
  description:
    "Kemerdekaan berpendapat, kemerdekaan berekspresi, dan kemerdekaan pers adalah hak asasi manusia yang dilindungi Pancasila, Undang-Undang Dasar 1945, dan Deklarasi Universal Hak Asasi Manusia PBB.",
  lastUpdated: "Diperbarui sesuai Standar Dewan Pers Indonesia",
  articles: [
    {
      number: "1",
      title: "Ruang Lingkup",
      points: [
        "Media Siber adalah segala bentuk media yang menggunakan wahana internet dan melaksanakan kegiatan jurnalistik, serta memenuhi persyaratan Undang-Undang Pers.",
        "Isi Buatan Pengguna (User Generated Content) adalah segala isi yang dibuat dan atau diunggah oleh pengguna media siber, seperti komentar, opini, atau unggahan forum.",
      ],
    },
    {
      number: "2",
      title: "Verifikasi dan Keberimbangan Berita",
      points: [
        "Pada prinsipnya setiap berita harus melalui verifikasi fakta secara ketat.",
        "Berita yang dapat merugikan pihak lain memerlukan verifikasi pada berita yang sama untuk memenuhi prinsip keberimbangan (cover both sides).",
        "Dalam hal berita membutuhkan penanganan mendesak, berita dapat ditayangkan dengan syarat mencantumkan penjelasan bahwa berita masih memerlukan verifikasi lanjut.",
      ],
    },
    {
      number: "3",
      title: "Isi Buatan Pengguna (User Generated Content / Komentar)",
      points: [
        "Media siber wajib mencantumkan syarat dan ketentuan mengenai Isi Buatan Pengguna yang tidak bertentangan dengan UU Pers dan Kode Etik Jurnalistik.",
        "Media siber berhak mengedit atau menghapus komentar yang mengandung unsur SARA, ujaran kebencian, fitnah, pornografi, atau provokasi kekerasan.",
      ],
    },
    {
      number: "4",
      title: "Ralat, Koreksi, dan Hak Jawab",
      points: [
        "Ralat, koreksi, dan hak jawab dilakukan dengan merujuk pada Undang-Undang Pers dan Kode Etik Jurnalistik.",
        "Ralat, koreksi, dan atau hak jawab wajib ditautkan pada berita yang diralat, dikoreksi atau yang diberi hak jawab.",
        "Pada setiap ralat, koreksi, dan hak jawab wajib dicantumkan waktu penayangan ralat tersebut.",
      ],
    },
    {
      number: "5",
      title: "Pencabutan Berita",
      points: [
        "Berita yang sudah dipublikasikan tidak dapat dicabut karena alasan penyensoran dari pihak luar redaksi, kecuali terkait masalah SARA, kesusilaan, masa depan anak, atau pertimbangan khusus Dewan Pers.",
        "Pencabutan berita wajib disertai dengan alasan pencabutan dan diumumkan kepada publik.",
      ],
    },
  ],
};
