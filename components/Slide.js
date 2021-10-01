import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function Slide({ slideshow }) {
  console.log(slideshow);
  return (
    <div className="keen-slider__slide number-slide1">
      {slideshow.image.map((s, index) => {
        return (
          <div key={index}>
            <img src={s.url} className="slide-image" alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default Slide;
