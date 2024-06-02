import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";
const FeaturedProducts = () => {
  const { products,   } = useLoaderData();
 
 
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        {products &&
          products.map((product, index) => (
            <Product product={product} key={index + 444} />
          ))}
      </div>
    </>
  );
};

export default FeaturedProducts;
