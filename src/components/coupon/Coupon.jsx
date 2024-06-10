import React from "react";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";
import { Link } from "react-router-dom";

const Coupon = ({ coupon, deleteCoupon }) => {
  const { _id, description, code, discountAmount, expiryDate } = coupon;
  function handleDelete(id) {
    console.log("delete", id);
  }
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
      <div className="flex gap-6 items-center mt-6">
        <Link
          to={"/dashboard/update-coupon"}
          state={{
            _id,
            description,
            code,
            discountAmount,
            expiryDate,
          }}
        >
          <div className="flex items-center gap-1">
            <span className="lg:flex hidden">
              <MdEditSquare />
            </span>
            <span>Edit</span>
          </div>
        </Link>

        <div
          onClick={() => deleteCoupon(_id)}
          className="flex flex-1 mr-2 cursor-pointer items-center gap-1 text-red-500"
        >
          <MdDeleteForever className="lg:flex hidden" />
          <span>Delete</span>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
