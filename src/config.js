// A local Vite environment value keeps personal numbers out of the repository.
// Set VITE_WHATSAPP_NUMBER in .env.local (local) or in Vercel Environment Variables. Must be the student's own number or empty, never the restaurant's. Note: VITE_ variables are bundled into the public site, so anyone can see this number.
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? "";

export function getWhatsAppUrl(message) {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  const recipient = number ? `${number}?` : "?";
  return `https://wa.me/${recipient}text=${encodeURIComponent(message)}`;
}
