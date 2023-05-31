import React from "react";
import {Route, Routes, useLocation, Navigate} from "react-router-dom";
import SignUp from "../components/Auth/SignUp";
import SignIn from "../components/Auth/SignIn";
import HomePage from "../pages/HomePage";
import Account from "../pages/Account";
import Navbar from "../components/NavBar/Navbar";
import Saved from "../pages/Saved";
import Messages from "../pages/Messages";
import Settings from "../pages/Settings";
import Preferences from "../pages/Preferences";

const AppRoutes = () => {
  const location = useLocation();
  const {pathname} = location;
  const isAuthPage = pathname === "/sign-up" || pathname === "/sign-in";

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/sign-up" />} />

        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>

      {!isAuthPage && <Navbar />}
    </>
  );
};

export default AppRoutes;
