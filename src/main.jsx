import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import PriceNplan from "./components/price&plan/PriceNplan";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/price&plan",
    element: <PriceNplan />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
