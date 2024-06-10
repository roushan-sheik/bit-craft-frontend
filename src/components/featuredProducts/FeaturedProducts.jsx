import { useQuery } from "@tanstack/react-query";
import React from "react";
import { axiosCommon } from "../../hooks/useAxiosCommon";
import MySpinner from "../loadingSpinner/Spinner";
import Product from "./Product";

const FeaturedProducts = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/products/featured`);
      return data;
    },
  });
  if (isLoading) return <MySpinner />;

  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        {products &&
          products?.map((product) => (
            <Product product={product} key={product._id} />
          ))}
      </div>
    </>
  );
};

export default FeaturedProducts;
