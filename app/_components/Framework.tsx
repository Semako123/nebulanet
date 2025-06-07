"use client";
import Image, { StaticImageData } from "next/image";
import React, { ReactNode, useRef } from "react";
import { space, space1, space2, space3, space4, space5 } from "@/app/_assets";
import sideImage from "@/app/_assets/framework_image.png";
import DottedGridBg from "./Wrappers/DottedGridBg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FEATURES: { title: string; info: string; image: StaticImageData }[] = [
  {
    title: "Nebula Core",
    info: "The core smart contract framework and runtime for dApp deployment.",
    image: space,
  },
  {
    title: "NovaNodes",
    info: "Decentralized node infrastructure powering transactions and consensus.",
    image: space1,
  },
  {
    title: "OrbitBridge",
    info: "Cross-chain interoperability engine to link Ethereum, Polygon, Arbitrum, etc.",
    image: space2,
  },
  {
    title: "QuantumSync",
    info: "Real-time syncing protocol for on-chain/off-chain data interactions.",
    image: space3,
  },
  {
    title: "MetaAuth",
    info: "Secure wallet authentication system using Sign-In with Ethereum (SIWE).",
    image: space5,
  },
  {
    title: "DarkMatter SDK",
    info: "A developer-friendly JavaScript/TypeScript SDK to integrate NebulaNet easily.",
    image: space4,
  },
];

gsap.registerPlugin(useGSAP);
const Framework = () => {
  return (
    <div>
      <h1 className="text-center text-5xl md:text-8xl mb-6 bg-[url('/text_bg.jpg')] bg-clip-text text-transparent">
        The Nebula Framework
      </h1>
      <p className="text-center text-balance text-lg md:text-3xl text-gray-600 mb-14 font-light">
        A unified suite of decentralized tools purpose-built for next-generation
        financial systems and real-world asset tokenization.
      </p>
      <div className="flex flex-wrap">
        <div className="md:w-1/2 relative">
          <DottedGridBg />
          <Image
            src={sideImage}
            alt=""
            className="drop-shadow-blue-300 drop-shadow-lg object-cover"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-evenly px-2 md:px-20 pt-20 pb-5 [&>div]:border-b [&>div]:border-b-gray-500 [&>div]:border-dashed [&>div:last-child]:border-none gap-y-5">
          {FEATURES.map((feature) => (
            <FeatureList
              key={feature.title}
              title={feature.title}
              image={feature.image}
            >
              {feature.info}
            </FeatureList>
          ))}
        </div>
      </div>
    </div>
  );
};

type featureProps = {
  image: StaticImageData;
  children: ReactNode;
  title: string;
};
const FeatureList = ({ image, children, title }: featureProps) => (
  <div className="pb-[16px]">
    <div className="flex gap-x-3 items-center mb-3">
      <Image src={image} alt={title} className="w-10" />
      <p className="text-xl md:text-2xl font-medium">{title}</p>
    </div>
    <p className="font-medium text-gray-500 text-sm md:text-base">{children}</p>
  </div>
);

export default Framework;
