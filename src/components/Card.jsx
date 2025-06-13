import React from "react";
import Whitelogo from "../assets/images/whitelogo.jpg";

const Card = ({ title, author, image, isbn, category }) => {
  return (
    <div className="bg-amber-50 w-[85%] mx-auto flex flex-col justify-center rounded-lg shadow-lg p-2">
      <div className="flex items-center justify-center h-60 w-full mx-auto rounded">
        <img src={`${image}`} alt="Logo" className=" h-full w-90" />
      </div>
      <div className="flex flex-col mt-4 space-y-2">
        <h1 className="">
          Title: <span className="font-bold"> {title}</span>
        </h1>
        {/* <p>Author: {author}</p> */}
        <p>Author: {author}</p>
        <p>ISBN: {isbn}</p>
        <p>Category: {category}</p>
      </div>
    </div>
  );
};

export default Card;
