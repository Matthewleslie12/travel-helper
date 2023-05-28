import React from "react";
import { message, saved, home, map } from "../../assets/icons/index";
// TODO replace icons with higher quality ones and choose 5 to make it look more natural

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/homepage");
  };
  const handleLocation = () => {
    navigate("/");
  };
  const handleMessage = () => {
    navigate("/messages");
  };
  const handleSaved = () => {
    navigate("/saved");
  };

  return (
    <div className="fixed bottom-0 border-t-2 w-full border-t-navBoarder flex flex-row justify-between items-center h-20 px-6 bg-white">
      <img src={home} alt="" className="cursor-pointer " onClick={handleHome} />

      <img
        src={map}
        alt=""
        className="cursor-pointer "
        onClick={handleLocation}
      />

      <img
        src={message}
        alt=""
        className="cursor-pointer "
        onClick={handleMessage}
      />

      <img
        src={saved}
        alt=""
        className="cursor-pointer "
        onClick={handleSaved}
      />
    </div>
  );
};

export default Navbar;
