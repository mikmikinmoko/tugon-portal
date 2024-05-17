import { tugoncard, page2 } from "../../../../helpers/image";

const Page2 = () => {
  return (
    <>
      <section
        // style={{
        //   backgroundImage: `url(${page2})`,
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        //   objectFit: "cover",
        // }}
        className=" w-full h-full px-5 lg:px-32 py-8 font-['Poppins'] bg-[#F4F9FF] "
      >
        <div className="flex justify-center items-center flex-col">
          <div className="text-center text-[#274C5B]">
            <div className="text-[50px] font-extrabold">TUGON CARD</div>
            <p className="text-[36px]">Requirements</p>
          </div>
          <div className="grid lg:grid-cols-3 grid-rows-3 lg:grid-flow-col-dense gap-y-10 gap-x-5">
            <div className="flex flex-col lg:items-end justify-center flex-wrap">
              <div className="rounded-full w-4 h-4 lg:w-6 lg:h-6 bg-[#3452AE]"></div>
              <h1 className="text-[20px] text-[#274C5B] font-medium">
                Title Here
              </h1>
              <p className="text-[16px] text-[#323232] overflow-hidden text-ellipsis">
                One (1) Long Brown Envelope
              </p>
            </div>
            <div className="flex flex-col lg:items-end lg:text-right justify-center lg:mx-10">
              <div className="rounded-full w-4 h-4 lg:w-6 lg:h-6 bg-[#3452AE]"></div>
              <h1 className="text-[20px] text-[#274C5B] font-medium">
                Title Here
              </h1>
              <p className="text-[16px] text-[#323232]">
                {`Voter's `}Certificate from Commission on Elections (COMELEC)
                Note: Should be an active Vote
              </p>
            </div>
            <div className="flex flex-col lg:items-end lg:text-right justify-center">
              <div className="rounded-full w-4 h-4 lg:w-6 lg:h-6 bg-[#3452AE]"></div>
              <h1 className="text-[20px] text-[#274C5B] font-medium">
                Title Here
              </h1>
              <p className="text-[16px] text-[#323232]">
                {`Voter's `}Certificate from Commission on Elections (COMELEC)
                Note: Should be an active Vote
              </p>
            </div>
            <div className="row-span-3 flex items-center justify-center">
              <img src={tugoncard} alt="Tugon Card" />
            </div>
            <div className="flex flex-col items-start justify-center">
              <div className="rounded-full w-4 h-4 lg:w-6 lg:h-6 bg-[#3452AE]"></div>
              <h1 className="text-[20px] text-[#274C5B] font-medium">
                Title Here
              </h1>
              <p className="text-[16px] text-[#323232]">
                Fully accomplished TUGON card Application Form
              </p>
            </div>
            <div className="flex flex-col items-start justify-center lg:mx-10">
              <div className="rounded-full w-4 h-4 lg:w-6 lg:h-6 bg-[#3452AE]"></div>
              <h1 className="text-[20px] text-[#274C5B] font-medium">
                Title Here
              </h1>
              <p className="text-[16px] text-[#323232]">
                Fully verified Gcash/Maya App account under the name of the
                applicant
              </p>
            </div>
            <div className="flex flex-col items-start justify-center">
              <div className="rounded-full w-4 h-4 lg:w-6 lg:h-6 bg-[#3452AE]"></div>
              <h1 className="text-[20px] text-[#274C5B] font-medium">
                Title Here
              </h1>
              <p className="text-[16px] text-[#323232]">
                Barangay Certificate of Residency issued specifically for the
                purpose of TUGON Card application (Original copy will be
                submitted)
              </p>
            </div>
          </div>
          {/* <div className="grid grid-cols-3 grid-rows-3 grid-flow-col-dense gap-y-10 gap-x-5">
            <div className="flex flex-col lg:items-end justify-center  ">
              <div className=" rounded-full w-4 h-4 lg:w-6 lg:h-6 bg-[#3452AE] "></div>
              <h1 className="text-[20px] text-[#274C5B] font-medium">
                Title Here
              </h1>
              <p className="text-[16px] text-[#323232]">
                One (1) Long Brown Envelope
              </p>
            </div>
            <div className="flex flex-col lg:items-end lg:text-right justify-center mx-10">
              <div className=" rounded-full w-4 h-4 lg:w-6 lg:h-6 bg-[#3452AE]"></div>
              <h1 className="text-[20px] text-[#274C5B] font-medium">
                Title Here
              </h1>
              <p className="text-[16px] text-[#323232] ">
                {`Voter's `}Certificate from Commission on Elections (COMELEC)
                Note: Should be an active Vote
              </p>
            </div>
            <div className="flex flex-col lg:items-end lg:text-right justify-center ">
              <div className=" rounded-full w-4 h-4 lg:w-6 lg:h-6 bg-[#3452AE]"></div>
              <h1 className="text-[20px] text-[#274C5B] font-medium">
                Title Here
              </h1>
              <p className="text-[16px] text-[#323232] ">
                {`Voter's `}Certificate from Commission on Elections (COMELEC)
                Note: Should be an active Vote
              </p>
            </div>
            <div className="row-span-3 flex items-center justify-center ">
              <img src={tugoncard} />
            </div>
            <div className="flex flex-col items-start text-left justify-center  ">
              <div className=" rounded-full w-4 h-4 lg:w-6 lg:h-6 bg-[#3452AE]"></div>
              <h1 className="text-[20px] text-[#274C5B] font-medium">
                Title Here
              </h1>
              <p className="text-[16px] text-[#323232] ">
                Fully accomplished TUGON card Application Form
              </p>
            </div>
            <div className="flex flex-col items-start text-left mx-10 justify-center">
              <div className=" rounded-full w-4 h-4 lg:w-6 lg:h-6 bg-[#3452AE]"></div>
              <h1 className="text-[20px] text-[#274C5B] font-medium">
                Title Here
              </h1>
              <p className="text-[16px] text-[#323232] ">
                Fully verified Gcash/Maya App account under the name of the
                applicant
              </p>
            </div>
            <div className="flex flex-col items-start text-left lg:w-80 justify-center">
              <div className=" rounded-full w-4 h-4 lg:w-6 lg:h-6 bg-[#3452AE]"></div>
              <h1 className="text-[20px] text-[#274C5B] font-medium">
                Title Here
              </h1>
              <p className="text-[16px] text-[#323232] ">
                Barangay Certificate of Residency issued specifically for the
                purpose of TUGON Card application (Original copy will be
                submitted)
              </p>
            </div>
          </div> */}
        </div>
      </section>
      {/* <div
        style={{
          backgroundImage: `url(${page2})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-full h-full px-5 py-48 lg:px-12  flex flex-col font-['Roboto'] justify-center items-center lg:pt-1"
      >
        <div className="text-center text-[#274C5B]">
          <div className="text-[50px] font-extrabold  pt-10">TUGON CARD</div>
          <p className="text-[36px]">Requirements</p>
        </div>
        <div className=""></div>
        <div className="lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:grid-flow-col sm:grid-flow-col place-items-center gap-6">
          <div className="lg:ml-24 py-2 ">
            <div className="flex flex-col lg:items-end lg:text-right lg:w-80">
              <div className=" rounded-full w-8 h-8 lg:w-10 lg:h-10 bg-[#3452AE] "></div>
              <h1 className="text-[20px] text-[#274C5B] font-medium">
                Title Here
              </h1>
              <p className="text-[16px] text-[#323232]">
                One (1) Long Brown Envelope
              </p>
            </div>
          </div>
          <div className="lg:mr-24 py-2">
            <div className="flex flex-col lg:items-end lg:text-right  lg:w-80">
              <div className=" rounded-full w-8 h-8 lg:w-10 lg:h-10 bg-[#3452AE]"></div>
              <h1 className="text-[20px] text-[#274C5B] font-medium">
                Title Here
              </h1>
              <p className="text-[16px] text-[#323232] ">
                {`Voter's `}Certificate from Commission on Elections (COMELEC)
                Note: Should be an active Vote
              </p>
            </div>
          </div>
          <div className="lg:ml-24 py-2">
            <div className="flex flex-col lg:items-end lg:text-right lg:w-80">
              <div className=" rounded-full w-8 h-8 lg:w-10 lg:h-10 bg-[#3452AE]"></div>
              <h1 className="text-[20px] text-[#274C5B] font-medium">
                Title Here
              </h1>
              <p className="text-[16px] text-[#323232] ">
                One (1) valid government ID (photocopy will be submitted for
                verifications with the original)
              </p>
            </div>
          </div>
          <div className=" lg:row-span-3  md:row-span-2">
            <img src={tugoncard} alt="tugon card" />
          </div>
          <div className="lg:mr-24 py-2">
            <div className="flex flex-col items-start text-left lg:w-80">
              <div className=" rounded-full w-8 h-8 lg:w-10 lg:h-10 bg-[#3452AE]"></div>
              <h1 className="text-[20px] text-[#274C5B] font-medium">
                Title Here
              </h1>
              <p className="text-[16px] text-[#323232] ">
                Fully accomplished TUGON card Application Form
              </p>
            </div>
          </div>
          <div className="lg:ml-24 py-2">
            <div className="flex flex-col items-start text-left lg:w-80">
              <div className=" rounded-full w-8 h-8 lg:w-10 lg:h-10 bg-[#3452AE]"></div>
              <h1 className="text-[20px] text-[#274C5B] font-medium">
                Title Here
              </h1>
              <p className="text-[16px] text-[#323232] ">
                Fully verified Gcash/Maya App account under the name of the
                applicant
              </p>
            </div>
          </div>
          <div className="lg:mr-24 py-2">
            <div className="flex flex-col items-start text-left lg:w-80">
              <div className=" rounded-full w-8 h-8 lg:w-10 lg:h-10 bg-[#3452AE]"></div>
              <h1 className="text-[20px] text-[#274C5B] font-medium">
                Title Here
              </h1>
              <p className="text-[16px] text-[#323232] ">
                Barangay Certificate of Residency issued specifically for the
                purpose of TUGON Card application (Original copy will be
                submitted)
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Page2;
