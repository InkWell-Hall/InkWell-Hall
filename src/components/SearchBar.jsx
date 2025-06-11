import React, { useContext } from "react";
import BookContext from "../context/ShopContext";

const SearchBar = () => {
  const { seacrh, setSearch, showSearch, setShowSearch } =
    useContext(BookContext);

  return <div></div>;
};

export default SearchBar;
