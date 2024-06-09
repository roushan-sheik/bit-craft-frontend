import React from "react";
import Btn from "../../components/button/Btn";
import CouponModal from "../../components/shared/modal/CouponModal";

const ManageCoupons = () => {
  const [showModal, setShowModal] = React.useState(false);
  async function handleAddCoupon() {
    console.log("add coupon");
  }
  return (
    <div>
      <h2>ManageCoupons</h2>
      {/* modal  */}
      {showModal && (
        <CouponModal
          closeModal={() => setShowModal(!showModal)}
          isOpen={showModal}
        />
      )}
      <Btn onClick={() => setShowModal(!showModal)}>Add Coupon</Btn>
    </div>
  );
};

export default ManageCoupons;
