import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router";

const BookItem = ({ id, image, name, price }) => {
  const { products } = useContext(ShopContext);
  return (
    <div>
      <Link to={`/books/${id}`} className="text-gray-700 cursor-pointer">
        <div className="overflow-hidden">
          <img
            src={image[0]}
            alt=""
            className="hover:scale-110 transition ease-in-out"
          />
        </div>
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">${price}</p>
      </Link>
    </div>
  );
};

export default BookItem;
