import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";

const useFetchReview = (blog_id) => {
  const axiosSecure = useAxiosSecure();
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/reviews/${blog_id}`);
      return data;
    },
  });
  return { reviews, isLoading, refetch };
};

export default useFetchReview;
