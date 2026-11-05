import "./MenuCard.css";
import useCart from "../hooks/useCart";

function MenuCard({ item }) {
  const { addItem } = useCart();

  return (
    <article className="menu-card">
      <h3 className="menu-card-name-ar">{item.nameAr}</h3>
      {/* النص الإنجليزي ثانوي، وبنحط dir="ltr" عشان يتكتب صح جوا صفحة RTL */}
      <p className="menu-card-name-en" dir="ltr">
        {item.name}
      </p>

      <ul className="menu-card-sizes">
        {item.sizes.map((size) => (
          <li key={`${item.id}:${size.label ?? "single"}`}>
            <button
              type="button"
              className="size-pill"
              onClick={() => addItem(item, size)}
              aria-label={`أضف ${item.nameAr}${size.label ? `، ${size.label}` : ""} إلى السلة بسعر ${size.price} جنيه`}
            >
            {size.label && <span className="size-label">{size.label}</span>}
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
