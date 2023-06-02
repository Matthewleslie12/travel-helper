import React from "react";
import lake from "../assets/icons/location.png";

const Saved = () => {
  return (
    <div className="mb-20">
      <div className="flex justify-center pt-6">
        <h1 className="text-lg font-bold">Saved Trips</h1>
      </div>
      <div className="pt-6">
        <h2 className="text-lg pb-2 px-4">Trips</h2>
      </div>
      <div className="rounded-3xl shadow-lg p-4 flex ">
        <div className="w-1/2 pr-4">
          <img
            src={lake}
            alt="name"
            className="h-full w-full object-cover rounded-2xl"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-lg font-semibold pb-2">Location</h2>
          <p className="text-sm text-gray-600 pb-2">Rating</p>
          <p className="text-sm text-gray-600 pb-4">Address</p>
          <button className="bg-mainBlue hover:bg-hoverBlue text-white py-2 px-4 w-full rounded-full">
            View Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Saved;
