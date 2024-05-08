import Title from "../../../../Reusable/Title";
import { announcement } from "../../../../helpers/image";

const announce = [
  {
    id: "01",
    img: <img src={announcement} alt="img" />,
    date: "April 25, 2023",
    title: "Announcement Title",
    des: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the standard dummy.",
  },
  {
    id: "02",
    img: <img src={announcement} alt="img" />,
    date: "April 25, 2023",
    title: "Announcement Title",
    des: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the standard dummy.",
  },
  {
    id: "03",
    img: <img src={announcement} alt="img" />,
    date: "April 25, 2023",
    title: "Announcement Title",
    des: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the standard dummy.",
  },
  {
    id: "04",
    img: <img src={announcement} alt="img" />,
    date: "April 25, 2023",
    title: "Announcement Title",
    des: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the standard dummy.",
  },
  {
    id: "05",
    img: <img src={announcement} alt="img" />,
    date: "April 25, 2023",
    title: "Announcement Title",
    des: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the standard dummy.",
  },
];

const Announcement = () => {
  return (
    <div className="w-full h-full px-5 lg:px-10 font-['Poppins'] overflow-hidden">
      <Title title="Announcement" />
      <div className=" text-[#808080] flex items-center gap-2 justify-end">
        <a href="#">View all</a>
        <span className=" text-[1.5rem]">&rarr;</span>
      </div>
      <div className="pb-10 flex gap-4 text-[18px] text-[#808080]">
        {announce.map((e) => (
          <div key={e.id}>
            <div>{e.img}</div>
            <div className="py-2 text-[16px] border-b-2">{e.date}</div>
            <div className="py-2 font-bold text-[#2F2F2F] text-[20px]">
              {e.title}
            </div>
            <div className="py-2 text-justify">{e.des}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
