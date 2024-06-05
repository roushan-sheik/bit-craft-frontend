import React from "react";

const Logo = () => {
  return (
    <div className="flex cursor-pointer lg:basis-[25%] mb-2 items-center relative">
      <img className="lg:h-10 h-8" src="./bitcraft.jpeg" alt="BitCraft" />
      <p className="lg:text-3xl text-2xl absolute lg:left-[2.10rem] left-[1.70rem] font-extrabold mt-2">
        it<span className="lg:text-4xl text-3xl text_brand_sec">C</span>raft
      </p>
    </div>
  );
};

export default Logo;
