import { Button } from "@material-tailwind/react";
import React from "react";

const Btn = ({ color, label, className, type, onClick, size, children }) => {
  return (
    <Button
      type={type}
      color={color}
      size={size}
      onClick={onClick}
      className={`${className} capitalize bg-[#00a6e5] text-lg`}
    >
      {label || children}
    </Button>
  );
};

export default Btn;
