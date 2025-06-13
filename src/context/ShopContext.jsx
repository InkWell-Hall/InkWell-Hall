import { createContext, useEffect, useState } from "react";
import { apiClient } from "../api/client";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [showSearch, setShowSearch] = useState(true);
  const [search, setSearch] = useState("");

  const getBooks = () => {
    apiClient
      .get("/Books")
      .then((response) => {
        // console.log(response.data);
        setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBooks();
  }, []);

  const value = {
    books,
    showSearch,
    setShowSearch,
    search,
    setSearch,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
