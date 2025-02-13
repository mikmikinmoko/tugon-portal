import { Carousel } from "antd";
import Title from "../../../../Reusable/Title";
import {
  aboutImg1,
  aboutImg2,
  aboutImg3,
  aboutMobile,
  down,
  eventImg1,
  eventImg2,
  top,
} from "../../../../helpers/image";
import Navigation from "../../../UnAuthenticated/LandingPage/Navigation/Navigation";

const AboutUs = () => {
  return (
    <>
      {/* <section
        className="font-normal text-[18px] text-[#002B67] w-full md:py-12 lg:py-18 text-justify h-full sm:h-full md:h-screen lg:h-full font-['Poppins'] "
        id="aboutUs"
      > */}
      <section
        className="font-normal sm:text-[16px] lg:text-[18px] text-[#000000] w-full h-full  text-justify  font-['Poppins'] ] scroll-mt-16 "
        id="aboutUs"
      >
        <div className="flex justify-center items-center px-5 lg:px-32 ">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-x-6">
            <div>
              <div className="py-3 lg:py-16">
                <p className="text-[24px] hidden sm:block md:block lg:block text-[#002B67]">
                  ABOUT
                </p>
                <div className="block sm:hidden md:hidden lg:hidden">
                  <Title>About Us</Title>
                </div>
                <img
                  src={aboutMobile}
                  className="block sm:hidden md:hidden lg:hidden py-3"
                />
                <p className="text-[32px] text-[#002B67] text-left py-5 font-medium hidden sm:block md:block lg:block">
                  TUGON : Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor.
                </p>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <div className="hidden sm:grid md:grid lg:grid gap-2 grid-cols-3 md:grid-cols-3 lg:grid-cols-2 py-5 ">
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
            {/* <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 place-items-center gap-3"> */}
            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2  place-items-center gap-3">
              <Carousel
                autoplay
                slidesToShow={2}
                dotPosition="right"
                speed={3000}
                autoplaySpeed={4000}
              >
                <div>
                  <img src={aboutImg1} className=" py-2" />
                </div>
                <div>
                  <img src={aboutImg2} className=" py-2" />
                </div>

                {/* <div className="">
                  <img src={eventImg1} className="" />
                </div>
                <div>
                  <img src={aboutImg3} className="" />
                </div>
                <div>
                  <img src={eventImg2} className="" />
                </div> */}
              </Carousel>
              <Carousel
                autoplay
                dotPosition="right"
                slidesToShow={3}
                speed={3000}
                autoplaySpeed={4000}
              >
                <div>
                  <img src={eventImg1} className=" py-2" />
                </div>
                <div>
                  <img src={aboutImg3} className=" py-2" />
                </div>
                <div>
                  <img src={eventImg2} className=" py-2" />
                </div>
                {/* <div className="grid gap-y-6">
                  <img src={aboutImg1} className="" />
                  <img src={aboutImg2} className=" " />
                </div>
                <div className="grid gap-y-3">
                  <img src={eventImg1} className="" />
                  <img src={aboutImg3} className="" />
                  <img src={eventImg2} className="" />
                </div> */}
              </Carousel>
            </div>
            <div className="hidden sm:flex lg:hidden justify-between items-center gap-2 ">
              <div>
                <img src={aboutImg1} className=" " />
              </div>
              <div>
                <img src={aboutImg2} className=" " />
              </div>
              <div>
                <img src={aboutImg3} className="" />
              </div>
            </div>
            <div>
              <p className="block sm:hidden md:hidden lg:hidden">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
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
