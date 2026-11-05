import "./MenuCard.css";
import useCart from "../hooks/useCart";

function MenuCard({ item, showEnglishNames }) {
  const { addItem } = useCart();

  return (
    <article className="menu-card">
      <h3
        className="menu-card-name"
        dir={showEnglishNames ? "ltr" : "rtl"}
        lang={showEnglishNames ? "en" : "ar"}
      >
        {showEnglishNames ? item.name : item.nameAr}
      </h3>

      <ul className="menu-card-sizes">
        {item.sizes.map((size) => (
          <li key={`${item.id}:${size.label ?? "single"}`}>
            <button
              type="button"
              className="size-pill"
              onClick={() => addItem(item, size)}
              aria-label={`أضف ${item.nameAr}${size.label ? `، ${size.label}` : ""} إلى السلة بسعر ${size.price} جنيه`}
            >
              {size.label && (
                <span className="size-label" dir="ltr" lang="en">
                  {size.label}
                </span>
              )}
              <span className="size-price" dir="ltr">
                {size.price} جنيه
              </span>
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default MenuCard;
