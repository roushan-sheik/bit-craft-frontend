import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <main>
      <div>
        {/* Dashboard sidebar  */}
        <div>Sidebar</div>
        {/* Dashboard content  */}
        <div>{<Outlet />}</div>
      </div>
    </main>
  );
};

export default Dashboard;
