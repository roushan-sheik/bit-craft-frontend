import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import Spinner from "../loadingSpinner/Spinner";
import Product from "./Product";
const FeaturedProducts = () => {
  const axiosCommon = useAxiosCommon();

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/products`);
      return data;
    },
  });
  if (isLoading) return <Spinner />;
 
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        {products &&
          products?.map((product, index) => (
            <Product product={product} key={index + 444} />
          ))}
      </div>
    </>
  );
};

export default FeaturedProducts;
