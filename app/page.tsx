"use client";

import HeroVideo from "@/app/_components/HeroVideo";
import Headline from "./_components/Headline";
import Framework from "./_components/Framework";
import Explore from "./_components/Explore";
import WhyUS from "./_components/WhyUS";
import GlobalReach from "./_components/GlobalReach";
import ForWho from "./_components/ForWho";
import APISection from "./_components/APISection";
import Blogs from "./_components/Blogs";
import Demo from "./_components/Demo";
import Footer from "./_components/Footer";
import BgLines from "./_components/Wrappers/BgLines";
import { useEffect } from "react";
import Cursor from "./_components/Cursor";
import Loader from "./_components/Loader";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="font-sans relative body overflow-hidden h-dvh">
      <Loader />
      <Cursor />
      <HeroVideo />
      <div className="container">
        <BgLines />
        <Headline />
        <Framework />
        <Explore />
        <WhyUS />
        <GlobalReach />
        <ForWho />
        <APISection />
        <Blogs />
        <Demo />
        <Footer />
      </div>
    </div>
  );
}
