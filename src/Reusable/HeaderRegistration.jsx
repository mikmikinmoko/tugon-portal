import { Button } from "antd";
import dayjs from "dayjs";
import React from "react";
import { useNavigate } from "react-router-dom";

const dateToday = dayjs().format("dddd, MMMM D, YYYY");

const HeaderRegistration = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className=" bg-[#E0E6F2] py-2 px-10">
      <div className="py-5 text-[#808080] text-[14px] flex items-center justify-between">
        <Button type="text" onClick={() => navigate(-1)}>
          &larr; back
        </Button>
        <div className="text-[#1a1a1a] font-medium">{dateToday}</div>
      </div>
      <div className="text-[24px] font-semibold">
        {children}
        <span className="text-[#808080] text-[12px] px-2 font-normal">
          Registration Form
        </span>
      </div>
    </div>
  );
};

export default HeaderRegistration;
