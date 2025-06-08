import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Atom, BrainCircuit, ShieldCheck, Zap } from "lucide-react";
import { ReactNode, useRef } from "react";

const FEATURE_HIGHLIGHTS = [
  {
    title: "AI-Native Architecture",
    highlight:
      "Intelligence is embedded at the protocol level—optimizing decision-making, forecasting, and resource orchestration in real-time.",
  },
  {
    title: "Secure by Design",
    highlight:
      "Every layer of NebulaNet is built with security-first principles, combining post-quantum cryptography and zero-trust frameworks to ensure asset integrity.",
  },
  {
    title: "Quantum Infrastructure",
    highlight:
      "Future-proof cryptographic systems guard against quantum-era threats, ensuring longevity and trust in every transaction.",
  },
  {
    title: "Sub-Second Finality",
    highlight:
      "NebulaNet delivers lightning-fast transaction throughput with global consensus, enabling enterprise-grade performance.",
  },
];

const borderColors = [
  "border-gray-800",
  "border-blue-500",
  "border-green-500",
  "border-yellow-500",
];

const icons = [BrainCircuit, ShieldCheck, Atom, Zap];

const WhyUS = () => {
  gsap.registerPlugin(useGSAP);
  const container = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  useGSAP(
    () => {
      const triggerElement = document.querySelector(".feature-parent");

      if (!triggerElement) return;

      const height = triggerElement.getBoundingClientRect().height;
      console.log(height);
      tl.current = gsap.timeline({
        scrollTrigger: {
          toggleActions: "play reverse play reset",
          trigger: ".feature",
          start: "top bottom",
          end: `+=${height + 360}`,
        },
      });
      tl.current.scrollTrigger?.refresh();
      tl.current.from(".feature", {
        y: "40px",
        opacity: 0,
        stagger: 0.05,
      });
    },
    { scope: container }
  );
  return (
    <div ref={container} className="text-center mt-60 pb-20">
      <h2 className="uppercase text-gray-500">WHY NEBULA</h2>
      <p className="text-4xl md:text-7xl font-extralight leading-10 md:leading-20 mt-5 tracking-tight w-full md:w-[80%] mx-auto mb-10">
        A fundamentally{" "}
        <span className="bg-[url('/text_bg.jpg')] bg-clip-text text-transparent">
          advanced approach to capital systems
        </span>
        —intelligent, secure, and autonomous.
      </p>
      <p className="text-gray-500 mx-auto font-extralight text-sm md:text-base md:w-[70%] tracking-wider">
        NebulaNet fuses decentralized infrastructure with AI-native
        orchestration, creating an intelligent framework for the next generation
        of digital finance. By combining distributed ledger technology with
        advanced predictive systems, NebulaNet enables the seamless movement,
        tokenization, and governance of real-world assets (RWAs) across global
        markets. This is more than infrastructure; it’s a strategic engine for
        financial transformation in the quantum era.
      </p>
      <video
        className="mt-20 aspect-video w-full object-cover rounded-4xl shadow-2xl mb-30"
        autoPlay
        muted
        loop
      >
        <source src="/videos/why_us_video.webm" type="video/webm" />
      </video>

      <div className="flex justify-between flex-wrap feature-parent gap-y-10">
        {FEATURE_HIGHLIGHTS.map((feature, index) => (
          <FeatureHighlight
            key={feature.title}
            index={index}
            title={feature.title}
          >
            {feature.highlight}
          </FeatureHighlight>
        ))}
      </div>
    </div>
  );
};

export default WhyUS;

const FeatureHighlight = ({
  children,
  title,
  index,
}: {
  children: ReactNode;
  title: string;
  index: number;
}) => {
  const Icon = icons[index];
  return (
    <div className="text-left md:w-1/4">
      <div className="ml-5 mb-5 md:mb-10 flex justify-center items-center w-fit shadow-2xs p-4 rounded-2xl bg-gradient-to-t from-gray-300/10 to-transparent feature">
        <Icon strokeWidth={1} size={30} />
      </div>
      <h3
        className={`font-extralight text-[1.6rem] mb-7 pl-6 border-l-2 py-1 ${borderColors[index]} feature`}
      >
        {title}
      </h3>
      <p className="font-extralight text-gray-500 pl-6 tracking-wide feature">
        {children}
      </p>
    </div>
  );
};
