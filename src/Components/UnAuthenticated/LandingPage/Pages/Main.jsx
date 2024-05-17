import Page1 from "../Pages/Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import { Footer } from "./Page5";

const Main = () => {
  return (
    <>
      <div className="">
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Footer />
      </div>
    </>
  );
};

export default Main;
