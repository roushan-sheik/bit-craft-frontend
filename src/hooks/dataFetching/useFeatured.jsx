import { useQuery } from "@tanstack/react-query";
import { axiosCommon } from "../useAxiosCommon";
import useUserContext from "../useUserContext";
const useFeatured = () => {
  const { user, loading } = useUserContext();

  const {
    data: products = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/products/featured`);
      return data;
    },
  });

  //   Fetch user info using logged in user email

  return { products, refetch, isLoading };
};

export default useFeatured;
