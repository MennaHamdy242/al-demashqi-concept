import { getWhatsAppUrl } from "../config";
import { translations, getSizeLabel } from "../data/translations";
import { formatPrice } from "./formatters";

function buildOrderMessage({
  items,
  total,
  customerName,
  address,
  notes = "",
  language = "ar",
}) {
  const t = translations[language].whatsapp;
  const numberLocale = language === "ar" ? "ar-EG" : "en-EG";
  const lines = [
    t.orderTitle,
    t.demoNotice,
    "",
    t.items,
    ...items.map((item) => {
      const size = item.sizeLabel
        ? ` (${getSizeLabel(item.sizeLabel, language)})`
        : "";
      const name = language === "ar" ? item.nameAr : item.name || item.nameAr;
      const quantity = item.quantity.toLocaleString(numberLocale);
      return `- ${name}${size} × ${quantity} = ${formatPrice(
        item.price * item.quantity,
        language
      )}`;
    }),
    "",
    `${t.total} ${formatPrice(total, language)}`,
    t.payment,
    `${t.customer} ${customerName}`,
    `${t.address} ${address}`,
  ];

  if (notes.trim()) lines.push(`${t.notes} ${notes.trim()}`);

  return lines.join("\n");
}

function buildOrderUrl(order) {
  return getWhatsAppUrl(buildOrderMessage(order));
}

export { buildOrderMessage, buildOrderUrl };
