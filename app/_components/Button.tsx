import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={cn(
        "group border px-10 md:px-14 py-4 rounded-lg flex items-center justify-center gap-x-1 font-light transition-all hover:rounded-[70px] hover:translate-y-1 duration-200 ease-in-out hover:bg-black hover:text-white cursor-expand text-sm md:text-base",
        className
      )}
      onClick={onClick}
    >
      {children}{" "}
      <ArrowUpRight
        strokeWidth={1}
        className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300"
      />
    </button>
  );
};

export default Button;
