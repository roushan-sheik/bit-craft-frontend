import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BsFillHandIndexThumbFill } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { MdReport } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import Btn from "../../components/button/Btn";
import Spinner from "../../components/loadingSpinner/Spinner";
import TinyProfile from "../../components/profile/tiny/TinyProfile";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const ProductDetails = () => {
  const axiosCommon = useAxiosCommon();

  const { id } = useParams();

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/products/${id}`);
      return data;
    },
  });
  if (isLoading) return <Spinner />;
  const item = products && products.filter((product) => product._id === id);
  console.log(item);
  const {
    name,
    image,
    tags,
    createdAt,
    user_email,
    user_name,
    title,
    description,
    profile_image,
    vote,
  } = item[0] || {};
  return (
    <div className="main_ ">
      <TinyProfile
        createdAt={createdAt}
        user_email={user_email}
        user_name={user_name}
        profile_image={profile_image}
      />
      <div className=" pt-4 backdrop-blur-md rounded-md   flex flex-col lg:flex-row gap-4">
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
            </div>
            {/* =============== like end ========== */}
            <div className="flex items-center  lg:gap-8 gap-3">
              <div className="flex items-center gap-1 text-gray-500 text_brand_pri">
                <IoEyeOutline />
                <span>{vote.upVote + 3}</span>
              </div>
              {/* vote icon  */}
              <div title="Vote">
                <Btn size={"sm"} className={"flex items-center gap-2 text-xl"}>
                  <span>{vote.upVote}</span>
                  <BsFillHandIndexThumbFill />
                </Btn>
              </div>
            </div>
            {/* =============== like end ========== */}
          </div>
          <div className="flex  justify-between items-center">
            {/* tags ============================= */}
            <div className="flex gap-2  my-4 flex-col">
              {tags?.map((tagsItem) => (
                <p
                  key={tagsItem}
                  className="text_third bg-gray-200 px-2 py-1 rounded-md"
                >
                  <span>#{tagsItem}</span>
                </p>
              ))}
            </div>
            {/* tags end ========================== */}
            {/* report buttton  */}
            <Btn className={"flex items-center gap-2 !bg-red-400"}>
              <span>Report</span> <MdReport />{" "}
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
