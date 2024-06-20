import { NavLink } from "react-router-dom";
import {
  stepImg1,
  stepImg2,
  stepArrow,
  stepImg3,
  stepImg4,
  stepImg5,
  arrowDown,
} from "../helpers/image";

const Procedure = () => {
  return (
    <>
      <div className="w-full h-full font-['Poppins'] text-[18px] ">
        <h1 className="text-[#3452AE] text-[28px]">Application Procedure</h1>
        <p className="py-3">
          Once {`you've`} filled out and submitted your application form,
          {`we'll`}
          send you an email to let you know when your application has been
          approved.
        </p>
      </div>
      <div className="flex flex-col text-[14px] items-center font-['Poppins']">
        <div className="py-5">
          <p className=" bg-[#F4F7FF] text-[#3452AE] py-5 px-10 shadow-md">
            Step 1
          </p>
        </div>
        <div className=" grid grid-cols-1  md:grid-cols-5  lg:grid-cols-5  place-items-center gap-5">
          <div className="flex flex-col items-center text-center">
            <img src={stepImg1} />
            <div>
              Check the PWD ID{" "}
              <a
                href="#requirements"
                className=" hover:text-blue-600 transition-all"
              >
                Application Requirements.
              </a>
            </div>
          </div>
          <div className="hidden lg:block md:block">
            <img src={stepArrow} />
          </div>
          <div className="block  md:hidden lg:hidden">
            <img src={arrowDown} />
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={stepImg2} />
            <p>Fill up application form.</p>
          </div>
          <div className="hidden lg:block md:block">
            <img src={stepArrow} />
          </div>
          <div className="block  md:hidden lg:hidden">
            <img src={arrowDown} />
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={stepImg3} />
            <p>Attach and submit requirements.</p>
          </div>
        </div>
        <div className="py-5">
          <p className=" bg-[#F4F7FF] text-[#3452AE] py-5 px-10 shadow-md">
            Step 2
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-5">
          <div className="flex flex-col items-center text-center">
            <img src={stepImg4} />
            <p>The application will be reviewed and approved by the OSCA.</p>
          </div>
          <div className="hidden lg:block md:block">
            <img src={stepArrow} />
          </div>
          <div className="block  md:hidden lg:hidden">
            <img src={arrowDown} />
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={stepImg5} />
            <p>Once the application is approved, you will receive an email.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Procedure;
