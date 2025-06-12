import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { ShopContext } from "../context/ShopContext";
import book1 from "../assets/images/book1.jpeg";
import book2 from "../assets/images/book2.jpeg";
import book3 from "../assets/images/book3.jpeg";
import book5 from "../assets/images/book5.jpeg";
import book6 from "../assets/images/book6.jpeg";
import book7 from "../assets/images/book7.jpeg";
import book8 from "../assets/images/book8.jpeg";
import book9 from "../assets/images/book9.jpeg";
import book10 from "../assets/images/book10.jpeg";
import book11 from "../assets/images/book11.jpeg";
import book12 from "../assets/images/book12.jpeg";
import book13 from "../assets/images/book13.jpeg";
import book14 from "../assets/images/book14.jpeg";
import book15 from "../assets/images/book15.jpeg";
import book16 from "../assets/images/book16.jpeg";

const Dashboard = () => {
  const { books } = useContext(ShopContext);
  const [oneBook, setOneBook] = useState();

  const oneBookHandler = books.slice(0, 1);
  useEffect(() => {
    books.slice(0, 2);
  }, [books]);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Sidebar />
      <div className="flex">
        <div className=" w-300 h-[150%] mx-auto flex flex-col rounded-lg shadow-lg my-4 mr-90 relative">
          <div className=" ">
            <img
              src={book5}
              alt=""
              className="w-380 h-85 object-cover rounded-3xl mt-15 ml-70"
            />
            <div
              className="
              absolute bottom-4"
            >
              <button className="bg-amber-50 text-black rounded-2xl w-30 py-2 px-3 mb-3 hover:bg-gray-900 hover:text-whitetransition-colors ml-250 duration-300 font-bold  cursor-pointer ">
                Read Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black">
        <h1 className="text-black ml-72 font-bold text-4xl mt-25">
          Top Related Books
        </h1>
        <div className="flex ml-72 mt-8 items-center gap-5  slideshow">
          <img src={book1} alt="" className="w-[30%] h-[30%] rounded-2xl" />
          <img src={book3} alt="" className="w-[30%] h-[30%] rounded-2xl" />
          <img src={book2} alt="" className="w-[26%] h-[25%] rounded-2xl" />
          <img src={book16} alt="" className="w-[30%] h-[30%] rounded-2xl" />
          <img src={book6} alt="" className="w-[30%] h-[30%] rounded-2xl" />
          <img src={book7} alt="" className="w-[30%] h-[30%] rounded-2xl" />
          <img src={book8} alt="" className="w-[30%] h-[30%] rounded-2xl" />
          <img src={book9} alt="" className="w-[30%] h-[30%] rounded-2xl" />
          <img src={book10} alt="" className="w-[30%] h-[30%] rounded-2xl" />
          <img src={book11} alt="" className="w-[30%] h-[30%] rounded-2xl" />
          <img src={book12} alt="" className="w-[30%] h-[30%] rounded-2xl" />
          <img src={book13} alt="" className="w-[30%] h-[30%] rounded-2xl" />
          <img src={book14} alt="" className="w-[30%] h-[30%] rounded-2xl" />
          <img src={book15} alt="" className="w-[30%] h-[30%] rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;