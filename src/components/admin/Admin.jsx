import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaBoxesStacked, FaUsers } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import PiChart from "../pieChart/PieChart";

const Admin = () => {
  const { data: chartData = [] } = useQuery({
    queryKey: ["admin-statistic"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/statistic");
      return res.data;
    },
  });
  return (
    <div>
      <div className="mt-6 flex gap-6">
        <div className="p-4 bg_pri w-4/12 rounded-md flex items-center gap-6 text-white justify-center">
          <FaUsers className="text-2xl lg:text-4xl " />
          <div>
            <h1 className="text-white text-center lg:text-4xl text-2xl font-semibold">
              {chartData[0].name}
            </h1>
            <h1 className="text-white mt-4 lg:text-2xl text-center text-1xl font-semibold">
              {chartData[0].value}
            </h1>
          </div>
        </div>
        <div className="p-4 bg_sec w-4/12 rounded-md flex items-center gap-6 text-white justify-center">
          <MdReviews className="text-2xl lg:text-4xl " />

          <div>
            <h1 className="text-white text-center lg:text-4xl text-2xl font-semibold">
              {chartData[1].name}
            </h1>
            <h1 className="text-white mt-4 lg:text-2xl text-center text-1xl font-semibold">
              {chartData[1].value}
            </h1>
          </div>
        </div>
        <div className="p-4 bg-blue-gray-500 w-4/12 rounded-md flex items-center gap-6 text-white justify-center">
          <FaBoxesStacked className="text-2xl lg:text-4xl " />

          <div>
            <h1 className="text-white text-center lg:text-4xl text-2xl font-semibold">
              {chartData[2].name}
            </h1>
            <h1 className="text-white mt-4 lg:text-2xl text-center text-1xl font-semibold">
              {chartData[2].value}
            </h1>
          </div>
        </div>
      </div>
      <div>
        <PiChart />
      </div>
    </div>
  );
};

export default Admin;