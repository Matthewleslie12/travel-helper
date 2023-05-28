import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHouse,
  faBookmark,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

// TODO replace icons with higher quality ones and choose 5 to make it look more natural

import { useNavigate } from "react-router-dom";

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
    <div class="fixed bottom-0 z-50 w-full -translate-x-1/2 bg-white border-t border-gray-200 left-1/2 rounded-t-lg">
      <div class="grid h-full max-w-lg grid-cols-4 mx-auto ">
        <button
          data-tooltip-target="tooltip-home"
          type="button"
          class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 group"
          onClick={handleHome}
        >
          <FontAwesomeIcon
            icon={faHouse}
            size="lg"
            className=" mb-1 text-darkGrayText  group-hover:text-mainBlue"
          />

          <span class="sr-only">Home</span>
        </button>
        <div
          id="tooltip-home"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip "
        >
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          data-tooltip-target="tooltip-bookmark"
          type="button"
          class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50  group"
          onClick={handleSaved}
        >
          <FontAwesomeIcon
            icon={faBookmark}
            size="lg"
            className=" mb-1 text-darkGrayText  group-hover:text-mainBlue"
          />
          <span class="sr-only">Bookmark</span>
        </button>
        <div
          id="tooltip-bookmark"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip "
        >
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          data-tooltip-target="tooltip-post"
          type="button"
          class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 group"
        >
          <FontAwesomeIcon
            icon={faComment}
            size="lg"
            className=" mb-1 text-darkGrayText  group-hover:text-mainBlue"
            onClick={handleMessage}
          />
          <span class="sr-only">New post</span>
        </button>
        <div
          id="tooltip-post"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip "
        >
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>

        <button
          data-tooltip-target="tooltip-settings"
          type="button"
          class="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50  group"
        >
          <FontAwesomeIcon
            icon={faSliders}
            size="lg"
            className=" mb-1 text-darkGrayText  group-hover:text-mainBlue"
          />
          <span class="sr-only">Settings</span>
        </button>
        <div
          id="tooltip-settings"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip "
          onClick={handleSettings}
        >
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
