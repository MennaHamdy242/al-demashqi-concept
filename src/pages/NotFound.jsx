import { Link } from "react-router-dom";
import useLanguage from "../hooks/useLanguage";
import usePageTitle from "../hooks/usePageTitle";
import { translations } from "../data/translations";

function NotFound() {
  const { language } = useLanguage();
  usePageTitle("notFound");
  const t = translations[language].notFound;
  return <main className="contact-page"><h1>{t.title}</h1><p>{t.text}</p><Link to="/">{t.home}</Link></main>;
}

export default NotFound;
