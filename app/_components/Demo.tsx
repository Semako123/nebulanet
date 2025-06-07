import React from "react";
import Button from "./Button";

const Demo = () => {
  return (
    <div className="mt-40 border-t-2 flex flex-wrap md:flex-nowrap items-center pt-10 gap-y-5">
      <h3 className="text-3xl md:text-5xl font-extralight">Request a demo</h3>
      <p className="ml-auto w-[400px] text-lg font-light">
        Now delivering bespoke solutions for your use cases—globally.
      </p>
      <Button className="w-full md:w-auto">Contact Us</Button>
    </div>
  );
};

export default Demo;
