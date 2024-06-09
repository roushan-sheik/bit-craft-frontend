import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FcAcceptDatabase, FcViewDetails } from "react-icons/fc";
import { ImCancelCircle } from "react-icons/im";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import MySpinner from "../../../components/loadingSpinner/Spinner";
import NoDataFound from "../../../components/not-found/NoDataFound";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ProductReviewQueue = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reported-review-queue"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/products/pending`);
      return data;
    },
  });

  if (isLoading) return <MySpinner />;
  if (products.length === 0) {
    return <NoDataFound title={"Don't found any Queue product "} />;
  }

  async function handleFeaturedClick(id) {
    try {
      await axiosSecure.put(`/products/update/featured/${id}`, {
        featured: true,
      });
      refetch();
      toast.success("Featured Successful", {
        position: "top-right",
        autoClose: 1000,
      });
    } catch (error) {
      toast.error(error.message, { position: "top-right", autoClose: 1000 });
    }
  }
  async function cancelFeatured(id) {
    try {
      await axiosSecure.put(`/products/update/featured/${id}`, {
        featured: false,
      });
      refetch();

      toast.success("Cancel Featured ", {
        position: "top-right",
        autoClose: 1000,
      });
    } catch (error) {
      toast.error(error.message, { position: "top-right", autoClose: 1000 });
    }
  }
  async function handleRejectClick(id) {
    try {
      await axiosSecure.put(`/product/update/status/${id}`, {
        status: "Rejected",
      });
      refetch();
      toast.success("Rejected Successful", {
        position: "top-right",
        autoClose: 1000,
      });
    } catch (error) {
      toast.error(error.message, { position: "top-right", autoClose: 1000 });
    }
  }
  async function handleAcceptClick(id) {
    try {
      await axiosSecure.put(`/product/update/status/${id}`, {
        status: "Accepted",
      });
      refetch();
      toast.success("Accepted Successful", {
        position: "top-right",
        autoClose: 1000,
      });
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
                  <div className="flex-1">Make Featured</div>
                  <div className="flex-1">Accept</div>
                  <div className="flex-1">Reject</div>
                </div>
              </div>
            </div>
            <div className="">
              {products.map(({ name, _id, featured, status }) => {
                return (
                  <div
                    key={name}
                    className="border-b gap-4 flex-1 justify-between border-blue-gray-100 flex bg-blue-gray-50 p-4"
                  >
                    <div className="flex-1 h-14">{name}</div>
                    <Link to={`/products/${_id}`}>
                      <div
                        size={"sm"}
                        className={
                          "flex-1 px-3 flex items-center gap-1 justify-center h-8 cursor-pointer text-white bg_pri"
                        }
                      >
                        <FcViewDetails />
                        <span>Details</span>
                      </div>
                    </Link>
                    <div
                      onClick={() => {
                        if (featured === true) {
                          cancelFeatured(_id);
                          return;
                        }
                        handleFeaturedClick(_id);
                      }}
                      size={"sm"}
                      className={`flex-1 flex items-center gap-1 justify-center h-8 cursor-pointer text-white  ${
                        featured ? "bg-red-500" : "bg-green-700"
                      }`}
                    >
                      <MdOutlineFeaturedPlayList />

                      <span>{featured ? "Cancel" : "Featured"}</span>
                    </div>

                    <button
                      disabled={status === "Accepted"}
                      onClick={() => handleAcceptClick(_id)}
                      size={"sm"}
                      className={`flex-1 flex items-center gap-1 justify-center h-8 cursor-pointer text-white disabled:bg-gray-500 bg-green-500 ${
                        status === "Accepted" && "disabled:bg-gray-500"
                      }`}
                    >
                      <FcAcceptDatabase />
                      <span>Accept</span>
                    </button>
                    <button
                      disabled={status === "Rejected"}
                      onClick={() => handleRejectClick(_id)}
                      size={"sm"}
                      className={`flex-1 flex items-center gap-1 justify-center h-8 cursor-pointer text-white bg-red-600 ${
                        status === "Rejected" && "disabled:bg-gray-500"
                      }`}
                    >
                      <ImCancelCircle />

                      <span>Reject</span>
                    </button>
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

export default ProductReviewQueue;
