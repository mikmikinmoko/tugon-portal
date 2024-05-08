import { homeAuth } from "../../../../../helpers/image";
import Navigation from "../../../../UnAuthenticated/LandingPage/Navigation/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation />
      <section className="w-full h-full flex flex-col font-['Poppins']">
        <div className="lg:flex lg:items-center lg:justify-center text-left lg:pt-10 pt-6 lg:px-20 px-6">
          <div className="flex-1 font-semibold text-[40px] text-[#234F8B]">
            Taytay Unified Governance & Outreach Network
          </div>
          <div className="flex-1 flex flex-col text-justify">
            TUGON represents a forward - thinking and citizen - centric
            approach, promoting efficiency, inclusivity, and technological and
            outreach activites
            <button className=" bg-[#234F8B] rounded-2xl py-2 my-2 w-[20dvh] text-[16px] text-[#fff] font-normal">
              Learn more
            </button>
          </div>
        </div>
        <div className=" pt-4 flex-1">
          <img src={homeAuth} />
        </div>
      </section>
    </div>
  );
};

export default Home;
