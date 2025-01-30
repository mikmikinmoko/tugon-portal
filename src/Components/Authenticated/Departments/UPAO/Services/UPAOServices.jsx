import { Button } from "antd";
import { NavLink } from "react-router-dom";
import Procedure from "../../../../../Reusable/Procedure";
import FAQ from "../../../Pages/FAQ/FAQ";

const UPAOServices = () => {
  return (
    <>
      <section className=" w-full h-full font-['Poppins'] text-[18px]">
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
          <NavLink to="/upao/registration">
            <Button
              type="primary"
              onClick={() => <NavLink to="/upao/registration" />}
            >
              Proceed to Application
            </Button>
          </NavLink>
        </div>
      </section>
      <div className="flex flex-col items-center text-center py-8 px-5 lg:px-32">
        <Procedure />
      </div>
      <div
        className="w-full flex flex-col items-center text-center  h-full px-5 lg:px-32 lg:py-8 scroll-mt-16 font-['Poppins'] text-[18px]"
        id="requirements"
      >
        <div className="">
          <h1 className="text-[36px] font-semibold text-[#3452AE]">
            List of Requirements
          </h1>
          <p className="pb-5">
            Documentation Essentials: Requirements for Participation
          </p>
        </div>

        <div className=" w-full h-full">
          <div className=" grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 text-left gap-3 ">
            <div className="bg-[#EFFFF1] px-6 py-3">
              <h1 className="text-[#34AE40] py-5 font-semibold">New/Renewal</h1>
              <div className="px-2">
                <div className="flex flex-col gap-2">
                  <p>1. 1pc 2x2 Picture</p>
                  <p>2. Bring 1 of the following</p>
                  <div className="flex items-center px-2 gap-2">
                    <div className=" w-2 h-2 bg-black rounded-full"></div>
                    <p>Birth Certificate</p>
                  </div>
                  <div className="flex items-center px-2 gap-2">
                    <div className=" w-2 h-2 bg-black rounded-full"></div>
                    <p>Passport</p>
                  </div>
                </div>
              </div>

              <div className="px-2">
                <p>
                  Bring 2 valid ID that can be presented as proff of residency:
                </p>
                <div className="px-2">
                  <div className="flex items-center gap-2">
                    <div className=" w-2 h-2 bg-black rounded-full"></div>
                    <p>Philippine National ID</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className=" w-2 h-2 bg-black rounded-full"></div>
                    <p>{`Voter's`} ID / Voter Certificate</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className=" w-2 h-2 bg-black rounded-full"></div>
                    <p>{`Driver's`} License</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className=" w-2 h-2 bg-black rounded-full"></div>
                    <p>NBI Clearnace</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className=" w-2 h-2 bg-black rounded-full"></div>
                    <p>Police Clearance / ID</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className=" w-2 h-2 bg-black rounded-full"></div>
                    <p>GSIS UMMID</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className=" w-2 h-2 bg-black rounded-full"></div>
                    <p>PhilHealth ID</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className=" w-2 h-2 bg-black rounded-full"></div>
                    <p>Certificate of Residency / Barangay ID</p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" bg-[#FFEFEF]">
              <div className="px-6">
                <h1 className="text-[#AE3434] py-5 font-semibold">Lost ID</h1>
                <div className="flex flex-col gap-2 ">
                  <div className="flex items-center px-2 gap-2">
                    <div className=" w-2 h-2 bg-black rounded-full"></div>
                    <p>Proof of Residency/Brgy. Clearance</p>
                  </div>
                  <div className="flex items-center px-2 gap-2">
                    <div className=" w-2 h-2 bg-black rounded-full"></div>
                    <p>1 pc 1x1 or 2x2 Picture</p>
                  </div>
                  <div className="flex items-center px-2 gap-2">
                    <div className=" w-2 h-2 bg-black rounded-full"></div>
                    <p>Affidavit of Loss</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <NavLink to="registration">
            <Button type="primary">Proceed to Application</Button>
          </NavLink>
        </div>
      </div>
      <FAQ />
    </>
  );
};

export default UPAOServices;
