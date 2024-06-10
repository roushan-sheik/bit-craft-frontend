import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import Btn from "../../components/button/Btn";
import Coupon from "../../components/coupon/Coupon";
import MySpinner from "../../components/loadingSpinner/Spinner";
import CouponModal from "../../components/shared/modal/CouponModal";
import { axiosCommon } from "./../../hooks/useAxiosCommon";
import { axiosSecure } from "./../../hooks/useAxiosSecure";

const ManageCoupons = () => {
  const [showModal, setShowModal] = React.useState(false);
  async function getCouponData(couponObj) {
    try {
      await axiosSecure.post("/coupon/post", couponObj);
      toast.success("Coupon added", {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  }
  const {
    data: coupons,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-coupons"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/coupons`);
      return data;
    },
  });
  if (isLoading) return <MySpinner />;
  async function deleteCoupon(id) {
    try {
      await axiosCommon.delete(`/coupon/delete/${id}`);
      refetch();
      toast.success("Deleted successfully", {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  }

  return (
    <div>
      <div className="flex my-8 justify-between mr-4">
        <h2 className="text-2xl lg:text-4xl text-center font-semibold ">
          Manage Coupons
        </h2>
        <Btn onClick={() => setShowModal(!showModal)}>Add Coupon</Btn>
      </div>
      <ToastContainer />
      {/* modal  */}
      {showModal && (
        <CouponModal
          getCouponData={getCouponData}
          closeModal={() => setShowModal(!showModal)}
          isOpen={showModal}
        />
      )}
      <div className="grid grid-cols-1 mb-4 lg:grid-cols-3 gap-6 ">
        {coupons?.map((coupon) => (
          <Coupon
            deleteCoupon={deleteCoupon}
            key={coupon._id}
            coupon={coupon}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageCoupons;
