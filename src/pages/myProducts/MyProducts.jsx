import { Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";
import MySpinner from "../../components/loadingSpinner/Spinner";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUserContext from "../../hooks/useUserContext";

const MyProducts = () => {
  const { user } = useUserContext();
  const axiosSecure = useAxiosSecure();

  const TABLE_HEAD = ["Product Name", "Votes", "Status", "Update", "Delete"];
  const TABLE_ROWS = [
    {
      name: "John Michael",
      job: "Manager",
      date: "23/04/18",
    },
    {
      name: "Alexa Liras",
      job: "Developer",
      date: "23/04/18",
    },
    {
      name: "Laurent Perrier",
      job: "Executive",
      date: "19/09/17",
    },
    {
      name: "Michael Levi",
      job: "Developer",
      date: "24/12/08",
    },
    {
      name: "Richard Gran",
      job: "Manager",
      date: "04/10/21",
    },
  ];

  const { data: products, isLoading } = useQuery({
    queryKey: ["accepted-products"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/products/my/${user.email}`);
      return data;
    },
  });
  if (isLoading) return <MySpinner />;

  return (
    <div className="lg:w-[90%] mx-auto">
      <div>
        <h2 className="lg:text-3xl text-xl font-bold text-center lg:mt-10 mt-4">
          My Products {products.length}
        </h2>
      </div>
      {/* products table  */}
      <div className="mt-8 ">
        <div className="h-full w-full overflow-scroll">
          <div className="w-full min-w-max table-auto text-left">
            <div>
              <div className="flex w-full">
                {TABLE_HEAD.map((head) => (
                  <div
                    key={head}
                    className="border-b flex-1 border-blue-gray-100 flex bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-medium leading-none  "
                    >
                      {head}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              {products.map(({ name, vote, status }, index) => {
                return (
                  <div
                    key={name}
                    className="border-b   border-blue-gray-100 flex bg-blue-gray-50 p-4"
                  >
                    <div className="flex  justify-start flex-1 items-center">
                      <p>{name}</p>
                    </div>
                    <div className="flex  justify-start ml-6 lg:ml-8 flex-1 items-center">
                      <p>{vote.upVote}</p>
                    </div>
                    <div className="flex  justify-start flex-1 items-center">
                      <p
                        className={`${
                          status === "Pending"
                            ? "bg-yellow-700 py-1 px-2 rounded-md"
                            : "bg-green-500 rounded-md py-1 px-2"
                        }`}
                      >
                        {status}
                      </p>
                    </div>
                    <div className="flex lg:ml-4 ml-6  flex-1 items-center gap-1 text_brand_pri">
                      <span className="lg:flex hidden">
                        <MdEditSquare />
                      </span>
                      <span>Edit</span>
                    </div>
                    <div className="flex flex-1 mr-2 items-center gap-1 text-red-500">
                      <MdDeleteForever className="lg:flex hidden" />
                      <span>Delete</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
