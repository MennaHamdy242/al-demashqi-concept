import "./CategoryFilter.css";

function CategoryFilter({ categories, selectedId, onSelect }) {
  return (
    <div className="category-filter" role="group" aria-label="أقسام المنيو">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`category-btn ${
            category.id === selectedId ? "active" : ""
          }`}
          onClick={() => onSelect(category.id)}
          aria-pressed={category.id === selectedId}
        >
          {category.nameAr}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;