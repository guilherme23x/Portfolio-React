import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import WebProject from "./pages/Web/WebProject";

const router = createBrowserRouter([
  {
    path: "portfolio-react/",
    element: <App />,
  },
  {
    path: "/Projetos-Web",
    element: <WebProject />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);