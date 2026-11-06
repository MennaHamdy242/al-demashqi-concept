import { useEffect, useRef, useState } from "react";
import "./MenuCard.css";
import useCart from "../hooks/useCart";
import useLanguage from "../hooks/useLanguage";
import { getSizeLabel, interpolate, translations } from "../data/translations";
import { formatPrice } from "../utils/formatters";

function MenuCard({ item }) {
  const { addItem } = useCart();
  const { language } = useLanguage();
  const t = translations[language].menu;
  const itemName = language === "ar" ? item.nameAr : item.name;
  const [addedSize, setAddedSize] = useState(null);
  const [status, setStatus] = useState("");
  const timerRef = useRef(null);
  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  return (
    <article className="menu-card">
      <h3 className="menu-card-name" lang={language}>
        {itemName}
      </h3>

      <ul className="menu-card-sizes">
        {item.sizes.map((size) => (
          <li key={`${item.id}:${size.label ?? "single"}`}>
            <button
              type="button"
              className="size-pill"
              onClick={() => {
                addItem(item, size);
                setAddedSize(size.label ?? "single");
                setStatus(interpolate(t.addedStatus, { item: itemName }));
                window.clearTimeout(timerRef.current);
                timerRef.current = window.setTimeout(() => { setAddedSize(null); setStatus(""); }, 1200);
              }}
              data-added={(size.label ?? "single") === addedSize || undefined}
              aria-label={`${size.label ? `${getSizeLabel(size.label, language)} · ` : ""}${formatPrice(size.price, language, true)}. ${interpolate(t.addToCart, {
                item: itemName,
                size: size.label
                  ? `${language === "ar" ? "، " : " · "}${getSizeLabel(size.label, language)}`
                  : "",
                price: formatPrice(size.price, language, true),
              })}`}
            >
              {size.label && (
                <span className="size-label" lang={language}>
                  {getSizeLabel(size.label, language)}
                </span>
              )}
              <span aria-hidden="true" className="size-add-icon">{(size.label ?? "single") === addedSize ? "✓" : "+"}</span>
              <span className="size-price" lang={language}>
                {formatPrice(size.price, language, true)}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <span className="visually-hidden" role="status">{status}</span>
    </article>
  );
}

export default MenuCard;
