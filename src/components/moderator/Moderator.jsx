import { useQuery } from "@tanstack/react-query";
import React from "react";
import { MdReport } from "react-icons/md";
import { PiQueueFill } from "react-icons/pi";
import { axiosSecure } from "../../hooks/useAxiosSecure";

const Moderator = () => {
  const {
    data: reports,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reported-products"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/reports`);
      return data;
    },
  });
  return (
    <div>
      <div className="lg:mt-6 mt-4 flex flex-col lg:flex-row  lg:gap-6 gap-4">
        <div className="p-4 bg_pri w-full  lg:w-4/12 rounded-md flex items-center gap-6 text-white justify-center">
          <PiQueueFill className="text-2xl lg:text-4xl " />
          <div>
            <h1 className="text-white text-center lg:text-4xl text-2xl font-semibold">
              {"Product Queue"}
            </h1>
            <h1 className="text-white mt-4 lg:text-2xl text-center text-1xl font-semibold">
              {}
            </h1>
          </div>
        </div>
        <div className="p-4 bg_sec w-full lg:w-4/12 rounded-md flex items-center gap-6 text-white justify-center">
          <MdReport className="text-2xl lg:text-4xl " />

          <div>
            <h1 className="text-white text-center lg:text-4xl text-2xl font-semibold">
              {"Reports"}
            </h1>
            <h1 className="text-white mt-4 lg:text-2xl text-center text-1xl font-semibold">
              {reports && reports.length}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moderator;
