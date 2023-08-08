import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Search({ setSearchSection }) {
  //   const navigate = useNavigate();
  const searchRef = useRef();

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchSection(false);
    // navigate(`/products?q=${searchRef.current.value}`);
  };
  return (
    <div className="flex justify-center mx-auto max-w-screen-xl items-center bg-blue-500/20 pr-3 hover:bg-blue-600/30 rounded-lg">
      <input
        // ref={searchRef}
        name="search"
        type="text"
        id="simple-search"
        className="bg-gray-50 mr-2 text-gray-900 text-sm rounded-lg  w-full pl-5 p-2 "
        placeholder="Search"
        autoComplete="off"
        // required=""
      />

      <FaSearch />
    </div>
  );
}

export default Search;
