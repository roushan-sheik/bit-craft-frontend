import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoBagAddOutline } from "react-icons/io5";
import { MdPostAdd } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import LinkRoute from "../dashboardLink/LinkRoute";
const Sidebar = () => {
  return (
    <div className="bg-white min-h-screen fixed lg:w-80 md:w-64 flex flex-col gap-4 p-10">
      <Link to={"/dashboard"}>
        <div className="flex items-center cursor-pointer gap-4 bg_pri p-2 rounded-lg text-white font-semibold">
          <RxDashboard />
          <span>Dashboard</span>
        </div>
      </Link>

      <LinkRoute label={"My Profile"} route={"my-profile"} icon={FaRegUser} />
      <LinkRoute label={"Add Product"} route={"add-product"} icon={MdPostAdd} />
      <LinkRoute
        label={"My Products"}
        route={"my-products"}
        icon={IoBagAddOutline}
      />
    </div>
  );
};

export default Sidebar;
