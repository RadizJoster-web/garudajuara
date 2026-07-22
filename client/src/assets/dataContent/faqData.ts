export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Umum" | "Langganan & Akun" | "Redaksi & Konten" | "Mitra & Bisnis";
  isPopular?: boolean;
}

export interface FAQCategoryOption {
  id: string;
  label: string;
  iconName: "help-circle" | "mail" | "shield" | "briefcase";
}

export interface FAQData {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  searchPlaceholder: string;
  categories: FAQCategoryOption[];
  items: FAQItem[];
  supportHeading: string;
  supportDescription: string;
  supportEmail: string;
}

export const FAQ_DATA: FAQData = {
  badge: "CENTRAL BANTUAN",
  title: "Pertanyaan yang Sering Diajukan (FAQ)",
  subtitle: "Pusat Informasi Cepat seputar Layanan Berita, Akun, dan Kemitraan Garuda Juara.",
  description:
    "Cari jawaban atas pertanyaan Anda dengan mengetikkan kata kunci pada kolom pencarian atau jelajahi kategori topik di bawah ini.",
  searchPlaceholder: "Cari pertanyaan... (misal: langganan, ralat berita, iklan, rss)",
  categories: [
    { id: "semua", label: "Semua Topik", iconName: "help-circle" },
    { id: "Umum", label: "Umum", iconName: "help-circle" },
    { id: "Langganan & Akun", label: "Langganan & Akun", iconName: "mail" },
    { id: "Redaksi & Konten", label: "Redaksi & Konten", iconName: "shield" },
    { id: "Mitra & Bisnis", label: "Mitra & Bisnis", iconName: "briefcase" },
  ],
  items: [
    {
      id: "faq-1",
      question: "Apakah membaca berita di Garuda Juara sepenuhnya gratis?",
      answer:
        "Ya, 100% gratis! Seluruh artikel berita, ulasan taktik, hasil pertandingan, dan infografis di Garuda Juara dapat diakses secara bebas tanpa biaya berlangganan tertutup (paywall).",
      category: "Umum",
      isPopular: true,
    },
    {
      id: "faq-2",
      question: "Bagaimana cara mendapatkan pemberitahuan breaking news Timnas?",
      answer:
        "Anda dapat berlangganan buletin email harian kami melalui formulir di bagian bawah situs, atau mengaktifkan notifikasi browser dengan menekan tombol lonceng notifikasi di pojok kanan bawah.",
      category: "Langganan & Akun",
      isPopular: true,
    },
    {
      id: "faq-3",
      question: "Bagaimana prosedur mengirimkan ralat atau permohonan hak jawab berita?",
      answer:
        "Garuda Juara sangat menjunjung tinggi akurasi. Jika Anda menemukan kekeliruan fakta, silakan kirimkan surel ke redaksi@garudajuara.com dengan subjek [Ralat Berita - Judul Artikel] beserta data bukti yang valid.",
      category: "Redaksi & Konten",
      isPopular: true,
    },
    {
      id: "faq-4",
      question: "Apakah Garuda Juara menerima tulisan dari penulis tamu (guest post)?",
      answer:
        "Kami menerima kiriman opini atau analisis taktikal melalui program Talent Pool Penulis Freelance. Silakan periksa halaman Karier kami atau hubungi redaksi@garudajuara.com.",
      category: "Redaksi & Konten",
    },
    {
      id: "faq-5",
      question: "Bagaimana cara memasang iklan atau bekerja sama sebagai media partner?",
      answer:
        "Untuk informasi rate card, kustomisasi paket sponsorship, atau permohonan media partner event olahraga, silakan kunjungi halaman Advertise / Media Kit atau kirimkan pesan ke bisnis@garudajuara.com.",
      category: "Mitra & Bisnis",
      isPopular: true,
    },
    {
      id: "faq-6",
      question: "Apakah Garuda Juara memiliki aplikasi mobile?",
      answer:
        "Saat ini situs Garuda Juara dibangun berbasis teknologi Progressive Web App (PWA) yang ultra-ringan. Anda dapat menambahkan situs ini ke layar utama smartphone Anda (Add to Home Screen) untuk pengalaman selayaknya aplikasi native.",
      category: "Umum",
    },
    {
      id: "faq-7",
      question: "Bagaimana cara mengutip konten Garuda Juara untuk tugas atau artikel lain?",
      answer:
        "Pengutipan diperbolehkan maksimal 20% dari panjang artikel dengan wajib mencantumkan nama 'Garuda Juara' dan tautan hyperlink aktif menuju URL artikel bersangkutan.",
      category: "Redaksi & Konten",
    },
    {
      id: "faq-8",
      question: "Bagaimana jika saya tidak lagi ingin menerima newsletter email?",
      answer:
        "Di setiap bagian bawah email buletin yang kami kirimkan terdapat tombol 'Unsubscribe' instan. Klik tombol tersebut untuk berhenti menerima email kapan saja.",
      category: "Langganan & Akun",
    },
  ],
  supportHeading: "Masih Memiliki Pertanyaan Lain?",
  supportDescription: "Jika Anda tidak menemukan jawaban yang dicari, tim customer support dan redaksi kami siap membantu Anda.",
  supportEmail: "support@garudajuara.com",
};
