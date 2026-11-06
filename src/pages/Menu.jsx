import { useMemo, useState } from "react";
import { categories, menuItems } from "../data/menu";
import { interpolate, translations } from "../data/translations";
import CategoryFilter from "../components/CategoryFilter";
import MenuCard from "../components/MenuCard";
import useLanguage from "../hooks/useLanguage";
import "./Menu.css";

const allCategory = { id: "all", name: "All items", nameAr: "كل الأصناف" };
const categoriesById = new Map(
  categories.map((category) => [category.id, category])
);

function Menu() {
  const [selectedCategoryId, setSelectedCategoryId] = useState("all");
  const [query, setQuery] = useState("");
  const { language } = useLanguage();
  const t = translations[language].menu;
  const filters = useMemo(() => [allCategory, ...categories], []);

  const visibleItems = menuItems.filter((item) => {
    const category = categoriesById.get(item.categoryId);
    const matchesCategory =
      selectedCategoryId === "all" || item.categoryId === selectedCategoryId;
    const searchText = [item.name, item.nameAr, category?.name, category?.nameAr]
      .join(" ")
      .toLocaleLowerCase(language);
    const matchesQuery = searchText.includes(
      query.trim().toLocaleLowerCase(language)
    );

    return matchesCategory && matchesQuery;
  });

  const selectedCategory = categoriesById.get(selectedCategoryId);
  const resultCount = new Intl.NumberFormat(
    language === "ar" ? "ar-EG" : "en-EG"
  ).format(visibleItems.length);

  return (
    <main className="menu-page">
      <div className="menu-page__heading">
        <div>
          <p className="menu-eyebrow">
            {language === "ar"
              ? "الدمشقي · العاشر من رمضان"
              : "Al Demashqi · 10th of Ramadan City"}
          </p>
          <h1>{t.title}</h1>
        </div>
        <p className="menu-result-count" aria-live="polite">
          {interpolate(t.resultCount, { count: resultCount })}
        </p>
      </div>

      <label className="menu-search">
        <span>{t.searchLabel}</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={t.searchPlaceholder}
        />
        {query && (
          <button type="button" onClick={() => setQuery("")}>
            {t.clearSearch}
          </button>
        )}
      </label>

      <CategoryFilter
        categories={filters}
        selectedId={selectedCategoryId}
        onSelect={setSelectedCategoryId}
      />

      {selectedCategory && (
        <section
          className="menu-category-intro"
          aria-labelledby="menu-category-title"
        >
          <div className="menu-hero">
            <img
              src={selectedCategory.heroImage}
              alt={`${t.illustration}: ${language === "ar" ? selectedCategory.nameAr : selectedCategory.name}`}
              width={selectedCategory.imageWidth}
              height={selectedCategory.imageHeight}
              fetchPriority="high"
            />
            <span className="menu-hero-tag">{t.illustration}</span>
          </div>

          <h2 id="menu-category-title" className="menu-category-title">
            {language === "ar" ? selectedCategory.nameAr : selectedCategory.name}
          </h2>

          {selectedCategory.note && (
            <p className="menu-note">
              {language === "ar"
                ? selectedCategory.noteAr
                : selectedCategory.note}
            </p>
          )}
        </section>
      )}

      {visibleItems.length > 0 ? (
        <div className="menu-grid">
          {visibleItems.map((item) => {
            const category = categoriesById.get(item.categoryId);
            const categoryName =
              selectedCategoryId === "all"
                ? language === "ar"
                  ? category.nameAr
                  : category.name
                : null;

            return (
              <MenuCard
                key={item.id}
                item={item}
                categoryName={categoryName}
                category={category}
              />
            );
          })}
        </div>
      ) : (
        <section className="menu-empty" aria-live="polite">
          <p>{t.noResults}</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setSelectedCategoryId("all");
            }}
          >
            {t.reset}
          </button>
        </section>
      )}
    </main>
  );
}

export default Menu;
