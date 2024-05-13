import { Button } from "antd";
import Navigation from "../../../../UnAuthenticated/LandingPage/Navigation/Navigation";
import { Footer } from "../../../../UnAuthenticated/LandingPage/Pages/Page5";
import { NavLink } from "react-router-dom";
import Procedure from "../../../../../Reusable/Procedure";
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
        <div className=" bg-senior bg-cover bg-center w-full h-[418px] flex flex-col justify-center items-center">
          <div className=" w-5/6 pt-14">
            <p className=" text-[36px] text-[#FFFFFF] font-semibold text-center">
              Senior Citizen ID Registration: Streamlining Access to Essential
              Services and Benefits for Elderly Individuals
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center px-5 lg:px-40 text-center py-10">
          <div className="  py-5 font-medium lg:w-[1233px]">
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
          <NavLink to="registration">
            <Button type="primary">Proceed to Application</Button>
          </NavLink>
          <div className="py-10">
            <h1 className="text-[#3452AE] text-[28px]">
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
          <Procedure />
        </div>
        <div className="flex flex-col items-center text-center  h-screen">
          <div className="py-3">
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
                </div>

                <div>
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

                <div>
                  <p>
                    Bring 2 valid ID that can be presented as proff of
                    residency:
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

              <div className=" bg-[#FFEFEF] lg:w-[605px] lg:h-[297px] px-8 py-5">
                <h1>For Lost ID</h1>
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
            <div className=" py-5">
              <NavLink to="registration">
                <Button type="primary">Proceed to Application</Button>
              </NavLink>
            </div>
          </div>
          <div className="w-full h-full py-10 text-[#525252]">
            <div className="py-5">
              <h1 className=" text-[#3452AE] text-[32px] font-semibold py-3">
                Frequently Asked Question
              </h1>
              <p className=" font-medium">
                Clarifying the Journey: Senior Citizen ID Registration FAQs
              </p>
            </div>
            {features.map((feat) => (
              <div
                key={feat.id}
                className=" lg:px-52  py-7 flex flex-col lg:flex-row gap-4 text-[#234F8B] font-['Kanit']"
              >
                <div className="flex lg:flex-row gap-2 flex-col flex-1 border-b-2 pb-4">
                  <div className=" text-3xl">{feat.id}.</div>
                  <div className="flex-1 text-3xl ">{feat.title}</div>
                  <div className="flex-1 text-justify text-[#2E2E2E] text-[18px] font-normal font-['Poppins']">
                    {feat.desc}
                  </div>
                </div>
              </div>
            ))}
            <div className="w-full flex items-center justify-center py-5 ">
              <div className="w-[919px] h-54">
                <p>
                  Thank you for choosing to apply for a Senior Citizen ID
                  through our platform. We appreciate your cooperation
                  throughout the application process.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};

export default OSCAServicesPage;
