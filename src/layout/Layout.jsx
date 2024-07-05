import { Outlet } from "react-router-dom";
import Navigation from "../Components/UnAuthenticated/LandingPage/Navigation/Navigation";
import { Footer } from "../Components/UnAuthenticated/LandingPage/Pages/Page5";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
