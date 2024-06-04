import { Option, Select, Spinner } from "@material-tailwind/react";
import axios from "axios";
import React from "react";
import Movie from "../../components/movie/Movie";

const AllBlogs = () => {
  const [categories, setCategories] = React.useState("");
  const [searchInput, setSearchInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [filterMovies, setFilterMovies] = React.useState([]);

  const blogsUrl = "https://blog-api-a11.vercel.app/blogposts";

  React.useEffect(() => {
    async function fetchComments() {
      setLoading(true);
      const res = await axios.get(blogsUrl);
      setFilterMovies(res.data);
    }
    fetchComments();
    setLoading(false);
  }, []);

  // handler
  function handleSearchChange(event) {
    setSearchInput(event.target.value);
  }
  function handleCategoryChange(value) {
    setCategories(value);
  }
  // filter by search input

  const filterByInput = `https://blog-api-a11.vercel.app/searchInput/${searchInput}`;
  // click handler
  async function handleInputSearchClick() {
    setFilterMovies([]);
    setLoading(true);
    const res = await axios.get(filterByInput);
    setFilterMovies(await res.data);
    setLoading(false);
  }

  // filter by category
  const filterByCategory = `https://blog-api-a11.vercel.app/category/${categories}`;
  async function handleSelectSearch() {
    setFilterMovies([]);
    setLoading(true);
    const res = await axios.get(filterByCategory);
    setFilterMovies(await res.data);
    setLoading(false);
  }

  if (loading) {
    return (
      <div className="flex justify-center mt-14">
        <Spinner className="h-16 w-16 text-gray-900/50" />
      </div>
    );
  }

  return (
    <div className="z-0">
      <h2 className="lg:text-3xl text-xl font-bold text-center lg:mt-10 mt-4">
        All Blog Posts
      </h2>
      {/* search and sorting box  */}
      <div className="flex flex-col lg:flex-row lg:gap-14 gap-2 items-center justify-center mb-10 main_">
        {/* input  */}
        <div className="flex w-full lg:w-[80%] border-2 mt-8 xl:w-[80%] 2xl:w-[60%] justify-between bg-white py-[.3125rem] pl-6 pr-[.3125rem] rounded-[2.1875rem]">
          <input
            id="search_input"
            value={searchInput}
            placeholder="Search blog"
            onChange={handleSearchChange}
            className=" py-[.5rem]  rounded-[2.1875rem]  lg:py-[.625rem] outline-none w-[65%]    "
            type="text"
          />
          <button
            id="search_btn"
            onClick={handleInputSearchClick}
            className="lg:py-[.625rem] py-[.5rem] lg:px-8 px-6 rounded-[32px] bg-blue-400 lg:text-[20px] text-[18px] text-white lg:font-bold cursor-pointer"
          >
            Search
          </button>
        </div>
        {/* select option  */}
        <div className="flex w-full lg:w-[80%]  mt-8 xl:w-[80%] 2xl:w-[60%] justify-between bg-white py-[.3125rem] pl-6 pr-[.3125rem] rounded-[2.1875rem]">
          <Select
            value={categories}
            label="Select Category To Search"
            variant="standard"
            onChange={handleCategoryChange}
          >
            <Option value="" disabled hidden>
              Select an option to search...
            </Option>
            <Option value="Action">Action</Option>
            <Option value="Science Fiction">Science Fiction</Option>
            <Option value="Comedy">Comedy</Option>
            <Option value="Adventure">Adventure</Option>
            <Option value="Drama">Drama</Option>
            <Option value="Fantasy">Fantasy</Option>
            <Option value="Horror">Horror</Option>
            <Option value="Romance">Romance</Option>
          </Select>
          <button
            id="search_btn"
            onClick={handleSelectSearch}
            className="lg:py-[.625rem] py-[.5rem] lg:px-8 px-6 rounded-[32px] bg-blue-400 lg:text-[20px] text-[18px] text-white lg:font-bold cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>
      {/* // recent blogs */}
      <div className="grid grid-cols-1 gap-6  main_">
        {filterMovies?.map((movie) => (
          <Movie key={movie.title} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
