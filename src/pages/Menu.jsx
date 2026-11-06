import { useState } from "react";
import { categories, menuItems } from "../data/menu";
import { interpolate, translations } from "../data/translations";
import CategoryFilter from "../components/CategoryFilter";
import MenuCard from "../components/MenuCard";
import useLanguage from "../hooks/useLanguage";
import { normalizeArabic } from "../utils/normalizeArabic";
import usePageTitle from "../hooks/usePageTitle";
import "./Menu.css";

const allCategory = { id: "all", name: "All items", nameAr: "كل الأصناف" };
const categoriesById = new Map(
  categories.map((category) => [category.id, category])
);
const filters = [allCategory, ...categories];

function Menu() {
  const [selectedCategoryId, setSelectedCategoryId] = useState("all");
  const [query, setQuery] = useState("");
  const { language } = useLanguage();
  const t = translations[language].menu;
  usePageTitle("menu");
  const visibleItems = menuItems.filter((item) => {
    const category = categoriesById.get(item.categoryId);
    const matchesCategory =
      selectedCategoryId === "all" || item.categoryId === selectedCategoryId;
    const searchText = normalizeArabic([item.name, item.nameAr, category?.name, category?.nameAr].join(" ").toLocaleLowerCase(language));
    const matchesQuery = searchText.includes(
      normalizeArabic(query.trim().toLocaleLowerCase(language))
    );

    return matchesCategory && matchesQuery;
  });

  const selectedCategory = categoriesById.get(selectedCategoryId);
  const visibleGroups = (selectedCategory ? [selectedCategory] : categories)
    .map((category) => ({
      category,
      items: visibleItems.filter((item) => item.categoryId === category.id),
    }))
    .filter((group) => group.items.length > 0);
  const firstVisibleCategoryId = visibleGroups[0]?.category.id;
  const resultCount = new Intl.NumberFormat(
    language === "ar" ? "ar-EG" : "en-EG"
  ).format(visibleItems.length);

  return (
    <main className="menu-page">
      <div className="menu-page__heading">
        <div>
          <p className="menu-eyebrow">
            {t.eyebrow}
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
      <p className="menu-add-hint">{t.addHint}</p>

      {visibleItems.length > 0 ? (
        <div className="menu-groups">
          {visibleGroups.map(({ category, items }) => (
            <section
              className="menu-category-section"
              key={category.id}
              aria-labelledby={`menu-category-${category.id}`}
            >
              <div className="menu-category-intro">
                <div
                  className="menu-hero"
                  style={{
                    aspectRatio: `${category.imageWidth} / ${category.imageHeight}`,
                    maxWidth: `${Math.min(
                      720,
                      Math.round(
                        (440 * category.imageWidth) / category.imageHeight
                      )
                    )}px`,
                  }}
                >
                  <img
                    src={category.heroImage}
                    alt={language === "ar" ? category.nameAr : category.name}
                    width={category.imageWidth}
                    height={category.imageHeight}
                    fetchPriority={category.id === firstVisibleCategoryId ? "high" : "auto"}
                    loading={category.id === firstVisibleCategoryId ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>

                <h2
                  id={`menu-category-${category.id}`}
                  className="menu-category-title"
                >
                  {language === "ar" ? category.nameAr : category.name}
                </h2>

                {category.note && (
                  <p className="menu-note">
                    {language === "ar" ? category.noteAr : category.note}
                  </p>
                )}
              </div>

              <div className="menu-grid">
                {items.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          ))}
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
