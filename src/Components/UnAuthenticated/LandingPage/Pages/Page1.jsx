import Navigation from "../Navigation/Navigation";
import {
  atmCard,
  image1,
  image2,
  image3,
  socialcard,
  validId,
  home,
} from "../../../../helpers/image";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

const Page1 = () => {
  return (
    <>
      <Navigation />

      <section
        style={{
          backgroundImage: `url(${home})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="flex justify-center items-center font-medium  h-screen  text-[#ffffff] lg:py-44 py-24  text-center "
      >
        <div className="">
          <div className=" w-[800px] h-[360px] pt-8">
            <h1 className="text-[40px] lg:text-[64px] font-medium  font-['Almarai']">
              Taytay Unified Governance & Outreach Network
            </h1>
            <div className=" font-light text-lg text-center pt-5">
              <p>
                TUGON represents a forward - thinking and citizen - centric
                approach, promoting effiency, inclusively, and technological and
                outreach activites.
              </p>
            </div>
            <div className=" mt-24 px-6 py-2  rounded-md w-full ">
              <NavLink to="/registration">
                <Button type="primary" size="large" className=" w-1/5 ">
                  Register
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <div className="px-32 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:grid-rows-2 lg:grid-rows-2 place-items-center">
        <div className="flex flex-col items-center">
          <img src={image1} alt="valid id" />
          <img src={validId} alt="" />
        </div>
        <div className=" row-span-2 flex flex-col items-center">
          <img src={image2} alt="valid id" />
          <img src={atmCard} alt="" />
        </div>
        <div className="flex flex-col items-center">
          <img src={image3} alt="valid id" />
          <img src={socialcard} alt="valid id" />
        </div>
      </div>
    </>
  );
};

export default Page1;
