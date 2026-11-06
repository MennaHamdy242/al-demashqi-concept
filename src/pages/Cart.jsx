import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import useLanguage from "../hooks/useLanguage";
import { buildOrderUrl } from "../utils/whatsapp";
import { getSizeLabel, translations } from "../data/translations";
import { formatPrice } from "../utils/formatters";
import "./Cart.css";

function Cart() {
  const { items, cartCount, changeQuantity, removeItem } = useCart();
  const { language } = useLanguage();
  const t = translations[language].cart;
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const orderUrl = buildOrderUrl({
      items,
      total,
      customerName: formData.get("customerName"),
      address: formData.get("address"),
      notes: formData.get("notes"),
      language,
    });
    window.open(orderUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="cart-page">
      <h1>{t.title}</h1>

      {items.length === 0 ? (
        <section className="cart-empty" aria-live="polite">
          <p>{t.empty}</p>
          <Link to="/menu" className="cart-primary-link">
            {t.browseMenu}
          </Link>
        </section>
      ) : (
        <>
          <section className="cart-items" aria-label={t.itemsLabel}>
            {items.map((item) => (
              <article className="cart-item" key={item.key}>
                <div className="cart-item__details">
                  <h2>{language === "ar" ? item.nameAr : item.name || item.nameAr}</h2>
                  {item.sizeLabel && (
                    <p lang={language}>
                      {getSizeLabel(item.sizeLabel, language)}
                    </p>
                  )}
                  <p className="cart-item__unit-price">
                    {formatPrice(item.price, language)} {t.unitPrice}
                  </p>
                </div>

                <div className="cart-item__actions">
                  <div
                    className="cart-quantity"
                    role="group"
                    aria-label={`${t.quantity}: ${language === "ar" ? item.nameAr : item.name || item.nameAr}`}
                  >
                    <button
                      type="button"
                      onClick={() => changeQuantity(item.key, -1)}
                      aria-label={t.decrease.replace(
                        "{item}",
                        language === "ar" ? item.nameAr : item.name || item.nameAr
                      )}
                    >
                      −
                    </button>
                    <output aria-live="polite">
                      {item.quantity.toLocaleString(language === "ar" ? "ar-EG" : "en-EG")}
                    </output>
                    <button
                      type="button"
                      onClick={() => changeQuantity(item.key, 1)}
                      aria-label={t.increase.replace(
                        "{item}",
                        language === "ar" ? item.nameAr : item.name || item.nameAr
                      )}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="cart-remove"
                    onClick={() => removeItem(item.key)}
                  >
                    {t.remove}
                  </button>
                </div>

                <strong className="cart-item__total">
                  {formatPrice(item.price * item.quantity, language)}
                </strong>
              </article>
            ))}
          </section>

          <section className="cart-checkout" aria-labelledby="checkout-title">
            <h2 id="checkout-title">{t.details}</h2>
            <p>
              {t.count}: {cartCount.toLocaleString(language === "ar" ? "ar-EG" : "en-EG")}
            </p>
            <p className="cart-total">
              {t.total}: <strong>{formatPrice(total, language)}</strong>
            </p>

            <form className="checkout-form" onSubmit={handleSubmit}>
              <label>
                {t.name}
                <input name="customerName" autoComplete="name" required />
              </label>
              <label>
                {t.address}
                <textarea
                  name="address"
                  autoComplete="street-address"
                  rows="3"
                  required
                />
              </label>
              <label>
                {t.notes} <span>({t.optional})</span>
                <textarea name="notes" rows="2" />
              </label>

              <fieldset className="payment-options">
                <legend>{t.payment}</legend>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash-on-delivery"
                    defaultChecked
                  />
                  {t.cash}
                </label>
                <label className="payment-disabled">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="online"
                    disabled
                  />
                  {t.online}
                </label>
              </fieldset>

              <p className="checkout-hint">
                {t.whatsappHint}
              </p>
              <button type="submit" className="checkout-submit">
                {t.reviewOrder}
              </button>
            </form>
          </section>
        </>
      )}
    </main>
  );
}

export default Cart;
