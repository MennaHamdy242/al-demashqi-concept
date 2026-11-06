import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useCart from "../hooks/useCart";
import useLanguage from "../hooks/useLanguage";
import { translations } from "../data/translations";
import WhatsAppButton from "./WhatsAppButton";
import "./Navbar.css";

function Navbar() {
  const { cartCount } = useCart();
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const location = useLocation();
  const t = translations[language].nav;

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => { setIsMenuOpen(false); }, [location.pathname]);
  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label={t.mainNavigation}>
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <span className="navbar-logo">
            <img
              src="/images/logo.png"
              alt=""
              width="336"
              height="205"
            />
          </span>
          <span className="navbar-brand-copy">
            <strong lang="ar">الدمشقي</strong>
            <span>{translations[language].brandTagline}</span>
            <small className="navbar-concept-badge">{translations[language].beforeAfter.conceptBadge}</small>
          </span>
        </Link>

        <ul
          id="primary-navigation"
          className={`navbar-links ${isMenuOpen ? "open" : ""}`}
        >
          <li>
            <NavLink to="/" end onClick={closeMenu}>
              {t.home}
            </NavLink>
          </li>
          <li>
            <NavLink to="/before-after" onClick={closeMenu}>
              {t.beforeAfter}
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" onClick={closeMenu}>
              {t.menu}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              {t.contact}
            </NavLink>
          </li>
        </ul>

        <div className="navbar-actions">
          <NavLink to="/cart" className="navbar-cart-link" aria-label={`${t.cart} (${cartCount})`} onClick={closeMenu}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.2 11.1a2 2 0 0 0 2 1.6h8.3a2 2 0 0 0 1.9-1.4L21 9H7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="10" cy="20" r="1.5" fill="currentColor"/><circle cx="18" cy="20" r="1.5" fill="currentColor"/></svg>
            <span className="navbar-cart-count" aria-hidden="true">{cartCount.toLocaleString(language === "ar" ? "ar-EG" : "en-EG")}</span>
          </NavLink>
          <WhatsAppButton className="navbar-cta">
            <span className="navbar-cta-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M12 2a9.8 9.8 0 0 0-8.45 14.78L2 22l5.39-1.42A9.9 9.9 0 1 0 12 2Zm0 17.95a8 8 0 0 1-4.08-1.12l-.29-.17-3.2.84.85-3.12-.19-.32A8 8 0 1 1 12 19.95Zm4.4-5.97c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.74-1.79-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.3.98 2.46c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.15 1.52.09.47-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
              </svg>
            </span>
            <span className="navbar-cta-text">{t.orderWhatsApp}</span>
          </WhatsAppButton>

          <button
            type="button"
            className="navbar-language"
            onClick={toggleLanguage}
            aria-label={t.switchLanguage}
            title={t.switchLanguage}
          >
            <span aria-hidden="true">{t.switchToShort}</span>
          </button>

          <button
            type="button"
            className="navbar-hamburger"
            ref={menuButtonRef}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            aria-label={isMenuOpen ? t.closeMenu : t.openMenu}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
          >
            <span aria-hidden="true">{isMenuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
