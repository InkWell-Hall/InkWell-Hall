

import React from "react";
import Whitelogo from "../assets/images/whitelogo.jpg";

const Card = ({ title, author, publisher, isbn }) => {
  return (
    <div className="bg-amber-50 w-[25%] mx-auto flex flex-col justify-center rounded-lg shadow-lg p-6">
      <div className="flex bg-black items-center justify-center h-60 w-full mx-auto rounded">
        <img src={Whitelogo} alt="Logo" className="object-contain h-32" />
      </div>
      <div className="flex flex-col mt-4 space-y-2">
        <h1 className="text-xl font-bold">Title: {title}</h1>
        <p>Author: {author}</p>
        <p>Publisher: {publisher}</p>
        <p>ISBN: {isbn}</p>
      </div>
    </div>
  );
};

export default Card;
