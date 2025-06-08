import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
    };

    const handleMouseEnter = () => {
      gsap.to(cursorRef.current, {
        scale: 2,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", updateCursor);

    const links = document.querySelectorAll(".cursor-expand, a");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  useGSAP(() => {
    gsap.to(cursorRef.current, { x: x - 12, y: y - 12, duration: 0.3 });
  }, [x, y]);

  return (
    <div
      className="hidden sm:block fixed mix-blend-difference rounded-full w-6 h-6 z-50 bg-white pointer-events-none"
      ref={cursorRef}
    ></div>
  );
};

export default Cursor;
