import { useQuery } from "@tanstack/react-query";
import { axiosCommon } from "../useAxiosCommon";
import useUserContext from "../useUserContext";

const useStatistics = () => {
  const { user, loading } = useUserContext();
  const { data: chartData = [] } = useQuery({
    queryKey: ["admin-statistic", user.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosCommon.get("/admin/statistic");
      console.log(res.data, "data from hooks");
      return res.data;
    },
  });
  return { chartData, loading };
};

export default useStatistics;
