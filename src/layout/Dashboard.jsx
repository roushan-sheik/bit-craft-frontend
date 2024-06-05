import React from "react";
import { Outlet } from "react-router-dom";
import MobileSidebar from "../components/sidebar/MobileSidebar";
import Sidebar from "../components/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="flex ">
        {/* Dashboard sidebar  */}
        <div className="basis-[30%]">
          {/* desktop sidebar  */}
          <div className="flex lg:hidden">
            <MobileSidebar />
          </div>
          <div className="lg:flex hidden">
            <Sidebar />
          </div>
        </div>
        {/* Dashboard content  */}
        <div className="basis-[70%]">{<Outlet />}</div>
      </div>
    </main>
  );
};

export default Dashboard;
