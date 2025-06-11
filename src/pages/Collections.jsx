import React, { useContext, useEffect, useState } from "react";
import { apiClient } from "../api/client";

const Collections = () => {
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

  useEffect(() => {
    getBooks();
    console.log(books);
  }, []);

  return (
    <div className="grid grid-cols-4">
      {books.map((item, index) => {
        return (
          <div key={index}>
            <div>
              <img src={item.imagePath} alt="" />
            </div>
            <div>
              <h1 className="text-2xl font-body-font">{item.author}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Collections;
