import React from "react";
import { toast, ToastContainer } from "react-toastify";
import Btn from "../../components/button/Btn";
import CouponModal from "../../components/shared/modal/CouponModal";
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

  return (
    <div>
      <h2>ManageCoupons</h2>
      <ToastContainer />
      {/* modal  */}
      {showModal && (
        <CouponModal
          getCouponData={getCouponData}
          closeModal={() => setShowModal(!showModal)}
          isOpen={showModal}
        />
      )}
      <Btn onClick={() => setShowModal(!showModal)}>Add Coupon</Btn>
    </div>
  );
};

export default ManageCoupons;
