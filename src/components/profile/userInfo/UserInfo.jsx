import React from "react";
import { Link } from "react-router-dom";
import useUserContext from "../../../hooks/useUserContext";
import Btn from "../../button/Btn";
import MobileNav from "../../nav/mobile/MobileNav";

const UserInfo = () => {
  const { user, loading, logoutUser } = useUserContext();

  return (
    <div className="">
      <p className="text-xl hidden lg:flex mt-4 select-none cursor-auto ">
        Hello !
      </p>
      <p className="text-xl mt-2 font-semibold select-none cursor-auto ">
        {user?.displayName}
      </p>
      <p className="text-lg text_sec my-1 font-medium cursor-text">
        {user?.email}
      </p>
      {/* Mobile nav menu  */}
      <div className="flex flex-col gap-2 lg:hidden">
        <MobileNav />
      </div>
      {/* My profile   */}
      <Link to={"/my-profile"}>
        <p className="text-lg cursor-pointer font-medium my-2 hover:text-[#fd6b22]">
          My Profile
        </p>
      </Link>
      <Link to={"/update-profile"}>
        <p className="text-lg cursor-pointer font-medium my-2 hover:text-[#fd6b22]">
          Update Profile
        </p>
      </Link>

      <Btn
        onClick={() => logoutUser()}
        className="mt-4 !bg-[#fd6b22]"
        size={"small"}
        label={"Logout"}
      />
    </div>
  );
};

export default UserInfo;
