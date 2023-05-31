import React from "react";

const SearchBar = () => {
  return (
    <div className="flex-grow">
      <form action="">
        <input
          type="text"
          id="search"
          className="border rounded-full px-4 w-full h-14 focus:border-mainBlue focus:outline-none text-gray-400"
          placeholder="Where to next?"
        />
      </form>
    </div>
  );
};

export default SearchBar;
