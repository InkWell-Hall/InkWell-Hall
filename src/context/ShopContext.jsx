import { createContext, useEffect, useState } from "react";
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
    apiClient
      .get("/Books" + `${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBooks();
    deleteBook();
  }, []);

  const value = {
    books,
    deleteBook,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
