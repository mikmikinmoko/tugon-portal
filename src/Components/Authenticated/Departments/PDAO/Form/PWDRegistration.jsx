import { Button } from "antd";
import Navigation from "../../../../UnAuthenticated/LandingPage/Navigation/Navigation";
import Step from "../../../../../Reusable/Step";

const items = [
  {
    title: "Step 1",
    description: "Applicant Information",
  },
  {
    title: "Step 2",
    description: "Personal Information",
  },
  {
    title: "Step 3",
    description: "Family Composition",
  },
  {
    title: "Step 4",
    description: "Membership to Senior Citizens Association",
  },
  {
    title: "Step 5",
    description: "Documents",
  },
];

const PWDRegistration = () => {
  return (
    <>
      <Navigation />
      <section className="w-full h-screen font-['Poppins']">
        <div className="px-32 flex-col flex">
          <div className="bg-[#E0E6F2] px-10 py-2 ">
            <div className="py-5 text-[#808080] text-[14px]">
              <Button type="text">&larr; back</Button>
            </div>
            <div className="text-[24px] font-semibold">
              Person with Disability Office (PDAO)
              <span className="text-[#808080] text-[12px] px-2 font-normal">
                Registration Form
              </span>
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="">
              <Step items={items} />
            </div>
            <div className="col-span-3">2</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PWDRegistration;
