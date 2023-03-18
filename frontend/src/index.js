import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Login from "./components/Login";
import Contact from "./components/Contact";
import NavbarBrand from "./components/Navbar";
import HomePage from "./components/HomePage";

  

const router = createBrowserRouter([
    {
      path: "/frontend",
        element: <HomePage />,
        errorElement: <div>Error</div>,

    },
    {
        path: "/frontend/contact",
          element: <Contact />,
          errorElement: <div>Error</div>,
  
      },

]);
  

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <NavbarBrand />
      <RouterProvider router={router} />
    </React.StrictMode>
  );