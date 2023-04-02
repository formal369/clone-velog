import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchIcon = ({ onClick }) => {
  return (
    <div className="search-icon" onClick={onClick}>
      <FaSearch />
    </div>
  );
};

export default SearchIcon;
