export const problems = [
  {
    id: 1,
    title: "لا توجد صور للأطعمة",
    titleEn: "No food photos",
    description:
      "تعرض الصفحة أسماء الأصناف وأسعارها فقط، فلا يستطيع العميل معاينة الوجبات قبل الاختيار.",
    descriptionEn:
      "The page lists item names and prices only, so customers cannot preview dishes before choosing.",
    evidence: "لقطة الصفحة القديمة: قائمة أسماء وأسعار بلا صور للأطعمة",
    evidenceEn: "Previous page screenshot: item names and prices without food photos",
    source: "screenshot",
  },
  {
    id: 2,
    title: "التنقل بين الأقسام يتطلب تمريرًا أفقيًا",
    titleEn: "Category navigation requires horizontal scrolling",
    description:
      "تظهر الأقسام في شريط أفقي يتجاوز عرض الشاشة، ويحتاج العميل إلى سحبه للوصول إلى بقية الخيارات.",
    descriptionEn:
      "Categories extend beyond the viewport in a horizontal strip, requiring customers to scroll sideways to reach the rest.",
    evidence: "لقطة الشاشة الأولى على الحاسوب والهاتف: شريط قابل للسحب أفقيًا",
    evidenceEn: "First desktop and mobile screenshots: horizontally scrollable category bar",
    source: "screenshot",
  },
  {
    id: 3,
    title: "قائمة طويلة بلا انتقال مباشر بين الأقسام",
    titleEn: "A long menu without quick section navigation",
    description:
      "تتتابع أكثر من 15 مجموعة في عمود واحد، ولا توجد وسيلة سريعة للانتقال إلى المجموعة المطلوبة.",
    descriptionEn:
      "More than 15 groups appear in one long column, with no quick way to jump to a specific section.",
    evidence: "لقطة الصفحة الكاملة: أكثر من 15 مجموعة متتابعة",
    evidenceEn: "Full-page screenshot: more than 15 consecutive groups",
    source: "screenshot",
  },
  {
    id: 4,
    title: "معلومات التوصيل في نهاية القائمة فقط",
    titleEn: "Delivery information appears only at the end of the menu",
    description: "تظهر معلومات التوصيل بعد محتوى القائمة الطويل، ما يصعّب العثور عليها أثناء التصفح.",
    descriptionEn: "Delivery information appears after the long menu content, making it harder to find while browsing.",
    evidence: "لقطة نهاية الصفحة والصفحة الكاملة: معلومات التوصيل أسفل القائمة",
    evidenceEn: "Last-page and full-page screenshots: delivery information appears below the menu",
    source: "screenshot",
  },
  {
    id: 5,
    title: "غياب الوصف التعريفي للصفحة",
    titleEn: "The page has no meta description",
    description: "أشار تقرير Lighthouse إلى عدم وجود وصف تعريفي يلخّص الصفحة لمحركات البحث.",
    descriptionEn: "The Lighthouse report found no meta description summarizing the page for search engines.",
    evidence: "تدقيق Lighthouse: meta-description — لا يحتوي المستند على وصف تعريفي",
    evidenceEn: "Lighthouse audit: meta-description — document does not have a meta description",
    source: "lighthouse",
  },
];
