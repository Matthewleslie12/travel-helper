import React, { useState } from "react";
import { wave, waveWhite } from "../../../assets/icons/index";

const Categories = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [categoryActive, setCategoryActive] = useState(false);

  const handleCategoryClick = () => {
    setCategoryActive(!categoryActive);
    setIsHovered(false);
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverExit = () => {
    setIsHovered(false);
  };

  const buttonClass = categoryActive
    ? "flex justify-center items-center space-x-3 px-8 py-4 rounded-full text-white text-lg bg-mainBlue duration-300 w-32 h-12 mt-8 shadow-lg border-mainBlue border pill-button"
    : "flex justify-center items-center space-x-3 px-8 py-4 rounded-full text-blackText text-lg hover:text-white hover:bg-hoverBlue duration-300 w-32 h-12 mt-8 shadow-lg border-mainBlue border pill-button";

  const imageSource = categoryActive || isHovered ? waveWhite : wave;

  return (
    <>
      <div className=" px-6">
        <div className="pt-8 flex justify-between items-center">
          <h1 className="font-bold text-headerText">Categories</h1>
          <p className="text-grayText text-sm cursor-pointer hover:underline underline-offset-2 decoration-mainBlue">
            See All
          </p>
        </div>
        {/* // * 1/3 color button*/}
        {/* 
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
        </div> */}

        {/* // * Filled button*/}

        {/* <button className="flex justify-center items-center space-x-3 px-8 py-4 rounded-full text-white text-xl bg-mainBlue hover:bg-hoverBlue duration-300  w-32 h-12 mt-8 shadow-lg">
          <img src={waveWhite} alt="" className="" />

          <p>Lakes</p>
        </button> */}
        {/* // * Clear button */}

        {/* <button className="flex justify-center items-center space-x-3 px-8 py-4 rounded-full text-blackText text-lg duration-300  w-32 h-12 mt-8 shadow-lg border-mainBlue border pill-button">
          <img src={wave} alt="" />
          <p>Lakes</p>
        </button> */}

        {/* // * Clear with hover button */}

        <button
          className={buttonClass}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
          onClick={handleCategoryClick}
        >
          <img src={imageSource} alt="" />
          <p>Lakes</p>
        </button>
      </div>
    </>
    // TODO determine what category selectors I want to include, dont render the same a tag 4x to change one detail. Change image and name.

    // TODO Make 'see all' drop the menu down, or show all the options.

    // TODO figure out how to allow the pebble to shrink and grow depending on the content, however the blue box should be there regardless
  );
};

export default Categories;
