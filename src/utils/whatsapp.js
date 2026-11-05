import { getWhatsAppUrl } from "../config";

function buildOrderMessage({ items, total, customerName, address, notes }) {
  const lines = [
    "طلب جديد — concept redesign لمطعم الدمشقي",
    "",
    "الأصناف:",
    ...items.map((item) => {
      const size = item.sizeLabel ? ` (${item.sizeLabel})` : "";
      const lineTotal = (item.price * item.quantity).toLocaleString("ar-EG");
      return `- ${item.nameAr}${size} × ${item.quantity} = ${lineTotal} جنيه`;
    }),
    "",
    `الإجمالي: ${total.toLocaleString("ar-EG")} جنيه`,
    "طريقة الدفع: عند الاستلام",
    `الاسم: ${customerName}`,
    `العنوان: ${address}`,
  ];

  if (notes.trim()) lines.push(`ملاحظات: ${notes.trim()}`);

  return lines.join("\n");
}

function buildOrderUrl(order) {
  return getWhatsAppUrl(buildOrderMessage(order));
}

export { buildOrderMessage, buildOrderUrl };
