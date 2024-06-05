import { Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import MySpinner from "../../components/loadingSpinner/Spinner";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUserContext from "../../hooks/useUserContext";

const MyProducts = () => {
  const { user } = useUserContext();
  const axiosSecure = useAxiosSecure();

  const TABLE_HEAD = ["Product Name", "Votes", "Status", "Update", "Delete"];

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["accepted-products"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/products/my/${user.email}`);
      return data;
    },
  });
  if (isLoading) return <MySpinner />;

  // Delete  product
  async function handleDelete(id) {
    var result = confirm("Want to delete?");
    try {
      if (result) {
        await axiosSecure.delete(`/product/delete/${id}?email=${user.email}`);
        refetch();
        toast.success("Successfully Deleted", {
          position: "top-right",
          autoClose: 4000,
        });
      } else {
        return;
      }
    } catch (error) {
      toast.error("Could not deleted try again", {
        position: "top-right",
        autoClose: 4000,
      });
    }
  }
  return (
    <div className="lg:w-[90%] mx-auto">
      <div>
        <h2 className="lg:text-3xl text-xl font-bold text-center lg:mt-10 mt-4">
          My Products {products.length}
        </h2>
        <ToastContainer />
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
              {products.map(
                ({
                  name,
                  image,
                  title,
                  tags,
                  description,
                  vote,
                  status,
                  _id,
                }) => {
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
                      <div className="flex lg:ml-4 ml-6 cursor-pointer  flex-1 items-center gap-1 text_brand_pri">
                        <Link
                          to={"/update-product"}
                          state={{
                            id: _id,
                            name,
                            image,
                            title,
                            tags,
                            description,
                          }}
                        >
                          <div className="flex items-center gap-1">
                            <span className="lg:flex hidden">
                              <MdEditSquare />
                            </span>
                            <span>Edit</span>
                          </div>
                        </Link>
                      </div>
                      <div
                        onClick={() => handleDelete(_id)}
                        className="flex flex-1 mr-2 cursor-pointer items-center gap-1 text-red-500"
                      >
                        <MdDeleteForever className="lg:flex hidden" />
                        <span>Delete</span>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
