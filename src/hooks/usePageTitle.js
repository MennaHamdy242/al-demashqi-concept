import { useEffect } from "react";
import { translations } from "../data/translations";
import useLanguage from "./useLanguage";

function usePageTitle(page) {
  const { language } = useLanguage();
  useEffect(() => { document.title = translations[language].pageTitles[page]; }, [language, page]);
}

export default usePageTitle;
