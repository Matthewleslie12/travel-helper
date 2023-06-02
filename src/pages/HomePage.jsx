import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../utils/firebase";
import {RxAvatar} from "react-icons/rx";
import React from "react";
import {useNavigate} from "react-router-dom";
import SearchBar from "../components/Search/SearchBar";
import ForYou from "../components/HomePage/YourTrips/YourTrips";
import Popular from "../components/HomePage/Explore/Explore";
import FilterList from "../components/HomePage/Categories/Categories";

const HomePage = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  const navigateAccount = (e) => {
    navigate("/account");
  };

  if (loading) return <h1>Loading...</h1>;
  if (!user) navigate("/sign-up");

  return (
    <>
      <div className="px-6 pt-12 flex justify-between gap-3 ">
        <SearchBar />

        {user && user.photoURL ? (
          <img
            src={user.photoURL}
            alt=""
            className="rounded-full w-14 cursor-pointer"
            onClick={navigateAccount}
          />
        ) : (
          <RxAvatar
            size={50}
            onClick={navigateAccount}
            className="cursor-pointer"
          />
        )}
      </div>

      <FilterList />
      <ForYou />
      <Popular />
    </>
  );
};

export default HomePage;
