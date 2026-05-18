import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";

const rawBase = import.meta.env.BASE_URL;
const basename = rawBase === "/" ? "/" : rawBase.replace(/\/$/, "");

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, lazy: () => import("./routes/pages/Home") },
        { path: "about", lazy: () => import("./routes/pages/About") },
        { path: "projects", lazy: () => import("./routes/pages/Projects") },
        { path: "projects/:slug", lazy: () => import("./routes/pages/ProjectDetail") },
        { path: "contact", lazy: () => import("./routes/pages/Contact") },
        { path: "*", lazy: () => import("./routes/pages/NotFound") },
      ],
    },
  ],
  { basename },
);

export default function App() {
  return <RouterProvider router={router} />;
}