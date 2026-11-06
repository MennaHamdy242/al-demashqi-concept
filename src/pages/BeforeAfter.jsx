import { problems } from "../data/problems";
import { translations } from "../data/translations";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import useLanguage from "../hooks/useLanguage";
import "./BeforeAfter.css";

const comparisonSources = [
  {
    problemId: 1,
    beforeSrc: "/images/before-after/first-page-mobile.png",
    afterSrc: "/images/before-after/new-menu.png",
    aspectRatio: "4 / 5",
  },
  {
    problemId: 2,
    beforeSrc: "/images/before-after/first-page.png",
    afterSrc: "/images/before-after/new-menu.png",
    aspectRatio: "16 / 9",
    supportingEvidence: "/images/before-after/first-page-mobile.png",
  },
  {
    problemId: 3,
    beforeSrc: "/images/before-after/middle-page.png",
    afterSrc: "/images/before-after/new-menu.png",
    aspectRatio: "16 / 9",
    fullPageEvidence: "/images/before-after/full-site.png",
  },
];

const comparisons = comparisonSources.map((source) => ({
  ...source,
  problem: problems.find((problem) => problem.id === source.problemId),
}));
function BeforeAfter() {
  const { language } = useLanguage();
  const t = translations[language].beforeAfter;
  const isArabic = language === "ar";

  return (
    <main className="ba-page">
      <header className="ba-page__heading">
        <p className="ba-eyebrow">{isArabic ? "من تجربة العميل" : "Customer experience"}</p>
        <h1>{t.title}</h1>
        <p className="ba-page__intro">{t.intro}</p>
      </header>

      <div className="ba-comparisons">
        {comparisons.map((comparison, index) => {
          const title = isArabic
            ? comparison.problem.title
            : comparison.problem.titleEn;
          const description = isArabic
            ? comparison.problem.description
            : comparison.problem.descriptionEn;
          const evidence = isArabic
            ? comparison.problem.evidence
            : comparison.problem.evidenceEn;

          return (
            <section
              key={comparison.problemId}
              className="ba-comparison"
              aria-labelledby={`comparison-${comparison.problemId}`}
            >
              <div className="ba-comparison__copy">
                <span className="ba-comparison__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 id={`comparison-${comparison.problemId}`}>{title}</h2>
                  <p className="ba-comparison__description">{description}</p>
                </div>
              </div>
              <BeforeAfterSlider
                beforeSrc={comparison.beforeSrc}
                afterSrc={comparison.afterSrc}
                beforeAlt={`${t.oldImage}: ${title}`}
                afterAlt={`${t.newImage}: ${title}`}
                beforeLabel={t.oldImage}
                afterLabel={t.newImage}
                sliderLabel={t.sliderLabel}
                sliderValue={t.sliderValue}
                placeholderText={t.sliderPlaceholder}
                aspectRatio={comparison.aspectRatio}
              />
              <p className="ba-comparison__evidence">
                <strong>{t.evidence}:</strong> {evidence}
              </p>
              {comparison.supportingEvidence && (
                <a
                  className="ba-comparison__full-page"
                  href={comparison.supportingEvidence}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.mobileEvidence}
                </a>
              )}
              {comparison.fullPageEvidence && (
                <a
                  className="ba-comparison__full-page"
                  href={comparison.fullPageEvidence}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.fullPage}
                </a>
              )}
            </section>
          );
        })}
      </div>

      <aside className="ba-page__note" aria-label={t.lighthouseTitle}>
        <strong>{t.lighthouseTitle}</strong>
        <p>{t.lighthouseNote}</p>
      </aside>
    </main>
  );
}

export default BeforeAfter;
