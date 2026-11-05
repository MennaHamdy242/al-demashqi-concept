import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <p className="home-eyebrow">مشروع إعادة تصميم مستقل</p>
        <h1 id="home-title">الدمشقي — المنيو والطلب بشكل أوضح</h1>
        <p className="home-intro">
          concept redesign لموقع مطعم الدمشقي في العاشر من رمضان: تصفحي المنيو،
          اختاري الحجم، وجهزي طلبك للمراجعة على واتساب.
        </p>
        <div className="home-actions">
          <Link to="/before-after" className="home-action home-action--primary">
            شوفي المقارنة
          </Link>
          <Link to="/menu" className="home-action home-action--secondary">
            تصفحي المنيو
          </Link>
        </div>
      </section>

      <section className="home-points" aria-label="مميزات التصميم المقترح">
        <article>
          <h2>مقارنة موثقة</h2>
          <p>شوفي الأدلة والمشاكل اللي اتحددت في الموقع الحالي.</p>
          <Link to="/before-after">صفحة قبل / بعد</Link>
        </article>
        <article>
          <h2>اختيار أسهل</h2>
          <p>فلتر الأقسام، اختاري الحجم، وضيفي الأصناف للسلة.</p>
          <Link to="/menu">افتحي المنيو</Link>
        </article>
        <article>
          <h2>طلب واضح</h2>
          <p>راجعي الأصناف والإجمالي وجهزي رسالة الطلب في واتساب.</p>
          <Link to="/cart">روحي للسلة</Link>
        </article>
      </section>

      <p className="home-disclaimer">
        ده concept redesign مستقل للتدريب، مش موقع رسمي تابع للمطعم.
      </p>
    </main>
  );
}

export default Home;
