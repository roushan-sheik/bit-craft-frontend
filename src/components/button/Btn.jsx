import { Button } from "@material-tailwind/react";
import React from "react";

const Btn = ({ color, label, className, type, onClick }) => {
  return (
    <Button
      type={type}
      color={color}
      onClick={onClick}
      className={`${className} capitalize bg-[#00a6e5] text-lg`}
    >
      {label}
    </Button>
  );
};

export default Btn;
