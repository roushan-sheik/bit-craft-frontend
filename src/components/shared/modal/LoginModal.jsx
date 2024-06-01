import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import LogInButton from "../../button/LogInButton";
import Inp from "../../input/Inp";

const LoginModal = ({ closeModal, isOpen, modalHandler }) => {
  const [showPass, setShowPass] = React.useState(false);
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
                  Login
                </DialogTitle>
                <form className="mt-2">
                  <p className="text-lg  font-semibold">Email:</p>
                  <div className="w-full border-2 my-4 flex items-center">
                    <Inp
                      inputStyle={"border-none "}
                      placeholder={"Enter your email"}
                    />
                  </div>
                  <p className="text-lg  font-semibold">Password:</p>
                  <div className="w-full border-2 my-4 flex justify-between pr-4 items-center">
                    <Inp
                      type={`${showPass ? "text" : "password"}`}
                      inputStyle={"border-none "}
                      placeholder={"Enter your password"}
                    />
                    {showPass ? (
                      <IoMdEyeOff
                        className="text-xl cursor-pointer"
                        onClick={() => setShowPass(!showPass)}
                      />
                    ) : (
                      <IoMdEye
                        className="text-xl cursor-pointer"
                        onClick={() => setShowPass(!showPass)}
                      />
                    )}
                  </div>
                </form>
                <hr className="mt-8 " />
                <div className="flex  justify-around">
                  <Button
                    className="w-[150px]"
                    type="button"
                    color="blue"
                    onClick={modalHandler}
                  >
                    Login
                  </Button>
                  <Button
                    color="red"
                    className="w-[150px]"
                    type="button"
                    onClick={closeModal}
                  >
                    Cancel
                  </Button>
                </div>
                <h4 className="mt-4 text-center">
                  {`Don't have an account?`}
                  <Link onClick={closeModal} to={"/register"}>
                    <span className="font-semibold text_brand_pri">
                      Register
                    </span>
                  </Link>
                </h4>
                {/* google login  */}
                <p className="text-center my-2 text_third">or login with</p>

                <div className="flex justify-center">
                  <LogInButton />
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

LoginModal.propTypes = {
  closeModal: PropTypes.func,
  isOpen: PropTypes.bool,
  modalHandler: PropTypes.func,
};

export default LoginModal;
