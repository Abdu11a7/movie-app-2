import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Subscriptions from "./components/Subscriptions";
import About from "./components/AboutUs";
import Support from "./components/Support/Support";
import Notfound from "./components/Notfound";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import { ContactUs } from "./components/ContactUs/ContactUs";
import { MoviesAndShows } from "./components/MoviesAndShows/MoviesAndShows";
import AboutUs from "./components/AboutUs";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movies&shows",
        element: <MoviesAndShows />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "admin",
        element: <AdminLogin />,
      },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
