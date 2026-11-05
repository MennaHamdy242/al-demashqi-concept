import { createContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "al-demashqi-cart";
const CartContext = createContext(null);

function readSavedCart() {
  try {
    const savedCart = window.localStorage.getItem(STORAGE_KEY);
    if (!savedCart) return [];

    const parsedCart = JSON.parse(savedCart);
    if (!Array.isArray(parsedCart)) return [];

    return parsedCart.filter(
      (item) =>
        item &&
        typeof item.key === "string" &&
        typeof item.itemId === "string" &&
        typeof item.nameAr === "string" &&
        typeof item.price === "number" &&
        Number.isFinite(item.price) &&
        typeof item.quantity === "number" &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0
    );
  } catch {
    return [];
  }
}

function CartProvider({ children }) {
  const [items, setItems] = useState(readSavedCart);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // The cart still works for this visit when browser storage is unavailable.
    }
  }, [items]);

  const addItem = (item, size) => {
    const sizeLabel = size.label ?? "";
    const key = `${item.id}:${sizeLabel}`;

    setItems((currentItems) => {
      const existingItem = currentItems.find((cartItem) => cartItem.key === key);

      if (existingItem) {
        return currentItems.map((cartItem) =>
          cartItem.key === key
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [
        ...currentItems,
        {
          key,
          itemId: item.id,
          nameAr: item.nameAr,
          sizeLabel,
          price: size.price,
          quantity: 1,
        },
      ];
    });
  };

  const cartCount = useMemo(
    () => items.reduce((count, item) => count + item.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({ items, addItem, cartCount }),
    [items, cartCount]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };
