import PropTypes from "prop-types";
import React from "react";
const Product = ({ product }) => {
  const { name, image, tags, description } = product;
  return (
    <div className="bg-gray-100 rounded-md  border-2 border-[#00a4e535] flex flex-col lg:flex-row gap-4">
      <div className="p-4 ">
        <img className="w-[300px] h-[150px] object-cover" src={image} alt="" />
      </div>
      {/* content box  */}
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
              <p className="text_third">
                  #{ tags }</p>
        <p className="text_third">{description}</p>
      </div>
    </div>
  );
};

export default Product;
Product.propTypes = {
  product: PropTypes.obj,
};
