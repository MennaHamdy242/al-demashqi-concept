import { useState } from "react";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { problems, lighthouseBefore } from "../data/problems";
import "./BeforeAfter.css";

const views = [
  {
    id: "desktop",
    label: "ديسكتوب",
    beforeSrc: "/images/before-after/first-page.png",
    beforeAlt: "أعلى صفحة موقع الدمشقي القديم على الديسكتوب",
    aspectRatio: "16 / 10",
    maxWidth: "100%",
  },
  {
    id: "mobile",
    label: "موبايل",
    beforeSrc: "/images/before-after/first-page-mobile.png",
    beforeAlt: "أعلى صفحة موقع الدمشقي القديم على الموبايل",
    aspectRatio: "9 / 16",
    maxWidth: "360px",
  },
];

function BeforeAfter() {
  const [viewId, setViewId] = useState("desktop");
  const view = views.find((item) => item.id === viewId);

  return (
    <main className="ba-page">
      <h1>قبل / بعد</h1>
      <p className="ba-page__intro">
        مقارنة بين موقع الدمشقي الحالي والتصميم المقترح. ده concept redesign
        مستقل وغير رسمي من المطعم.
      </p>

      <div className="ba-page__tabs" role="group" aria-label="اختيار نوع الجهاز">
        {views.map((item) => (
          <button
            key={item.id}
            type="button"
            className="ba-page__tab"
            aria-pressed={item.id === viewId}
            onClick={() => setViewId(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <BeforeAfterSlider key={view.id} {...view} afterSrc={null} />

      <section className="ba-page__section" aria-labelledby="lh-title">
        <h2 id="lh-title">أرقام Lighthouse للموقع القديم (موبايل)</h2>
        <table className="ba-page__table">
          <thead>
            <tr>
              <th scope="col">المقياس</th>
              <th scope="col">النتيجة</th>
            </tr>
          </thead>
          <tbody>
            {lighthouseBefore.map((row) => (
              <tr key={row.metric}>
                <th scope="row">{row.metric}</th>
                <td>{row.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="ba-page__note">
          الـ Accessibility والـ Best Practices كانوا 100 بالفعل، فمش بنعتبرهم
          مشكلة. المشاكل اللي اتوثقت كانت في CLS وFCP وSEO.
        </p>
      </section>

      <section className="ba-page__section" aria-labelledby="problems-title">
        <h2 id="problems-title">المشاكل العشرة الموثقة</h2>
        <ol className="ba-page__problems">
          {problems.map((problem) => (
            <li key={problem.id} className="ba-problem">
              <span className="ba-problem__num" aria-hidden="true">
                {problem.id}
              </span>
              <div>
                <h3>{problem.title}</h3>
                <p>{problem.description}</p>
                <span className="ba-problem__evidence">
                  الدليل: {problem.evidence}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

export default BeforeAfter;
