function formatPrice(amount, language, compact = false) {
  const formatted = new Intl.NumberFormat(
    language === "ar" ? "ar-EG" : "en-EG",
    { maximumFractionDigits: 0 }
  ).format(amount);

  if (compact) {
    return language === "ar" ? `${formatted} ج.م.` : `EGP ${formatted}`;
  }

  return language === "ar" ? `${formatted} جنيهًا مصريًا` : `EGP ${formatted}`;
}

export { formatPrice };
