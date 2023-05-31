import React from "react";
import {Link} from "react-router-dom";
import Preferences from "./Preferences";

const Settings = () => {
  return (
    <div className="flex flex-col justify-center pt-12 gap-5 ">
      <h1 className="flex justify-center font-bold text-lg border-b pb-2 w-full">
        Settings
      </h1>

      <div className="">
        <ul className="flex flex-col items-center gap-5 ">
          <Link to="/account" className="hover:underline underline-offset-2">
            Account
          </Link>
        </ul>
        <Preferences />
      </div>
    </div>
  );
};

export default Settings;
