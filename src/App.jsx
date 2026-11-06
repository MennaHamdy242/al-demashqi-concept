import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import BeforeAfter from "./pages/BeforeAfter";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import LanguageProvider from "./providers/LanguageProvider";

function App() {
  return (
    <LanguageProvider>
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
    </LanguageProvider>
  );
}

export default App;
