import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "components/Home";
import { PageNotFound } from "components/PageNotFound";
import { SingleMovie } from "../components/SingleMovie";
import React from "react";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/movie_app",
        element: <Home />,
      },
      {
        path: "/movie_app/movie/:id",
        element: <SingleMovie />,
      },
      {
        path: "/*",
        element: <PageNotFound />,
      },
    ],
  },
]);
