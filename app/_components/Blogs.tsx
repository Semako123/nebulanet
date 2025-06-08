"use client";

import Image, { StaticImageData } from "next/image";
import { blog2, blog3, blog4, blog5, blog6, blog7 } from "../_assets";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/app/_components/components/ui/carousel";
import { ReactNode, useEffect, useState } from "react";

const BLOG_POSTS = [
  {
    title: "The Rise of Quantum-Safe DeFi",
    date: "March 6, 2025",
    description:
      "How next-gen cryptography is reshaping decentralized finance before quantum threats go mainstream.",
    image: blog2,
  },
  {
    title: "AI Agents Are Quietly Running Your Infrastructure",
    date: "March 9, 2025",
    description:
      "The growing role of autonomous AI in orchestrating networks, scaling apps, and patching vulnerabilities in real time.",
    image: blog3,
  },
  {
    title: "Tokenization Meets Compliance: The New Frontier",
    date: "March 10, 2025",
    description:
      "Regulatory clarity is here—exploring how tokenized assets can now play safely in traditional finance.",
    image: blog4,
  },
  {
    title: "Decentralized Cloud Just Got Real",
    date: "March 12, 2025",
    description:
      "NebulaNet and others are making decentralized compute viable, secure, and ready for enterprise deployment.",
    image: blog5,
  },
  {
    title: "Zero Trust, Infinite Scale",
    date: "March 13, 2025",
    description:
      "Why zero-trust models combined with decentralized architecture are redefining global infrastructure security.",
    image: blog6,
  },
  {
    title: "Data Sovereignty in the AI Era",
    date: "March 14, 2025",
    description:
      "Governments and enterprises are demanding control—here’s how decentralized infrastructure is answering.",
    image: blog7,
  },
];

const Blogs = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="mt-60 border-t-2">
      <div className="my-12 flex justify-between">
        <h3 className="text-4xl md:text-5xl font-extralight tracking-tight">
          News & Knowledge
        </h3>
        <div className="hidden gap-x-4 items-center md:flex">
          <button
            onClick={() => {
              api?.scrollPrev();
            }}
            className="px-7 h-[12px] py-5 rounded-sm border flex justify-center items-center cursor-expand"
          >
            <ArrowLeft strokeWidth={1} />
          </button>
          <button
            onClick={() => {
              api?.scrollNext();
            }}
            className="px-7 h-[12px] py-5 rounded-sm border flex justify-center items-center cursor-expand"
          >
            <ArrowRight strokeWidth={1} />
          </button>
        </div>
      </div>

      <Carousel
        opts={{
          loop: true,
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent className="-ml-40">
          {BLOG_POSTS.map((blog) => (
            <CarouselItem key={blog.title} className="pl-40 lg:basis-1/3">
              <div className="p-1">
                <BlogCard
                  title={blog.title}
                  date={blog.date}
                  image={blog.image}
                >
                  {blog.description}
                </BlogCard>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex gap-x-4 justify-center">
        {BLOG_POSTS.map((blog, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === current ? "bg-gray-200" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default Blogs;

const BlogCard = ({
  children,
  title,
  date,
  image,
}: {
  children: ReactNode;
  title: string;
  date: string;
  image: StaticImageData;
}) => (
  <div className="h-[600px] md:h-[700px] md:w-[500px] bg-[#f3f3f3] shadow-xl rounded-3xl overflow-hidden mb-10 group hover:scale-[0.98] transition-transform duration-300 cursor-expand ease-in">
    <div className="h-[300px] overflow-hidden relative">
      <Image
        className="object-cover group-hover:scale-[1.04] transition-transform duration-300 ease-out"
        src={image}
        alt={title}
        fill
      />
    </div>
    <div className="px-4 md:px-10 py-6 md:py-14 flex flex-col h-[calc(100%-300px)]">
      <h4 className="text-2xl md:text-3xl font-extralight mb-2">{title}</h4>
      <p className="text-gray-400 text-base md:text-lg font-extralight">
        {date}
      </p>
      <div className="flex gap-x-4 mt-auto items-center">
        <p className="text-sm md:text-lg font-extralight">{children}</p>
        <div className="p-5 flex place-items-center rounded-full bg-black/2 group-hover:bg-black transition-all duration-300">
          <ArrowRight
            className="group-hover:text-white group-hover:-rotate-45 transition-all duration-300"
            size={25}
          />
        </div>
      </div>
    </div>
  </div>
);
