import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import useUserContext from "../../../hooks/useUserContext";

const MyProfileModal = ({ closeModal, isOpen, modalHandler }) => {
  const { user } = useUserContext();
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
                  My Profile
                </DialogTitle>

                <div className="mt-2">
                  <p className="text-xl mt-4 select-none cursor-auto ">
                    Hello !
                  </p>
                  <p className="text-xl mt-2 font-semibold select-none cursor-auto ">
                    {user?.displayName}
                  </p>
                  <p className="text-lg text_sec my-1 font-medium cursor-text">
                    {user?.email}
                  </p>
                  {/* My profile   */}
                  <p className="text-lg cursor-pointer font-medium my-2 hover:text-[#fd6b22]">
                    My Profile
                  </p>
                  <p className="text-lg cursor-pointer font-medium my-2 hover:text-[#fd6b22]">
                    Update Profile
                  </p>
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

export default MyProfileModal;
