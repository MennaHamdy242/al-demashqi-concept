// src/data/menu.js
// All item names and prices copied from eldemashqi.com
// This is a concept redesign demo — not the official restaurant site

export const categories = [
  {
    id: "shawarma",
    name: "Shawarma",
    nameAr: "شاورما",
    heroImage: "/images/hero/shawarma.webp",
    imageWidth: 1024,
    imageHeight: 683,
    note: null,
  },
  {
    id: "shawarma-meals",
    name: "Shawarma Meals",
    nameAr: "وجبات الشاورما",
    heroImage: "/images/hero/shawarma-meals.jpg",
    imageWidth: 1200,
    imageHeight: 1200,
    note: null,
  },
  {
    id: "chicken",
    name: "Chicken",
    nameAr: "فراخ",
    heroImage: "/images/hero/chicken.jpg",
    imageWidth: 1200,
    imageHeight: 800,
    note: "All meals include: rice + fries + garlic sauce + tahini + bread + pickles. Broasted comes with coleslaw instead of tahini.",
    noteAr: "جميع الوجبات تشمل: رز + بطاطس + تومية + طحينة + عيش + مخلل. البروستد: كلوسلو بدل الطحينة.",
  },
  {
    id: "crepes",
    name: "Crepes",
    nameAr: "كريب",
    heroImage: "/images/hero/crepes.jpg",
    imageWidth: 500,
    imageHeight: 500,
    note: null,
  },
];

export const menuItems = [
  // ---------- Shawarma ----------
  {
    id: "shawarma-1",
    categoryId: "shawarma",
    name: "Shawarma",
    nameAr: "شاورما",
    sizes: [
      { label: "Small", price: 75 },
      { label: "Large", price: 95 },
      { label: "Fino", price: 115 },
    ],
  },
  {
    id: "shawarma-2",
    categoryId: "shawarma",
    name: "Shawarma Sarookh",
    nameAr: "شاورما صاروخ",
    sizes: [{ label: "Large", price: 115 }],
  },
  {
    id: "shawarma-3",
    categoryId: "shawarma",
    name: "Shawarma Extra (Cheese & Mushroom)",
    nameAr: "شاورما اكسترا (إضافة جبنة ومشروم)",
    sizes: [{ label: "Large", price: 115 }],
  },
  {
    id: "shawarma-4",
    categoryId: "shawarma",
    name: "Shawarma Sayeb",
    nameAr: "شاورما سايب",
    sizes: [
      { label: "Quarter kg", price: 155 },
      { label: "Half kg", price: 280 },
      { label: "1 kg", price: 560 },
    ],
  },

  // ---------- Shawarma Meals ----------
  {
    id: "meal-1",
    categoryId: "shawarma-meals",
    name: "Shawarma Arabi Meal",
    nameAr: "وجبة شاورما عربي",
    sizes: [{ label: null, price: 130 }],
  },
  {
    id: "meal-2",
    categoryId: "shawarma-meals",
    name: "Shawarma Arabi Meal (Double)",
    nameAr: "وجبة شاورما عربي دبل",
    sizes: [{ label: null, price: 180 }],
  },
  {
    id: "meal-3",
    categoryId: "shawarma-meals",
    name: "Shawarma Fatteh",
    nameAr: "فتة شاورما",
    sizes: [{ label: null, price: 125 }],
  },
  {
    id: "meal-4",
    categoryId: "shawarma-meals",
    name: "Shawarma Fatteh (Double)",
    nameAr: "فتة شاورما دبل",
    sizes: [{ label: null, price: 155 }],
  },
  {
    id: "meal-5",
    categoryId: "shawarma-meals",
    name: "Shawarma Arabi Meal Extra",
    nameAr: "وجبة شاورما عربي اكسترا",
    sizes: [
      { label: "Single", price: 150 },
      { label: "Double", price: 200 },
    ],
  },
  {
    id: "meal-6",
    categoryId: "shawarma-meals",
    name: "Maria Shawarma Meal",
    nameAr: "وجبة ماريا شاورما",
    sizes: [{ label: null, price: 165 }],
  },
  {
    id: "meal-7",
    categoryId: "shawarma-meals",
    name: "Maria Shawarma Meal Extra",
    nameAr: "وجبة ماريا شاورما اكسترا",
    sizes: [{ label: null, price: 185 }],
  },

  // ---------- Chicken ----------
  {
    id: "chicken-1",
    categoryId: "chicken",
    name: "Grilled Chicken",
    nameAr: "فراخ شواية",
    sizes: [
      { label: "Quarter (leg)", price: 120 },
      { label: "Quarter (breast)", price: 130 },
      { label: "Half chicken", price: 220 },
      { label: "Full chicken", price: 430 },
    ],
  },
  {
    id: "chicken-2",
    categoryId: "chicken",
    name: "Broasted",
    nameAr: "بروستد",
    sizes: [
      { label: "Quarter (leg)", price: 125 },
      { label: "Quarter (breast)", price: 130 },
      { label: "Half chicken", price: 225 },
      { label: "Full chicken", price: 455 },
    ],
  },
  {
    id: "chicken-3",
    categoryId: "chicken",
    name: "Charcoal Grilled Chicken",
    nameAr: "فراخ مشوية فحم",
    sizes: [
      { label: "Quarter (leg)", price: 125 },
      { label: "Quarter (breast)", price: 130 },
      { label: "Half chicken", price: 215 },
      { label: "Full chicken", price: 425 },
    ],
  },

  // ---------- Crepes ----------
  {
    id: "crepe-1",
    categoryId: "crepes",
    name: "Super Shawarma Crepe",
    nameAr: "سوبر شاورما",
    sizes: [
      { label: "Small", price: 115 },
      { label: "Large", price: 150 },
    ],
  },
  {
    id: "crepe-2",
    categoryId: "crepes",
    name: "Shish Tawook Crepe",
    nameAr: "شيش طاووق",
    sizes: [
      { label: "Small", price: 125 },
      { label: "Large", price: 150 },
    ],
  },
  {
    id: "crepe-3",
    categoryId: "crepes",
    name: "Burger Crepe",
    nameAr: "برجر",
    sizes: [
      { label: "Small", price: 100 },
      { label: "Large", price: 120 },
    ],
  },
  {
    id: "crepe-4",
    categoryId: "crepes",
    name: "Nutella Crepe",
    nameAr: "نوتيلا",
    sizes: [{ label: null, price: 75 }],
  },
  {
    id: "crepe-5",
    categoryId: "crepes",
    name: "El Demashqi Crepe (Shawarma + Panee + Strips)",
    nameAr: "الدمشقي (شاورما + بانية + ستريبس)",
    sizes: [
      { label: "Small", price: 150 },
      { label: "Large", price: 165 },
    ],
  },
  {
    id: "crepe-6",
    categoryId: "crepes",
    name: "Mix Grill Chicken Crepe (Panee + Strips + Shish)",
    nameAr: "مكس جريل فراخ (بانية + ستريبس + شيش)",
    sizes: [
      { label: "Small", price: 150 },
      { label: "Large", price: 165 },
    ],
  },
];
