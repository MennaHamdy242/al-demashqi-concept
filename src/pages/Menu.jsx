import { useState } from "react";
import { categories, menuItems } from "../data/menu";
import CategoryFilter from "../components/CategoryFilter";
import MenuCard from "../components/MenuCard";
import "./Menu.css";

function Menu() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(categories[0].id);
  const [showEnglishNames, setShowEnglishNames] = useState(false);

  const selectedCategory = categories.find(
    (category) => category.id === selectedCategoryId
  );

  const visibleItems = menuItems.filter(
    (item) => item.categoryId === selectedCategoryId
  );

  return (
    <main className="menu-page">
      <h1>قائمة الطعام</h1>

      <CategoryFilter
        categories={categories}
        selectedId={selectedCategoryId}
        onSelect={setSelectedCategoryId}
      />

      <div className="menu-hero">
        <img
          src={selectedCategory.heroImage}
          alt={`صورة توضيحية: ${selectedCategory.nameAr}`}
          width={selectedCategory.imageWidth}
          height={selectedCategory.imageHeight}
          fetchPriority="high"
        />
        <span className="menu-hero-tag">صورة توضيحية</span>
      </div>

      <h2 className="menu-category-title">
        <span
          dir={showEnglishNames ? "ltr" : "rtl"}
          lang={showEnglishNames ? "en" : "ar"}
        >
          {showEnglishNames ? selectedCategory.name : selectedCategory.nameAr}
        </span>
      </h2>

      {selectedCategory.note && (
        <p className="menu-note">{selectedCategory.noteAr}</p>
      )}

      <button
        type="button"
        className="menu-language-toggle"
        aria-pressed={showEnglishNames}
        onClick={() => setShowEnglishNames((isEnglish) => !isEnglish)}
      >
        {showEnglishNames ? "عرض الأسماء بالعربي" : "عرض الأسماء بالإنجليزي"}
      </button>

      <div className="menu-grid">
        {visibleItems.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            showEnglishNames={showEnglishNames}
          />
        ))}
      </div>
    </main>
  );
}

export default Menu;
