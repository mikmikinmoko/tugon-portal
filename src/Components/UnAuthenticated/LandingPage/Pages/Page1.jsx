import Navigation from "../Navigation/Navigation";
import {
  atmCard,
  image1,
  image2,
  image3,
  socialcard,
  validId,
} from "../../../../helpers/image";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

const Page1 = () => {
  return (
    <>
      <Navigation />
      <section className="bg-[url('src/Assets/img/home.png')] flex justify-center item font-medium bg-cover bg-center h-screen lg:h-[994px]  text-[#ffffff] px-2 lg:px-16 lg:py-44 py-24  text-center">
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
      </section>
      <div className="lg:flex justify-between items-center mx-16">
        <div className="flex justify-center items-center flex-col ">
          <img src={image1} alt="valid id" />
          <img src={validId} alt="" />
        </div>
        <div className="flex justify-center items-center flex-col lg:pt-44">
          <img src={image2} alt="valid id" />
          <img src={atmCard} alt="" />
        </div>
        <div className="flex justify-center items-center flex-col">
          <img src={image3} alt="valid id" />
          <img src={socialcard} alt="valid id" />
        </div>
      </div>
    </>
  );
};

export default Page1;
