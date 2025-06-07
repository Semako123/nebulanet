"use client";
import React, { ReactNode, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type textSliderProp = {
  children: ReactNode;
  className?: string;
};

const TextSlider = ({ children, className }: textSliderProp) => {
  const sliderContainer = useRef(null);

  useGSAP(() => {
    gsap.to(".sliderText", {
      x: "-=100%",
      repeat: -1,
      duration: 40,
      ease: "none",
    });
  });

  return (
    <div
      ref={sliderContainer}
      className="self-end flex whitespace-nowrap md:mb-5 text-background"
    >
      <p className="sliderText text-[5rem] md:text-[10rem] font-bold margin-0 tracking-wide md:leading-23">
        {"\u00A0"}
        {children}
        {" -"}
      </p>
      <p className="sliderText text-[5rem] md:text-[10rem] font-bold margin-0 tracking-wide md:leading-23">
        {"\u00A0"}
        {children}
        {" -"}
      </p>
    </div>
  );
};

export default TextSlider;
