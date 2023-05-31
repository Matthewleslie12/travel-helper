import React, {useState} from "react";
import {seoul, grayHeart, activeHeart} from "../../../assets/icons/index";
import {AiFillStar} from "react-icons/ai";
import {ImLocation} from "react-icons/im";

const Images = () => {
  const [heartActive, setHeartActive] = useState(false);

  const handleHeartClick = () => {
    setHeartActive(!heartActive);
  };

  return (
    <>
      <div className="flex flex-row gap-3 flex-wrap overflow-scroll">
        <div className="flex flex-col w-fit rounded-3xl  shadow-xl pt-4">
          <img src={seoul} alt="" className="w-40 rounded-3xl" />
          <div className="px-2 bg-white ">
            <div className="flex justify-between pt-2 text-sm">
              <p className="text-blackText font-bold ">Namsan Tower</p>
              <p className="pb-2  flex flex-row items-center">
                <AiFillStar className="text-mainBlue " />4
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
// TODO - When a user presses the heart, the trip should be saved in their account and go to the bookmark section.

// TODO - When user clicks the Trip card, should take them to a page where they can see flight info if they inputted any, notes where a user can add 'Things to bring' and tick them off, The actual itinerary, and planner for that, and finally reminders.

// TODO - When adding a new trip, should be scrollable. Not stacked on top of one another.
export default Images;
