import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Components/Authenticated/Pages/Home/Home";
import AboutUs from "../Components/Authenticated/Pages/About/AboutUs";
import Announcement from "../Components/Authenticated/Pages/Announcement";
import Registration from "../Components/UnAuthenticated/LandingPage/Pages/Registration";
import Login from "../Components/UnAuthenticated/LandingPage/Pages/LoginForm";
import OscaPage from "../Components/Authenticated/Departments/OSCA/OSCAPage";
import { UserOutlined } from "@ant-design/icons";

// const routesUnauth = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         name: "Home",
//         path: "/#home",
//         // element: <Home />,
//       },
//       {
//         name: "About",
//         path: "/#aboutUs",
//         // element: <AboutUs />,
//       },
//       {
//         name: "Annoucement",
//         path: "/#annoucement",
//         // element: <Announcement />,
//       },
//     ],
//   },
// ]);

const routes = {
  unAuth: [
    {
      name: "Home",
      icon: <UserOutlined />,
      path: "/#home",
    },
    {
      name: "Contact",
      icon: <UserOutlined />,
      path: "/#contact",
    },
    {
      name: "About Us",
      icon: <UserOutlined />,
      path: "/#aboutUs",
    },

    // {
    //   path: "/registration",
    //   name: "Register",
    //   element: <Registration />,
    // },
  ],
  auth: [
    {
      path: "/#home",
      name: "Home",
      icon: <UserOutlined />,
      element: <Home />,
    },
    {
      name: "About",
      path: "/#aboutUs",
      icon: <UserOutlined />,
      element: <AboutUs />,
    },
    {
      name: "Announcement",
      path: "/#announcement",
      icon: <UserOutlined />,
      element: <Announcement />,
    },
    {
      name: "Departments",
      icon: <UserOutlined />,
      element: <Layout />,
      children: [
        {
          name: "OSCA (Office of the Senior Citizen Affair)",
          path: "/senior",

          element: <OscaPage />,
        },
        {
          name: "PDAO (Person's with Disability Affair Office)",
          path: "/pwd",
          element: <OscaPage />,
        },
        {
          name: "UPAO (Urban Poor Affair Office)",
          // path: "/pwd",
          // element: <OscaPage />,
        },
        {
          name: "GAD (Gender and Development)",
          // path: "/pwd",
          element: <OscaPage />,
        },
      ],
    },
  ],
};

export default routes;
