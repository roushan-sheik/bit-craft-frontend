import { createBrowserRouter } from "react-router-dom";
import DashboardHome from "../components/dashboardHome/DashboardHome";
import Dashboard from "../layout/Dashboard";
import Root from "../layout/Root";
import AddProduct from "../pages/addProduct/AddProduct";
import Community from "../pages/community/Community";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import ManageCoupons from "../pages/manageCoupons/ManageCoupons";
import ManageUsers from "../pages/manageUsers/ManageUsers";
import ProductReviewQueue from "../pages/ModeratorDashboard/productReviewQueue/ProductReviewQueue";
import ReportedContents from "../pages/ModeratorDashboard/reportedContents/ReportedContents";
import MyProducts from "../pages/myProducts/MyProducts";
import News from "../pages/news/News";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Products from "../pages/products/Products";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";
import StatisticsPage from "../pages/statisticsPage/StatisticsPage";
import UpdateCoupon from "../pages/updateCoupon/UpdateCoupon";
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
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />,
          </PrivateRoute>
        ),
        loader: homeLoader,
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "update-product",
        element: <UpdateProduct />,
      },
      {
        path: "my-products",
        element: <MyProducts />,
      },
      {
        path: "my-profile",
        element: <Profile />,
      },
      {
        path: "update-profile",
        element: <UpdateProfile />,
      },
      {
        path: "product-review-queue",
        element: <ProductReviewQueue />,
      },
      {
        path: "reported-contents",
        element: <ReportedContents />,
      },
      {
        path: "statistics",
        element: <StatisticsPage />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "manage-coupons",
        element: <ManageCoupons />,
      },
      {
        path: "update-coupon",
        element: <UpdateCoupon />,
      },
    ],
  },
]);
export default router;
