import React from "react";
import Search from "./Search";
import {useNavigate} from "react-router-dom";
import {RiEditBoxLine, RiUserAddLine} from "react-icons/ri";
import {AiOutlineArrowLeft} from "react-icons/ai";

const TopSection = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="flex items-center px-5">
        <AiOutlineArrowLeft
          size={25}
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="font-bold text-lg mx-auto pr-5">Chat Room</h1>
      </div>
      <div className="flex items-center px-4 pt-4">
        <RiUserAddLine
          className="text-mainBlue cursor-pointer hover:text-hoverBlue"
          size={40}
        />
        <Search />
        <RiEditBoxLine
          className="text-mainBlue cursor-pointer hover:text-hoverBlue"
          size={40}
        />
      </div>
    </>
  );
};

export default TopSection;
