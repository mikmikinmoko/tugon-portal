import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Popover } from "antd";

import {
  MyAccountIcon,
  SignoutIcon,
  UsersIcon,
} from "../../../../Assets/Resources/Icons/Icons";
import { authActions } from "../../../../store/store";

const navigationAuth = [
  { name: "Announcement", link: "" },
  { name: "Key Features", link: "" },
  { name: "Tugon ID", link: "" },
  { name: "About", link: "" },
  { name: "Home", link: "/" },
];
const navigationUnAuth = [
  { name: "About Us", link: "" },
  { name: "Contact", link: "" },
  { name: "Home", link: "/" },
];

const Navigation = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { currentUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const { logout } = authActions;

  const signOut = () => {
    dispatch(logout());
    navigate("/");
  };

  const content = (
    <div className="flex flex-col gap-1 px-3 text-[14px] font-['Poppins'] ">
      <div className="capitalize">
        {currentUser?.firstName} {currentUser?.middleName}{" "}
        {currentUser?.lastName}
      </div>
      <span className="text-[#898989] text-[12px]">{currentUser?.email}</span>
      <hr />
      <div className="flex gap-1 items-center  py-2">
        <MyAccountIcon />
        <p>Account Settings</p>
      </div>
      <div
        className="flex gap-1 items-center text-[#DF3838] cursor-pointer"
        onClick={signOut}
      >
        <SignoutIcon /> <p>Log out</p>
      </div>
    </div>
  );

  console.log(currentUser);

  return (
    <div className=" font-sans py-3 px-5 sm:px-5 md:px-14 text-[14px]">
      <div className="flex justify-between items-center">
        <NavLink to="/">
          <Logo width="100px" />
        </NavLink>
        <div className="hidden sm:block md:flex ">
          {isAuthenticated && (
            <ul className="flex gap-8 items-center text-[#787878] font-medium  ">
              {navigationAuth.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.link}
                  className={"hover:text-[#234F8B] focus:text-[#234F8B]"}
                >
                  {item.name}
                </NavLink>
              ))}
              <Popover placement="bottomRight" content={content}>
                <Avatar
                  size={40}
                  icon={<UsersIcon />}
                  style={{
                    backgroundColor: "#234F8B",
                    cursor: "pointer",
                  }}
                />
              </Popover>
            </ul>
          )}
          {!isAuthenticated && (
            <ul className="flex gap-8 items-center text-[#787878] font-medium  ">
              {navigationUnAuth.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.link}
                  className={"hover:text-[#234F8B] focus:text-[#234F8B]"}
                >
                  {item.name}
                </NavLink>
              ))}
              <Button type="primary" className=" px-8 rounded-2xl bg-[#234F8B]">
                <NavLink to="/login">Login</NavLink>
              </Button>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
