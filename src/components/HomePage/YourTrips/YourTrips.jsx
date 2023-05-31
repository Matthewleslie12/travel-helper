import React from "react";
import Images from "./Images";

const YourTrips = () => {
  return (
    <div className="px-6 pt-9">
      <h1 className="font-bold  text-headerText">Your Trips</h1>
      <Images />
    </div>
  );
};
// TODO - Allow users to add a trip which will be stored in their account so they can view it anyhere.

export default YourTrips;
