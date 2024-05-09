import {
  aboutImg1,
  aboutImg2,
  aboutImg3,
  down,
  top,
} from "../../../../helpers/image";

const AboutUs = () => {
  return (
    <>
      <section
        className="font-normal text-[18px] text-[#1C1E53] w-full h-screen bg-[#F4F9FF] px-5 lg:px-14 font-['Poppins'] lg:py-5 "
        id="/aboutUs"
      >
        <div className="flex justify-between">
          <div className="flex-1 py-24">
            <p className="text-[24px]">ABOUT</p>
            <p className="text-[40px] py-5 font-medium">
              TUGON : Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor.
            </p>
            <p className="py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 place-items-center  ">
              <div className="py-2">
                <img src={aboutImg1} />
                <img src={aboutImg2} />
              </div>
              <div>
                <img src={top} />
                <img src={aboutImg3} />
                <img src={down} />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-between">
          <div className="flex-1">
            <span>ABOUT</span>
            <div>
              <p>
                TUGON : Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 place-items-center bg-slate-500 ">
              <div className="py-2">
                <img src={aboutImg1} />
                <img src={aboutImg2} />
              </div>
              <div>3</div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default AboutUs;
