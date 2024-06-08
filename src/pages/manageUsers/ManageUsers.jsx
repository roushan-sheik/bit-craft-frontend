import { useQuery } from "@tanstack/react-query";
import React from "react";
import { IoMdDoneAll } from "react-icons/io";
import { MdAddModerator, MdAdminPanelSettings } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import MySpinner from "../../components/loadingSpinner/Spinner";
import NoDataFound from "../../components/not-found/NoDataFound";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useRole from "../../hooks/useRole";
import useUserContext from "../../hooks/useUserContext";

const ManageUsers = () => {
  const { user } = useUserContext();
  const role = useRole();
  const axiosSecure = useAxiosSecure();

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["manage-users"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/users`);
      return data;
    },
  });

  if (isLoading) return <MySpinner />;
  if (users.length === 0) {
    return <NoDataFound title={"Don't found any users "} />;
  }
  async function handleAdminClick(email) {
    const adminConfirmed = confirm(
      "Do you want to give Admin access for this user?"
    );
    try {
      if (adminConfirmed) {
        await axiosSecure.put(`/user/role/update/${email}`, {
          role: "Admin",
        });
        refetch();
        toast.success("Successfully role updated to Admin.", {
          position: "top-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  }
  async function handleModeratorClick(email) {
    const adminConfirmed = confirm(
      "Do you want to give Moderator access for this user?"
    );
    try {
      if (adminConfirmed) {
        await axiosSecure.put(`/user/role/update/${email}`, {
          role: "Moderator",
        });
        refetch();
        toast.success("Successfully role updated to Moderator.", {
          position: "top-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  }

  return (
    <div className="lg:w-[100%] mx-auto">
      <div>
        <h2 className="lg:text-3xl text-xl font-bold text-center lg:mt-10 mt-4">
          Manage Users ({users.length})
        </h2>
        <ToastContainer />
      </div>
      {/* products table  */}
      <div className="mt-8 ">
        <div className="h-full w-full overflow-scroll">
          <div className="w-full min-w-max table-auto text-left">
            <div>
              <div className="flex w-full">
                <div className="border-b font-bold gap-4 flex-1 justify-between border-blue-gray-100 flex bg-blue-gray-50 p-4">
                  <div className="flex-1">User Name</div>
                  <div className="flex-1">User Email</div>
                  <div className="flex-1">Make Moderator</div>
                  <div className="flex-1">Make Admin</div>
                </div>
              </div>
            </div>
            <div className="">
              {users.map(({ name, email, Role }) => {
                return (
                  <div
                    key={name}
                    className="border-b gap-4 flex-1 justify-between border-blue-gray-100 flex bg-blue-gray-50 p-4"
                  >
                    <div className="flex-1 h-14">{name}</div>
                    <div className="flex-1 overflow-scroll lg:w-[150px]">
                      {email}
                    </div>

                    <button
                      onClick={() => handleModeratorClick(email)}
                      size={"sm"}
                      className={`flex-1 flex items-center gap-1  justify-center h-8 cursor-pointer   
                  `}
                    >
                      <MdAddModerator className="text-2xl text_brand_sec" />
                      <span className="text_brand_sec">Moderator</span>
                      {Role === "Moderator" && (
                        <IoMdDoneAll className="text_brand_sec text-xl" />
                      )}
                    </button>
                    <button
                      onClick={() => handleAdminClick(email)}
                      size={"sm"}
                      className={`flex-1 flex items-center gap-1 text-blue-500 justify-center h-8 cursor-pointer  
                  `}
                    >
                      <MdAdminPanelSettings className="text-3xl" />
                      <span>Admin</span>
                      {Role === "Admin" && <IoMdDoneAll className="text-xl" />}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
