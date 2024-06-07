import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FcAcceptDatabase, FcViewDetails } from "react-icons/fc";
import { ImCancelCircle } from "react-icons/im";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MySpinner from "../../../components/loadingSpinner/Spinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUserContext from "../../../hooks/useUserContext";

const ProductReviewQueue = () => {
  const { user } = useUserContext();

  const axiosSecure = useAxiosSecure();

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-products"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/products/pending`);
      return data;
    },
  });

  if (isLoading) return <MySpinner />;

  async function handleFeaturedClick() {}
  async function handleRejectClick() {}
  async function handleAcceptClick() {}

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
              {products.map(({ name, _id }) => {
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
                      onClick={handleFeaturedClick}
                      size={"sm"}
                      className={
                        "flex-1 flex items-center gap-1 justify-center h-8 cursor-pointer text-white bg_sec"
                      }
                    >
                      <MdOutlineFeaturedPlayList />

                      <span>Featured</span>
                    </div>
                    <div
                      onClick={handleAcceptClick}
                      size={"sm"}
                      className={
                        "flex-1 flex items-center gap-1 justify-center h-8 cursor-pointer text-white bg-green-600"
                      }
                    >
                      <FcAcceptDatabase />
                      <span>Accept</span>
                    </div>
                    <div
                      onClick={handleRejectClick}
                      size={"sm"}
                      className={
                        "flex-1 flex items-center gap-1 justify-center h-8 cursor-pointer text-white bg-red-600"
                      }
                    >
                      <ImCancelCircle />

                      <span>Reject</span>
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

export default ProductReviewQueue;
