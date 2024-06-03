import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center mt-[100px]">
      <img
        className="lg:w-[150px] lg:h-[150px] w-[80px] h-[80px]"
        src="./spinner.gif"
        alt=""
      />
    </div>
  );
};

export default Spinner;
