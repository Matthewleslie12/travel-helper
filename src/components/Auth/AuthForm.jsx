import React, { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../utils/firebase";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const googleAuth = new GoogleAuthProvider();
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuth);
      console.log(result.user);
    } catch (error) {}
  };

  return (
    <div className="relative flex flex-col overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <form className="-mt-4">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email:
            </label>
            <input
              type="email"
              className="block w-full  py-2 mt-2 text-mainBlue bg-white border  focus:border-mainBlue focus:outline-none border-t-0 border-r-0 border-l-0"
              placeholder="jondoe12@gmail.com"
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password:
            </label>
            <input
              type="password"
              className="block w-full  py-2 mt-2 text-mainBlue bg-white border  focus:border-mainBlue focus:outline-none border-t-0 border-r-0 border-l-0"
              onChange={handlePasswordChange}
            />
          </div>
          <Link
            to="/"
            className="text-xs text-mainBlue hover:underline underline-offset-1"
          >
            Forget Password?
          </Link>
          <div className="mt-6">
            <button
              onClick={handleEmailSignUp}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-mainBlue rounded-md hover:bg-hoverBlue focus:outline-none focus:bg-mainBlue"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>

        <div className="flex mt-4 gap-x-2 ">
          <Link
            to="/homepage"
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:border-mainBlue focus:outline-none"
            onClick={googleLogin}
          >
            <FcGoogle className="w-6 h-6 " />
          </Link>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Already have an account?{" "}
          <Link
            to="/sign-in"
            className="font-medium text-mainBlue hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
