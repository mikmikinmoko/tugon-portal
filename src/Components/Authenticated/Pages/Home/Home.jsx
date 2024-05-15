import { NavLink } from "react-router-dom";
import { homeAuth, homeMobile } from "../../../../helpers/image";

const departments = [
  {
    id: 1,
    initial: "OSCA",
    label: "Office of the Senior Citizen Affairs",
    link: "/senior",
  },
  {
    id: 2,
    initial: "PDAO",
    label: "Persons with Disability Affair Office",
    link: "/pwd",
  },
  { id: 3, initial: "UPAO", label: "Urban Poor Affair Office", link: "" },
  { id: 4, initial: "GAD", label: "Gender and Development", link: "" },
];

const Home = () => {
  return (
    <section
      className="w-full h-full flex flex-col font-['Poppins'] py-16"
      id="home"
    >
      <div
        className="lg:flex lg:items-center lg:justify-center text-center lg:text-left  lg:px-20 md:px-14 px-6"
        id="home"
      >
        <div className="flex-1 font-semibold text-[22px] md:text-[24px]  lg:text-[32px] text-[#234F8B]">
          Taytay Unified Governance & Outreach Network
        </div>
        <div className="flex-1 flex flex-col  text-center py-5 lg:text-left">
          TUGON represents a forward - thinking and citizen - centric approach,
          promoting efficiency, inclusivity, and technological and outreach
          activites
          <button className=" bg-[#234F8B] rounded-2xl py-2 my-2 w-[20dvh] text-[16px] text-[#fff] font-normal hidden  lg:block">
            Learn more
          </button>
        </div>
      </div>
      <div className=" py-4 flex-1">
        <img src={homeAuth} />
      </div>
      {/* <div className="py-4 block sm:hidden md:hidden lg:hidden">
        <img src={homeMobile} />
      </div> */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 md:gap-5 gap-2  px-5 lg:px-32 lg:-mt-[100px] text-[#000000] ">
        {departments.map((d) => (
          <NavLink to={d.link}>
            <div
              className=" w-full h-full px-3 bg-[#F5FCFF] lg:rounded-md  py-4 shadow-sm "
              key={d.id}
            >
              <div className=" bg-[#FFFFFF] w-20 h-20 rounded-2xl shadow-md hidden sm:block md:block lg:block"></div>
              <div className="py-2 text-[17px] font-medium text-[#002B67]">
                {d.label}
              </div>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default Home;
