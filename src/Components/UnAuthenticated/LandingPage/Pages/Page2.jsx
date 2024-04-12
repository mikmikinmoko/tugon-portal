// import tugoncard from "../../../../Assets/img/tugoncard.png";

import {
  bullet1,
  bullet2,
  bullet4,
  bullet3,
  bullet5,
  bullet6,
  tugoncard,
} from "../../../../helpers/image";

const Page2 = () => {
  return (
    <>
      <div className="h-[1300px] bg-[url('src/Assets/img/page2.png')] flex flex-col justify-center items-center bg-cover bg-center text-[#274C5B] overflow-hidden">
        <div className=" flex-col flex text-center">
          <h1 className="text-[3rem] font-bold font-roboto">TUGON CARD</h1>
          <p className="text-[1.5rem] font-light">Requirements</p>
        </div>
        <div className=" flex justify-between items-center w-full ">
          <div className="grid grid-cols-1 grid-rows-3 gap-24 mb-1">
            <div className="pl-[15rem]">
              <img src={bullet1} alt="" />
            </div>
            <div className="pl-[5rem]">
              <img src={bullet2} alt="" />
            </div>
            <div className="pl-[15rem]">
              <img src={bullet3} alt="" />
            </div>
          </div>
          <div>
            <img src={tugoncard} alt="tugon card" />
          </div>
          <div className="grid grid-cols-1 grid-rows-3 gap-20 mt-3">
            <div className="pr-[15rem]">
              <img src={bullet4} alt="" />
            </div>
            <div className="pl-[5rem]">
              <img src={bullet5} alt="" />
            </div>
            <div className="pr-[15rem]">
              <img src={bullet6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
