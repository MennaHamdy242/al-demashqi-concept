import { getWhatsAppUrl, WHATSAPP_GREETING } from "../config";

function WhatsAppButton({
  children = "تواصل عبر واتساب",
  message = WHATSAPP_GREETING,
  className = "",
}) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export default WhatsAppButton;
