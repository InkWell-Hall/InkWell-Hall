import { createContext, useEffect, useState } from "react";
import { products } from "../assets/images/assets";
import { apiClient } from "../api/client";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
    apiClient
      .get("/Books")
      .then((response) => {
        // console.log(response.data);
        setBooks(response.data.slice(0, 10));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteBook = (id) => {
    apiClient.get("/Books" + `${id}`).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    getBooks();
    deleteBook();
  }, []);

  const value = {
    products,
    books,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
