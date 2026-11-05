import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import BeforeAfter from "./pages/BeforeAfter";

function Home() {
  return <h1 style={{ padding: "40px" }}>الصفحة الرئيسية (قريبًا)</h1>;
}

function Contact() {
  return <h1 style={{ padding: "40px" }}>صفحة التواصل (قريبًا)</h1>;
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/before-after" element={<BeforeAfter />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;