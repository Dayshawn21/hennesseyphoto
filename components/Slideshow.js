import React, { useEffect, useState, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Slideshow = () => {
  const [pause, setPause] = useState(false);
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 2,
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
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <img src="image/girl.jpg" className="slide-image" alt="" srcset="" />
        </div>
        <div className="keen-slider__slide number-slide1">
          <img src="image/guy.jpg" className="slide-image" alt="" srcset="" />
        </div>
        <div className="keen-slider__slide number-slide1">
          <img src="image/guy2.jpg" className="slide-image" alt="" srcset="" />
        </div>
        <div className="keen-slider__slide number-slide1">
          <img src="image/nee.jpg" className="slide-image" alt="" srcset="" />
        </div>
      </div>
    </>
  );
};

export default Slideshow;
