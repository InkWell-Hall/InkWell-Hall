import React, { useState } from "react";
import { products } from "../assets/assets";

const Books = () => {
  const [book, setBook] = useState([]);
  console.log(products);
  return (
    <div className="border-t-2 pt-10 transition-opacaity ease-in duration-500 opacity-100">
      {/* .............. */}
      <div className="flex sm:gap-12 gap-12 flex-col sm:flex-row">
        {/*  */}
        <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
          {products.map((item, index) => (
            // <img
            //   onClick={() => setImage(item)}
            //   src={item}
            //   key={index}
            //   className="w-24% sm:mb-3 flex-shrink-0 cursor-pointer"
            // />
            <p>{item.price}</p>
          ))}
        </div>

        {/* <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Books;
