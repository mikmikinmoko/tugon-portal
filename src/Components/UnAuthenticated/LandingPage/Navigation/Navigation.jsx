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
import routes from "../../../../routes";
import { useCitizenAuthStore } from "../../../../store/storage/useAuth";
import { useGetProfile } from "../../../../store/controller/profile";
import { UserOutlined } from "@ant-design/icons";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { userData, reset } = useCitizenAuthStore();
  const getProfile = useGetProfile();
  const location = useLocation();
  const navigate = useNavigate();

  console.log(routes.auth);

  const filteredRoutes = routes.auth.filter(
    (route) => route.name !== "Departments"
  );

  // const fullName = [getProfile.data?.data?.firstName]
  //   .concat(
  //     getProfile.data?.data?.middleName,
  //     getProfile.data?.data?.lastName,
  //     getProfile.data?.data?.suffix
  //   )
  //   .join(" ");

  const closeDrawer = () => {
    setOpen(false);
  };

  const signOut = () => {
    reset();
    navigate("/");
  };

  const content = (
    <div className="flex flex-col gap-1 text-[14px] font-['Poppins'] ">
      <div className="px-4">
        <div className="capitalize">{getProfile.data?.data?.fullName}</div>
        <span className="text-[#898989] text-[12px]">
          {getProfile.data?.data?.primaryEmail}
        </span>
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
            {getProfile && (
              <>
                <Avatar
                  size={35}
                  icon={<UsersIcon />}
                  style={{
                    backgroundColor: "#234F8B",
                    cursor: "pointer",
                  }}
                />
                <div className="font-medium text-[#000000] lg:text-[18px] capitalize">
                  {getProfile.data?.data?.fullName}
                </div>
                <div className=" text-[#898989] lg:text-[12px]">
                  {getProfile.data?.data?.contacts?.primaryEmail}
                </div>
              </>
            )}
          </div>
        }
      >
        {getProfile ? (
          <>
            <div className="flex items-end flex-col gap-4 px-3 text-[12px] md:text-[14px] lg:text-[16px] text-[#474747]">
              {routes.auth.map((item) => (
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
              <div className="flex flex-row-reverse gap-3 p-2 items-center hover:bg-[#ebebeb] hover:rounded-md cursor-pointer ">
                <NavLink to="profile" className="flex gap-1 items-center">
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
            {routes.unAuth.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={`hover:text-[#234F8B]  border-b-2 py-1 border-transparent hover:border-current transition-all duration-500 ease-in-out ${
                  location.hash === item.path &&
                  "border-[#234F8B]  text-[#234F8B]"
                }`}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </Drawer>
      <div className=" font-['Poppins'] py-3 px-5 sm:px-5 md:px-14 text-[14px] backdrop-blur-lg  top-0 sticky z-10  shadow-md ">
        <div className="flex justify-between items-center">
          <NavLink to="/">
            <Logo width="100px" />
          </NavLink>
          <div className="hidden sm:hidden md:hidden lg:flex ">
            {userData && (
              <ul className="flex lg:gap-8  sm:gap-5 xs:gap-4 items-center text-[#787878] font-medium">
                {filteredRoutes.map((item) => (
                  <li>
                    <Link
                      to={item.path}
                      className={`hover:text-[#234F8B] flex items-center gap-1 justify-center px-2 border-b-2 py-1 border-transparent hover:border-current transition-all duration-500 ease-in-out ${
                        location.hash === item.path &&
                        "border-[#234F8B] text-[#234F8B]"
                      }`}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className="cursor-pointer">
                  <Popover
                    placement="bottom"
                    content={
                      <ul className=" font-normal text-[15px] font-['Poppins']">
                        {routes.auth.map(
                          (route) =>
                            route.children &&
                            route.children.map((child) => (
                              <li className="transition-all duration-200 ease-in  font-normal rounded-sm py-1 px-2 w-full hover:text-[#234F8B] hover:bg-[#f1efef]">
                                <NavLink to={child.path}>{child.name}</NavLink>
                              </li>
                            ))
                        )}
                      </ul>
                    }
                  >
                    <div
                      className={`hover:text-[#234F8B] flex items-center gap-1 px-2  ${
                        location.pathname === "/senior" ||
                        location.pathname === "/pwd" ||
                        location.pathname === "/upao" ||
                        location.pathname === "/gad"
                          ? "border-[#234F8B]  text-[#234F8B]"
                          : ""
                      } border-b-2 py-1 border-transparent hover:border-current transition-all duration-500 ease-in-out`}
                    >
                      <UserOutlined />
                      Departments
                    </div>
                  </Popover>
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
                {routes.unAuth.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={`hover:text-[#234F8B] focus:text-[#234F8B] px-2 border-b-2 border-transparent hover:border-current transition-all duration-300 ${
                      location.hash === item.path
                        ? "border-[#234F8B]  text-[#234F8B]"
                        : ""
                    }`}
                  >
                    <div className="flex justify-center items-center gap-2">
                      {item.icon}
                      {item.name}
                    </div>
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
            className="flex sm:flex md:flex lg:hidden cursor-pointer"
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
