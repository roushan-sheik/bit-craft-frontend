import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Btn from "../../components/button/Btn";
import Inp from "../../components/input/Inp";
import { axiosCommon } from "./../../hooks/useAxiosCommon";

const UpdateCoupon = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [description, setDescription] = useState(location?.state?.description); // Properly initialize useState
  const [couponCode, setCouponCode] = useState(location?.state?.code); // Properly initialize useState
  const [expiryDate, setExpiryDate] = useState(location?.state?.expiryDate); // State for expiry date
  const [discountAmount, setDiscountAmount] = useState(
    location?.state?.discountAmount
  ); // State for discount amount

  // Function to generate a 6-digit alphanumeric coupon code
  const generateCouponCode = () => {
    let code = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }
    setCouponCode(code); // Set the generated code to the state
  };

  function handleGenerateCoupon() {
    generateCouponCode();
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setDescription(event.target.description.value);
    const couponObj = {
      description,
      code: couponCode,
      expiryDate,
      discountAmount,
    };
    //TODO - TODO
    // update;
    try {
      await axiosCommon.put(
        `/coupon/update/${location?.state?._id}`,
        couponObj
      );
      toast.success("Successfully updated", {
        position: "top-right",
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/dashboard/manage-coupons");
      }, 2000);
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 2000,
      });
    }

    // Reset form
    event.target.description.value = "";
    setCouponCode(""); // Reset the coupon code
    setExpiryDate(""); // Reset the expiry date
    setDiscountAmount(""); // Reset the discount amount
  }

  return (
    <div>
      <h2 className="mt-20 lg:mt-4 text-2xl lg:text-3xl font-semibold ">
        Update Coupon
      </h2>
      <ToastContainer />
      <form className="max-w-md px-8" onSubmit={handleSubmit}>
        <div className="mt-8">
          <p className="text-lg">Report Description:</p>
          <div className="w-full border-2 my-4 flex items-center">
            <Inp
              value={description}
              inputStyle={"border-none"}
              placeholder={"Coupon Description...."}
              name={"description"}
            />
          </div>
        </div>
        <div className="mt-8">
          <p className="text-lg">Coupon Code:</p>
          <div className="w-full border-2 my-4 flex items-center">
            <Inp
              inputStyle={"border-none"}
              value={couponCode}
              placeholder={"Coupon code"}
              readOnly={true} // Make the input read-only
            />
            <span
              onClick={handleGenerateCoupon}
              className="cursor-pointer ml-4 text-blue-500"
            >
              Generate code
            </span>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-lg">Expiry Date:</p>
          <div className="w-full border-2 my-4 flex items-center">
            <input
              type="date"
              className="border-none w-full"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-8">
          <p className="text-lg">Discount Amount (%):</p>
          <div className="w-full border-2 my-4 flex items-center">
            <input
              type="number"
              className="border-none w-full focus:outline-none"
              placeholder="Discount amount"
              value={discountAmount}
              onChange={(e) => setDiscountAmount(e.target.value)}
              min="0"
              max="100"
            />
          </div>
        </div>
        <hr className="mt-8" />
        <div className="flex justify-around">
          <Btn className="w-[150px]" type="submit" label={"Continue"} />
          <Btn
            label={"Cancel"}
            className="w-[150px] !bg-[#fd6b22]"
            type="button"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateCoupon;
