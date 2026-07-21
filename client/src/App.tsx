import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import AboutPage from "./pages/AboutPage";

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
      <main className="min-h-screen bg-light dark:bg-dark-bg transition-colors duration-200">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kategori/:slug" element={<HomePage />} />
          <Route path="/berita/:slug" element={<ArticleDetailPage />} />
          <Route path="/tentang-kami" element={<AboutPage />} />
        </Routes>
      </main>

      <Footer />

      <GoToTop />
    </>
  );
}

export default App;
