// src/data/problems.js

export const lighthouseBefore = [
  { metric: 'Performance', score: 83 },
  { metric: 'Accessibility', score: 100 },
  { metric: 'Best Practices', score: 100 },
  { metric: 'SEO', score: 92 },
]

export const problems = [
  {
    id: 1,
    title: 'مفيش صور للأكل',
    description: 'الصفحة نص وأسعار بس، فالزبون مش بيشوف الأكل قبل ما يطلب.',
    evidence: 'Screenshot',
  },
  {
    id: 2,
    title: 'شريط الأقسام محتاج scroll جانبي',
    description: 'الأقسام في صف أفقي لازم تسحبيه يمين وشمال، على الديسكتوب والموبايل.',
    evidence: 'Screenshot',
  },
  {
    id: 3,
    title: 'صفحة طويلة جدًا بدون تنقل سريع',
    description: 'أكتر من 15 قسم في عمود واحد، ومفيش طريقة توصلي لقسم معين بسرعة.',
    evidence: 'Screenshot',
  },
  {
    id: 4,
    title: 'أرقام التوصيل في آخر الصفحة',
    description: 'الزبون لازم ينزل الصفحة كلها عشان يلاقي رقم يطلب منه.',
    evidence: 'Screenshot',
  },
  {
    id: 5,
    title: 'مفيش زرار واتساب مباشر',
    description: 'مع إن أغلب الطلبات بتتم على واتساب، مفيش زرار بيفتح المحادثة.',
    evidence: 'Screenshot',
  },
  {
    id: 6,
    title: 'كل الأصناف شكلها واحد',
    description: 'الأصناف كلها pills بسيطة متشابهة، فمفيش حاجة بتميّز صنف عن التاني.',
    evidence: 'Screenshot',
  },
  {
    id: 7,
    title: 'الصفحة بتتحرك وهي بتحمّل',
    description: 'العناصر بتتزحزح أثناء التحميل، وده بيخلي الضغط على الزرار الغلط أسهل.',
    evidence: 'Lighthouse · CLS = 0.54 (ضعيف)',
  },
  {
    id: 8,
    title: 'أول محتوى بيظهر ببطء متوسط',
    description: 'مؤشر First Contentful Paint في المنطقة المتوسطة وليس الجيدة.',
    evidence: 'Lighthouse · FCP score = 0.73',
  },
  {
    id: 9,
    title: 'مفيش meta description',
    description: 'محركات البحث مش لاقية وصف للصفحة تعرضه في النتايج.',
    evidence: 'Lighthouse · SEO = 92',
  },
  {
    id: 10,
    title: 'العنوان نص بدون رابط خرائط',
    description: 'العنوان مكتوب في آخر الصفحة كنص عادي، ومفيش رابط يفتح الموقع على الخريطة.',
    evidence: 'Screenshot',
  },
]