"use client";
import Image, { StaticImageData } from "next/image";
import { card1, card2, card3 } from "../_assets";
import { ReactNode, useEffect, useState } from "react";
import Button from "./Button";
import { ArrowDownRight } from "lucide-react";

const QUALITIES = [
  "AI-Powered Quarks",
  "Intelligent Capital",
  "Seamless Settlements",
  "Permissioned Access",
];

const Explore = () => {
  return (
    <div className="mb-20 mt-40">
      <p className="uppercase text-gray-500 text-lg">
        The Intelligence Infrastructure for Capital
      </p>
      <div className="">
        <h3 className="text-4xl md:text-7xl font-extralight md:leading-20 mt-5">
          Tokenize real-world assets <br />
          <span className="bg-[url('/text_bg.jpg')] bg-clip-text text-transparent">
            with unmatched efficiency and
          </span>{" "}
          <br />
        </h3>
        <div className="flex items-center gap-x-10">
          <h3 className="text-4xl md:text-7xl font-extralight md:leading-20 bg-[url('/text_bg.jpg')] bg-clip-text text-transparent">
            control.
          </h3>
          <Button className="rounded-[70px] bg-black text-white hidden md:flex">
            Explore NebularCore
          </Button>
          <p className="text-gray-500 text-base w-60 hidden md:block">
            Harness{" "}
            <span className="text-foreground">AI-powered smart contracts</span>{" "}
            to dynamically manage capital with precision.
          </p>
        </div>
      </div>
      <ExplorCardGroup />
    </div>
  );
};

export default Explore;

const ExplorCardGroup = () => (
  <div className="mt-26 flex flex-wrap md:flex-nowrap gap-5 text-background">
    <ExplorCard image={card1} index={1} className="flex-1/4">
      <div>
        <h3 className="text-4xl font-light mb-10">
          Secure Your Digital Assets
        </h3>
        <Button className="px-4 py-3 rounded-full w-full md:w-auto">
          Take Action
        </Button>
      </div>
    </ExplorCard>
    <ExplorCard image={card2} index={2} className="flex-1/4">
      <div className="w-full flex flex-col gap-y-5">
        {QUALITIES.map((quality) => (
          <CardQuality key={quality}>{quality}</CardQuality>
        ))}
      </div>
    </ExplorCard>
    <ExplorCard className="flex-1/2" image={card3} index={3}>
      <div className="flex flex-wrap gap-x-5 items-center">
        <h3 className="font-orb text-9xl">98k</h3>
        <p className="font-light md:text-xl tracking-tight">
          Transactions per second and sub-second finality.
        </p>
      </div>
    </ExplorCard>
  </div>
);

const ExplorCard = ({
  className,
  image,
  index,
  children,
}: {
  className?: string;
  image: StaticImageData;
  index: number;
  children: ReactNode;
}) => {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    setIsDesktop(typeof window !== "undefined" && window.innerWidth >= 768);
  }, []);
  const speed = [-0.1, 0, 0.1][index - 1]; // subtle effect
  return (
    <div
      className={`h-[500px] w-full min-w-[320px] md:w-[350px] rounded-xl px-4 py-10 tracking-widest relative ${className} overflow-hidden shadow-2xl`}
      data-scroll={isDesktop ? true : undefined}
      data-scroll-speed={speed}
    >
      <Tag index={index} />
      <Image src={image} alt="" fill className="object-cover absolute -z-10" />
      <div className="flex h-full pb-10 items-end w-full">{children}</div>
    </div>
  );
};

const Tag = ({ index = 1 }: { index?: number }) => (
  <div className="border border-white px-6 py-2 w-fit rounded-full backdrop-blur-2xl">
    {index.toString().padStart(2, "0")}
  </div>
);

const CardQuality = ({ children }: { children: string }) => (
  <div className="border-b-2 flex justify-between pb-1">
    <p className="text-xl font-extralight w-full tracking-tight">{children}</p>
    <ArrowDownRight size={30} />
  </div>
);
