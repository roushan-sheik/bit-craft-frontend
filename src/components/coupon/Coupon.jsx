import React from "react";

const Coupon = ({ coupon }) => {
  const { description, code, discountAmount, expiryDate } = coupon;
  return (
    <div className="p-4 rounded-md bg-blue-gray-100">
      <div
        className="h-[100px] w-full bg-white flex justify-center items-center
      "
      >
        <h2 className="text-2xl font-medium text-center text_third">{code}</h2>
      </div>

      <h2 className="my-2 text-lg font-medium">{description}</h2>
      <p>Discount: {discountAmount}%</p>
      <p>Expire Date: {expiryDate}</p>
      {/* icon box  */}
      <div></div>
    </div>
  );
};

export default Coupon;
