import type { ArticleDetailData } from "../../../../assets/dataDummy/articleDetail";
import MatchScorecard from "./components/MatchScorecard";
import MatchStatsGrid from "./components/MatchStatsGrid";
import InlineRelatedLink from "./components/InlineRelatedLink";
import AdBanner from "../../../../components/ui/Ads/AdBanner";

interface ArticleContentProps {
  data: ArticleDetailData;
}

export default function ArticleContent({ data }: ArticleContentProps) {
  return (
    <div className="flex flex-col text-start text-dark dark:text-light font-body text-sm sm:text-base leading-relaxed space-y-5 pt-2">
      {/* 1. Gambar Utama Full Preview (Bersih Tanpa Border Konten) */}
      <figure className="w-full bg-neutral-100 dark:bg-neutral-800 my-2">
        <img
          src={data.featuredImage.url}
          alt={data.title}
          className="w-full h-auto object-cover max-h-[500px]"
        />
        {data.featuredImage.caption && (
          <figcaption className="pt-2.5 text-xs font-mono text-gray-500 dark:text-gray-400 text-start">
            {data.featuredImage.caption}
          </figcaption>
        )}
      </figure>

      {/* 2. Paragraf Pembuka (Text-Start) */}
      <p className="text-base sm:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 text-start">
        <strong className="text-primary">JAKARTA, GarudaJuara.id</strong> —
        Timnas Indonesia memastikan langkahnya ke semifinal Piala AFF 2026 usai
        menundukkan Vietnam 2–1 dalam laga yang berlangsung sengit dan penuh
        ketegangan di Stadion Utama Gelora Bung Karno. Kemenangan itu tidak
        hanya memberikan tiket menuju babak berikutnya, tetapi juga memperkuat
        posisi skuad Merah Putih sebagai salah satu tim paling berbahaya di
        ajang regional.
      </p>

      {/* 3. Match Scorecard Box Minimalis */}
      {data.matchResult && <MatchScorecard data={data.matchResult} />}

      <p className="text-start">
        Sejak peluit awal dibunyikan, Indonesia tampil lebih agresif dan
        langsung menekan lini belakang lawan. Tim asuhan Shin Tae-yong menguasai
        tempo permainan dengan pola serangan yang terarah, sementara pemain
        belakang tetap disiplin dalam menjaga struktur pertahanan. Gol pembuka
        datang di menit ke-24 melalui sundulan tajam yang lahir dari umpan
        silang terukur dari sisi kanan pertahanan Vietnam.
      </p>

      {/* 4. INLINE ADS SLOT 1 */}
      <div className="my-6">
        <AdBanner />
      </div>

      <p className="text-start">
        Vietnam sempat merespons dengan serangan balik cepat yang membuat
        suasana stadion semakin hidup. Namun, skema permainan yang lebih rapi
        dan mental bertanding yang lebih kuat membuat Indonesia tetap tenang
        saat tekanan meningkat. Di babak kedua, tim tuan rumah sempat ditahan
        oleh ketatnya pertahanan lawan, sebelum gol penentu tercipta di masa
        injury time dan menutup laga dengan hasil yang sangat penting.
      </p>

      {/* 5. Link Redireksi Simple & Modern */}
      <InlineRelatedLink
        title="Shin Tae-yong Bongkar Strategi Redam Serangan Balik Thailand"
        slug="shin-tae-yong-bongkar-strategi-redam-serangan-balik-thailand"
      />

      <p className="text-start">
        Kemenangan ini membawa Indonesia unggul dalam agregat dan memperpanjang
        catatan positif mereka di laga kandang sepanjang turnamen. Keberhasilan
        itu juga memperlihatkan bahwa tim nasional kini semakin matang secara
        taktik, mental, dan kualitas permainan ketika berada di bawah sorotan.
      </p>

      {/* 6. Statistik Pertandingan */}
      {data.matchResult?.stats && (
        <MatchStatsGrid stats={data.matchResult.stats} />
      )}

      {/* 7. INLINE ADS SLOT 2 */}
      <div className="my-6">
        <AdBanner />
      </div>

      <p className="text-start">
        Langkah Indonesia selanjutnya akan semakin menegangkan karena tim akan
        menghadapi pemenang laga antara Thailand dan Malaysia di partai
        semifinal berikutnya. Dengan momentum positif yang kini dibangun, rasa
        percaya diri skuad Merah Putih pun semakin besar menjelang perjuangan
        berikutnya.
      </p>
    </div>
  );
}
