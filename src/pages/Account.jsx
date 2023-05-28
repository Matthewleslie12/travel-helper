import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const truncateName = (name) => {
    const firstName = name.split(" ")[0];
    return firstName;
  };

  if (!user) navigate("/sign-up");
  if (user)
    return (
      <div className="p-6">
        <h1>Hey {truncateName(user.displayName)}!</h1>
        <img src={user.photoURL} alt="" className="rounded-full" />
        <button
          onClick={() => auth.signOut()}
          className=" border-red-600 border bg-yellow-400"
        >
          Sign out
        </button>
      </div>
    );
};

export default Account;
