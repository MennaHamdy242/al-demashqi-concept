import "./CategoryFilter.css";
import useLanguage from "../hooks/useLanguage";
import { translations } from "../data/translations";

function CategoryFilter({ categories, selectedId, onSelect }) {
  const { language } = useLanguage();
  const t = translations[language].menu;

  return (
    <div
      className="category-filter"
      role="group"
      aria-label={t.categoriesLabel}
    >
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          className={`category-btn ${
            category.id === selectedId ? "active" : ""
          }`}
          onClick={() => onSelect(category.id)}
          aria-pressed={category.id === selectedId}
        >
          {category.id === "all"
            ? t.all
            : language === "ar"
              ? category.nameAr
              : category.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
