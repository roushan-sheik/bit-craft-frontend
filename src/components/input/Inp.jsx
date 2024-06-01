import React from "react";

const Inp = ({
  name,
  onClick,
  labelStyle,
  placeholder,
  value,
  label,
  type,
  inputStyle,
  onChange,
  required,
  boxStyle,
}) => {
  return (
    <div className={`${boxStyle} flex flex-col gap-2`}>
      <label className={`${labelStyle} font-semibold`} htmlFor={name}>
        {" "}
        {label}
      </label>
      <input
        onChange={onChange}
        placeholder={placeholder}
        onClick={onClick}
        value={value}
        required={required}
        name={name}
        id={name}
        className={`rounded-lg border border-gray-300 bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none ${inputStyle} `}
        type={type}
      />
    </div>
  );
};

export default Inp;
