import { Vector } from "../helpers/image";

const Title = ({ children }) => {
  return (
    <div>
      <div className="  flex justify-between items-center">
        <div className="flex gap-2 item-center justify-start text-[#234F8B]">
          <div className="pt-2">
            <img src={Vector} />
          </div>
          <div className="text-[28px] font-medium">
            <h1 className="">{children}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
