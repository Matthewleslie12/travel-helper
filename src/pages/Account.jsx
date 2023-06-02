import React from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const truncateName = (name) => {
    if (name) {
      const firstName = name.split(" ")[0];
      return firstName;
    }
    return "there";
  };

  if (!user) navigate("/sign-up");
  if (user)
    return (
      <div className="p-6 flex flex-col">
        <div className="flex justify-between items-center text-lg font-bold ">
          <h1>Hey, {truncateName(user.displayName)}!</h1>
          <img src={user.photoURL} alt="" className="rounded-full w-1/5" />
        </div>

        <button
          onClick={() => auth.signOut()}
          className="bg-mainBlue hover:bg-hoverBlue text-white p-2 rounded-full mt-auto justify-end absolute bottom-16 w-5/6"
        >
          Sign out
        </button>
      </div>
    );
};

export default Account;
