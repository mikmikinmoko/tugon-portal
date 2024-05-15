import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const NotEligible = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full h-screen font-['Poppins'] text-[18px] -mt-[60px]">
      <div className="flex items-center justify-center w-full h-full px-5 ">
        <div className=" md:w-5/12 md:h-60 lg:w-5/12 lg:h-60 text-center  ">
          <div className=" text-[20px] font-semibold lg:px-20 py-5">
            Age Requirement Error: Senior Citizen Benefits Eligibility Unmet
          </div>
          <div className="">
            Unfortunately, you are currently ineligible to apply for senior
            citizen benefits, as these are only available to individuals aged 60
            and above.
          </div>
          <div className="py-5">
            <Button type="primary" onClick={() => navigate(-1)}>
              &larr; Go Back
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotEligible;
