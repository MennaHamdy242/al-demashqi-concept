import WhatsAppButton from "../components/WhatsAppButton";
import useLanguage from "../hooks/useLanguage";
import { translations } from "../data/translations";
import "./Contact.css";
import usePageTitle from "../hooks/usePageTitle";

function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;
  usePageTitle("contact");
  const mapQuery =
    language === "ar"
      ? "شارع صيدناوي، العاشر من رمضان، مصر"
      : "Saidnawi Street, 10th of Ramadan City, Egypt";
  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(mapQuery);

  return (
    <main className="contact-page">
      <h1>{t.title}</h1>
      <p className="contact-intro">{t.intro}</p>

      <section className="contact-card" aria-labelledby="address-title">
        <h2 id="address-title">{t.address}</h2>
        <p>{t.street}</p>
        <a href={mapUrl} target="_blank" rel="noopener noreferrer">
          {t.map}
        </a>
      </section>

      <section className="contact-card" aria-labelledby="message-title">
        <h2 id="message-title">{t.whatsapp}</h2>
        <p>{t.whatsappText}</p>
        <WhatsAppButton className="contact-whatsapp">
          {t.whatsappButton}
        </WhatsAppButton>
      </section>

      <p className="contact-disclaimer">{t.disclaimer}</p>
    </main>
  );
}

export default Contact;
