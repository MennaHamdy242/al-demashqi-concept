import { problems } from "../data/problems";
import { interpolate, translations } from "../data/translations";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import useLanguage from "../hooks/useLanguage";
import "./BeforeAfter.css";
import usePageTitle from "../hooks/usePageTitle";
import LighthouseTable from "../components/LighthouseTable";

const comparisons = [
  { id: 1, before: "/images/before-after/last-page.png", after: "/images/before-after/new-menu.png" },
  { id: 2, before: "/images/before-after/first-page.png", after: "/images/before-after/new-navbar.png" },
  { id: 3, before: "/images/before-after/middle-page.png", after: "/images/before-after/new-menu-card.png" },
];

function BeforeAfter() {
  const { language } = useLanguage();
  const t = translations[language].beforeAfter;
  usePageTitle("beforeAfter");
  const intro = interpolate(t.intro, { count: problems.length.toLocaleString(language === "ar" ? "ar-EG" : "en-EG") });

  return (
    <main className="ba-page">
      <header className="ba-page__heading">
        <h1>{t.title}</h1>
        <p className="ba-page__intro">{intro}</p>
      </header>
      <section className="ba-problem-list" aria-labelledby="ba-problems-title">
        <h2 id="ba-problems-title">{t.problemsHeading}</h2>
        <ol>
          {problems.map((problem) => (
            <li key={problem.id}>
              <a href={`#comparison-${problem.id}`}>
                <strong>{language === "ar" ? problem.title : problem.titleEn}</strong>
                <span>{language === "ar" ? problem.evidence : problem.evidenceEn}</span>
              </a>
            </li>
          ))}
        </ol>
      </section>
      <div className="ba-comparisons">
        {comparisons.map((comparison, index) => {
          const problem = problems.find((entry) => entry.id === comparison.id);
          const title = language === "ar" ? problem.title : problem.titleEn;
          const description = language === "ar" ? problem.description : problem.descriptionEn;
          const evidence = language === "ar" ? problem.evidence : problem.evidenceEn;
          return (
            <section key={problem.id} id={`comparison-${problem.id}`} className="ba-comparison" aria-labelledby={`heading-${problem.id}`}>
              <div className="ba-comparison__copy">
                <span className="ba-comparison__number">{String(index + 1).padStart(2, "0")}</span>
                <div><h2 id={`heading-${problem.id}`}>{title}</h2><p className="ba-comparison__description">{description}</p></div>
              </div>
              <BeforeAfterSlider
                beforeSrc={comparison.before} afterSrc={comparison.after}
                beforeAlt={`${t.oldImage}: ${title}`} afterAlt={`${t.newImage}: ${title}`}
                beforeLabel={t.oldImage} afterLabel={t.newImage}
                sliderLabel={t.sliderLabel} sliderValue={t.sliderValue}
                aspectRatio="16 / 9" maxWidth="820px"
              />
              <p className="ba-comparison__evidence"><strong>{t.evidence}:</strong> {evidence}</p>
              {problem.id === 2 && (
                <div className="ba-mobile-pair">
                  <h3>{t.mobileEvidence}</h3>
                  <BeforeAfterSlider
                    beforeSrc="/images/before-after/first-page-mobile.png"
                    afterSrc="/images/before-after/new-navbar-mobile.png"
                    beforeAlt={`${t.oldImage}: ${title} mobile screenshot`}
                    afterAlt={`${t.newImage}: ${title} mobile screenshot`}
                    beforeLabel={t.oldImage} afterLabel={t.newImage}
                    sliderLabel={t.sliderLabel} sliderValue={t.sliderValue}
                    aspectRatio="390 / 844" maxWidth="390px"
                  />
                </div>
              )}
            </section>
          );
        })}
      </div>
      <LighthouseTable />
    </main>
  );
}

export default BeforeAfter;
