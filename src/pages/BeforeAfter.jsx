import { problems, lighthouseBefore } from "../data/problems";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import "./BeforeAfter.css";

const comparisons = [
  {
    problemId: 1,
    beforeSrc: "/images/before-after/first-page.png",
    afterSrc: "/images/before-after/new-menu.png",
    beforeAlt: "لقطة من المنيو القديم، نص وأسعار من غير صور للأكل",
    afterAlt: "لقطة من التصميم المقترح فيها صورة واضحة لقسم الشاورما",
    aspectRatio: "16 / 9",
  },
  {
    problemId: 2,
    beforeSrc: "/images/before-after/first-page.png",
    afterSrc: "/images/before-after/new-menu.png",
    beforeAlt: "شريط أقسام الموقع القديم ممتد خارج عرض الشاشة",
    afterAlt: "أقسام المنيو في التصميم المقترح مرتبة في أزرار ظاهرة",
    aspectRatio: "16 / 9",
  },
  {
    problemId: 3,
    beforeSrc: "/images/before-after/middle-page.png",
    afterSrc: "/images/before-after/new-menu.png",
    beforeAlt: "لقطة من وسط الصفحة القديمة تظهر أقسامًا وأصنافًا متتابعة",
    afterAlt: "المنيو المقترح بعد اختيار قسم محدد",
    aspectRatio: "16 / 9",
    fullPageEvidence: "/images/before-after/full-site.png",
  },
].map((comparison) => ({
  ...comparison,
  problem: problems.find((problem) => problem.id === comparison.problemId),
}));
const comparisonProblemIds = new Set(
  comparisons.map((comparison) => comparison.problemId)
);
const additionalProblems = problems.filter(
  (problem) => !comparisonProblemIds.has(problem.id)
);

function BeforeAfter() {
  return (
    <main className="ba-page">
      <h1>قبل / بعد</h1>
      <p className="ba-page__intro">
        تلات مقارنات مرتبطة بمشاكل موثقة في الموقع الحالي. التصميم المقترح
        concept مستقل وغير رسمي من المطعم.
      </p>

      <div className="ba-comparisons">
        {comparisons.map((comparison, index) => (
          <section
            key={comparison.problemId}
            className="ba-comparison"
            aria-labelledby={`comparison-${comparison.problemId}`}
          >
            <h2 id={`comparison-${comparison.problemId}`}>
              {index + 1}. {comparison.problem.title}
            </h2>
            <p className="ba-comparison__description">
              {comparison.problem.description}
            </p>
            <BeforeAfterSlider
              beforeSrc={comparison.beforeSrc}
              afterSrc={comparison.afterSrc}
              beforeAlt={comparison.beforeAlt}
              afterAlt={comparison.afterAlt}
              aspectRatio={comparison.aspectRatio}
            />
            <p className="ba-comparison__evidence">
              <strong>الدليل:</strong> {comparison.problem.evidence}
            </p>
            {comparison.fullPageEvidence && (
              <a
                className="ba-comparison__full-page"
                href={comparison.fullPageEvidence}
                target="_blank"
                rel="noopener noreferrer"
              >
                افتحي لقطة الصفحة القديمة كاملة
              </a>
            )}
          </section>
        ))}
      </div>

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
        <h2 id="problems-title">
          باقي المشاكل الموثقة ({additionalProblems.length})
        </h2>
        <ol
          className="ba-page__problems"
          start={additionalProblems[0]?.id ?? 1}
        >
          {additionalProblems.map((problem) => (
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
