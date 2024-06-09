import React from "react";
import { MdAddModerator, MdAdminPanelSettings } from "react-icons/md";
import useRole from "../../hooks/useRole";
import useUserContext from "../../hooks/useUserContext";
import Admin from "../admin/Admin";
import Moderator from "../moderator/Moderator";

const DashboardHome = () => {
  const { user } = useUserContext();
  const role = useRole();
  return (
    <div>
      <div className="flex lg:mt-8 mt-16 items-center gap-1 text-2xl lg:text-4xl font-bold">
        {role === "Admin" && (
          <img
            className="h-[80px] w-[80px]"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/login-credentials-7666316-6220856.png?f=webp"
            alt=""
          />
        )}
        {role === "Moderator" && (
          <img
            className="h-[80px] w-[80px]"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/moderator-10175428-8317665.png"
            alt=""
          />
        )}
        <span>{role}</span>
        <h2>Dahboard</h2>
        {role === "Admin" && (
          <MdAdminPanelSettings className="text_brand_pri" />
        )}
        {role === "Moderator" && <MdAddModerator className="text_brand_pri" />}
      </div>
      {/* Mod Home  */}
      {role === "Moderator" && <Moderator />}
      {role === "Admin" && <Admin />}
    </div>
  );
};

export default DashboardHome;
