// import { senior } from "../../../../helpers/image";
import { NavLink } from "react-router-dom";
import { seniorImg1, seniorImg2 } from "../../../../helpers/image";
import Navigation from "../../../UnAuthenticated/LandingPage/Navigation/Navigation";
import { Footer } from "../../../UnAuthenticated/LandingPage/Pages/Page5";

const OSCAPage = () => {
  return (
    <>
      <Navigation />
      <section className=" w-full h-screen font-['Poppins'] text-[18px] ">
        <div className="flex flex-col justify-center items-center py-9">
          <div className=" text-[#001862] text-[36px]">OSCA: Citizen</div>
          <div className="text-[#525252] text-center">
            OSCA: Citizen - Your Gateway to Senior Citizen Services
          </div>
          <div className="flex flex-col lg:flex-row gap-4 py-7">
            {/* add motion when hover */}
            <NavLink to="services">
              <div className="">
                <img src={seniorImg1} />
              </div>
            </NavLink>
            <div>
              <img src={seniorImg2} />
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default OSCAPage;
