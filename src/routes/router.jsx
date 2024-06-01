import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Community from "../pages/community/Community";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import News from "../pages/news/News";
import Products from "../pages/products/Products";
import Register from "../pages/register/Register";
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
