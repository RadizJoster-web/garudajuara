import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import CategoryPage from "./pages/CategoryPage";
import SearchPage from "./pages/SearchPage";
// Suports Pages (Footers page)
import AboutPage from "./pages/suports/AboutPage";
import EditorialPage from "./pages/suports/EditorialPage";
import CareerPage from "./pages/suports/CareerPage";
import ContactPage from "./pages/suports/ContactPage";
import CyberMediaPolicyPage from "./pages/suports/CyberMediaPolicyPage";
import PrivacyPolicyPage from "./pages/suports/PrivacyPolicyPage";
import TermsPage from "./pages/suports/TermsPage";
import DisclaimerPage from "./pages/suports/DisclaimerPage";
import AdvertisePage from "./pages/suports/AdvertisePage";
import HelpPage from "./pages/suports/HelpPage";

// Components
import Navbar from "./components/layout/Navbar";
import SubNavCategoryList from "./components/layout/SubNavCategoryList";
import Footer from "./components/layout/Footer";
import GoToTop from "./components/ui/GoToTop";

// Utils
import ScrollToTop from "./components/utils/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      {/* Header Navigation Area */}
      <Navbar />
      <SubNavCategoryList />

      {/* Main Content Area */}
      <main className="min-h-screen bg-light dark:bg-dark transition-colors duration-200">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kategori/:slug" element={<CategoryPage />} />
          <Route path="/berita/:slug" element={<ArticleDetailPage />} />
          <Route path="/pencarian" element={<SearchPage />} />

          {/* Suport Routes */}
          <Route path="/tentang-kami" element={<AboutPage />} />
          <Route path="/redaksi" element={<EditorialPage />} />
          <Route path="/karier" element={<CareerPage />} />
          <Route path="/kontak" element={<ContactPage />} />
          <Route
            path="/pedoman-media-siber"
            element={<CyberMediaPolicyPage />}
          />
          <Route path="/kebijakan-privasi" element={<PrivacyPolicyPage />} />
          <Route path="/syarat-ketentuan" element={<TermsPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/iklan" element={<AdvertisePage />} />
          <Route path="/bantuan" element={<HelpPage />} />
        </Routes>
      </main>

      <Footer />

      <GoToTop />
    </>
  );
}

export default App;
