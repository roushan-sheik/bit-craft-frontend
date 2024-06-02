import { Option, Select, Textarea } from "@material-tailwind/react";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { imageUpload } from "../../api/utils";
import Inp from "../../components/input/Inp";
import useUserContext from "../../hooks/useUserContext";
import Btn from "./../../components/button/Btn";

const AddProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useUserContext();
  const [error, setError] = React.useState(null);
  const [categories, setCategories] = React.useState("");
  const [product, setProduct] = React.useState({
    name: "",
    title: "",
    category: "",
    description: "",
  });
  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }
  const url = "https://blog-api-a11.vercel.app/blogposts";
  const currentDate = new Date().toLocaleDateString();

  // handle the form
  function handleCategoryChange(value) {
    setCategories(value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    // get image
    const imagFile = e.target.image.files[0];

    setCategories("");
    setError("");
    const route = location?.state || "/";
    if (categories === "") {
      setError("Category filed is required");
      return;
    }
    // upload image
    try {
      const imageUrl = await imageUpload(imagFile);
      const blogObj = {
        user_name: user?.displayName,
        user_email: user?.email,
        profile_image: user?.photoURL,
        name: product?.name,
        title: product?.title,
        image: imageUrl,
        category: categories,
        description: product?.description,
        createdAt: currentDate,
      };
      console.log(blogObj);
    } catch (error) {
      console.log(error.message);
    }

    setProduct({
      name: "",
      title: "",
      category: "",
      description: "",
    });
    setCategories("");
    e.target.reset();
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <Helmet>
          <title>BitCraft | Add Product</title>
        </Helmet>
        <h2 className=" text_pri lg:text-4xl text-2xl lg:my-10 my-7 font-bold text-center">
          Add Product
        </h2>
        <ToastContainer />
        <form
          onSubmit={handleSubmit}
          className="flex  flex-col lg:w-[70%] w-[90%] gap-4"
          action="#"
        >
          {/* inputs  */}
          <Inp
            type="text"
            name={"name"}
            required={true}
            label={"Product Name"}
            value={product.name}
            placeholder={"name"}
            onChange={handleChange}
          />
          <Inp
            type="text"
            name={"title"}
            required={true}
            label={"Title"}
            value={product.title}
            placeholder={"title"}
            onChange={handleChange}
          />
          {/* ===================== image upload start =================================> */}
          <div>
            <label htmlFor="image" className="block mb-2 text-base font-medium">
              Upload Product Image:
            </label>
            <Inp type="file" id="image" name="image" accept="image/*" />
          </div>
          {/* ===================== image upload end =================================> */}
          <label htmlFor="long_description" className="font-semibold">
            Description
          </label>
          <Textarea
            id="long_description"
            value={product.description}
            placeholder="long desc..."
            onChange={handleChange}
            name="description"
          />
          <Select
            value={categories}
            label="Select Category"
            variant="standard"
            onChange={handleCategoryChange}
          >
            <Option value="" disabled hidden>
              Select a category
            </Option>
            <Option value="Web Applications">Web Applications</Option>
            <Option value="AI and Machine Learning">
              AI and Machine Learning
            </Option>
            <Option value="Mobile Applications">Mobile Applications</Option>
            <Option value="Software and Tools">Software and Tools</Option>
            <Option value="Games">Games</Option>
            <Option value="Utilities">Utilities</Option>
            <Option value="Productivity">Productivity</Option>
            <Option value="Design and Creativity">Design and Creativity</Option>
          </Select>
          {/* error message */}
          <span className="text-red-500">{error}</span>
          {/* submit button  */}
          <Btn type={"submit"} color="blue">
            {" "}
            Continue
          </Btn>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
