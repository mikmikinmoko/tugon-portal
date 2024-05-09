import { announcementImg } from "../../../helpers/image";

const announce = [
  {
    id: "01",
    img: <img src={announcementImg} alt="img" />,
    date: "April 25, 2023",
    title: "Title",
    des: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the standard dummy.",
  },
  {
    id: "02",
    img: <img src={announcementImg} alt="img" />,
    date: "April 25, 2023",
    title: "Title",
    des: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the standard dummy.",
  },
  {
    id: "03",
    img: <img src={announcementImg} alt="img" />,
    date: "April 25, 2023",
    title: "Title",
    des: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the standard dummy.",
  },
  {
    id: "04",
    img: <img src={announcementImg} alt="img" />,
    date: "April 25, 2023",
    title: "Title",
    des: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the standard dummy.",
  },
];

const Announcement = () => {
  return (
    <section className="w-full h-screen font-['Poppins'] text-[16px] bg-[#F5FCFF]">
      <div className="flex flex-col items-center justify-center gap-2 py-10">
        <p className="text-[20px] text-[#253D32]">TUGON</p>
        <p className="text-[#002B67] text-[36px] font-medium">
          Event and Campaign
        </p>
      </div>
      <div className="pb-10 flex px-16 gap-4 text-[18px] text-[#808080]">
        {announce.map((e) => (
          <div key={e.id}>
            <div>{e.img}</div>
            {/* <div className="py-2 text-[16px] border-b-2">{e.date}</div> */}
            <div className="py-2 font-bold text-[#2F2F2F] text-[20px]">
              {e.title}:Lorem ipsum dolor sit amet, consectetur
            </div>
            <div className="py-2 text-justify">{e.des}</div>
            <div className="text-[#002B67]  flex items-center gap-2 justify-start">
              <a href="#">See more</a>
              <span className=" text-[1.5rem]">&rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Announcement;
