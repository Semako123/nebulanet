import { ArrowUpRight, CircleCheck } from "lucide-react";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const CORE_VALUE = [
  "Universal Access",
  "Global Consensus",
  "Always-On",
  "Immutable Design",
  "Quantum Resilience",
];

const GlobalReach = () => {
  const tl = useRef<gsap.core.Timeline | null>(null);
  const parent = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".value",
          toggleActions: "play reset play reset",
          end: "bottom+=200px",
        },
      });

      tl.current.from(".value", {
        x: -40,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.in",
      });
    },
    { scope: parent }
  );
  return (
    <div
      className="flex flex-wrap md:flex-nowrap gap-x-14 items-center mt-20"
      ref={parent}
    >
      <video
        className="h-[900px] md:w-1/2 object-cover rounded-4xl"
        autoPlay
        muted
        loop
      >
        <source src="/videos/global_video.mp4" type="video/mp4" />
      </video>
      <div className="md:w-1/2 md:h-[900px] flex flex-col justify-between gap-y-10 py-10">
        <div>
          <h3 className="text-5xl md:text-7xl font-extralight md:leading-20 mt-5 tracking-tight mb-7">
            One Global Network{" "}
            <span className="bg-[url('/text_bg.jpg')] bg-clip-text text-transparent">
              — Decentralized, Resilient, and Unified.
            </span>
          </h3>
          <p className="text-gray-500 font-extralight tracking-wider mb-7 text-lg md:text-base">
            NebulaNet functions as a single cohesive global state, with nodes
            strategically deployed across continents. This distributed
            architecture guarantees high availability, fault tolerance, and
            ultra-low latency access for users worldwide—all while preserving
            seamless, synchronized consensus across the entire network.
          </p>
          <Button className="w-full md:w-auto">Explore global access</Button>
        </div>

        <div className="flex flex-wrap gap-x-20 gap-y-6">
          {CORE_VALUE.map((value) => (
            <div
              key={value}
              className="flex gap-x-2 items-center w-[200px] value"
            >
              <CircleCheck size={30} fill="black" color="white" />
              <p className="font-light text-lg">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalReach;
