import Logo from "../Logo/Logo";

const Navigation = () => {
  return (
    <div className="py-3 px-5 sm:px-5 md:px-14 text-[#787878] text-[16px] ">
      <div className="flex justify-between items-center">
        <div>
          <Logo width="100px" />
        </div>
        <div className="hidden md:flex gap-12">
          <ul className="flex gap-8 items-center ">
            <li className="">
              <a href="#">About Us</a>
            </li>
            <li className="">
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
          <button className=" bg-blue-800 px-5 py-2 rounded-md text-[#ffffff]">
            Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
