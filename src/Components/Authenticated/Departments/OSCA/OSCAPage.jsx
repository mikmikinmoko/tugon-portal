import { NavLink } from "react-router-dom";
import { seniorImg1, seniorImg2 } from "../../../../helpers/image";
import Navigation from "../../../UnAuthenticated/LandingPage/Navigation/Navigation";
import { Footer } from "../../../UnAuthenticated/LandingPage/Pages/Page5";
import { motion } from "framer-motion";
import { useGetIdStatus } from "../../../../store/controller/services";
import { Badge } from "antd";

const OSCAPage = () => {
  const getIdStatus = useGetIdStatus();
  console.log(getIdStatus);
  return (
    <>
      <section className=" w-full h-full font-['Poppins'] text-[18px]">
        <div className="flex flex-col min-h-screen justify-center items-center py-8">
          <div className=" text-[#001862] text-[36px]">OSCA: Citizen</div>
          <div className="text-[#525252] text-center">
            OSCA: Citizen - Your Gateway to Senior Citizen Services
          </div>
          <div className="flex flex-col lg:flex-row gap-4 py-7 relative">
            {/* add motion when hover */}
            <NavLink to="services">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="transition-transform duration-300 ease-in-out"
              >
                {getIdStatus === 1 ? (
                  <div className="absolute overflow-hidden  w-[405px] h-[395px] font-['Poppins']">
                    <div className="absolute transform -rotate-45 bg-gray-600 text-center text-white font-semibold py-1 left-[-170px] top-[200px] w-[700px] overflow-hidden">
                      {getIdStatus?.data?.data[0]?.status}
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <img
                  // whileHover={{ scale: 1.05 }}
                  // whileTap={{ scale: 0.9 }}
                  // animate={{}}
                  src={seniorImg1}
                />
              </motion.div>
            </NavLink>
            <NavLink>
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="transition-transform duration-300 ease-in-out"
                src={seniorImg2}
              />
            </NavLink>
          </div>
        </div>
      </section>

      <div className="flex justify-end items-end"></div>
    </>
  );
};

export default OSCAPage;
