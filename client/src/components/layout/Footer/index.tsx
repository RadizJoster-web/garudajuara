import FooterBrand from "./components/FooterBrand";
import FooterColumn from "./components/FooterColumn";
import FooterBottom from "./components/FooterBottom";

import {
  perusahaanLinks,
  kebijakanLinks,
  kategoriLinks,
  lainnyaLinks,
} from "../../../assets/dataFooters";

export default function Footer() {
  return (
    <footer className="w-full bg-dark text-light border-t border-neutral-800/80 pt-12 pb-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand Info (Mengambil 2 Kolom di Desktop) */}
          <div className="lg:col-span-2">
            <FooterBrand />
          </div>
    
          {/* Navigation Columns (Masing-masing 1 Kolom) */}
          <FooterColumn title="PERUSAHAAN" links={perusahaanLinks} />
          <FooterColumn title="KEBIJAKAN" links={kebijakanLinks} />
          <FooterColumn title="KATEGORI" links={kategoriLinks} />
          <FooterColumn title="LAINNYA" links={lainnyaLinks} />
        </div>

        {/* Bottom Bar */}
        <FooterBottom />
      </div>
    </footer>
  );
}
