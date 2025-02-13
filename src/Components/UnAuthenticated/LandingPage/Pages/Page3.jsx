import { page3Img, page3Img2 } from "../../../../helpers/image";

const Page3 = () => {
  return (
    <>
      <section className="w-full h-full px-5 lg:px-32 lg:py-8 text-[#274C5B] font-['Poppins']">
        <div className="flex items-center justify-center flex-col  ">
          <div className="text-center text-[18px]">
            <h1 className="lg:text-[3rem] text-[2rem] font-bold">
              TUGON Application Procedure
            </h1>
            <div className="lg:px-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              nobis, in libero sunt dolorem voluptas consequatur corporis unde
              commodi quos ipsam, alias dolorum. Omnis impedit, ut aperiam
              accusamus similique voluptatibus!
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center text-left font-['Poppins'] text-[#424344] gap-y-5 py-5">
          <div className="w-full flex flex-col justify-between md:flex-row lg:flex-row xl:flex-row gap-4">
            <div>
              <img
                src={page3Img}
                alt="Step 1"
                className="rounded-3xl object-cover w-full"
              />
            </div>
            <div className="rounded-3xl lg:col-span-2 bg-[#F9F8F8] py-5 px-8 flex-1">
              <span className="text-[#3452AE] font-semibold text-[1.5rem]">
                Step 1:
              </span>
              <p>
                Prepare complete requirements and check application schedule for
                available dates.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-between flex-col-reverse md:flex-row lg:flex-row xl:flex-row gap-4 ">
            <div className="rounded-3xl lg:col-span-2 bg-[#F9F8F8] py-5 px-8 flex-1">
              <span className="text-[#3452AE] font-semibold text-[1.5rem]">
                Step 2:
              </span>
              <p>
                Bring the duty accomplished application form and requirements
                to:
              </p>

              <p>- Smile TUGON Hub</p>
              <p>- Ground floor, Taytay Municipal Hall</p>
              <p>- Monday to Friday</p>
              <p>- 10:00 am to 5:00 pm </p>
            </div>
            <div className="lg:py-0 py-5">
              <img
                src={page3Img2}
                alt="Step 2"
                className="rounded-3xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="w-full h-full font-roboto text-[#274C5B] flex justify-center items-start py-8 px-5 overflow-hidden">
        <div className="flex flex-col items-center text-center gap-2">
          <h1 className="lg:text-[3rem] text-[2rem] font-bold">
            TUGON Application Procedure
          </h1>
          <div className="">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              nobis, in libero sunt dolorem voluptas consequatur corporis unde
            </p>
            <p>
              commodi quos ipsam, alias dolorum. Omnis impedit, ut aperiam
              accusamus similique voluptatibus!
            </p>
          </div>
          <div className="sm:w-full lg:w-[900px] pt-10 flex flex-col justify-center items-center text-left font-['Poppins'] text-[#424344]   ">
            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-4 pb-4">
              <div className="">
                <img
                  src={page3Img}
                  width="100%"
                  alt="Step 2"
                  className="rounded-3xl lg:w-[322px] lg:h-[194px] md:w-full md:h-full"
                />
              </div>
              <div className="rounded-3xl lg:col-span-2 bg-[#F9F8F8] py-5 px-8">
                <span className="text-[#3452AE] font-semibold text-[1.5rem]">
                  Step 1:
                </span>
                <p>
                  Prepare complete requirements and check application schedule
                  for available dates.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row lg:flex-row xl:flex-row gap-4">
              <div className="rounded-3xl lg:col-span-2 bg-[#F9F8F8] py-5 px-8">
                <span className="text-[#3452AE] font-semibold text-[1.5rem]">
                  Step 2:
                </span>
                <p>
                  Bring the duty accomplished application form and requirements
                  to:
                </p>

                <p>- Smile TUGON Hub</p>
                <p>- Ground floor, Taytay Municipal Hall</p>
                <p>- Monday to Friday</p>
                <p>- 10:00 am to 5:00 pm </p>
              </div>
              <div className="">
                <img
                  src={page3Img2}
                  width="100%"
                  alt="Step 2"
                  className="rounded-3xl lg:w-[322px] lg:h-[194px] md:w-full md:h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Page3;
