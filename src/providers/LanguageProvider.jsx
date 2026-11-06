import { useEffect, useMemo, useState } from "react";
import LanguageContext from "../context/LanguageContext";

function getInitialLanguage() {
  try {
    return window.localStorage.getItem("al-demashqi-language") === "en"
      ? "en"
      : "ar";
  } catch {
    return "ar";
  }
}

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.content =
        language === "ar"
          ? "تصفّح قائمة الدمشقي، وابحث عن الأصناف، واختر الوجبة والحجم قبل مراجعة الطلب عبر واتساب."
          : "Browse the Al Demashqi menu, search dishes, choose a meal and size, and review your order on WhatsApp.";
    }

    try {
      window.localStorage.setItem("al-demashqi-language", language);
    } catch {
      // The selected language still works until the page is closed.
    }
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      isArabic: language === "ar",
      toggleLanguage: () =>
        setLanguage((current) => (current === "ar" ? "en" : "ar")),
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
