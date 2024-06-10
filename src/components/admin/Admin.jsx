import React from "react";
import { FaBoxesStacked, FaUsers } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import useStatistics from "../../hooks/dataFetching/useStatistics.jsx";
import useUserContext from "../../hooks/useUserContext";
import MySpinner from "../loadingSpinner/Spinner";
import PiChart from "../pieChart/PieChart";

const Admin = () => {
  const { loading: load } = useUserContext();
  const { chartData, loading } = useStatistics();
  if (loading || load) {
    return <MySpinner />;
  }

  return (
    <div>
      <div className="mt-6 flex lg:flex-row flex-col gap-6">
        <div className="p-4 bg_pri  w-full lg:w-4/12 rounded-md flex items-center gap-6 text-white justify-center">
          <FaUsers className="text-2xl lg:text-4xl " />
          <div>
            <h1 className="text-white text-center lg:text-4xl text-2xl font-semibold">
              {chartData[0]?.name}
            </h1>
            <h1 className="text-white mt-4 lg:text-2xl text-center text-1xl font-semibold">
              {chartData[0]?.value}
            </h1>
          </div>
        </div>
        <div className="p-4 bg_sec w-full lg:w-4/12 rounded-md flex items-center gap-6 text-white justify-center">
          <MdReviews className="text-2xl lg:text-4xl " />
          <div>
            <h1 className="text-white text-center lg:text-4xl text-2xl font-semibold">
              {chartData[1]?.name}
            </h1>
            <h1 className="text-white mt-4 lg:text-2xl text-center text-1xl font-semibold">
              {chartData[1]?.value}
            </h1>
          </div>
        </div>
        <div className="p-4 bg-blue-gray-500 w-full  lg:w-4/12 rounded-md flex items-center gap-6 text-white justify-center">
          <FaBoxesStacked className="text-2xl lg:text-4xl " />

          <div>
            <h1 className="text-white text-center lg:text-4xl text-2xl font-semibold">
              {chartData[2]?.name}
            </h1>
            <h1 className="text-white mt-4 lg:text-2xl text-center text-1xl font-semibold">
              {chartData[2]?.value}
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
