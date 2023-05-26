import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { RxAvatar } from "react-icons/rx";

import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  if (loading) return <h1>Loading...</h1>;
  if (!user) navigate("/sign-up");
  if (user)
    return (
      <div>
        HomePage
        {user && user.photoURL ? (
          <img src={user.photoURL} alt="" />
        ) : (
          <RxAvatar size={50} />
        )}
        <button onClick={() => auth.signOut()}>Sign out</button>
      </div>
    );
};

export default HomePage;
