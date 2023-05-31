import React, { useState } from "react";
import { wave, waveWhite } from "../../../assets/icons/index";

const Categories = () => {
  const [activeButtons, setActiveButtons] = useState([]);

  const handleCategoryClick = (index) => {
    const updatedButtons = [...activeButtons];

    if (updatedButtons.includes(index)) {
      updatedButtons.splice(updatedButtons.indexOf(index), 1);
    } else {
      updatedButtons.push(index);
    }

    setActiveButtons(updatedButtons);
  };

  const handleHover = () => {};

  const handleHoverExit = () => {};

  const buttonText = [
    "Lakes",
    "Food",
    "Mountains",
    "History",
    "Night Life",
    "Architecture",
    "Culture",
  ];
  // TODO determine what category selectors I want to include, dont render the same a tag 4x to change one detail. Change image and name. Check with API, or database(?) and map over those in the array.

  // TODO - Once user presses a category, it should be used as the filter, the main page should refresh and show only trips that match that specification

  const getButtonClass = (index) => {
    const isActive = activeButtons.includes(index);
    const hasLongText =
      buttonText[index].length > 10 || buttonText[index].includes(" ");

    if (hasLongText) {
      return isActive
        ? "flex justify-center items-center space-x-3 px-6 py-4 rounded-full text-white text-lg duration-300 h-12  bg-mainBlue border-mainBlue border pill-button whitespace-nowrap"
        : "flex justify-center items-center space-x-3 px-6 py-4 rounded-full text-blackText text-lg duration-300 w-auto h-12   border-mainBlue border pill-button whitespace-nowrap";
    }

    return isActive
      ? "flex justify-center items-center space-x-3 px-8 py-4 rounded-full text-white text-lg duration-300 w-32 h-12  bg-mainBlue border-mainBlue border pill-button whitespace-nowrap"
      : "flex justify-center items-center space-x-3 px-8 py-4 rounded-full text-blackText text-lg duration-300 w-38 h-12  border-mainBlue border pill-button whitespace-nowrap ";
  };

  const renderImageSource = (index) => {
    const isActive = activeButtons.includes(index);
    return isActive ? waveWhite : wave;
  };

  return (
    <div className="">
      <div className="pt-3 flex justify-between items-center px-6">
        <h1 className="font-bold text-headerText">Categories</h1>
      </div>
      <div className="pt-4 flex gap-4 flex-1 overflow-x-scroll overflow-y-hidden no-scrollbar px-6">
        {buttonText.map((text, index) => (
          <button
            key={index}
            className={getButtonClass(index)}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
            onClick={() => handleCategoryClick(index)}
          >
            <img src={renderImageSource(index)} alt="" className="" />
            <p className="">{text}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;

{
  /* // * 1/3 color button*/
}
{
  /* 
<div className="pt-4 flex gap-4 flex-1 flex-wrap">
  <a
    href="#/"
    className="border w-32 h-12 rounded-full flex min-w-fit shadow-md border-mainBlue "
  >
    <div className="bg-mainBlue h-full rounded-full w-1/3 flex justify-center items-center">
      <img src={lake} alt="" className=" w-8 h-8 " />
    </div>
    <p className="items-center flex pl-4">Lakes</p>
  </a>
</div> */
}

{
  /* // * Filled button*/
}

{
  /* <button className="flex justify-center items-center space-x-3 px-8 py-4 rounded-full text-white text-xl bg-mainBlue hover:bg-hoverBlue duration-300  w-32 h-12 mt-8 shadow-lg">
  <img src={waveWhite} alt="" className="" />

  <p>Lakes</p>
</button> */
}
{
  /* // * Clear button */
}

{
  /* <button className="flex justify-center items-center space-x-3 px-8 py-4 rounded-full text-blackText text-lg duration-300  w-32 h-12 mt-8 shadow-lg border-mainBlue border pill-button">
  <img src={wave} alt="" />
  <p>Lakes</p>
</button> */
}

{
  /* // * Clear with hover button */
}
