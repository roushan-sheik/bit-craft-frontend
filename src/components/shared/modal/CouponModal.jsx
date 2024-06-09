import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { toast, ToastContainer } from "react-toastify";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import useUserContext from "../../../hooks/useUserContext";
import Btn from "../../button/Btn";
import Inp from "../../input/Inp";

const CouponModal = ({
  closeModal,
  isOpen,
  modalHandler,
  product_id,
  product_name,
  showReportSuccess,
}) => {
  const { couponCode, setCouponCode } = React.useState("");
  const { user } = useUserContext();
  const axiosCommon = useAxiosCommon();
  // const { refetch } = useFetchReview();
  // coupon code generator
  let Code = "";
  function generateCouponCode() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      Code += characters[randomIndex];
    }
  }
  console.log(Code);
  generateCouponCode();

  async function handleSubmit(event) {
    event.preventDefault();
    const desc = event.target.description.value;
    const reportObj = {
      name: user?.displayName,
      image: user?.photoURL,
      product_id,
      product_name,
      description: desc,
    };
    if (reportObj.description === "" || reportObj.description.length < 15) {
      toast.error("Report must be more than 15 characters", {
        position: "top-right",
        autoClose: 1000,
      });
      return;
    }

    //TODO - login user
    try {
      await axiosCommon.post("/report", reportObj);
      // refetch();
      showReportSuccess("success");
    } catch (error) {
      showReportSuccess("fail");
      console.log(error.message);
    }

    // reset from
    event.target.description.value = "";
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
                    <p className="text-lg  ">Report Description:</p>
                    <div className="w-full border-2 my-4 flex items-center">
                      <Inp
                        inputStyle={"border-none "}
                        placeholder={"Coupon Description...."}
                        name={"description"}
                      />
                    </div>
                  </div>
                  <div className="mt-8">
                    <p className="text-lg  ">Coupon Code:</p>
                    <div className="w-full border-2 my-4 flex items-center">
                      <Inp
                        inputStyle={"border-none "}
                        placeholder={"Coupon code"}
                        name={"description"}
                      />
                    </div>
                    <span>Generate</span>
                  </div>
                  <hr className="mt-8 " />
                  <div className="flex  justify-around">
                    <Btn
                      className="w-[150px]"
                      type="submit"
                      label={"Continue"}
                      onClick={modalHandler}
                    />
                    <Btn
                      label={"Cancel"}
                      className="w-[150px] !bg-[#fd6b22] "
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
  closeModal: PropTypes.func,
  isOpen: PropTypes.bool,
  product_id: PropTypes.string,
  modalHandler: PropTypes.func,
  product_name: PropTypes.string,
  showReportSuccess: PropTypes.func,
};

export default CouponModal;
