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
    `${translations[language].whatsapp.greeting} ${translations[language].whatsapp.demoNotice}`;

  return (
    <a
      href={getWhatsAppUrl(greeting)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children ?? translations[language].menu.whatsappFallback}
    </a>
  );
}

export default WhatsAppButton;
