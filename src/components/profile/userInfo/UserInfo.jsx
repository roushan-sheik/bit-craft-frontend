import React from "react";
import { Link } from "react-router-dom";
import useUserContext from "../../../hooks/useUserContext";
import Btn from "../../button/Btn";

const UserInfo = () => {
  const { user, loading, logoutUser } = useUserContext();

  return (
    <div className=" ">
      <p className="text-xl mt-4 select-none cursor-auto ">Hello !</p>
      <p className="text-xl mt-2 font-semibold select-none cursor-auto ">
        {user?.displayName}
      </p>
      <p className="text-lg text_sec my-1 font-medium cursor-text">
        {user?.email}
      </p>
      <Link to={"/my-profile"}>
        <p className="text-lg cursor-pointer font-medium my-2 hover:text-[#fd6b22]">
          My Profile
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
