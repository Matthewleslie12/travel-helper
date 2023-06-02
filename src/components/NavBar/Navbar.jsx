import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHouse,
  faBookmark,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

// TODO replace icons with higher quality ones and choose 5 to make it look more natural

import {useNavigate} from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/homepage");
  };
  const handleSaved = () => {
    navigate("/saved");
  };
  const handleMessage = () => {
    navigate("/messages");
  };
  const handleSettings = () => {
    navigate("/settings");
  };

  return (
    <div className="fixed bottom-0 z-50 w-full -translate-x-1/2 bg-white border-t border-gray-200 left-1/2 rounded-t-lg ">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto ">
        <button
          data-tooltip-target="tooltip-home"
          type="button"
          className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 group"
          onClick={handleHome}
        >
          <FontAwesomeIcon
            icon={faHouse}
            size="lg"
            className=" mb-1 text-darkGrayText  group-hover:text-mainBlue"
          />

          <span className="sr-only">Home</span>
        </button>
        <div
          id="tooltip-home"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip "
        >
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          data-tooltip-target="tooltip-bookmark"
          type="button"
          className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50  group"
          onClick={handleSaved}
        >
          <FontAwesomeIcon
            icon={faBookmark}
            size="lg"
            className=" mb-1 text-darkGrayText  group-hover:text-mainBlue"
          />
          <span className="sr-only">Bookmark</span>
        </button>
        <div
          id="tooltip-bookmark"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip "
        >
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          data-tooltip-target="tooltip-post"
          type="button"
          className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 group"
          onClick={handleMessage}
        >
          <FontAwesomeIcon
            icon={faComment}
            size="lg"
            className=" mb-1 text-darkGrayText  group-hover:text-mainBlue"
          />
          <span className="sr-only">New post</span>
        </button>
        <div
          id="tooltip-post"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip "
        >
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        <button
          data-tooltip-target="tooltip-settings"
          type="button"
          className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50  group"
          onClick={handleSettings}
        >
          <FontAwesomeIcon
            icon={faSliders}
            size="lg"
            className=" mb-1 text-darkGrayText  group-hover:text-mainBlue"
          />
          <span className="sr-only">Settings</span>
        </button>
        <div
          id="tooltip-settings"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip "
        >
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
