import Title from "../../../../Reusable/Title";
import {
  aboutImg1,
  aboutImg2,
  aboutImg3,
  aboutMobile,
  down,
  top,
} from "../../../../helpers/image";

const AboutUs = () => {
  return (
    <>
      <section
        className="font-normal text-[18px] text-[#002B67] w-full text-justify h-screen sm:h-full md:h-screen lg:h-full font-['Poppins'] "
        id="/aboutUs"
      >
        <div className="flex justify-center items-center px-5 lg:px-32 ">
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <div className="py-5 lg:py-16">
                <p className="text-[24px] hidden sm:block md:block lg:block ">
                  ABOUT
                </p>
                <div className="block sm:hidden md:hidden lg:hidden">
                  <Title>About Us</Title>
                </div>
                <img
                  src={aboutMobile}
                  className="block sm:hidden md:hidden lg:hidden"
                />
                <p className="text-[32px] text-left py-5 font-medium hidden sm:block md:block lg:block">
                  TUGON : Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor.
                </p>
                <p className="py-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <div className="hidden sm:grid md:grid lg:grid grid-cols-1 md:grid-cols-3 lg:grid-rows-3 lg:grid-cols-2 ">
                  <div className="flex items-center gap-3">
                    &#10003; <h1>Features Here</h1>
                  </div>
                  <div className="flex items-center gap-3">
                    &#10003; <h1>Features Here</h1>
                  </div>
                  <div className="flex items-center gap-3">
                    &#10003; <h1>Features Here</h1>
                  </div>
                  <div className="flex items-center gap-3">
                    &#10003; <h1>Features Here</h1>
                  </div>
                  <div className="flex items-center gap-3">
                    &#10003; <h1>Features Here</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden justify-center items-center lg:flex">
              <div className="flex-1 ">
                <img src={aboutImg1} className="py-5 " />
                <img src={aboutImg2} className="py-5 " />
              </div>
              <div className="flex flex-col gap-5">
                <img src={top} className="" />
                <img src={aboutImg3} className="" />
                <img src={down} className="" />
              </div>
            </div>
          </div>
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 ">
            <div className=" ">
              <p className="text-[24px]">ABOUT</p>
              <p className="text-[40px] py-5 font-medium">
                TUGON : Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor.
              </p>
              <p className="py-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <div className="grid grid-cols-2  ">
              <div className="">
                <img src={aboutImg1} />
                <img src={aboutImg2} />
              </div>
              <div>
                <img src={top} />
                <img src={aboutImg3} />
                <img src={down} />
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
