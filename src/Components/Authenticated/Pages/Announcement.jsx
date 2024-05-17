import { Carousel } from "antd";
import Title from "../../../Reusable/Title";
import { announceImg, eventImgMobile } from "../../../helpers/image";
import { Footer } from "../../UnAuthenticated/LandingPage/Pages/Page5";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

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
const contentStyle = {
  margin: 0,
  height: "300px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Announcement = () => {
  return (
    <>
      <div
        className="w-full h-full py-8 lg:px-32 scroll-mt-16 text-[18px] bg-[#F5FCFF] "
        id="announcement"
      >
        <div className="flex-col w-full h-full flex justify-center items-center gap-5 ">
          <div className="hidden sm:block md:block lg:block">
            <p className="text-[#002B67] text-[36px] font-medium">
              Event and Campaign
            </p>
          </div>
          <div className="block sm:hidden md:hidden lg:hidden px-5 ">
            <div className=" text-[#808080]">
              <div className="flex justify-between items-center">
                <Title>Event & Campaign</Title>
                <span className="text-[12px]">
                  <a href="">See more</a>
                </span>
              </div>
              <div className="py-3">
                <img
                  src={eventImgMobile}
                  alt="eventImg"
                  className="w-full object-cover"
                />
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

          <div className="grid-cols-1 text-[18px] text-[#000] mx-auto hidden sm:grid md:grid lg:grid">
            <Carousel autoplay arrows slidesToShow={3}>
              <div className="px-5">
                <div className="rounded-b-lg hidden sm:block md:block lg:block">
                  <div className="">
                    <img
                      src={announceImg}
                      alt="img"
                      style={{
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                      }}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className=" rounded-b-lg bg-[#ffffff] px-2 w-full">
                    <div className="py-2 font-bold text-[#002B67] text-[20px]">
                      Announcement Title Here
                    </div>
                    <div className="py-2 text-justify md:text-[16px] ">
                      Lorem Ipsum is simply dummy text the printing and
                      typesetting industry. Lorem Ipsum has been the standard
                      dummy.
                    </div>
                    <div className="text-[#002B67]  flex items-center gap-2 justify-end">
                      <a href="#">See more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-5">
                <div className="rounded-b-lg hidden sm:block md:block lg:block">
                  <div className="">
                    <img
                      src={announceImg}
                      alt="img"
                      style={{
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                      }}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className=" rounded-b-lg bg-[#ffffff] px-2 w-full">
                    <div className="py-2 font-bold text-[#002B67] text-[20px]">
                      Announcement Title Here
                    </div>
                    <div className="py-2 text-justify md:text-[16px]">
                      Lorem Ipsum is simply dummy text the printing and
                      typesetting industry. Lorem Ipsum has been the standard
                      dummy.
                    </div>
                    <div className="text-[#002B67]  flex items-center gap-2 justify-end">
                      <a href="#">See more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-5">
                <div className="rounded-b-lg hidden sm:block md:block lg:block">
                  <div className="">
                    <img
                      src={announceImg}
                      alt="img"
                      style={{
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                      }}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className=" rounded-b-lg bg-[#ffffff] px-2 w-full">
                    <div className="py-2 font-bold text-[#002B67] text-[20px]">
                      Announcement Title Here
                    </div>
                    <div className="py-2 text-justify md:text-[16px]">
                      Lorem Ipsum is simply dummy text the printing and
                      typesetting industry. Lorem Ipsum has been the standard
                      dummy.
                    </div>
                    <div className="text-[#002B67]  flex items-center gap-2 justify-end">
                      <a href="#">See more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-5">
                <div className="rounded-b-lg hidden sm:block md:block lg:block">
                  <div className="">
                    <img
                      src={announceImg}
                      alt="img"
                      style={{
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                      }}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className=" rounded-b-lg bg-[#ffffff] px-2 w-full">
                    <div className="py-2 font-bold text-[#002B67] text-[20px]">
                      Announcement Title Here
                    </div>
                    <div className="py-2 text-justify md:text-[16px]">
                      Lorem Ipsum is simply dummy text the printing and
                      typesetting industry. Lorem Ipsum has been the standard
                      dummy.
                    </div>
                    <div className="text-[#002B67]  flex items-center gap-2 justify-end">
                      <a href="#">See more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-5">
                <div className="rounded-b-lg hidden sm:block md:block lg:block">
                  <div className="">
                    <img
                      src={announceImg}
                      alt="img"
                      style={{
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                      }}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className=" rounded-b-lg bg-[#ffffff] px-2 w-full">
                    <div className="py-2 font-bold text-[#002B67] text-[20px]">
                      Announcement Title Here
                    </div>
                    <div className="py-2 text-justify md:text-[16px]">
                      Lorem Ipsum is simply dummy text the printing and
                      typesetting industry. Lorem Ipsum has been the standard
                      dummy.
                    </div>
                    <div className="text-[#002B67]  flex items-center gap-2 justify-end">
                      <a href="#">See more</a>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcement;
