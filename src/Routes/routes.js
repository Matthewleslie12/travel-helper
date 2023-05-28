import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SignUp from "../components/Auth/SignUp";
import SignIn from "../components/Auth/SignIn";
import HomePage from "../pages/HomePage";
import Account from "../pages/Account";
import Navbar from "../components/NavBar/Navbar";
import Saved from "../pages/Saved";
import Messages from "../pages/Messages";

const AppRoutes = () => {
  const location = useLocation();
  const { pathname } = location;
  const isAuthPage = pathname === "/sign-up" || pathname === "/sign-in";

  return (
    <>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>

      {/* {!isAuthPage && <Navbar />} */}
    </>
  );
};

export default AppRoutes;
