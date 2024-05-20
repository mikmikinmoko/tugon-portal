import { NavLink } from "react-router-dom";
import { seniorImg1, seniorImg2 } from "../../../../helpers/image";
import Navigation from "../../../UnAuthenticated/LandingPage/Navigation/Navigation";
import { Footer } from "../../../UnAuthenticated/LandingPage/Pages/Page5";
import { motion } from "framer-motion";

const OSCAPage = () => {
  return (
    <>
      <Navigation />
      <section className=" w-full h-screen font-['Poppins'] text-[18px]">
        <div className="flex flex-col min-h-screen justify-center items-center py-8">
          <div className=" text-[#001862] text-[36px]">OSCA: Citizen</div>
          <div className="text-[#525252] text-center">
            OSCA: Citizen - Your Gateway to Senior Citizen Services
          </div>
          <div className="flex flex-col lg:flex-row gap-4 py-7">
            {/* add motion when hover */}
            <NavLink to="services">
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                animate={{}}
                src={seniorImg1}
              />
            </NavLink>
            <NavLink>
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                src={seniorImg2}
              />
            </NavLink>
          </div>
        </div>
        <div className="flex   justify-end items-end">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default OSCAPage;
