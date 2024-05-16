import Navigation from "../../UnAuthenticated/LandingPage/Navigation/Navigation";
import AboutUs from "./About/AboutUs";
import Announcement from "./Announcement";
import Home from "./Home/Home";
import Features from "../Pages/Features/Features";
import { Footer } from "../../UnAuthenticated/LandingPage/Pages/Page5";
import FAQ from "./FAQ/FAQ";

const MainAuth = () => {
  return (
    <>
      <Navigation />
      <Home />
      <AboutUs />
      <Announcement />
      <FAQ />
      <Footer />
    </>
  );
};

export default MainAuth;
