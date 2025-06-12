import React, { use, useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import BookItem from "./BookItem";
import { useParams } from "react-router";

const RelatedBooks = ({ category, subCategory }) => {
  const { products, books } = useContext(ShopContext);
  const [related, setRelated] = useState([]);
  const { bookId } = useParams();
  console.log(books);
  useEffect(() => {
    if (books.length && category) {
      const relatedBooks = books.filter(
        (item) =>
          item._id !== bookId && // exclude current book
          item.category?.toLowerCase() === category.toLowerCase()
      );
      setRelated(relatedBooks.slice(0, 5));
    }
  }, [books, category]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [bookId]);
  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <h1>RELATED BOOKS</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-6 w-[90%] mx-auto">
        {related.map((item, index) => (
          <BookItem
            name={item.title}
            id={item._id}
            image={item.imageURL}
            price={item.price}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedBooks;
