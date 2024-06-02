import axios from "axios";
import React from "react";
import Product from "./Product";

const FeaturedProducts = () => {
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState(null);
  React.useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await axios("./products.json");
      const data = await res.data;
      setProducts(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        {products?.map((product, index) => (
          <Product product={product} key={index + 444} />
        ))}
      </div>
    </>
  );
};

export default FeaturedProducts;
