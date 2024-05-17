import { Button } from "antd";
import Procedure from "../../../../Reusable/Procedure";
import Navigation from "../../../UnAuthenticated/LandingPage/Navigation/Navigation";
import { NavLink } from "react-router-dom";
import { Footer } from "../../../UnAuthenticated/LandingPage/Pages/Page5";
import FAQ from "../../Pages/FAQ/FAQ";
import { pwd } from "../../../../helpers/image";

const PWDPage = () => {
  return (
    <>
      <Navigation />
      <section
        className=" w-full h-full text-[16px] font-['Poppins']"
        id="pwdSection"
      >
        <div
          style={{ backgroundImage: `url(${pwd})` }}
          className="bg-cover bg-center  h-[418px] flex justify-center items-center"
        >
          <div className=" text-[#FFFFFF] text-[36px] font-semibold pt-24">
            PWD ID: Registration
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div className="text-center px-32 py-8 ">
            <div>
              Welcome to the application process for the Persons with
              Disabilities (PWD) Identication (ID) card. {`We're`} here to guide
              you through the steps to obtain your PWD ID. Please follow the
              instructions carefully for a smooth application experience.
            </div>
            <div className="py-5">
              <NavLink to="PWDregistration">
                <Button type="primary">Proceed to Application</Button>
              </NavLink>
            </div>
            <Procedure />
          </div>

          <div className="flex justify-center text-left  bg-[#EFF3FF] text-[#525252] text-[16px] px-32 py-8 ">
            <div className="">
              <h1 className="text-[#3452AE] py-5 font-semibold">
                Coverage and scope
              </h1>
              <div className="py-5 font-semibold">
                Senior citizens aged sixty (60) years and above are eligible for
                assistance under the following criteria:{" "}
              </div>
              <div className="py-3">
                <div>
                  1. Frail, Sickly, or with Disability: Individuals who may be
                  frail, facing health challenges, or living with a disability
                  that impedes their ability to fully engage in daily
                  activities.
                </div>
                <div className="py-3">
                  2. No Pension from Government and Private Institutions: Those
                  who do not receive any form of pension or financial support
                  from either governmental or private institutions.
                </div>
                <div className="py-3">
                  3. No Permanent Source of Income: Senior citizens who lack a
                  consistent, reliable source of income to sustain their
                  livelihood and cover essential expenses.
                </div>
                <div className="py-3">
                  4. No Regular Support from Family or Relatives: Individuals
                  who do not receive regular assistance or support from their
                  family members or relatives to meet their basic needs, such as
                  food, shelter, and healthcare expenses.
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full flex flex-col items-center text-center  h-full px-5 lg:px-32 lg:py-8 scroll-mt-16 font-['Poppins'] text-[18px]"
            id="requirements"
          >
            <div className="">
              <h1 className="text-[30px] font-semibold text-[#3452AE]">
                List of Requirements
              </h1>
              <p className="pb-5">
                Documentation Essentials: Requirements for Participation
              </p>
            </div>

            <div className=" w-full h-full">
              <div className=" grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 text-left gap-3 ">
                <div className="bg-[#EFFFF1] px-6 py-3">
                  <h1 className="text-[#34AE40] py-5 font-semibold">
                    New/Renewal
                  </h1>
                  <div className="px-2">
                    <div className="flex flex-col gap-5 ">
                      <p>1. Accomplished Application Form</p>
                      <p>
                        2. Certificate of Disability w/ {`Physician's`} License
                        Number / Medical Abstract (for Non-Apparent Disability)
                      </p>
                      <p>3. Proof of Residency/Valid ID & Birth Certificate</p>
                      <p>4. 1pc of 1x1 or 2x2 Picture</p>
                      {/* <div className="flex items-center px-2 gap-2">
                        <div className=" w-2 h-2 bg-black rounded-full"></div>
                        <p>Birth Certificate</p>
                      </div>
                      <div className="flex items-center px-2 gap-2">
                        <div className=" w-2 h-2 bg-black rounded-full"></div>
                        <p>Passport</p>
                      </div> */}
                    </div>
                  </div>

                  {/* <div className="px-2">
                    <p>
                      Bring 2 valid ID that can be presented as proff of
                      residency:
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
                  </div> */}
                </div>

                <div className=" bg-[#FFEFEF] py-3">
                  <div className="px-6">
                    <h1 className="text-[#AE3434] py-5 font-semibold">
                      Lost ID
                    </h1>
                    <div className="flex flex-col gap-5 px-2">
                      <p>1. Accomplished Application Form</p>
                      <p>
                        2. Certificate of Disability w/ {`Physician's`} License
                        Number / Medical Abstract (for Non-Apparent Disability)
                      </p>
                      <p>3. Proof of Residency/Valid ID & Birth Certificate</p>
                      <p>4. 1pc of 1x1 or 2x2 Picture</p>
                      <p>5. Affidavit of Loss</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5">
              <NavLink to="PWDregistration">
                <Button type="primary">Proceed to Application</Button>
              </NavLink>
            </div>
          </div>
        </div>
        <FAQ />
      </section>
      <Footer />
    </>
  );
};

export default PWDPage;
