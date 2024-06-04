import React from "react";
import { FaBox, FaBoxOpen } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useUserContext from "../../hooks/useUserContext";
import TinyProfile from "../profile/tiny/TinyProfile";

const TProduct = ({ product }) => {
  const { user } = useUserContext();
  const [showTag, setShowTag] = React.useState(false);

  const {
    _id,
    name,
    createdAt,
    user_name,
    image,
    tags,
    title,
    user_email,
    profile_image,
    vote,
  } = product;
  // get vote ===========================================

  return (
    <div className="bg-gray-50 backdrop-blur-md rounded-md  shadow-sm border-2 hover:border-[#00a4e535] flex flex-col  gap-4">
      <TinyProfile
        createdAt={createdAt}
        user_email={user_email}
        user_name={user_name}
        profile_image={profile_image}
      />
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
          <div className="flex gap-2 flex-col">
            {showTag ? (
              tags?.map((tagsItem) => (
                <p
                  key={tagsItem}
                  className="text_third bg-gray-200 px-2 py-1 rounded-md"
                >
                  <span>#{tagsItem}</span>
                </p>
              ))
            ) : (
              <>
                <p className="text_third bg-gray-200 px-2 py-1 rounded-md">
                  <span>#{tags && tags[0]}</span>
                </p>
              </>
            )}
            <span
              className="p-2 bg-gray-200 rounded-sm font-semibold w-8"
              onClick={() => setShowTag(!showTag)}
            >
              {showTag ? <FaBox /> : <FaBoxOpen />}
            </span>
          </div>

          <div className="flex items-center gap-1 text-gray-500 text_brand_pri">
            <IoEyeOutline />
            <span>{vote.upVote + 3}</span>
          </div>
          {/* vote icon  */}
        </div>
      </div>
    </div>
  );
};

export default TProduct;
