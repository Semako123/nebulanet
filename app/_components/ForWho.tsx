import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import { forLeadership, forProductOwner } from "../_assets";

const ForWho = () => {
  return (
    <div className="mt-40">
      <h3 className="text-5xl md:text-7xl font-extralight md:leading-20 mt-5 tracking-tight">
        Adaptation that Learns.
      </h3>
      <h3 className="text-5xl md:text-7xl font-extralight md:leading-20 tracking-tight mb-7 bg-[url('/text_bg.jpg')] bg-clip-text text-transparent">
        Self-Evolving Infrastructure.
      </h3>

      <div className="flex flex-wrap md:flex-nowrap gap-7 mt-20">
        <ForWhoCard
          title="For Product Owners"
          subtitle="Build smarter. Evolve faster. Adapt quicker"
          image={forProductOwner}
        >
          Launch faster, pivot effortlessly. NebulaNet’s modular, AI-native
          architecture molds to your product’s needs—automating scale, adapting
          in real time, and eliminating infrastructure drag. Future-proof
          without friction.
        </ForWhoCard>
        <ForWhoCard
          title="For Executives & Leaders"
          subtitle="Lead the shift. Shape what’s next."
          image={forLeadership}
        >
          NebulaNet isn't just future-ready—it defines the future. Make
          infrastructure a strategic differentiator with systems that adapt,
          protect, and scale as fast as the world demands. NebulaNet gives you
          the tools to architect with confidence.
        </ForWhoCard>
      </div>
    </div>
  );
};

export default ForWho;

const ForWhoCard = ({
  children,
  title,
  subtitle,
  image,
}: {
  children: ReactNode;
  title: string;
  subtitle: string;
  image: StaticImageData;
}) => (
  <div className="md:w-1/2 bg-white relative md:pl-10 rounded-xl shadow">
    <div className="flex gap-x-10 justify-between flex-wrap-reverse md:flex-nowrap">
      <div className="flex flex-col px-5 md:pl-0">
        <h2 className="mt-16 text-3xl md:text-5xl font-extralight">{title}</h2>
        <p className="uppercase text-gray-500 text-sm mt-3 tracking-wide font-light">
          {subtitle}
        </p>
      </div>
      <Image
        src={image}
        alt=""
        className="md:w-[250px] md:h-[392px] rounded-xl"
      />
    </div>
    <p className="text-gray-500 font-extralight my-10 md:my-20 pr-10 pl-5 md:pl-0 text-sm md:text-base">
      {children}
    </p>
  </div>
);
