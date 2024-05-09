import { homeAuth } from "../../../../helpers/image";

const departments = [
  { id: 1, initial: "OSCA", label: "Office of the Senior Citizen Affairs" },
  { id: 2, initial: "PDAO", label: "Persons with Disability Affair Office" },
  { id: 3, initial: "UPAO", label: "Urban Poor Affair Office" },
  { id: 4, initial: "GAD", label: "Gender and Development" },
];

const Home = () => {
  return (
    <section
      className="w-full h-full flex flex-col font-['Poppins'] "
      id="home"
    >
      <div className="lg:flex lg:items-center lg:justify-center text-left lg:pt-10 pt-6 lg:px-20 px-6">
        <div className="flex-1 font-semibold text-[40px] text-[#234F8B]">
          Taytay Unified Governance & Outreach Network
        </div>
        <div className="flex-1 flex flex-col text-justify">
          TUGON represents a forward - thinking and citizen - centric approach,
          promoting efficiency, inclusivity, and technological and outreach
          activites
          <button className=" bg-[#234F8B] rounded-2xl py-2 my-2 w-[20dvh] text-[16px] text-[#fff] font-normal">
            Learn more
          </button>
        </div>
      </div>
      <div className=" pt-4 flex-1">
        <img src={homeAuth} />
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-between px-10 lg:-mt-[100px] text-[#000000] ">
        {departments.map((d) => (
          <div
            className=" w-80 h-80 bg-[#F5FCFF] rounded-2xl px-2 py-4 shadow-sm "
            key={d.id}
          >
            <div className=" bg-[#FFFFFF] w-20 h-20 rounded-2xl shadow-md"></div>
            <div className="py-2 text-[17px] font-medium text-[#002B67]">
              {d.label}
            </div>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
