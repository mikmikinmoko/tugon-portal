import { Button } from "antd";
import Navigation from "../../../../UnAuthenticated/LandingPage/Navigation/Navigation";
import { Footer } from "../../../../UnAuthenticated/LandingPage/Pages/Page5";
import { NavLink } from "react-router-dom";
import Procedure from "../../../../../Reusable/Procedure";
import FAQ from "../../../Pages/FAQ/FAQ";
const features = [
  {
    id: "01",
    title: "Title Here",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    id: "02",
    title: "Title Here",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    id: "03",
    title: "Title Here",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
];

const OSCAServicesPage = () => {
  return (
    <>
      <Navigation />
      <section className=" w-full h-full font-['Poppins'] font-[18px]">
        <div className=" bg-senior bg-cover bg-center  h-[418px] flex flex-col justify-center items-center">
          <div className="  lg:pt-14 md:px-32 lg:px-32">
            <p className=" sm:text-[24px] md:text-[30px] lg:text-[36px] text-[#FFFFFF] font-semibold text-center">
              Senior Citizen ID Registration: Streamlining Access to Essential
              Services and Benefits for Elderly Individuals
            </p>
          </div>
        </div>
        <div className=" text-center px-5 md:px-28 lg:px-32">
          <div className="py-10">
            <p className="">
              Welcome to the Application Process for Senior Citizen ID:
              Empowering Elderly Individuals with Access to Essential Services
              and Benefits.
              {`We're`} here to assist you every step of the way as you embark
              on obtaining your Senior Citizen ID. Please carefully follow the
              instructions provided below to ensure a seamless application
              experience, tailored to your needs and convenience.
            </p>
          </div>
          <NavLink to="registration">
            <Button type="primary">Proceed to Application</Button>
          </NavLink>
        </div>
      </section>
      <div className="flex flex-col items-center text-center py-16 px-5 lg:px-32">
        <Procedure />
      </div>
      <div
        className="w-full flex flex-col items-center text-center  h-full px-5 lg:px-32 py-16"
        id="requirements"
      >
        <div className="py-3">
          <h1 className=" text-[36px] font-semibold text-[#3452AE] py-5">
            List of Requirements
          </h1>
          <p className="py-5">
            Documentation Essentials: Requirements for Participation
          </p>
        </div>
        <div className=" w-full h-full">
          <div className=" grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 text-left gap-3 ">
            <div className="bg-[#EFFFF1] px-8 py-5">
              <h1>New/Renewal</h1>
              <div className="px-5">
                <div className="">
                  <p>1. 1pc 2x2 Picture</p>
                  <p>2. Bring 1 of the following</p>
                  <div className="flex items-center">
                    <div className=" w-2 h-2 bg-black rounded-full"></div>
                    <p>Birth Certificate</p>
                  </div>
                  <div className="flex items-center">
                    <div className=" w-2 h-2 bg-black rounded-full"></div>
                    <p>Passport</p>
                  </div>
                </div>
              </div>

              <div className="px-5">
                <p>
                  Bring 2 valid ID that can be presented as proff of residency:
                </p>
                <div className="flex items-center">
                  <div className=" w-2 h-2 bg-black rounded-full"></div>
                  <p>Philippine National ID</p>
                </div>
                <div className="flex items-center">
                  <div className=" w-2 h-2 bg-black rounded-full"></div>
                  <p>{`Voter's`} ID / Voter Certificate</p>
                </div>
                <div className="flex items-center">
                  <div className=" w-2 h-2 bg-black rounded-full"></div>
                  <p>{`Driver's`} License</p>
                </div>
                <div className="flex items-center">
                  <div className=" w-2 h-2 bg-black rounded-full"></div>
                  <p>NBI Clearnace</p>
                </div>
                <div className="flex items-center">
                  <div className=" w-2 h-2 bg-black rounded-full"></div>
                  <p>Police Clearance / ID</p>
                </div>
                <div className="flex items-center">
                  <div className=" w-2 h-2 bg-black rounded-full"></div>
                  <p>GSIS UMMID</p>
                </div>
                <div className="flex items-center">
                  <div className=" w-2 h-2 bg-black rounded-full"></div>
                  <p>PhilHealth ID</p>
                </div>
                <div className="flex items-center">
                  <div className=" w-2 h-2 bg-black rounded-full"></div>
                  <p>Certificate of Residency / Barangay ID</p>
                </div>
              </div>
            </div>

            <div className=" bg-[#FFEFEF] px-8 py-5">
              <h1>For Lost ID</h1>
              <div className="px-5">
                <div className="flex items-center">
                  <div className=" w-2 h-2 bg-black rounded-full"></div>
                  <p>Proof of Residency / Barangay Clearance</p>
                </div>
                <div className="flex items-center">
                  <div className=" w-2 h-2 bg-black rounded-full"></div>
                  <p>1 pc of 1x1 or 2x1 Picture</p>
                </div>
                <div className="flex items-center">
                  <div className=" w-2 h-2 bg-black rounded-full"></div>
                  <p>Affidavit of Loss</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" py-10">
            <NavLink to="registration">
              <Button type="primary">Proceed to Application</Button>
            </NavLink>
          </div>
        </div>
      </div>
      <FAQ />
      <div>
        <Footer>asdas</Footer>
      </div>
    </>
  );
};

export default OSCAServicesPage;
