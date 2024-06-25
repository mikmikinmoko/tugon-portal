import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import { Avatar, Button, Drawer, Popover } from "antd";
import { HashLink as Link } from "react-router-hash-link";

import {
  BurgerIcon,
  MyAccountIcon,
  SignoutIcon,
  UsersIcon,
} from "../../../../Assets/Resources/Icons/Icons";
import { useState } from "react";
import { routesAuth } from "../../../../routes";
import { useCitizenAuthStore } from "../../../../store/storage/useAuth";

const navigationAuth = [
  { name: "PWD ID", link: "/pwd" },
  { name: "Senior Citizen ID", link: "/senior" },
  { name: "Home", link: "/" },
];
const navigationUnAuth = [
  { name: "About Us", link: "#aboutUs" },
  { name: "Contact", link: "#contact" },
  { name: "Home", link: "#home" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { userData, reset } = useCitizenAuthStore();
  const location = useLocation();
  const navigate = useNavigate();

  const fullName = [userData?.firstName]
    .concat(userData?.middleName, userData?.lastName, userData?.suffix)
    .join(" ");

  const closeDrawer = () => {
    setOpen(false);
  };

  const signOut = () => {
    reset();
    navigate("/");
  };
  console.log(location);

  const content = (
    <div className="flex flex-col gap-1 text-[14px] font-['Poppins'] ">
      <div className="px-4">
        <div className="capitalize">{fullName}</div>
        <span className="text-[#898989] text-[12px]">{userData?.email}</span>
      </div>
      <hr />
      <NavLink to="/profile">
        <div className="flex gap-1 items-center p-2 hover:bg-[#ebebeb] hover:rounded-md cursor-pointer">
          <MyAccountIcon />
          <p>Account Settings</p>
        </div>
      </NavLink>
      <div
        className="flex gap-1 items-center text-[#DF3838]  p-2 hover:bg-[#ebebeb] hover:rounded-md cursor-pointer"
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
            {userData && (
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
                  {userData?.email}
                </div>
              </>
            )}
          </div>
        }
      >
        {userData ? (
          <>
            <div className="flex items-end flex-col-reverse gap-4 px-3 text-[12px] md:text-[14px] lg:text-[16px] text-[#474747]">
              {routesAuth.map((item) => (
                <Link
                  onClick={closeDrawer}
                  key={item.name}
                  to={item.path}
                  className={`hover:text-[#234F8B] focus:text-[#234F8B] font-['Poppins'] border-b-2 border-transparent hover:border-current transition-all ease-in-out duration-300 ${
                    location.pathname === item.path
                      ? "text-[#234F8B] border-current"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-4">
              <hr />
            </div>
            <div className="flex flex-col items-end font-['Poppins'] text-[12px] md:text-[14px] lg:text-[16px] ">
              <div className="flex flex-row-reverse gap-3 p-2 items-center hover:bg-[#ebebeb] hover:rounded-md  cursor-pointer ">
                <NavLink to="profile">
                  <MyAccountIcon />
                  <p>Account Settings</p>
                </NavLink>
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
                className={`hover:text-[#234F8B]  border-b-2 py-1 border-transparent hover:border-current transition-all duration-500 ease-in-out ${
                  location.hash === item.link &&
                  "border-[#234F8B]  text-[#234F8B]"
                }`}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </Drawer>
      <div className=" font-sans py-3 px-5 sm:px-5 md:px-14 text-[14px] top-0 sticky z-10 bg-[#ffffff] shadow-md">
        <div className="flex justify-between items-center">
          <NavLink to="/">
            <Logo width="100px" />
          </NavLink>
          <div className="hidden sm:block md:flex ">
            {userData && (
              <ul className="flex lg:gap-8  sm:gap-5 xs:gap-4 items-center text-[#787878] font-medium">
                <li>
                  <Link
                    to="/#home"
                    className={`hover:text-[#234F8B]  border-b-2 py-1 border-transparent hover:border-current transition-all duration-500 ease-in-out ${
                      location.hash === "#home" &&
                      "border-[#234F8B] text-[#234F8B]"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Popover
                    placement="bottom"
                    content={
                      <ul className=" font-normal text-[15px] font-['Poppins']">
                        <NavLink to="/senior">
                          <li className="transition-all duration-200 ease-in  font-normal rounded-sm py-1 px-2 w-full hover:text-[#234F8B] hover:bg-[#f1efef]">
                            OSCA (Office of the Senior Citizen Affair)
                          </li>
                        </NavLink>
                        <NavLink to="/pwd">
                          <li className="transition-all duration-200 ease-in  font-normal rounded-sm py-1 px-2 w-full hover:text-[#234F8B] hover:bg-[#f1efef]">
                            PDAO (Person with Disability Affair Office)
                          </li>
                        </NavLink>
                        <NavLink to="">
                          <li className="transition-all duration-200 ease-in  font-normal rounded-sm py-1 px-2 w-full hover:text-[#234F8B] hover:bg-[#f1efef]">
                            UPAO (Urban Poor Affair Office)
                          </li>
                        </NavLink>
                        <NavLink to="">
                          <li className="transition-all duration-200 ease-in  font-normal rounded-sm py-1 px-2 w-full hover:text-[#234F8B] hover:bg-[#f1efef]">
                            GAD (Gender and Development)
                          </li>
                        </NavLink>
                      </ul>
                    }
                  >
                    <div
                      className={`hover:text-[#234F8B]  ${
                        location.pathname === "/senior" ||
                        location.pathname === "/pwd" ||
                        location.pathname === "/upao" ||
                        location.pathname === "/gad"
                          ? "border-[#234F8B]  text-[#234F8B]"
                          : ""
                      } border-b-2 py-1 border-transparent hover:border-current transition-all duration-500 ease-in-out`}
                    >
                      Departments
                    </div>
                  </Popover>
                </li>
                <li>
                  <Link
                    to="/#aboutUs"
                    className={`hover:text-[#234F8B]  border-b-2 py-1 border-transparent hover:border-current transition-all duration-500 ease-in-out ${
                      location.hash === "#aboutUs" &&
                      "border-[#234F8B]  text-[#234F8B]"
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#announcement"
                    className={`hover:text-[#234F8B]  border-b-2 py-1 border-transparent hover:border-current transition-all duration-500 ease-in-out ${
                      location.hash === "#announcement" &&
                      "border-[#234F8B]  text-[#234F8B]"
                    }`}
                  >
                    Announcement
                  </Link>
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
            {!userData && (
              <ul className="flex gap-8 items-center text-[#787878] font-medium">
                {navigationUnAuth.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.link}
                    className={`hover:text-[#234F8B] focus:text-[#234F8B] border-b-2 border-transparent hover:border-current transition-all duration-300 ${
                      location.hash === item.link
                        ? "border-[#234F8B]  text-[#234F8B]"
                        : ""
                    }`}
                  >
                    {item.name}
                  </NavLink>
                ))}
                <NavLink to="/login">
                  <Button
                    type="primary"
                    className="px-8 rounded-2xl bg-[#234F8B]"
                  >
                    Login
                  </Button>
                </NavLink>
              </ul>
            )}
          </div>
          <div
            className="flex sm:hidden md:hidden lg:hidden cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <BurgerIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
