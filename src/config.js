// Add the demo owner's international phone number here before recording.
// Leave the country code in place and omit spaces, +, and leading zeroes.
export const WHATSAPP_NUMBER = "";
export const WHATSAPP_GREETING = "مرحبًا، أريد الاستفسار عن المنيو.";

export function getWhatsAppUrl(message) {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  const recipient = number ? `${number}?` : "?";
  return `https://wa.me/${recipient}text=${encodeURIComponent(message)}`;
}
