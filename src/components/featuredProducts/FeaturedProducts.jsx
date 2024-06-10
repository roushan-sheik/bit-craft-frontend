import React from "react";
import useFeatured from "../../hooks/dataFetching/useFeatured";
import MySpinner from "../loadingSpinner/Spinner";
import Product from "./Product";
const FeaturedProducts = () => {
  const { products, isLoading } = useFeatured();

  // const { data: products, isLoading } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: async () => {
  //     const { data } = await axiosCommon.get(`/products/featured`);
  //     return data;
  //   },
  // });
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
