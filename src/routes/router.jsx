import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Community from "../pages/community/Community";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import News from "../pages/news/News";
import Products from "../pages/products/Products";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";
import UpdateProfile from "./../pages/updateProfile/UpdateProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
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
        element: <Profile />,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
      {
        path: "/my-profile",
        element: <Profile />,
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
