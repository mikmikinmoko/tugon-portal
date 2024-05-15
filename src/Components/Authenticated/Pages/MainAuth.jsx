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
      <section id="home">
        <Home />
      </section>
      <AboutUs />
      <section id="announcement">
        <Announcement />
      </section>
      <FAQ />
      {/*<section id="features">
        <Features />
      </section>*/}
      <section id="footer">
        <Footer></Footer>
      </section>
    </>
  );
};

export default MainAuth;
