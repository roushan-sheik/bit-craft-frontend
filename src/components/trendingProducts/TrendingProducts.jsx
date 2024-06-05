import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import Btn from "../button/Btn";
import MySpinner from "../loadingSpinner/Spinner";
import Title from "../title/Title";
import TProduct from "./TProduct";

const TrendingProducts = () => {
  const axiosCommon = useAxiosCommon();

  const { data: products, isLoading } = useQuery({
    queryKey: ["trending-products"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/products/trending`);
      return data;
    },
  });
  if (isLoading) return <MySpinner />;
  return (
    <div>
      <Title
        title={"Explore Our Trending Products Collection"}
        description={
          "Stay ahead of the curve with our curated selection of trending products. From cutting-edge technology to innovative solutions, our trending products section showcases the hottest items in the tech world. "
        }
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {products?.map((product) => (
          <TProduct key={product._id} product={product} />
        ))}
      </div>
      <div className="flex justify-center my-10">
        <Link to={"/products"}>
          <Btn>Show All Products</Btn>
        </Link>
      </div>
    </div>
  );
};

export default TrendingProducts;
