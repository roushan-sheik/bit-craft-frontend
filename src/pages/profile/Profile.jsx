import { Helmet } from "react-helmet-async";
import { FaUserEdit } from "react-icons/fa";
import { MdCardMembership } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Btn from "../../components/button/Btn";
import useSubscribe from "../../hooks/useSubscribe";
import useUserContext from "../../hooks/useUserContext";

const Profile = () => {
  const { user } = useUserContext();

  const data = useSubscribe();

  let amount = 200;
  return (
    <div className="max-w-6xl mx-auto ">
      <Helmet>
        <title>Your - Profile</title>
      </Helmet>
      <div className="flex flex-col items-center my-16">
        <img
          className="rounded-full h-[200px] w-[200px] ring-8 ring-blue-500"
          src={user?.photoURL || "https://i.ibb.co/6JyZF0K/user.png"}
          alt="pic"
        />
        <h2 className="mt-6 font-medium text-4xl">{user?.displayName}</h2>
        <p className="text-lg mt-3">{user?.email}</p>
        <div className="flex items-center gap-3 my-3">
          <div className="flex items-center  text-lg gap-1 font-medium">
            <MdCardMembership />
            <span>Membership Status:</span>
          </div>
          <div className="">
            {data?.status ? (
              <div className="flex items-center text-lg gap-1 text_brand_pri select-none">
                <RiVerifiedBadgeFill />
                <span>Verified</span>
              </div>
            ) : (
              <span className="p-2 bg_sec rounded-md cursor-pointer text-white">
                ${amount}
              </span>
            )}
          </div>
        </div>
        <Link to={"/dashboard/update-profile"}>
          <Btn className={"flex items-center gap-2 mt-2"}>
            <FaUserEdit />
            Edit
          </Btn>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
