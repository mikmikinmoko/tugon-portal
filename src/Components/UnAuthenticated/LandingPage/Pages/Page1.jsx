import Navigation from "../Navigation/Navigation";
import {
  atmCard,
  image1,
  image2,
  image3,
  socialcard,
  validId,
} from "../../../../helpers/image";

const Page1 = () => {
  return (
    <>
      <Navigation />
      <section className="bg-[url('src/Assets/img/home.png')] font-medium bg-cover bg-center h-[800px] flex items-center justify-center text-[#ffffff] text-center">
        <div className="px-7">
          <h1 className="text-[42px] font-medium">
            Taytay Unified Governance & Outreach Network
          </h1>
          <p className=" font-light text-center pt-5">
            TUGON represents a forward - thinking and citizen - centric
            approach, promoting effiency, inclusively, and technological and
            outreach activites.
          </p>
          <button className=" mt-24 px-6 py-2 bg-[#ffffff] text-[#274C5B] rounded-md ">
            Register
          </button>
        </div>
      </section>
      <div className="flex justify-between items-center px-16  mt-[-10px]">
        <div className="flex justify-center items-center flex-col pb-24">
          <img src={image1} alt="valid id" />
          <img src={validId} alt="" />
        </div>
        <div className="flex justify-center items-center flex-col mt-16">
          <img src={image2} alt="valid id" />
          <img src={atmCard} alt="" />
        </div>
        <div className="flex justify-center items-center flex-col pb-24">
          <img src={image3} alt="valid id" />
          <img src={socialcard} alt="valid id" />
        </div>
      </div>
    </>
  );
};

export default Page1;
