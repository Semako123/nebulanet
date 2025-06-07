import React, { useRef } from "react";
import Button from "./Button";
import { ArrowUpRight, CircleCheck } from "lucide-react";
import Image from "next/image";
import { apiCover } from "../_assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const API_FEATURES = [
  "Universal Access",
  "Global Consensus",
  "Always-On",
  "Immutable Design",
  "Quantum Resilience",
];

const APISection = () => {
  const parent = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".value",
          toggleActions: "play reset play reset",
        },
      });

      tl.current.from(".value", {
        y: 40,
        opacity: 0,
        ease: "power3.inOut",
        stagger: 0.4,
      });
    },
    { scope: parent }
  );
  return (
    <div
      className="flex flex-wrap-reverse md:flex-nowrap gap-x-14 items-center mt-60 md:pl-10"
      ref={parent}
    >
      <div className="md:w-1/2 flex flex-col justify-between gap-y-10 md:h-[900px] py-10">
        <div>
          <h3 className="text-5xl md:text-7xl font-extralight md:leading-20 mt-5 tracking-tight mb-7">
            Engineered for Builders.
            <span className="bg-[url('/text_bg.jpg')] bg-clip-text text-transparent">
              Powered by the Future.
            </span>
          </h3>
          <p className="text-gray-500 font-extralight tracking-wider mb-7 text-lg md:text-base">
            NebulaNet’s decentralized-by-default architecture empowers
            developers to create adaptive, AI-driven systems with unmatched
            autonomy. From quantum-resilient encryption to tokenized compute
            coordination, we provide the backbone for scalable, self-healing
            infrastructure.
          </p>
          <Button className="w-full md:w-auto">Explore Resources</Button>
        </div>

        <div className="flex flex-col gap-y-6">
          {API_FEATURES.map((value) => (
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
      <Image src={apiCover} alt="" className="md:w-1/2 md:h-[900px] rounded-xl" />
    </div>
  );
};

export default APISection;
