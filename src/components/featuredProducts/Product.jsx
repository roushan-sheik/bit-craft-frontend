import PropTypes from "prop-types";
import React from "react";
import { BsFillHandIndexThumbFill } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Btn from "../button/Btn";
const Product = ({ product }) => {
  const { _id, name, image, category, title } = product;
  return (
    <div className="bg-gray-50 backdrop-blur-md rounded-md  shadow-sm border-2 hover:border-[#00a4e535] flex flex-col lg:flex-row gap-4">
      <div className="p-4 ">
        <Link to={`/products/${_id}`}>
          <img
            className="lg:w-[300px] w-full h-[200px] lg:h-[150px]  "
            src={image}
            alt=""
          />
        </Link>
      </div>
      {/* content box  */}
      <div title="Go To Products details page" className="p-4">
        <Link to={`/products/${_id}`}>
          <h2 className="text-xl font-semibold">{name}</h2>
        </Link>
        <p className="text_third">{title}</p>
        {/* icon box  */}
        <div className="mt-2 flex items-center justify-between">
          <p className="text_third bg-gray-200 px-2 py-1 rounded-md">
            #{category}
          </p>

          <div className="flex items-center gap-1 text-gray-500 text_brand_pri">
            <IoEyeOutline />
            <span>145k</span>
          </div>
          {/* vote icon  */}
          <div title="Vote">
            <Btn size={"sm"} className={"flex items-center gap-2 text-xl"}>
              <span>10</span>
              <BsFillHandIndexThumbFill />
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
Product.propTypes = {
  product: PropTypes.any,
};
