import React, { use, useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import BookItem from "./BookItem";
import { useParams } from "react-router";

const RelatedBooks = ({ category, subCategory }) => {
  const { products, books } = useContext(ShopContext);
  const [related, setRelated] = useState([]);
  const { bookId } = useParams();

  useEffect(() => {
    if (books.length > 0) {
      let booksCopy = books.slice();

      booksCopy = booksCopy.filter((item) => category === item.category);
      booksCopy = booksCopy.filter((item) => subCategory === item.subCategory);
      setRelated(booksCopy.slice(0, 5));
    }
  }, [products]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [bookId]);
  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <h1>RELATED BOOKS</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item, index) => (
          <BookItem
            name={item.name}
            id={item._id}
            image={item.image}
            price={item.price}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedBooks;
