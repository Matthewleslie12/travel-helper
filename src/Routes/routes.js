import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../components/Auth/SignUp";
import SignIn from "../components/Auth/SignIn";
import HomePage from "../pages/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/homepage" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
