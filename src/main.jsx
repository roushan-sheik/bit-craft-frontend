import { ThemeProvider } from "@material-tailwind/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./provider/auth-provider/AuthProvider.jsx";
import router from "./routes/router.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
