import React from "react";
import DesktopNav from "../../nav/desktop/DesktopNav";
const Header = () => {
  return (
    <div className="flex flex-grow-1 border py-3 lg:px-6 px-2">
      {/* left side main logo  */}
      <div className="flex basis-[25%] mb-2 items-center relative">
        <img className="lg:h-10 h-8" src="./bitcraft.jpeg" alt="BitCraft" />
        <p className="lg:text-3xl text-2xl absolute lg:left-[2.10rem] left-[1.70rem] font-extrabold mt-2">
          it<span className="lg:text-4xl text-3xl text_brand_sec">C</span>raft
        </p>
      </div>
      {/*middle position routes  */}
      <div className="basis-[50%] flex items-center">
        {/* desktop nav  */}
        <div className="hidden lg:flex">
          <DesktopNav />
        </div>
      </div>
      {/* right side profile */}
      <div className="basis-[25%]"></div>
    </div>
  );
};

export default Header;
