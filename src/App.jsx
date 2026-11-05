import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import BeforeAfter from "./pages/BeforeAfter";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";

function Home() {
  return <h1 style={{ padding: "40px" }}>الصفحة الرئيسية (قريبًا)</h1>;
}

function Contact() {
  return <h1 style={{ padding: "40px" }}>صفحة التواصل (قريبًا)</h1>;
}

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/before-after" element={<BeforeAfter />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
