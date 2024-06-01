import React from "react";

const Btn = ({ label, style, children, type }) => {
  return (
    <button
      type={type}
      className={`rounded-lg bg-sky-500 px-8 py-3 text-xl text-white duration-300 active:scale-95 ${style}`}
    >
      {children || label || "Custom Button"}
    </button>
  );
};

export default Btn;
