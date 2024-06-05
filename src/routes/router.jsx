import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import AddProduct from "../pages/addProduct/AddProduct";
import Community from "../pages/community/Community";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import MyProducts from "../pages/myProducts/MyProducts";
import News from "../pages/news/News";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Products from "../pages/products/Products";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";
import UpdateProduct from "../pages/updateProduct/UpdateProduct";
import UpdateProfile from "./../pages/updateProfile/UpdateProfile";
import homeLoader from "./loader";
import PrivateRoute from "./privet/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/products",
        element: (
          <PrivateRoute>
            <Products />,
          </PrivateRoute>
        ),
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct />,
          </PrivateRoute>
        ),
      },
      {
        path: "/update-product",
        element: (
          <PrivateRoute>
            <UpdateProduct />,
          </PrivateRoute>
        ),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />,
          </PrivateRoute>
        ),
        loader: homeLoader,
      },
      {
        path: "/my-products",
        element: (
          <PrivateRoute>
            <MyProducts />,
          </PrivateRoute>
        ),
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <Profile />,
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />,
          </PrivateRoute>
        ),
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <Profile />,
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
