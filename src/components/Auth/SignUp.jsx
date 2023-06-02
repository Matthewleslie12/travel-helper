import React from "react";
import earth from "../../assets/images/ion_earth.png";
import AuthForm from "./AuthForm";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../utils/firebase";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
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
    <div className="pt-12">
      <h1 className="text-3xl px-4 pt-4">
        Begin your
        <br />
        <span>journey!</span>
      </h1>
      <br />
      <img
        src={earth}
        alt="avatar"
        className="mx-auto"
        referrerPolicy="no-referrer"
      />

      <AuthForm />
    </div>
  );
};

export default SignUp;
