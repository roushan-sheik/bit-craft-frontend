import { useQuery } from "@tanstack/react-query";
import { axiosCommon } from "./useAxiosCommon";
import useUserContext from "./useUserContext";

const useSubscribe = () => {
  const { user, loading } = useUserContext();

  const { data: status } = useQuery({
    queryKey: ["eta-user-status", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosCommon(`/user/status/${user?.email}`);
      return data;
    },
  });

  //   Fetch user info using logged in user email

  return status;
};

export default useSubscribe;
