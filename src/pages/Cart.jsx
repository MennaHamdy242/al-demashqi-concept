import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import { buildOrderUrl } from "../utils/whatsapp";
import "./Cart.css";

function formatPrice(amount) {
  return `${amount.toLocaleString("ar-EG")} جنيه`;
}

function Cart() {
  const { items, cartCount, changeQuantity, removeItem } = useCart();
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
    });
    window.open(orderUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="cart-page">
      <h1>سلة الطلب</h1>

      {items.length === 0 ? (
        <section className="cart-empty" aria-live="polite">
          <p>السلة فاضية دلوقتي.</p>
          <Link to="/menu" className="cart-primary-link">
            اختاري أصناف من المنيو
          </Link>
        </section>
      ) : (
        <>
          <section className="cart-items" aria-label="الأصناف في السلة">
            {items.map((item) => (
              <article className="cart-item" key={item.key}>
                <div className="cart-item__details">
                  <h2>{item.nameAr}</h2>
                  {item.sizeLabel && <p>{item.sizeLabel}</p>}
                  <p className="cart-item__unit-price">
                    {formatPrice(item.price)} للواحد
                  </p>
                </div>

                <div className="cart-item__actions">
                  <div
                    className="cart-quantity"
                    role="group"
                    aria-label={`كمية ${item.nameAr}`}
                  >
                    <button
                      type="button"
                      onClick={() => changeQuantity(item.key, -1)}
                      aria-label={`تقليل كمية ${item.nameAr}`}
                    >
                      −
                    </button>
                    <output aria-live="polite">{item.quantity}</output>
                    <button
                      type="button"
                      onClick={() => changeQuantity(item.key, 1)}
                      aria-label={`زيادة كمية ${item.nameAr}`}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="cart-remove"
                    onClick={() => removeItem(item.key)}
                  >
                    حذف
                  </button>
                </div>

                <strong className="cart-item__total">
                  {formatPrice(item.price * item.quantity)}
                </strong>
              </article>
            ))}
          </section>

          <section className="cart-checkout" aria-labelledby="checkout-title">
            <h2 id="checkout-title">بيانات الطلب</h2>
            <p>عدد القطع: {cartCount}</p>
            <p className="cart-total">
              الإجمالي: <strong>{formatPrice(total)}</strong>
            </p>

            <form className="checkout-form" onSubmit={handleSubmit}>
              <label>
                الاسم
                <input name="customerName" autoComplete="name" required />
              </label>
              <label>
                العنوان بالتفصيل
                <textarea
                  name="address"
                  autoComplete="street-address"
                  rows="3"
                  required
                />
              </label>
              <label>
                ملاحظات إضافية <span>(اختياري)</span>
                <textarea name="notes" rows="2" />
              </label>

              <fieldset className="payment-options">
                <legend>طريقة الدفع</legend>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash-on-delivery"
                    defaultChecked
                  />
                  الدفع عند الاستلام
                </label>
                <label className="payment-disabled">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="online"
                    disabled
                  />
                  دفع أونلاين — قريبًا، يحتاج backend وبوابة دفع
                </label>
              </fieldset>

              <p className="checkout-hint">
                هتتفتح رسالة جاهزة في واتساب لمراجعتها قبل الإرسال.
              </p>
              <button type="submit" className="checkout-submit">
                مراجعة الطلب على واتساب
              </button>
            </form>
          </section>
        </>
      )}
    </main>
  );
}

export default Cart;
