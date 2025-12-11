import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayouts from "./RootLayouts";
import Home from "./Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts></RootLayouts>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);
