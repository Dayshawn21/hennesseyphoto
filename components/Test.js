import React, { useState, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Testimonial = () => {
  const [pause, setPause] = useState(false);
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 3,

    spacing: 10,
    breakpoints: {
      "(max-width: 720px)": {
        loop: true,
        slidesPerView: 1,
      },
    },
  });

  return (
    <div className="bg-black  text-white py-6">
      <div>
        <h1 className="text-center text-4xl text-yellow-800"> Testimonial</h1>
      </div>

      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide test-slide1">
          <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
            <div className="w-full flex mb-4 items-center">
              <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                <img src="https://i.pravatar.cc/100?img=1" alt="" />
              </div>
              <div className="flex-grow pl-3">
                <h6 className="font-bold text-sm uppercase text-yellow-800">
                  Kenzie Edgar.
                </h6>
              </div>
            </div>
            <div className="w-full">
              <p className="text-sm leading-tight">
                <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                sunt ratione dolor exercitationem minima quas itaque saepe quasi
                architecto vel! Accusantium, vero sint recusandae cum tempora
                nemo commodi soluta deleniti.
                <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
              </p>
            </div>
          </div>
        </div>
        <div classNameName="keen-slider__slide test-slide1">
          <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
            <div className="w-full flex mb-4 items-center">
              <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                <img src="https://i.pravatar.cc/100?img=1" alt="" />
              </div>
              <div className="flex-grow pl-3">
                <h6 className="font-bold text-sm uppercase text-yellow-800">
                  Kenzie Edgar.
                </h6>
              </div>
            </div>
            <div className="w-full">
              <p className="text-sm leading-tight">
                <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                sunt ratione dolor exercitationem minima quas itaque saepe quasi
                architecto vel! Accusantium, vero sint recusandae cum tempora
                nemo commodi soluta deleniti.
                <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
              </p>
            </div>
          </div>
        </div>
        <div classNameName="keen-slider__slide test-slide1">
          <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
            <div className="w-full flex mb-4 items-center">
              <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                <img src="https://i.pravatar.cc/100?img=1" alt="" />
              </div>
              <div className="flex-grow pl-3">
                <h6 className="font-bold text-sm uppercase text-yellow-800">
                  Kenzie Edgar.
                </h6>
              </div>
            </div>
            <div className="w-full">
              <p className="text-sm leading-tight">
                <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                sunt ratione dolor exercitationem minima quas itaque saepe quasi
                architecto vel! Accusantium, vero sint recusandae cum tempora
                nemo commodi soluta deleniti.
                <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
              </p>
            </div>
          </div>
        </div>
        <div classNameName="keen-slider__slide test-slide1">
          <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
            <div className="w-full flex mb-4 items-center">
              <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                <img src="https://i.pravatar.cc/100?img=1" alt="" />
              </div>
              <div className="flex-grow pl-3">
                <h6 className="font-bold text-sm uppercase text-yellow-800">
                  Kenzie Edgar.
                </h6>
              </div>
            </div>
            <div className="w-full">
              <p className="text-sm leading-tight">
                <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                sunt ratione dolor exercitationem minima quas itaque saepe quasi
                architecto vel! Accusantium, vero sint recusandae cum tempora
                nemo commodi soluta deleniti.
                <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
              </p>
            </div>
          </div>
        </div>
        <div classNameName="keen-slider__slide test-slide1">
          <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
            <div className="w-full flex mb-4 items-center">
              <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                <img src="https://i.pravatar.cc/100?img=1" alt="" />
              </div>
              <div className="flex-grow pl-3">
                <h6 className="font-bold text-sm uppercase text-yellow-800">
                  Kenzie Edgar.
                </h6>
              </div>
            </div>
            <div className="w-full">
              <p className="text-sm leading-tight">
                <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                sunt ratione dolor exercitationem minima quas itaque saepe quasi
                architecto vel! Accusantium, vero sint recusandae cum tempora
                nemo commodi soluta deleniti.
                <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
              </p>
            </div>
          </div>
        </div>
        <div classNameName="keen-slider__slide test-slide1">
          <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
            <div className="w-full flex mb-4 items-center">
              <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                <img src="https://i.pravatar.cc/100?img=1" alt="" />
              </div>
              <div className="flex-grow pl-3">
                <h6 className="font-bold text-sm uppercase text-yellow-800">
                  Kenzie Edgar.
                </h6>
              </div>
            </div>
            <div className="w-full">
              <p className="text-sm leading-tight">
                <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                sunt ratione dolor exercitationem minima quas itaque saepe quasi
                architecto vel! Accusantium, vero sint recusandae cum tempora
                nemo commodi soluta deleniti.
                <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
              </p>
            </div>
          </div>
        </div>
        <div classNameName="keen-slider__slide test-slide1">
          <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
            <div className="w-full flex mb-4 items-center">
              <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                <img src="https://i.pravatar.cc/100?img=1" alt="" />
              </div>
              <div className="flex-grow pl-3">
                <h6 className="font-bold text-sm uppercase text-yellow-800">
                  Kenzie Edgar.
                </h6>
              </div>
            </div>
            <div className="w-full">
              <p className="text-sm leading-tight">
                <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                sunt ratione dolor exercitationem minima quas itaque saepe quasi
                architecto vel! Accusantium, vero sint recusandae cum tempora
                nemo commodi soluta deleniti.
                <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
              </p>
            </div>
          </div>
        </div>
        <div classNameName="keen-slider__slide test-slide1">
          <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
            <div className="w-full flex mb-4 items-center">
              <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                <img src="https://i.pravatar.cc/100?img=1" alt="" />
              </div>
              <div className="flex-grow pl-3">
                <h6 className="font-bold text-sm uppercase text-yellow-800">
                  Kenzie Edgar.
                </h6>
              </div>
            </div>
            <div className="w-full">
              <p className="text-sm leading-tight">
                <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                sunt ratione dolor exercitationem minima quas itaque saepe quasi
                architecto vel! Accusantium, vero sint recusandae cum tempora
                nemo commodi soluta deleniti.
                <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
