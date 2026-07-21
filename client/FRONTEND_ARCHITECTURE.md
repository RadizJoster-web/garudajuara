# 🚀 Frontend Architecture & Design System — Garuda Juara

Dokumentasi ini berisi panduan arsitektur, konvensi kode, dan *design system* untuk pengembangan frontend **Garuda Juara**. Semua AI Agent dan pengembang wajib mematuhi aturan di dalam file ini.

---

## 1. Stack Teknologi & Konfigurasi Utama

* **Framework:** React + TypeScript + Vite + React Router DOM v6
* **Styling:** Tailwind CSS v4 + Global CSS Variables
* **Icons:** `react-icons` (`fa6`, `fi`)

### Konfigurasi Theme & CSS (`src/index.css`)
Tailwind v4 dikonfigurasi menggunakan `@custom-variant dark` dan `@theme` token:

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

:root {
  --light: #ffffff;
  --dark: #141416;
  --primary: #e10600;
  --primary-dark: #b10500;
  --red-tint: #fff1f0;

  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-mono: "IBM Plex Mono", monospace;
}

@theme {
  --color-light: var(--light);
  --color-dark: var(--dark);
  --color-primary: var(--primary);
  --color-primary-dark: var(--primary-dark);
  --color-red-tint: var(--red-tint);

  --font-display: var(--font-display);
  --font-body: var(--font-body);
  --font-mono: var(--font-mono);
}
```

---

## 2. Standard Tipografi & Ukuran Font

| Elemen / Kegunaan | Font Family | Size & Weight Utility |
| :--- | :--- | :--- |
| **Main Headings / Brand** | `font-display` | `text-2xl` s/d `text-3xl`, `font-black`, `uppercase` |
| **Card Title / Sub-header** | `font-display` | `text-sm` s/d `text-base`, `font-bold` |
| **Body Paragraph** | `font-body` | `text-xs` s/d `text-sm`, `font-normal` |
| **Metadata / Badges / Score** | `font-mono` | `text-[9px]` s/d `text-xs`, `font-semibold`, `tracking-wider` |

---

## 3. Aturan Modularity & Struktur Folder

Proyek menganut prinsip **Atomic Component Isolation**:

```text
src/
├── assets/
│   └── dataDummy/               <-- Tempat data mock TypeScript (e.g. heroNews.ts, categorySection.ts)
├── components/
│   ├── ui/                      <-- Reusable Atoms (Button.tsx, Badge.tsx, ArticleCard.tsx, AdBanner.tsx)
│   └── layout/                  <-- Layout Global (Navbar, SubNavCategoryList, Footer)
├── hooks/                       <-- Custom Hooks (useTheme.ts)
└── pages/
    └── HomePage/
        ├── index.tsx            <-- Page Orchestrator
        └── sections/            <-- Sub-sections khusus halaman tersebut
            ├── HeroSection/
            │   ├── index.tsx
            │   └── components/  <-- Sub-komponen privat (MainHeadliner.tsx)
            └── LatestNewsSection/
```

---

## 4. Aturan Pembuatan Komponen (Rules)

1. **Strict Typescript:** Semua data dummy dan props wajib memiliki TypeScript `interface`/`type` eksplisit.
2. **Mode Gelap (`dark:`):** Selalu pasang penanganan mode gelap pada elemen teks (`text-dark dark:text-light`) dan background (`bg-light dark:bg-dark`).
3. **No External Libraries for Layout:** Animasi horizontal scroll wajib menggunakan utility CSS `.no-scrollbar` bawaan dan HTML native scrolling.
4. **Navigasi Internal:** Selalu gunakan `<Link>` atau `<NavLink>` dari `react-router-dom` (Dilarang menggunakan `<a>` tag untuk navigasi internal).
5. **SEO & Accessibility:** Tombol interaktif harus memiliki `type="button"` dan `aria-label`.

---

## 5. Contoh Implementasi Sesuai Aturan

### Contoh 1: Data Dummy Interface (`src/assets/dataDummy/heroNews.ts`)
```typescript
export interface Article {
  id: number;
  title: string;
  slug: string;
  category: string;
  image: string;
  author: string;
  publishedAt: string;
}
```

### Contoh 2: Reusable UI Component (`src/components/ui/ArticleCard.tsx`)
```tsx
import { Link } from "react-router-dom";
import Badge from "./Badge";

interface ArticleCardProps {
  title: string;
  slug: string;
  category: string;
  image: string;
  author: string;
  publishedAt: string;
}

export default function ArticleCard({
  title,
  slug,
  category,
  image,
  author,
  publishedAt,
}: ArticleCardProps) {
  return (
    <Link
      to={`/berita/${slug}`}
      className="group flex flex-col h-full bg-light dark:bg-dark rounded-2xl border border-gray-200/80 dark:border-neutral-800 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col justify-between flex-1 p-5 gap-3">
        <div className="flex flex-col gap-2 items-start">
          <Badge variant="primary">{category}</Badge>
          <h3 className="text-base font-display font-bold text-dark dark:text-light line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 border-t border-gray-100 dark:border-neutral-800 pt-2">
          <span>{author}</span>
          <span>•</span>
          <span>{publishedAt}</span>
        </div>
      </div>
    </Link>
  );
}
```
