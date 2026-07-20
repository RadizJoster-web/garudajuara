# Garuda Juara — Dokumentasi Desain & Rasional UX

## 1. Sistem Desain (Token)

### Warna

| Token              | Hex              | Penggunaan                                                         |
| ------------------ | ---------------- | ------------------------------------------------------------------ |
| `--gj-white`       | `#FFFFFF`        | Latar utama                                                        |
| `--gj-black`       | `#0B0B0C`        | Teks utama, footer, hero overlay                                   |
| `--gj-red`         | `#E10600`        | **Aksen satu-satunya** — CTA, live indicator, badge kategori utama |
| `--gj-gray-50…900` | skala abu netral | Latar sekunder, border, teks tersier                               |

**Kenapa merah dibatasi jadi aksen tunggal?** Brief secara eksplisit meminta merah "tidak melelahkan mata". Merah dipakai hanya pada: tombol primer, live dot, garis breaking news, elemen skor unggul, dan hover state. Ini menjaga mata tetap nyaman saat membaca artikel panjang, sekaligus mempertahankan identitas Merah Putih tanpa berkesan seperti banner promosi.

### Tipografi

- **Plus Jakarta Sans (700/800)** — untuk semua heading & judul artikel. Dipilih karena merupakan typeface yang lahir dari proyek identitas kota Jakarta — secara semantik selaras dengan brand berita nasional Indonesia, sekaligus tetap modern-geometris.
- **Inter (400–700)** — untuk body text. Terbukti punya x-height tinggi dan legibility terbaik di ukuran kecil pada layar, penting untuk sesi membaca lama (tujuan #1 brief).
- **IBM Plex Mono** — dipakai _khusus_ untuk data: jam, tanggal, skor, statistik, label breaking news. Font monospace pada elemen data memberi kesan "live sports data" seperti papan skor stadion, sekaligus membedakan data numerik dari teks naratif secara visual — memudahkan pembaca memindai (scan) angka penting dengan cepat.

### Signature element: "Wing-cut" & Live pulse

Alih-alih memakai border-radius generik di semua tempat, badge kategori (`.gj-badge`) memakai `clip-path` diagonal di sudut kiri-bawah — terinspirasi dari lekuk sayap Garuda / garis kecepatan pada jersey olahraga. Elemen ini muncul terbatas (badge & eyebrow marker) agar tetap jadi satu identitas yang diingat, bukan dekorasi berulang yang berisik.

---

## 2. Rasional Keputusan UX per Bagian

### Navbar sticky & transisi tinggi saat scroll

Navbar menyusut dari 76px → 64px saat discroll (`is-scrolled` class), disertai `backdrop-filter: blur` dan border bawah tipis. Ini menjaga area baca lebih luas saat scroll panjang tanpa kehilangan akses navigasi/CTA subscribe — krusial untuk situs dengan artikel panjang.

### Breaking news ticker

Marquee berjalan otomatis tapi **berhenti saat hover** (`:hover { animation-play-state: paused }`) dan menghormati `prefers-reduced-motion`. Ini memberi kesan "cepat & terkini" (tujuan brand) tanpa mengorbankan accessibility bagi pengguna sensitif gerak.

### Hero: 1 artikel utama + 4 artikel sekunder

Pola "1 besar + list kecil" dipilih karena studi pola baca F-pattern pada homepage berita: mata pembaca pertama jatuh ke gambar besar (kiri-atas), lalu turun ke daftar kanan. Thumbnail besar 16:9 pada hero utama juga dioptimalkan untuk **Google Discover** (thumbnail besar, headline jelas, kategori jelas — sesuai requirement brief).

### Kartu berita (News Card) dengan elevasi ringan

`.gj-card` naik 3px + shadow lembut saat hover, bukan efek dramatis. Alasan: media berita premium (Kompas, The Athletic, dsb.) memakai micro-interaction halus agar tidak mengalihkan perhatian dari konten — sesuai requirement "tidak ramai, fokus pada konten".

### Sidebar desktop vs. tumpuk di mobile

Sidebar widget (Trending, Most Read, Jadwal, Klasemen singkat, Ad, Social) hanya tampil sebagai kolom terpisah di desktop (`lg:grid-cols-[1fr_340px]`). Di mobile, elemen-elemen ini disederhanakan — hanya widget paling penting yang dipertahankan di alur utama — supaya halaman mobile tidak terlalu panjang untuk kecepatan loading & fokus baca (tujuan brief: performa & tidak padat di mobile).

### Iklan (simulasi) — penempatan natural

Ditempatkan persis 5 titik sesuai brief (setelah hero, tengah section, sebelum related, sidebar, sebelum footer), memakai pola visual "diagonal stripe" abu-abu yang jelas berbeda dari kartu berita — sehingga pembaca tidak bingung membedakan konten redaksional vs. iklan (etika media siber & UX kepercayaan). Tidak ada iklan yang menyisip di tengah paragraf artikel (mengganggu keterbacaan) — hanya di antara section/blok.

### Tabs untuk "Jadwal", "Artikel Populer", dan "Berita per Kategori"

Alih-alih menumpuk 6 grid kategori sekaligus (berat & membuat halaman sangat panjang), dipakai komponen Tabs sehingga pembaca bisa memilih kategori yang relevan tanpa scroll berlebihan — mendukung tujuan "meningkatkan jumlah halaman dibaca" karena interaksi tab tetap terjadi di halaman yang sama (tidak menambah page load, tapi menambah engagement time).

### Halaman Detail — reading progress bar & sticky share

Progress bar tipis di atas viewport (`--gj-red`) memberi indikator halus seberapa jauh pembaca sudah membaca — nudge psikologis untuk menyelesaikan artikel (mendukung tujuan "durasi kunjungan"). Tombol share & bookmark diletakkan di atas _dan_ tersedia lagi secara kontekstual (bukan floating yang mengganggu), menjaga kesan "tidak ramai".

### Kutipan (blockquote) sebagai jeda visual

Artikel panjang memakai `blockquote` besar dengan garis merah tipis di kiri — memecah dinding teks setiap ~4–5 paragraf, terbukti menurunkan bounce rate pada artikel panjang karena memberi "napas" visual tanpa memotong narasi.

### Skeleton loading & infinite-scroll-style "Muat Lebih Banyak"

Tombol "Muat Lebih Banyak" memicu skeleton shimmer sebelum kartu baru muncul (`assets/script.js`) — pola ini dipilih dibanding infinite scroll murni karena: (1) mempertahankan footer & elemen konversi (newsletter, subscribe) tetap dapat dijangkau, (2) memberi pembaca kendali eksplisit kapan memuat lebih banyak, mengurangi _layout shift_ tak terduga (Core Web Vitals — CLS).

### Dark mode

Toggle mengubah `class="dark"` pada `<html>`, semua warna didefinisikan lewat CSS custom properties sehingga kontras tetap terjaga (bukan sekadar invert warna). Merah dinaikkan saturasinya sedikit (`#FF3B30`) di dark mode agar tetap terbaca kontras di atas latar gelap tanpa menyakitkan mata.

---

## 3. Accessibility Checklist

- Skip-to-content link di awal setiap halaman.
- Semua interaktif (link, button, input) punya `:focus-visible` outline 2.5px kontras tinggi.
- Kontras teks-atas-latar mengikuti minimum AA (teks sekunder abu `#5C5C64` di atas putih ≈ 7.1:1).
- Semua gambar editorial memakai `alt` deskriptif kontekstual (bukan nama file).
- Marquee breaking news punya `role="marquee"` + `aria-label`, dan berhenti otomatis pada `prefers-reduced-motion: reduce`.
- Navigasi keyboard: tab order logis, modal & search overlay bisa ditutup dengan `Esc`.
- Live region (`aria-live="polite"`) untuk toast notification agar pembaca screen reader mendapat info status (bookmark tersimpan, komentar terkirim, dll).

## 4. SEO & Google Discover Checklist

- Hierarki heading benar: satu `<h1>` per halaman (judul artikel), `<h2>`/`<h3>` terstruktur di isi artikel.
- Breadcrumb terlihat + berbasis kategori (`Beranda / Timnas Indonesia / Judul Artikel`).
- `schema.org NewsArticle` + `NewsMediaOrganization` JSON-LD di kedua halaman.
- Meta Open Graph & Twitter Card lengkap untuk pratinjau share sosial.
- Reading time & published/modified time eksplisit di markup (mendukung sinyal freshness).
- Internal linking padat: related articles, artikel selanjutnya, rekomendasi, tag, kategori — semua saling tertaut.
- Thumbnail 16:9 besar pada hero — format yang disukai algoritma Google Discover.

## 5. Rencana Pengembangan Frontend (Next.js/React)

Struktur class CSS (`gj-*`) sengaja dibuat modular 1:1 dengan komponen agar mudah dipetakan ke komponen React:

```
components/
  layout/        Navbar, MobileMenu, SearchOverlay, Footer, Ticker
  news/          NewsCard, HeroCard, HeroSideItem, CategoryTile, VideoCard
  sport-data/    ScoreCard, ScheduleCard, StandingTable
  article/       ArticleHeader, ArticleBody, AuthorCard, CommentThread, ReadingProgress
  ui/            Button, Badge, Tag, Tabs, Accordion, Modal, Toast, Tooltip, Skeleton, Pagination, AdSlot
```

Tailwind config sebaiknya memindahkan token dari `assets/style.css` (`:root`) ke `tailwind.config.js` → `theme.extend.colors` / `fontFamily`, sehingga class utility (`bg-accent`, `font-display`, dst.) tersedia langsung tanpa CSS custom terpisah.
