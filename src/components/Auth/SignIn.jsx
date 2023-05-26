import React from "react";
import earth from "../../assets/images/ion_earth.png";
import SignInAuth from "./SignInAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const SignUp = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  if (loading) {
  }

  if (user) {
    navigate("/homepage");
  }

  useEffect(() => {
    if (user) navigate("/homepage");
  });

  return (
    <div className="pt-12 bg-mainBlue w-screen h-screen px-4">
      <h1 className="text-3xl  py-4 text-white">Welcome Back!</h1>
      <div className="bg-white rounded-md shadow-md pt-12">
        <img
          src={earth}
          alt="avatar"
          className="mx-auto"
          referrerPolicy="no-referrer"
        />
        <SignInAuth />
      </div>
    </div>
  );
};

export default SignUp;
