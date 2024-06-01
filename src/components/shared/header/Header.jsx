import React from "react";
import { HiMiniBars3BottomRight, HiMiniBarsArrowDown } from "react-icons/hi2";
import { Link } from "react-router-dom";
import DesktopNav from "../../nav/desktop/DesktopNav";
import MobileNav from "../../nav/mobile/MobileNav";
import Badge from "../../profile/badge/Badge";
const Header = () => {
  const [openBar, setOpenBar] = React.useState(false);
  return (
    <div className="flex justify-between  flex-grow-1 border shadow-sm py-3 lg:px-6 px-2">
      {/* left side main logo  */}
      <Link to={"/"}>
        <div className="flex cursor-pointer lg:basis-[25%] mb-2 items-center relative">
          <img className="lg:h-10 h-8" src="./bitcraft.jpeg" alt="BitCraft" />
          <p className="lg:text-3xl text-2xl absolute lg:left-[2.10rem] left-[1.70rem] font-extrabold mt-2">
            it<span className="lg:text-4xl text-3xl text_brand_sec">C</span>raft
          </p>
        </div>
      </Link>
      {/*middle position routes  */}
      <div className="lg:basis-[50%] flex items-center">
        {/* desktop nav  */}
        <div className="hidden lg:flex">
          <DesktopNav />
        </div>
        {/* mobile nav list  */}
        <div className="lg:hidden flex">
          {openBar && <MobileNav />}

          {openBar ? (
            <HiMiniBarsArrowDown
              className="text-4xl"
              onClick={() => setOpenBar(!openBar)}
            />
          ) : (
            <HiMiniBars3BottomRight
              onClick={() => setOpenBar(!openBar)}
              className="text-4xl"
            />
          )}
        </div>
      </div>
      {/* right side profile */}
      <div className="lg:flex hidden ">
        <Badge />
      </div>
    </div>
  );
};

export default Header;
