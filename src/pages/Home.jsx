import { Link } from "react-router-dom";
import useLanguage from "../hooks/useLanguage";
import { translations } from "../data/translations";
import "./Home.css";

function Home() {
  const { language } = useLanguage();
  const t = translations[language].home;

  return (
    <main className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero__copy">
          <p className="home-eyebrow">{t.eyebrow}</p>
          <h1 id="home-title">{t.title}</h1>
          <p className="home-intro">{t.intro}</p>
          <div className="home-actions">
            <Link to="/menu" className="home-action home-action--primary">
              {t.viewMenu}
            </Link>
            <Link to="/before-after" className="home-action home-action--secondary">
              {t.compare}
            </Link>
          </div>
        </div>
        <img
          className="home-hero__image"
          src="/images/hero/shawarma.webp"
          alt={language === "ar" ? "صورة توضيحية لوجبة شاورما" : "Illustrative shawarma meal"}
          width="1024"
          height="683"
          fetchPriority="high"
        />
      </section>

      <section className="home-points" aria-label={t.featuresLabel}>
        <article>
          <span className="home-point-number">01</span>
          <h2>{t.discoverTitle}</h2>
          <p>{t.discoverText}</p>
          <Link to="/menu">{t.viewMenu}</Link>
        </article>
        <article>
          <span className="home-point-number">02</span>
          <h2>{t.orderTitle}</h2>
          <p>{t.orderText}</p>
          <Link to="/menu">{t.viewMenu}</Link>
        </article>
        <article>
          <span className="home-point-number">03</span>
          <h2>{t.messageTitle}</h2>
          <p>{t.messageText}</p>
          <Link to="/cart">{translations[language].nav.cart}</Link>
        </article>
      </section>

      <p className="home-disclaimer">
        {t.disclaimer}
      </p>
    </main>
  );
}

export default Home;
