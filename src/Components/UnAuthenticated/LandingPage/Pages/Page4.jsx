import { passport, smtaytay } from "../../../../helpers/image";

const Page4 = () => {
  return (
    <section className="w-full h-screen font-roboto text-[#274C5B] flex justify-center items-start pt-28 overflow-hidden bg-[#F4F9FF]">
      <div className="flex flex-col items-center gap-4">
        <h1 className="lg:text-[4rem] font-bold sm:text-[2rem] md:text-[3rem]">
          TUGON VALID {`ID's`}
        </h1>

        <div className="pt-10">
          <img src={smtaytay} alt="Procedure 1" />
        </div>
        <div className="grid grid-col-3 grid-rows-3 w-full px-9 pt-4 ">
          <div className="flex flex-row-reverse justify-between">
            <div>
              <div>
                <img src={passport} alt="ID" />
              </div>
              <div>
                <img src={passport} alt="ID" />
              </div>
              <div>
                <img src={passport} alt="ID" />
              </div>
            </div>
            <div>
              <div>
                <img src={passport} alt="ID" />
              </div>
              <div>
                <img src={passport} alt="ID" />
              </div>
              <div>
                <img src={passport} alt="ID" />
              </div>
            </div>
            <div>
              <div>
                <img src={passport} alt="ID" />
              </div>
              <div>
                <img src={passport} alt="ID" />
              </div>
              <div>
                <img src={passport} alt="ID" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page4;
