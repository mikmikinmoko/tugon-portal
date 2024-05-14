import { Button } from "antd";
import Procedure from "../../../../Reusable/Procedure";
import Navigation from "../../../UnAuthenticated/LandingPage/Navigation/Navigation";
import { NavLink } from "react-router-dom";

const PWDPage = () => {
  return (
    <>
      <Navigation />
      <section className=" w-full h-screen text-[16px] font-['Poppins']">
        <div className="bg-pwd bg-cover bg-center w-full h-[418px] flex justify-center items-center">
          <div className=" text-[#FFFFFF] text-[36px] font-semibold pt-24">
            PWD ID: Registration
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-10">
          <div className="py-10 lg:w-[1224px] text-center ">
            Welcome to the application process for the Persons with Disabilities
            (PWD) Identication (ID) card. {`We're`} here to guide you through
            the steps to obtain your PWD ID. Please follow the instructions
            carefully for a smooth application experience.
            <div className=" py-10">
              <Button type="primary">Proceed to Registration</Button>
            </div>
            <div className="py-5">
              <h1 className="text-[#3452AE] text-[28px]">
                Application Procedure
              </h1>
              Once {`you've`} filled out and submitted your application form,
              {`we'll`}
              send you an email to let you know when your application has been
              approved.
            </div>
            <Procedure />
            <div className="flex justify-center text-left  bg-[#EFF3FF] text-[#525252]">
              <div className="text-[16px] lg:w-[1024px] px-5 py-5">
                <h1 className="text-[#3452AE] py-3">Coverage and scope</h1>
                <div className="py-5">
                  Senior citizens aged sixty (60) years and above are eligible
                  for assistance under the following criteria:{" "}
                </div>
                <div className="px-3">
                  <div>
                    1. Frail, Sickly, or with Disability: Individuals who may be
                    frail, facing health challenges, or living with a disability
                    that impedes their ability to fully engage in daily
                    activities.
                  </div>
                  <div className="py-3">
                    2. No Pension from Government and Private Institutions:
                    Those who do not receive any form of pension or financial
                    support from either governmental or private institutions.
                  </div>
                  <div className="py-3">
                    3. No Permanent Source of Income: Senior citizens who lack a
                    consistent, reliable source of income to sustain their
                    livelihood and cover essential expenses.
                  </div>
                  <div className="py-3">
                    4. No Regular Support from Family or Relatives: Individuals
                    who do not receive regular assistance or support from their
                    family members or relatives to meet their basic needs, such
                    as food, shelter, and healthcare expenses.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center h-screen py-24">
            <div className="py-3">
              <h1 className=" text-[36px] font-semibold text-[#3452AE] py-2">
                List of Requirements
              </h1>
              <p>Documentation Essentials: Requirements for Participation</p>
            </div>
            <div className=" w-full h-full lg:px-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:grid-cols-2 text-left">
                <div className="bg-[#EFFFF1] lg:w-[605px] px-8 py-5">
                  <div className=" place-items-center">
                    <h1>New/Renewal</h1>
                  </div>
                  <div className="px-5 py-2">
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
                </div>

                <div className=" bg-[#FFEFEF] lg:w-[605px] lg:h-[297px] px-8 py-5">
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
              <div className=" py-5 flex justify-center">
                <NavLink to="registration">
                  <Button type="primary">Proceed to Application</Button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PWDPage;
