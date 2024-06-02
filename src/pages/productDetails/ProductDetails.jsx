import React from "react";
import { BsFillHandIndexThumbFill } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Btn from "../../components/button/Btn";
const ProductDetails = () => {
  const { products } = useLoaderData();
  const { id } = useParams();
  const item = products && products.filter((product) => product.name === id);
  console.log(item);
  const { name, image, tags, title, description } = item[0] || {};
  return (
    <div className="bg-gray-50 pt-4 backdrop-blur-md rounded-md   flex flex-col lg:flex-row gap-4">
      <div className="p-4 ">
        <img
          className="lg:w-[400px] w-full h-[200px] lg:h-[400px]  "
          src={image}
          alt=""
        />
      </div>
      {/* content box  */}
      <div title="Go To Products details page" className="p-4 basis-[60%]">
        <h2 className="text-2xl font-semibold">{name}</h2>

        <h3 className="font-medium my-2">{title}</h3>
        <p className="text_third">{description}</p>
        {/* icon box  */}
        <div className=" flex items-center mt-8 justify-between">
          <div className="flex items-center lg:gap-8 gap-3">
            <Link to={-1}>
              <Btn className={"bg_sec"}>Back</Btn>
            </Link>
            <p className="text_third bg-gray-200 px-2 py-1 rounded-md">
              #{tags}
            </p>
          </div>
          <div className="flex items-center  lg:gap-8 gap-3">
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
    </div>
  );
};

export default ProductDetails;
