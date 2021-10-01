import React, { useEffect, useState, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Slide from "./Slide";

const Slideshow = ({ slideshows }) => {
  console.log(slideshows);
  const [pause, setPause] = useState(false);
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 3,
    loop: true,
    duration: 1000,
    breakpoints: {
      "(max-width: 720px)": {
        loop: true,
        slidesPerView: 1,
      },
    },
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 2000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <div ref={sliderRef}>
      {slideshows.map((slideshow) => (
        <div className="keen-slider">
          {slideshow.image.map((s, index) => (
            <div className="keen-slider__slide number-slide">
              <img src={s.url} className="slide-image" alt="" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
