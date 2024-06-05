import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useUserContext from "./useUserContext";
const useSubscribe = () => {
  const { user, loading } = useUserContext();
  const axiosSecure = useAxiosSecure();

  const { data: status = "", isLoading } = useQuery({
    queryKey: ["user-status", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/user/status/${user?.email}`);
      if (data.status === true) {
        return true;
      } else {
        return false;
      }
    },
  });

  //   Fetch user info using logged in user email

  return [status, isLoading];
};

export default useSubscribe;
