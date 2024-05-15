import Title from "../../../Reusable/Title";
import { announceImg, eventImgMobile } from "../../../helpers/image";
import { Footer } from "../../UnAuthenticated/LandingPage/Pages/Page5";

const announce = [
  {
    id: "01",
    img: (
      <img
        src={announceImg}
        alt="img"
        style={{ borderTopRightRadius: "20px", borderTopLeftRadius: "20px" }}
      />
    ),
    date: "April 25, 2023",
    title: "Announcement Title Here",
    des: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the standard dummy.",
  },
  {
    id: "02",
    img: (
      <img
        src={announceImg}
        alt="img"
        style={{ borderTopRightRadius: "20px", borderTopLeftRadius: "20px" }}
      />
    ),
    date: "April 25, 2023",
    title: "Announcement Title Here",
    des: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the standard dummy.",
  },
  {
    id: "03",
    img: (
      <img
        src={announceImg}
        alt="img"
        style={{ borderTopRightRadius: "20px", borderTopLeftRadius: "20px" }}
      />
    ),
    date: "April 25, 2023",
    title: "Announcement Title Here",
    des: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the standard dummy.",
  },
];

const Announcement = () => {
  return (
    <>
      <section className="w-full h-screen lg:h-screen font-['Poppins'] text-[16px] bg-[#F5FCFF] p-5 lg:px-32  lg:py-16">
        <div className="hidden sm:flex md:flex lg:flex flex-col items-center justify-center gap-2 py-10">
          <p className="text-[20px] text-[#253D32]">TUGON</p>
          <p className="text-[#002B67] text-[36px] font-medium">
            Event and Campaign
          </p>
        </div>
        <div className="block sm:hidden md:hidden lg:hidden py-5">
          <div className=" text-[#808080]">
            <div className="flex justify-between items-center">
              <Title>Event & Campaign</Title>
              <span className="text-[12px]">
                <a href="">See more</a>
              </span>
            </div>
            <div className="py-3 flex items-center justify-center">
              <img src={eventImgMobile} alt="eventImg" />
            </div>
            <div className="flex flex-col gap-2">
              <p>April 25, 2023</p>
              <hr />
              <p className="text-[#2F2F2F] text-[18px] font-semibold">
                Announcement Title
              </p>
              <p>
                Lorem Ipsum is simply dummy text the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 text-[18px] text-[#808080]">
          <div className=" rounded-b-lg hidden sm:block md:block lg:block">
            <div className="">
              <img
                src={announceImg}
                alt="img"
                style={{
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                }}
              />
            </div>
            <div className=" rounded-b-lg bg-[#ffffff] px-2">
              <div className="py-2 font-bold text-[#2F2F2F] text-[20px]">
                Announcement Title Here
              </div>
              <div className="py-2 text-justify md:text-[16px]">
                Lorem Ipsum is simply dummy text the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy.
              </div>
              <div className="text-[#002B67]  flex items-center gap-2 justify-end">
                <a href="#">See more</a>
              </div>
            </div>
          </div>
          <div className=" rounded-b-lg hidden  md:block lg:block">
            <div>
              <img
                src={announceImg}
                alt="img"
                style={{
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                }}
              />
            </div>
            <div className=" rounded-b-lg bg-[#ffffff] px-2">
              <div className="py-2 font-bold text-[#2F2F2F] text-[20px]">
                Announcement Title Here
              </div>
              <div className="py-2 text-justify md:text-[16px]">
                Lorem Ipsum is simply dummy text the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy.
              </div>
              <div className="text-[#002B67]  flex items-center gap-2 justify-end">
                <a href="#">See more</a>
              </div>
            </div>
          </div>
          <div className=" rounded-b-lg hidden lg:block">
            <div>
              <img
                src={announceImg}
                alt="img"
                style={{
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                }}
              />
            </div>
            <div className=" rounded-b-lg bg-[#ffffff] px-2">
              <div className="py-2 font-bold text-[#2F2F2F] text-[20px]">
                Announcement Title Here
              </div>
              <div className="py-2 text-justify md:text-[16px]">
                Lorem Ipsum is simply dummy text the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy.
              </div>
              <div className="text-[#002B67]  flex items-center gap-2 justify-end">
                <a href="#">See more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Announcement;
