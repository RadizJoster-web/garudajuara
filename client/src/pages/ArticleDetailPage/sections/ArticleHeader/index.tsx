import type { ArticleDetailData } from "../../../../assets/dataDummy/articleDetail";
import Badge from "../../../../components/ui/Badge";
import BreadcrumbNav from "./components/BreadcrumbNav";
import AuthorDonationBar from "./components/AuthorDonationBar";
import ShareBar from "./components/ShareBar";

interface ArticleHeaderProps {
  data: ArticleDetailData;
}

export default function ArticleHeader({ data }: ArticleHeaderProps) {
  return (
    <header className="flex flex-col gap-5 sm:gap-7 pb-8 border-b border-gray-200/80 dark:border-neutral-800">
      {/* 1. Histori Direktori */}
      <BreadcrumbNav items={data.breadcrumb} />

      {/* 2. Label Kategori (Hanya Badge saja agar Clean) */}
      <div className="flex items-center gap-2">
        <Badge variant="primary">{data.category.name}</Badge>
      </div>

      {/* 3. Judul Utama Artikel (Diisi Padding Vertikal Halus) */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-dark dark:text-light leading-snug tracking-tight">
        {data.title}
      </h1>

      {/* 4. Profil Penulis & Tanggal Publish di bawah Username */}
      <AuthorDonationBar author={data.author} publishedAt={data.publishedAt} />

      {/* 5. Quick Share Bar */}
      <ShareBar title={data.title} />
    </header>
  );
}
