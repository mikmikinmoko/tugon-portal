import Navigation from "../../UnAuthenticated/LandingPage/Navigation/Navigation";
import AboutUs from "./About/AboutUs";
import Announcement from "./Announcement";
import Home from "./Home/Home";
import Features from "../Pages/Features/Features";
import { Footer } from "../../UnAuthenticated/LandingPage/Pages/Page5";

const MainAuth = () => {
  return (
    <>
      <Navigation />
      <section id="home">
        <Home />
      </section>
      <section id="aboutUs">
        <AboutUs />
      </section>
      {/* <section id="annoucement">
        <Announcement />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="footer">
        <Footer>1</Footer>
      </section> */}
    </>
  );
};

export default MainAuth;
