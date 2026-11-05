import { useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import WhatsAppButton from "./WhatsAppButton";
import "./Navbar.css";

function Navbar() {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/images/logo.png" alt="مطعم الدمشقي" />
      </div>

      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link
            to="/cart"
            onClick={() => setIsMenuOpen(false)}
            aria-label={`السلة، ${cartCount} صنف`}
          >
            السلة <span className="navbar-cart-count">{cartCount}</span>
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            الرئيسية
          </Link>
        </li>
        <li>
          <Link to="/before-after" onClick={() => setIsMenuOpen(false)}>
            قبل / بعد
          </Link>
        </li>
        <li>
          <Link to="/menu" onClick={() => setIsMenuOpen(false)}>
            المنيو
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            تواصل معنا
          </Link>
        </li>
      </ul>

      <WhatsAppButton className="navbar-cta">
        اطلب عبر واتساب
      </WhatsAppButton>

      <button
        className="navbar-hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="فتح القائمة"
      >
        ☰
      </button>
    </nav>
  );
}

export default Navbar;
