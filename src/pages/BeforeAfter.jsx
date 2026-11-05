import { useState } from 'react'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import { problems, lighthouseBefore } from '../data/problems'
import './BeforeAfter.css'

// TODO: غيّري beforeSrc للأسماء الجديدة بعد الـ rename.
// afterSrc = null لحد ما ناخد screenshots الـ after (الدفعة 8).
const VIEWS = [
  {
    id: 'desktop',
    label: 'ديسكتوب',
    beforeSrc: '/images/before-after/first-page.png',
    afterSrc: null,
    beforeAlt: 'أعلى صفحة موقع الدمشقي الحالي على الديسكتوب',
    afterAlt: 'أعلى صفحة التصميم الجديد على الديسكتوب',
    aspectRatio: '16 / 10',
    maxWidth: '100%',
  },
  {
    id: 'mobile',
    label: 'موبايل',
    beforeSrc: '/images/before-after/first-page-mobile.png',
    afterSrc: null,
    beforeAlt: 'أعلى صفحة موقع الدمشقي الحالي على الموبايل',
    afterAlt: 'أعلى صفحة التصميم الجديد على الموبايل',
    aspectRatio: '9 / 16',
    maxWidth: '360px',
  },
]

function BeforeAfter() {
  const [viewId, setViewId] = useState('desktop')
  const view = VIEWS.find((v) => v.id === viewId)

  return (
    <main className="ba-page">
      <h1>قبل / بعد</h1>
      <p className="ba-page__intro">
        مقارنة بين موقع الدمشقي الحالي (eldemashqi.com) وإعادة التصميم المقترحة.
        المشروع concept مستقل وغير رسمي.
      </p>

      <div className="ba-page__tabs" role="group" aria-label="اختيار نوع الجهاز">
        {VIEWS.map((v) => (
          <button
            key={v.id}
            type="button"
            className="ba-page__tab"
            aria-pressed={v.id === viewId}
            onClick={() => setViewId(v.id)}
          >
            {v.label}
          </button>
        ))}
      </div>

      <BeforeAfterSlider key={view.id} {...view} />

      <section className="ba-page__section" aria-labelledby="lh-title">
        <h2 id="lh-title">أرقام Lighthouse للموقع الحالي (موبايل)</h2>
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
          مشكلة. المشاكل الفعلية في الـ Performance (CLS و FCP) والـ SEO.
        </p>
      </section>

      <section className="ba-page__section" aria-labelledby="problems-title">
        <h2 id="problems-title">المشاكل العشرة</h2>
        <ol className="ba-page__problems">
          {problems.map((problem) => (
            <li key={problem.id} className="ba-problem">
              <span className="ba-problem__num">{problem.id}</span>
              <div>
                <h3>{problem.title}</h3>
                <p>{problem.description}</p>
                <span className="ba-problem__evidence">{problem.evidence}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  )
}

export default BeforeAfter