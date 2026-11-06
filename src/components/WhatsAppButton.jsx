import { getWhatsAppUrl } from "../config";
import useLanguage from "../hooks/useLanguage";
import { translations } from "../data/translations";

function WhatsAppButton({
  children,
  message,
  className = "",
}) {
  const { language } = useLanguage();
  const greeting =
    message ??
    (language === "ar"
      ? translations.ar.whatsapp.greeting
      : translations.en.whatsapp.greeting);

  return (
    <a
      href={getWhatsAppUrl(greeting)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children ?? (language === "ar" ? "تواصل عبر واتساب" : "Contact on WhatsApp")}
    </a>
  );
}

export default WhatsAppButton;
