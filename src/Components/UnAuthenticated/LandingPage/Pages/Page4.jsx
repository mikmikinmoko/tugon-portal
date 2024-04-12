import { passport, smtaytay } from "../../../../helpers/image";

const Page4 = () => {
  return (
    <section className="w-full h-full font-roboto text-[#274C5B] flex justify-center items-start py-10 px-12  bg-[#F4F9FF]">
      <div className="flex flex-col items-center text-center gap-4">
        <h1 className="lg:text-[56px] md:text-[36px] font-bold">
          TUGON VALID {`ID's`}
        </h1>

        <div className="pt-10">
          <img src={smtaytay} alt="Procedure 1" />
        </div>
        <div className="grid w-full lg:grid-cols-3 lg:grid-rows-3 place-items-center sm:grid-cols-2 sm:grid-rows-5 md:grid-cols-2 md:grid-rows-3 px-9 py-4 gap-4">
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
          </div>
          <div>
            <img src={passport} alt="ID" />
          </div>
          <div>
            <img src={passport} alt="ID" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page4;
