import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { ToastContainer } from "react-toastify";
import Btn from "../../button/Btn";
import Inp from "../../input/Inp";

const CouponModal = ({ closeModal, isOpen, modalHandler, getCouponData }) => {
  const [couponCode, setCouponCode] = useState(""); // Properly initialize useState
  const [expiryDate, setExpiryDate] = useState(""); // State for expiry date
  const [discountAmount, setDiscountAmount] = useState(""); // State for discount amount

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
    console.log(couponCode);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const desc = event.target.description.value;
    const couponObj = {
      description: desc,
      code: couponCode,
      expiryDate,
      discountAmount,
    };
    //TODO - TODO
    getCouponData(couponObj);

    // Reset form
    event.target.description.value = "";
    setCouponCode(""); // Reset the coupon code
    setExpiryDate(""); // Reset the expiry date
    setDiscountAmount(""); // Reset the discount amount
    closeModal();
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>
        <ToastContainer />

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-3xl font-bold my-4 text-center leading-6 text-gray-900"
                >
                  Add Coupon
                </DialogTitle>
                <form onSubmit={handleSubmit}>
                  <div className="mt-8">
                    <p className="text-lg">Report Description:</p>
                    <div className="w-full border-2 my-4 flex items-center">
                      <Inp
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
                    <Btn
                      className="w-[150px]"
                      type="submit"
                      label={"Continue"}
                      onClick={modalHandler}
                    />
                    <Btn
                      label={"Cancel"}
                      className="w-[150px] !bg-[#fd6b22]"
                      type="button"
                      onClick={closeModal}
                    />
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

CouponModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  product_id: PropTypes.string,
  modalHandler: PropTypes.func,
  product_name: PropTypes.string,
  getCouponData: PropTypes.func,
  showReportSuccess: PropTypes.func,
};

export default CouponModal;
