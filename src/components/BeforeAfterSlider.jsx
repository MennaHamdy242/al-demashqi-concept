import { useState } from 'react'
import './BeforeAfterSlider.css'

function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  aspectRatio = '16 / 10',
  maxWidth = '100%',
}) {
  const [position, setPosition] = useState(50)

  return (
    // dir="ltr" هنا بس: المقارنة (قبل شمال / بعد يمين) لازم تفضل ثابتة حتى في صفحة RTL
    <div className="ba-slider" dir="ltr" style={{ aspectRatio, maxWidth }}>
      <img className="ba-slider__img" src={beforeSrc} alt={beforeAlt} />

      <div
        className="ba-slider__after"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        {afterSrc ? (
          <img className="ba-slider__img" src={afterSrc} alt={afterAlt} />
        ) : (
          <div className="ba-slider__placeholder">
            صورة "بعد" هتتضاف في آخر المشروع
          </div>
        )}
      </div>

      <span className="ba-slider__label ba-slider__label--before">قبل</span>
      <span className="ba-slider__label ba-slider__label--after">بعد</span>

      <input
        className="ba-slider__input"
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label="اسحبي للمقارنة بين التصميم القديم والجديد"
        aria-valuetext={`${position}% من الصورة القديمة ظاهرة`}
      />

      <div
        className="ba-slider__handle"
        style={{ insetInlineStart: `${position}%` }}
        aria-hidden="true"
      >
        <span className="ba-slider__knob">⇄</span>
      </div>
    </div>
  )
}

export default BeforeAfterSlider