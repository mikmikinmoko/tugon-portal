import { smtaytay } from "../../../../helpers/image";

const tugonId = [
  {
    id: 1,
    label: "Philippine Password",
  },
  {
    id: 2,
    label: "Philippine Password",
  },
  {
    id: 3,
    label: "Philippine Password",
  },
  {
    id: 4,
    label: "Philippine Password",
  },
  {
    id: 5,
    label: "Philippine Password",
  },
  {
    id: 6,
    label: "Philippine Password",
  },
  {
    id: 7,
    label: "Philippine Password",
  },
  {
    id: 8,
    label: "Philippine Password",
  },
  {
    id: 9,
    label: "Philippine Password",
  },
];

const Page4 = () => {
  return (
    <section className="w-full h-full font-roboto text-[#274C5B] flex justify-center items-start py-10 px-12  bg-[#F4F9FF]">
      <div className="flex flex-col items-center text-center gap-4">
        <h1 className="text-[3rem] font-bold">TUGON VALID {`ID's`}</h1>

        <div className="pt-10">
          <img src={smtaytay} alt="Procedure 1" />
        </div>
        <div className="grid w-full lg:grid-cols-3 lg:grid-rows-3 place-items-center sm:grid-cols-2 sm:grid-rows-5 md:grid-cols-2 md:grid-rows-3 gap-4 font-semibold font-['Poppins']">
          {tugonId.map((id) => (
            <>
              <div className="bg-[#FFFFFF] w-full p-3 rounded-3xl flex items-center gap-6">
                <div className="bg-[#3452AE] p-3 rounded-full"></div>
                <p className="text-[#000000] text-[21px]">{id.label}</p>
              </div>
            </>
          ))}
          {/* <div className="bg-[#FFFFFF] w-full p-3 rounded-3xl flex items-center gap-6">
            <div className="bg-[#3452AE] p-3 rounded-full"></div>
            <p className="text-[#000000] text-[21px]">Philippine Passport</p>
          </div>
          <div className="bg-[#FFFFFF] w-full p-3 rounded-3xl flex items-center gap-6">
            <div className="bg-[#3452AE] p-3 rounded-full"></div>
            <p className="text-[#000000] text-[21px]">Philippine Passport</p>
          </div> */}
          {/* <div className="bg-[#FFFFFF] w-full p-3 rounded-3xl flex items-center gap-6">
            <div className="bg-[#3452AE] p-3 rounded-full"></div>
            <p className="text-[#000000] text-[21px]">Philippine Passport</p>
          </div>
          <div className="bg-[#FFFFFF] w-full p-3 rounded-3xl flex items-center gap-6">
            <div className="bg-[#3452AE] p-3 rounded-full"></div>
            <p className="text-[#000000] text-[21px]">Philippine Passport</p>
          </div>
          <div className="bg-[#FFFFFF] w-full p-3 rounded-3xl flex items-center gap-6">
            <div className="bg-[#3452AE] p-3 rounded-full"></div>
            <p className="text-[#000000] text-[21px]">Philippine Passport</p>
          </div>
          <div className="bg-[#FFFFFF] w-full p-3 rounded-3xl flex items-center gap-6">
            <div className="bg-[#3452AE] p-3 rounded-full"></div>
            <p className="text-[#000000] text-[21px]">Philippine Passport</p>
          </div>
          <div className="bg-[#FFFFFF] w-full p-3 rounded-3xl flex items-center gap-6">
            <div className="bg-[#3452AE] p-3 rounded-full"></div>
            <p className="text-[#000000] text-[21px]">Philippine Passport</p>
          </div>
          <div className="bg-[#FFFFFF] w-full p-3 rounded-3xl flex items-center gap-6">
            <div className="bg-[#3452AE] p-3 rounded-full"></div>
            <p className="text-[#000000] text-[21px]">Philippine Passport</p>
          </div> */}
          {/* <div>
            <img src={passport} alt="ID" />
          </div>
          <div>
            <img src={passport} alt="ID" />
          </div>
          <div>
            <img src={passport} alt="ID" />
          </div>
          <div>
            <img src={passport} alt="ID" />
          </div>
          <div>
            <img src={passport} alt="ID" />
          </div>
          <div>
            <img src={passport} alt="ID" />
          </div>
          <div>
            <img src={passport} alt="ID" />
          </div>
          <div>
            <img src={passport} alt="ID" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Page4;
