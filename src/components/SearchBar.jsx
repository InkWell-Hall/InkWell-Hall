import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useLocation } from "react-router";
import { Cross, CrossIcon, Search, X } from "lucide-react";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);
  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center transition-ease-in fixed w-full mt-10 top-0">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
        />
        <Search className="w-4" />
      </div>
      <X
        className=" inline-flex cursor-pointer w-24"
        onClick={() => setShowSearch(!showSearch)}
      />
    </div>
  ) : null;
};

export default SearchBar;
