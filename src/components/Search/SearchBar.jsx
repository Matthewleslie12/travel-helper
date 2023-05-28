import React from "react";

const SearchBar = () => {
  return (
    <div>
      <form action="">
        <input
          type="text"
          id="search"
          className="border rounded-full px-4 w-[21.875rem] h-14 focus:border-mainBlue focus:outline-none text-gray-400"
          placeholder="Where to next?"
        />
      </form>
    </div>
  );
};

export default SearchBar;
