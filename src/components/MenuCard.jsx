import "./MenuCard.css";
import useCart from "../hooks/useCart";
import useLanguage from "../hooks/useLanguage";
import { getSizeLabel, interpolate, translations } from "../data/translations";
import { formatPrice } from "../utils/formatters";

function MenuCard({ item, categoryName, category }) {
  const { addItem } = useCart();
  const { language } = useLanguage();
  const t = translations[language].menu;
  const itemName = language === "ar" ? item.nameAr : item.name;
  const categoryLabel = language === "ar" ? category.nameAr : category.name;

  return (
    <article className="menu-card">
      <img
        className="menu-card-image"
        src={category.heroImage}
        alt={`${t.illustration}: ${categoryLabel}`}
        width={category.imageWidth}
        height={category.imageHeight}
        loading="lazy"
        decoding="async"
      />
      {categoryName && <p className="menu-card-category">{categoryName}</p>}
      <h3 className="menu-card-name" lang={language}>
        {itemName}
      </h3>

      <ul className="menu-card-sizes">
        {item.sizes.map((size) => (
          <li key={`${item.id}:${size.label ?? "single"}`}>
            <button
              type="button"
              className="size-pill"
              onClick={() => addItem(item, size)}
              aria-label={interpolate(t.addToCart, {
                item: itemName,
                size: size.label
                  ? `${language === "ar" ? "، " : " · "}${getSizeLabel(size.label, language)}`
                  : "",
                price: new Intl.NumberFormat(
                  language === "ar" ? "ar-EG" : "en-EG"
                ).format(size.price),
              })}
            >
              {size.label && (
                <span className="size-label" lang={language}>
                  {getSizeLabel(size.label, language)}
                </span>
              )}
              <span className="size-price" lang={language}>
                {formatPrice(size.price, language, true)}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default MenuCard;
