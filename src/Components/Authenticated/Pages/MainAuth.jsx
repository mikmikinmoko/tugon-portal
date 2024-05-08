import Home from "./Authenticated/Home/Home";
import AboutUs from "./Authenticated/About/AboutUs";
import Announcement from "./Authenticated/Announcement";
import Achievements from "./Authenticated/Achievements";
// import Features from ".";
import TugonId from "./Authenticated/TugonId";

const MainAuth = () => {
  return (
    <>
      <Home />
      <AboutUs />
      <Achievements />
      <Announcement />
      {/* <Features /> */}
      <TugonId />
    </>
  );
};

export default MainAuth;
