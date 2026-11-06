import lighthouse from "../data/lighthouse";
import useLanguage from "../hooks/useLanguage";
import { translations } from "../data/translations";

function LighthouseTable() {
  const { language } = useLanguage();
  if (!lighthouse.old) return null;
  const t = translations[language].lighthouse;
  const metrics = ["performance", "accessibility", "bestPractices", "seo"];
  const hasValues = (report) => ["url", "date", "device", ...metrics].every((key) => report[key] !== null && report[key] !== undefined);
  return (
    <section className="lighthouse-section" aria-labelledby="lighthouse-title">
      <h2 id="lighthouse-title">{t.title}</h2>
      <table>
        <caption>{t.caption}</caption>
        <thead><tr><th scope="col">{t.metric}</th><th scope="col">{t.old}</th><th scope="col">{t.new}</th></tr></thead>
        <tbody>{metrics.map((metric) => <tr key={metric}><th scope="row">{t.metrics[metric]}</th><td>{lighthouse.old[metric] ?? "–"}</td><td>{lighthouse.new[metric] ?? "–"}</td></tr>)}</tbody>
      </table>
      <p>{t.old}: {lighthouse.old.url} · {lighthouse.old.date} · {t.device}: {lighthouse.old.device}</p>
      <p>{t.new}: {lighthouse.new.url ?? "–"} · {lighthouse.new.date ?? "–"} · {t.device}: {lighthouse.new.device ?? "–"}</p>
      {hasValues(lighthouse.old) && hasValues(lighthouse.new) && <p className="lighthouse-note">{t.sameDeviceNote}</p>}
    </section>
  );
}

export default LighthouseTable;
