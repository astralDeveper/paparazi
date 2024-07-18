import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Top from "./pages/Top";
import Services from "./pages/Services";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<Top />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
