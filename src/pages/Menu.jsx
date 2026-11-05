import { useState } from "react";
import { categories, menuItems } from "../data/menu";
import CategoryFilter from "../components/CategoryFilter";
import MenuCard from "../components/MenuCard";
import "./Menu.css";

function Menu() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(categories[0].id);

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
        />
        <span className="menu-hero-tag">صورة توضيحية</span>
      </div>

      <h2 className="menu-category-title">
        {selectedCategory.nameAr}{" "}
        <span dir="ltr" className="menu-category-title-en">
          {selectedCategory.name}
        </span>
      </h2>

      {selectedCategory.note && (
        <p className="menu-note">{selectedCategory.noteAr}</p>
      )}

      <div className="menu-grid">
        {visibleItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}

export default Menu;