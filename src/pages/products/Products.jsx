import { useQuery } from "@tanstack/react-query";
import React from "react";
import MySpinner from "../../components/loadingSpinner/Spinner";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SingleProduct from "./SingleProduct";
const Products = () => {
  const [searchInput, setSearchInput] = React.useState("");

  const axiosSecure = useAxiosSecure();
  // handler
  function handleSearchChange(event) {
    setSearchInput(event.target.value);
    refetch();
  }

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["accepted-products"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/products/accepted/${searchInput}`
      );
      return data;
    },
  });
  if (isLoading) return <MySpinner />;
  console.log(products);

  // click handler <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  async function handleInputSearchClick() {
    refetch();
  }

  return (
    <div className="main_">
      <div className="z-0">
        <h2 className="lg:text-3xl text-xl font-bold text-center lg:mt-10 mt-4">
          Products
        </h2>
        {/* search and sorting box  */}
        <div className="flex flex-col lg:flex-row lg:gap-14 gap-2 items-center justify-center mb-10 main_">
          <div className="flex w-full lg:w-[80%] border-2 mt-8 xl:w-[80%] 2xl:w-[60%] justify-between bg-white py-[.3125rem] pl-6 pr-[.3125rem] rounded-[2.1875rem]">
            <input
              id="search_input"
              value={searchInput}
              placeholder="Search product..."
              onChange={handleSearchChange}
              className=" py-[.5rem]  rounded-[2.1875rem]  lg:py-[.625rem] outline-none w-[65%]    "
              type="text"
            />
            <button
              id="search_btn"
              onClick={handleInputSearchClick}
              className="lg:py-[.625rem] py-[.5rem] lg:px-8 px-6 rounded-[32px] bg_pri lg:text-[20px] text-[18px] text-white lg:font-bold cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>
        {/* //================== Pagination products ========================== */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {products?.map((product) => (
            <SingleProduct key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
