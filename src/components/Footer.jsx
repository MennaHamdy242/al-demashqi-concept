import useLanguage from "../hooks/useLanguage";
import { translations } from "../data/translations";
import "./Footer.css";

function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="site-footer" lang={language}>
      {translations[language].beforeAfter.conceptDisclaimer}
    </footer>
  );
}

export default Footer;
