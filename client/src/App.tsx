import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";

// Components
import Navbar from "./components/layout/Navbar";
import SubNavCategoryList from "./components/layout/SubNavCategoryList";

function App() {
  return (
    <>
      {/* Header Navigation Area */}
      <Navbar />
      <SubNavCategoryList />

      {/* Main Content Area */}
      <main className="min-h-screen bg-light dark:bg-dark-bg transition-colors duration-200">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kategori/:slug" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
