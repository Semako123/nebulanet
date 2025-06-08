import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const Loader = () => {
  const parent = useRef<HTMLDivElement | null>(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const skip = counter >= 90 ? 1 : Math.floor(1 + Math.random() * 4);
      if (counter === 100) return;
      setCounter((prevCounter) => prevCounter + skip);
    }, 20);

    return () => clearTimeout(timeout);
  }, [counter]);

  useGSAP(
    () => {
      if (counter === 100) {
        gsap.to(".counter", {
          y: 400,
          delay: 0.2,
          ease: "power1.inOut",
        });

        gsap.to(".bar", {
          height: 0,
          delay: 0.5,
          stagger: 0.3,
          ease: "power4",
        });

        document.querySelector(".body")?.classList.add("h-auto!");
      }
    },
    { scope: parent, dependencies: [counter] }
  );
  return (
    <div className="flex absolute w-dvw z-20" ref={parent}>
      {Array.from({ length: 5 }, (_, i) => i).map((i) => (
        <div className="w-1/5 bg-foreground h-dvh bar" key={i}></div>
      ))}
      <div className="absolute right-3 bottom-3 overflow-hidden [clip-path:inset(0)]">
        <p className="counter text-7xl md:text-[13rem] text-white font-orb font-black">
          {counter}%
        </p>
      </div>
    </div>
  );
};

export default Loader;
