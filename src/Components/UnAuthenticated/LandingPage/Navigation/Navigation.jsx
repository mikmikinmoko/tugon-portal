import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Drawer, Popover } from "antd";
import { HashLink as Link } from "react-router-hash-link";

import {
  BurgerIcon,
  MyAccountIcon,
  SignoutIcon,
  UsersIcon,
} from "../../../../Assets/Resources/Icons/Icons";
import { authActions } from "../../../../store/store";
import { useState } from "react";
import { routesAuth } from "../../../../routes";

const navigationAuth = [
  { name: "PWD ID", link: "/pwd" },
  { name: "Senior Citizen ID", link: "/senior" },
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

  const fullName = [currentUser?.firstName]
    .concat(currentUser?.middleName, currentUser?.lastName)
    .join(" ");
  const { logout } = authActions;
  const [open, setOpen] = useState(false);

  const closeDrawer = () => {
    setOpen(false);
  };

  const signOut = () => {
    dispatch(logout());
    navigate("/");
  };

  const content = (
    <div className="flex flex-col gap-1 text-[14px] font-['Poppins'] ">
      <div className="px-4">
        <div className="capitalize">{fullName}</div>
        <span className="text-[#898989] text-[12px]">{currentUser?.email}</span>
      </div>
      <hr />
      <div className="flex gap-1 items-center  p-2 hover:bg-[#ebebeb] hover:rounded-md  cursor-pointer ">
        <MyAccountIcon />
        <p>Account Settings</p>
      </div>
      <div
        className="flex gap-1 items-center text-[#DF3838]  p-2 hover:bg-[#ebebeb] hover:rounded-md  cursor-pointer"
        onClick={signOut}
      >
        <SignoutIcon /> <p>Log out</p>
      </div>
    </div>
  );

  return (
    <>
      <Drawer
        open={open}
        onClose={closeDrawer}
        width={"50%"}
        style={{ height: "60%" }}
        extra={
          <div className="flex flex-col items-end font-['Poppins'] text-[10px] md:text-[14px] lg:text-[16px] font-normal gap-1 px-3">
            {isAuthenticated && (
              <>
                <Avatar
                  size={35}
                  icon={<UsersIcon />}
                  style={{
                    backgroundColor: "#234F8B",
                    cursor: "pointer",
                  }}
                />
                <div className="font-medium text-[#000000] lg:text-[18px]">
                  {fullName}
                </div>
                <div className=" text-[#898989] lg:text-[12px]">
                  {currentUser?.email}
                </div>
              </>
            )}
          </div>
        }
      >
        {isAuthenticated ? (
          <>
            <div className="flex items-end flex-col-reverse gap-4 px-3 text-[12px] md:text-[14px] lg:text-[16px] text-[#474747]">
              {routesAuth.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={
                    "hover:text-[#234F8B] focus:text-[#234F8B] font-['Poppins']"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div className="py-4">
              <hr />
            </div>
            <div className="flex flex-col items-end font-['Poppins'] text-[12px] md:text-[14px] lg:text-[16px] ">
              <div className="flex flex-row-reverse gap-3 p-2 items-center hover:bg-[#ebebeb] hover:rounded-md  cursor-pointer ">
                <MyAccountIcon />
                <p>Account Settings</p>
              </div>
              <div
                className="flex flex-row-reverse gap-2 items-center p-2 text-[#DF3838]   hover:bg-[#ebebeb] hover:rounded-md  cursor-pointer"
                onClick={signOut}
              >
                <SignoutIcon /> <p className="font-medium">Log out</p>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col-reverse items-end gap-2 font-['Poppins'] text-[16px]">
            {navigationUnAuth.map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                className={"hover:text-[#234F8B] focus:text-[#234F8B]"}
              >
                {item.name} {item.icon}
              </NavLink>
            ))}
          </div>
        )}
      </Drawer>
      <div className=" font-sans py-3 px-5 sm:px-5 md:px-14 text-[14px]">
        <div className="flex justify-between items-center">
          <NavLink to="/">
            <Logo width="100px" />
          </NavLink>
          <div className="hidden sm:block md:flex ">
            {isAuthenticated && (
              <ul className="flex lg:gap-8  sm:gap-5 xs:gap-4 items-center text-[#787878] font-medium  ">
                {/* {navigationAuth.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.link}
                    className={"hover:text-[#234F8B] focus:text-[#234F8B]"}
                  >
                    {item.name}
                  </NavLink>
                ))} */}
                <li>
                  <NavLink to={"/senior"}>Senior ID</NavLink>
                </li>
                <li>
                  <Link to="/#announcement">Announcement</Link>
                </li>
                <li>
                  <Link to="/#aboutUs">About</Link>
                </li>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
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
                <Button
                  type="primary"
                  className=" px-8 rounded-2xl bg-[#234F8B]"
                >
                  <NavLink to="/login">Login</NavLink>
                </Button>
              </ul>
            )}
          </div>
          {isAuthenticated ? (
            <div
              className="flex sm:hidden md:hidden lg:hidden cursor-pointer "
              onClick={() => setOpen(true)}
            >
              <BurgerIcon />
            </div>
          ) : (
            <div
              className="flex sm:hidden md:hidden lg:hidden cursor-pointer "
              onClick={() => setOpen(true)}
            >
              <BurgerIcon />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
