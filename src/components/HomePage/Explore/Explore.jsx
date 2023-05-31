import React, { useState } from "react";
import Masonry from "./Masonry";

const Explore = () => {
  const [showAllCards, setShowAllCards] = useState(false);

  const handleToggleCards = (e) => {
    setShowAllCards(!showAllCards);
    e.preventDefault();
  };

  return (
    <div className="px-6 pt-10 text-headerText ">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Explore</h1>

        <div className=" text-center">
          {showAllCards ? (
            <button
              className="text-grayText text-sm "
              onClick={handleToggleCards}
            >
              <p className="hover:underline underline-offset-2 decoration-mainBlue">
                See Less
              </p>
            </button>
          ) : (
            <button
              className="text-grayText text-sm"
              onClick={handleToggleCards}
            >
              <p className="hover:underline underline-offset-2 decoration-mainBlue">
                See More
              </p>
            </button>
          )}
        </div>
      </div>
      <Masonry showAllCards={showAllCards} />
    </div>
  );
};

export default Explore;
