// import { Vector, aboutImg, mayor, taytayFull } from "../../../../helpers/image";

const AboutUs = () => {
  return (
    <section className="font-normal w-full h-full bg-[#F4F9FF] px-5 lg:px-14 font-['Poppins'] lg:py-36">
      <div className="lg:flex lg:justify-between lg:items-center text-justify gap-6">
        <div className="flex-1">
          <div className="flex gap-2 item-center justify-start py-4  text-[#234F8B]">
            <div className="pt-1">{/* <img src={Vector} /> */}</div>
            <div className="text-[28px] font-medium">
              <h1 className="">About Us</h1>
            </div>
          </div>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sed
            eius unde sequi quia cum minus dolorem modi cupiditate? Numquam
            delectus dolore accusantium necessitatibus molestias tempora placeat
            ex natus perspiciatis.
          </p>
          <p className="py-2">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className="py-2">
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <p className="py-2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </div>
        <div className="flex-1">
          <div className="lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-4 md:grid md:grid-cols-2 md:grid-rows-2">
            <div className=" row-span-2 py-2">
              {/* <img src={mayor} width="100%" /> */}
            </div>
            <div className="py-2">
              {/* <img src={taytayFull} width="100%" /> */}
            </div>
            <div className="py-2">
              {/* <img src={aboutImg} width="100%" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
