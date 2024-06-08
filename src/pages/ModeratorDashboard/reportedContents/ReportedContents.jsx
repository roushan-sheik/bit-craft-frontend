import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FcViewDetails } from "react-icons/fc";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import MySpinner from "../../../components/loadingSpinner/Spinner";
import NoDataFound from "../../../components/not-found/NoDataFound";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUserContext from "../../../hooks/useUserContext";

const ReportedContents = () => {
  const { user } = useUserContext();

  const axiosSecure = useAxiosSecure();

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reported-products"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/reports`);
      return data;
    },
  });

  if (isLoading) return <MySpinner />;
  if (products.length === 0) {
    return <NoDataFound title={"Don't found any reported product "} />;
  }
  async function handleDeleteClick(id, product_id) {
    try {
      const userConfirmed = confirm("Do you want to Delete this Product?");
      if (userConfirmed) {
        await axiosSecure.delete(`/product/delete/${product_id}`, {
          status: "Rejected",
        });
        await axiosSecure.delete(`/report/delete/${id}`, {
          status: "Rejected",
        });

        refetch();
        toast.success("Successfully Deleted", {
          position: "top-right",
          autoClose: 1000,
        });
      } else {
        return;
      }
    } catch (error) {
      toast.error(error.message, { position: "top-right", autoClose: 1000 });
    }
  }

  return (
    <div className="lg:w-[90%] mx-auto">
      <div>
        <h2 className="lg:text-3xl text-xl font-bold text-center lg:mt-10 mt-4">
          Product Review Queue ({products.length})
        </h2>
        <ToastContainer />
      </div>
      {/* products table  */}
      <div className="mt-8 ">
        <div className="h-full w-full overflow-scroll">
          <div className="w-full min-w-max table-auto text-left">
            <div>
              <div className="flex w-full">
                <div className="border-b gap-4 flex-1 justify-between border-blue-gray-100 flex bg-blue-gray-50 p-4">
                  <div className="flex-1">Product Name</div>
                  <div className="flex-1">View Details</div>
                  <div className="flex-1">Report Details</div>
                  <div className="flex-1">Delete</div>
                </div>
              </div>
            </div>
            <div className="">
              {products.map(
                ({ name, product_id, _id, product_name, description }) => {
                  return (
                    <div
                      key={name}
                      className="border-b gap-4 flex-1 justify-between border-blue-gray-100 flex bg-blue-gray-50 p-4"
                    >
                      <div className="flex-1 h-14">{product_name}</div>
                      <Link to={`/products/${product_id}`}>
                        <div
                          size={"sm"}
                          className={
                            "flex-1 px-4 flex items-center gap-1 justify-center h-8 cursor-pointer text-white bg_pri"
                          }
                        >
                          <FcViewDetails />
                          <span>View Details</span>
                        </div>
                      </Link>
                      <div className="flex-1">{description}</div>
                      <button
                        onClick={() => handleDeleteClick(_id, product_id)}
                        size={"sm"}
                        className={`flex-1 flex items-center gap-1 justify-center h-8 cursor-pointer text-white bg-red-600 
                  `}
                      >
                        <ImCancelCircle />
                        <span>Delete</span>
                      </button>
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

export default ReportedContents;
