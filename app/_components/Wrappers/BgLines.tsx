import React from "react";

const BgLines = () => {
  return (
    <div className="absolute inset-0 flex justify-between -z-10 px-2 md:px-10">
      <div className="border-l border-l-gray-200"></div>
      <div className="border-l border-l-gray-200 border-dashed md:block hidden"></div>
      <div className="border-l border-l-gray-200 border-dashed md:block hidden"></div>
      <div className="border-l border-l-gray-200 border-dashed md:block hidden"></div>
      <div className="border-l border-l-gray-200"></div>
    </div>
  );
};

export default BgLines;
