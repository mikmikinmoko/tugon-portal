import { step1, step2 } from "../../../../helpers/image";

const Page3 = () => {
  return (
    <section className="w-full h-screen font-roboto text-[#274C5B] flex justify-center items-start pt-28">
      <div className="flex flex-col items-center gap-2">
        <h1 className="lg:text-[4rem] font-bold sm:text-[2rem] md:text-[3rem]">
          TUGON Application Procedure
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nobis,
          in libero sunt dolorem voluptas consequatur corporis unde
        </p>
        <p>
          commodi quos ipsam, alias dolorum. Omnis impedit, ut aperiam accusamus
          similique voluptatibus!
        </p>
        <div className="pt-10">
          <img src={step1} alt="Procedure 1" />
          <img src={step2} alt="Procedure 2" />
        </div>
      </div>
    </section>
  );
};

export default Page3;
