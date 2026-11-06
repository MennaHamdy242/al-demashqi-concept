import { createContext, useEffect, useMemo, useState } from "react";
import { menuItems } from "../data/menu";

const STORAGE_KEY = "al-demashqi-cart-v2";
const CartContext = createContext(null);
const itemsById = new Map(menuItems.map((item) => [item.id, item]));

function resolveEntry(entry) {
  if (!entry || typeof entry.itemId !== "string" || typeof entry.sizeLabel !== "string") return null;
  const menuItem = itemsById.get(entry.itemId);
  const size = menuItem?.sizes.find((option) => (option.label ?? "") === entry.sizeLabel);
  if (!menuItem || !size || !Number.isInteger(entry.quantity) || entry.quantity < 1) return null;
  const key = `${menuItem.id}:${entry.sizeLabel}`;
  return { key, itemId: menuItem.id, name: menuItem.name, nameAr: menuItem.nameAr, sizeLabel: entry.sizeLabel, price: size.price, quantity: Math.min(entry.quantity, 99) };
}

function readSavedCart() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed.map(resolveEntry).filter(Boolean) : [];
  } catch {
    return [];
  }
}

function CartProvider({ children }) {
  const [items, setItems] = useState(readSavedCart);
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items.map(({ key, itemId, sizeLabel, quantity }) => ({ key, itemId, sizeLabel, quantity }))));
    } catch { /* Cart remains available for this visit if storage is unavailable. */ }
  }, [items]);

  const addItem = (item, size) => {
    const sizeLabel = size.label ?? "";
    const key = `${item.id}:${sizeLabel}`;
    setItems((current) => {
      const existing = current.find((entry) => entry.key === key);
      if (existing) return current.map((entry) => entry.key === key ? { ...entry, quantity: Math.min(99, entry.quantity + 1) } : entry);
      return [...current, { key, itemId: item.id, name: item.name, nameAr: item.nameAr, sizeLabel, price: size.price, quantity: 1 }];
    });
  };
  const changeQuantity = (key, difference) => setItems((current) => current.map((entry) => entry.key === key ? { ...entry, quantity: Math.min(99, entry.quantity + difference) } : entry).filter((entry) => entry.quantity > 0));
  const removeItem = (key) => setItems((current) => current.filter((entry) => entry.key !== key));
  const cartCount = useMemo(() => items.reduce((count, item) => count + item.quantity, 0), [items]);
  const value = useMemo(() => ({ items, addItem, changeQuantity, removeItem, cartCount }), [items, cartCount]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };
