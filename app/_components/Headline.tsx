"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React, { useRef } from "react";

const Headline = () => {
  const tl = useRef<gsap.core.Timeline | null>(null);
  const splitRef = useRef(null);
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollTrigger);
    let split = SplitText.create(splitRef.current, { type: "words, chars" });

    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: splitRef.current,
        start: "top top+=100px",
        end: "bottom+=600px bottom",
        scrub: 1,
        pin: true,
      },
    });

    tl.current.to(split.chars, {
      color: "black",
      stagger: 0.05,
      ease: "power2.inOut",
    });
  });

  return (
    <div className="parent flex gap-x-5 text-3xl md:text-5xl lg:text-9xl flex-wrap justify-center items-center text-center md:px-40 pt-[100px] pb-[12rem] md:pb-[40rem] text-gray-300">
      <p className="font-extralight w-full" ref={splitRef}>
        Building,
        <span className="font-medium">scalable</span>
        <span className="font-extralight">,</span>{" "}
        <span className="font-medium">secure</span>
        <span className="font-extralight">,</span>{" "}
        <span className="font-extralight">and </span>
        <span className="font-medium">user-friendly</span> dApps with ease
      </p>
    </div>
  );
};

export default Headline;
