import { NavLink } from "react-router-dom";
import { homeAuth, homeMobile, sampleIcon } from "../../../../helpers/image";

const departments = [
  {
    id: 1,
    initial: "OSCA",
    label: "Office of the Senior Citizen Affairs",
    link: "/senior",
    icon: <img src={sampleIcon} alt="Sample" />,
  },
  {
    id: 2,
    initial: "PDAO",
    label: "Persons with Disability Affair Office",
    link: "/pwd",
    icon: <img src={sampleIcon} alt="Sample" />,
  },
  {
    id: 3,
    initial: "UPAO",
    label: "Urban Poor Affair Office",
    link: "",
    icon: <img src={sampleIcon} alt="Sample" />,
  },
  {
    id: 4,
    initial: "GAD",
    label: "Gender and Development",
    link: "",
    icon: <img src={sampleIcon} alt="Sample" />,
  },
];

const Home = () => {
  return (
    <section
      className="w-full h-full flex flex-col font-['Poppins'] scroll-mt-16 "
      id="home"
    >
      <div className=" py-8 ">
        {/* <div className="flex justify-center items-center text-left"> */}
        <div className="flex lg:items-center lg:justify-center text-center lg:text-left  lg:px-32 md:px-14 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
            <div className="font-semibold text-[22px] md:text-[24px]  lg:text-[32px] text-[#234F8B]">
              Taytay Unified Governance & Outreach Network
            </div>
            <div className="text-center lg:text-left">
              TUGON represents a forward - thinking and citizen - centric
              approach, promoting efficiency, inclusivity, and technological and
              outreach activites
              <button className=" bg-[#234F8B] rounded-2xl py-2 my-2 w-[20dvh] text-[16px] text-[#fff] font-normal hidden  lg:block">
                Learn more
              </button>
            </div>
          </div>
          {/* <div className="flex-1 font-semibold text-[22px] md:text-[24px]  lg:text-[32px] text-[#234F8B]">
            Taytay Unified Governance & Outreach Network
          </div>
          <div className="flex-1 flex flex-col text-center lg:text-left">
            TUGON represents a forward - thinking and citizen - centric
            approach, promoting efficiency, inclusivity, and technological and
            outreach activites
            <button className=" bg-[#234F8B] rounded-2xl py-2 my-2 w-[20dvh] text-[16px] text-[#fff] font-normal hidden  lg:block">
              Learn more
            </button>
          </div> */}
        </div>
        <div className=" py-4 flex-1">
          <img src={homeAuth} />
        </div>
        {/* <div className="py-4 block sm:hidden md:hidden lg:hidden">
        <img src={homeMobile} />
      </div> */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 md:gap-5 gap-2  px-5 lg:px-32 lg:-mt-[100px] text-[#000000] ">
          {departments.map((d) => (
            <NavLink to={d.link} key={d.id}>
              <div
                className=" w-full h-full px-3 bg-[#F5FCFF] lg:rounded-md  py-4 shadow-sm "
                key={d.id}
              >
                <div className="flex items-center justify-center">
                  <div className=" bg-[#FFFFFF] p-3 rounded-full shadow-md hidden sm:block md:block lg:block">
                    <div className="flex items-center justify-center">
                      {d.icon}
                    </div>
                  </div>
                </div>
                <div className="py-2 text-[17px] font-medium text-[#002B67]">
                  {d.label}
                </div>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
