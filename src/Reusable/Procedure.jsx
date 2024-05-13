import {
  stepImg1,
  stepImg2,
  stepArrow,
  stepImg3,
  stepImg4,
  stepImg5,
} from "../helpers/image";

const Procedure = () => {
  return (
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
          <p>The application will be reviewed and approved by the OSCA.</p>
        </div>
        <div className="hidden lg:block md:block">
          <img src={stepArrow} />
        </div>
        <div className="flex flex-col items-center text-center">
          <img src={stepImg5} />
          <p>Once the application is approved, you will receive an email.</p>
        </div>
      </div>
    </div>
  );
};

export default Procedure;
