import { Button } from "antd";
import Navigation from "../../../../UnAuthenticated/LandingPage/Navigation/Navigation";
import {
  stepArrow,
  stepImg1,
  stepImg2,
  stepImg3,
  stepImg4,
  stepImg5,
} from "../../../../../helpers/image";

const OSCAServicesPage = () => {
  return (
    <>
      <Navigation />
      <section className=" w-full h-full font-['Poppins'] font-[18px]">
        <div className=" bg-senior bg-cover bg-center w-full h-[418px] flex flex-col justify-center items-center">
          <div className=" w-5/6 pt-14">
            <p className=" text-[36px] text-[#FFFFFF] font-semibold text-center">
              Senior Citizen ID Registration: Streamlining Access to Essential
              Services and Benefits for Elderly Individuals
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center px-5 lg:px-40 text-center py-10">
          <div className="  py-5 font-medium">
            <p>
              Welcome to the Application Process for Senior Citizen ID:
              Empowering Elderly Individuals with Access to Essential Services
              and Benefits.
              {`We're`} here to assist you every step of the way as you embark
              on obtaining your Senior Citizen ID. Please carefully follow the
              instructions provided below to ensure a seamless application
              experience, tailored to your needs and convenience.
            </p>
          </div>
          <Button type="primary">Proceed to Application</Button>
          <div className="py-5">
            <h1 className="text-[#3452AE] text-[36px]">
              Application Procedure
            </h1>
            <p>
              Once {`you've`} filled out and submitted your application form,
              {`we'll`}
              send you an email to let you know when your application has been
              approved.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-2">
            <p className=" bg-[#F4F7FF] text-[#3452AE] py-5 px-10 shadow-md">
              Step 1
            </p>
            <div className="py-5 grid grid-cols-1 gap-5  md:grid-cols-5 md:grid-rows-3 lg:grid-cols-5 lg:grid-rows-3 place-items-center px-16">
              <div className="flex flex-col items-center text-center">
                <img src={stepImg1} />
                <p>Check the PWD ID Application Requirements.</p>
              </div>
              <div className="hidden lg:block md:block">
                <img src={stepArrow} />
              </div>
              <div className="flex flex-col items-center text-center">
                <img src={stepImg2} />
                <p>Fill up application form.</p>
              </div>
              <div className="hidden lg:block md:block">
                <img src={stepArrow} />
              </div>
              <div className="flex flex-col items-center text-center">
                <img src={stepImg3} />
                <p>Attach and submit requirements.</p>
              </div>
              <div className=" lg:col-span-5 md:col-span-5">
                <p className=" bg-[#F4F7FF] text-[#3452AE] py-5 px-10 shadow-md">
                  Step 2
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src={stepImg4} />
                <p>
                  The application will be reviewed and approved by the OSCA.
                </p>
              </div>
              <div className="hidden lg:block md:block">
                <img src={stepArrow} />
              </div>
              <div className="flex flex-col items-center text-center">
                <img src={stepImg5} />
                <p>
                  Once the application is approved, you will receive an email.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center  h-screen">
          <div className="py-10">
            <h1 className=" text-[36px] font-semibold text-[#3452AE] py-2">
              List of Requirements
            </h1>
            <p>Documentation Essentials: Requirements for Participation</p>
          </div>
          <div className=" w-full h-full lg:px-24">
            {/* <div className="grid grid-cols-2">
              <div className="bg-[#EFFFF1] lg:w-[605px] lg:h-[577px] px-8 py-5">
                1
              </div>
              <div className="bg-[#EFFFF1] lg:w-[605px] lg:h-[577px] px-8 py-5">
                2
              </div>
            </div> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 text-left">
              <div className="bg-[#EFFFF1] lg:w-[605px] lg:h-[577px] px-8 py-5">
                <div className=" place-items-center">
                  <h1>New/Renewal</h1>
                  <p>1. 1pc 2x2 Picture</p>
                </div>
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
              <div className=" bg-[#FFEFEF] lg:w-[605px] lg:h-[297px] px-8 py-5">
                2
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OSCAServicesPage;
