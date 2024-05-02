import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navigation = () => {
  return (
    <div className="py-3 px-5 sm:px-5 md:px-14 text-[#787878] text-[16px] ">
      <div className="flex justify-between items-center">
        <NavLink to="/">
          <Logo width="100px" />
        </NavLink>
        <div className="hidden md:flex gap-12">
          <ul className="flex gap-8 items-center ">
            <li className="">
              <NavLink to="">About</NavLink>
            </li>
            <li className="">
              <NavLink to="">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
          <button className=" bg-blue-800 px-5 py-2 rounded-md text-[#ffffff]">
            <NavLink to="/registration">Registration</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
