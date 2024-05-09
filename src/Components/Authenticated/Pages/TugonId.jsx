import Title from "../../../../Reusable/Title";
import { tugonId1, tugonId2, tugonId3 } from "../../../../helpers/image";

const TugonId = () => {
  return (
    <section className="  w-full h-full px-5 lg:px-10 font-['Poppins']">
      <Title title="Sample TUGON ID" />
      <div className="flex flex-col lg:flex-row justify-between items-center lg:px-5">
        <div className="p-2">
          <img src={tugonId1} />
        </div>
        <div className=" grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-2">
          <div className="px-2 pb-2">
            <img src={tugonId2} />
          </div>
          <div className="px-2">
            <img src={tugonId3} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TugonId;
