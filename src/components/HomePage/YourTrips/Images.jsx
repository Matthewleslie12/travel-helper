import React, { useState } from "react";
import { seoul, grayHeart, activeHeart } from "../../../assets/icons/index";
import { AiFillStar } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

const Images = () => {
  const [heartActive, setHeartActive] = useState(false);

  const handleHeartClick = () => {
    setHeartActive(!heartActive);
  };

  return (
    <>
      <div className="flex flex-row gap-3 flex-wrap flex-1">
        <div className="flex flex-col w-fit rounded-3xl overflow-scroll shadow-xl pt-4">
          <img src={seoul} alt="" className="w-44 rounded-3xl" />
          <div className="px-2 bg-white ">
            <div className="flex justify-between pt-2">
              <p className="text-blackText font-bold">Namsan Tower</p>
              <p className="pb-2  flex flex-row items-center">
                <AiFillStar className="text-mainBlue" />4
              </p>
            </div>
            <p className="text-darkGrayText pb-2 flex flex-row items-center gap-1">
              <ImLocation />
              Seoul
            </p>
            <div className="flex justify-end pb-2">
              <button className="" onClick={handleHeartClick}>
                <img
                  src={heartActive ? activeHeart : grayHeart}
                  alt=""
                  className="w-6"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Images;
