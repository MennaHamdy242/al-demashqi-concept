import { useState } from "react";
import "./BeforeAfterSlider.css";

function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = "قبل",
  afterLabel = "بعد",
  sliderLabel = "حرّك للمقارنة بين الشكل السابق والحالي",
  sliderValue = "يظهر {percent}% من الصورة السابقة",
  placeholderText = "ستظهر صورة الصفحة الحالية هنا بعد تجهيزها.",
  aspectRatio = "16 / 10",
  maxWidth = "100%",
}) {
  const [position, setPosition] = useState(50);

  return (
    <div
      className="ba-slider"
      dir="ltr"
      style={{ aspectRatio, maxWidth }}
    >
      {/* clip-path and the handle use physical left/right, so the slider must stay LTR even on an RTL page. */}
      <img
        className="ba-slider__img"
        src={beforeSrc}
        alt={beforeAlt}
        loading="lazy"
        decoding="async"
      />

      <div
        className="ba-slider__after"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        {afterSrc ? (
          <img
            className="ba-slider__img"
            src={afterSrc}
            alt={afterAlt}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="ba-slider__placeholder" aria-hidden="true">
            {placeholderText}
          </div>
        )}
      </div>

      <span className="ba-slider__label ba-slider__label--before">
        {beforeLabel}
      </span>
      <span className="ba-slider__label ba-slider__label--after">
        {afterLabel}
      </span>

      <input
        className="ba-slider__input"
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        onKeyDown={(event) => {
          const step = event.shiftKey ? 10 : 0;
          let next = position;
          if (event.key === "PageUp") next = position + 10;
          if (event.key === "PageDown") next = position - 10;
          if (event.shiftKey && event.key === "ArrowRight") next = position + step;
          if (event.shiftKey && event.key === "ArrowLeft") next = position - step;
          if (next !== position) {
            event.preventDefault();
            setPosition(Math.min(100, Math.max(0, next)));
          }
        }}
        aria-label={sliderLabel}
        aria-valuetext={sliderValue.replace("{percent}", position)}
      />

      <div
        className="ba-slider__handle"
        style={{ insetInlineStart: `${position}%` }}
        aria-hidden="true"
      >
        <span className="ba-slider__knob">⇄</span>
      </div>
    </div>
  );
}

export default BeforeAfterSlider;
