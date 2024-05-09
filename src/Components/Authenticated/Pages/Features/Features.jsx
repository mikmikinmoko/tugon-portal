import { Vector } from "../../../../helpers/image";

const features = [
  {
    id: "01",
    title: "Title Here",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    id: "02",
    title: "Title Here",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    id: "03",
    title: "Title Here",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    id: "04",
    title: "Title Here",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    id: "05",
    title: "Title Here",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
];

const Features = () => {
  return (
    <div className="w-full h-full px-5 lg:px-10 font-['Poppins']">
      <div className="  flex justify-between items-center py-4 pb-8">
        <div className="flex gap-2 item-center justify-start text-[#234F8B]">
          <div className="pt-2">
            <img src={Vector} />
          </div>
          <div className="text-[28px] font-medium">
            <h1 className="">{"FAQ's"}</h1>
          </div>
        </div>
      </div>
      {features.map((feat) => (
        <div
          key={feat.id}
          className=" lg:px-52  py-7 flex flex-col lg:flex-row gap-4 text-[#234F8B] font-['Kanit']"
        >
          <div className="flex lg:flex-row gap-2 flex-col flex-1 border-b-2 pb-4">
            <div className=" text-3xl">{feat.id}.</div>
            <div className="flex-1 text-3xl ">{feat.title}</div>
            <div className="flex-1 text-justify text-[#2E2E2E] text-[18px] font-normal font-['Poppins']">
              {feat.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
