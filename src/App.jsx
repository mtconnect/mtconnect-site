import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home  from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import BoardOfTrustees from "./pages/BoardOfTrustees";
import Administration from "./pages/Administration";
import StandardsCommittee from "./pages/StandardsCommittee";
import RnD from "./pages/RnD";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogPost />} />
            <Route path="/board-of-trustees" element={<BoardOfTrustees />} />
            <Route path="/administration" element={<Administration />} />
            <Route path="/standards-committee" element={<StandardsCommittee />} />
            <Route path="/r-d" element={<RnD />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
