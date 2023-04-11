import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Statistics from "./Component/Statistics/Statistics";
import AppliedJobs from "./Component/Applied Jobs/AppliedJobs";
import Blog from "./Component/Blog/Blog";
import Home from "./Home/Home";
import { getJobDetailsData } from "./Loader/getJobDetailsData";
import Job from "./Component/Job/Job";
import ErrorPage from "./Component/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: getJobDetailsData,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/JobCatagoris.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/apjob",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/job/:id",
        element: <Job></Job>,
        loader: getJobDetailsData,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
