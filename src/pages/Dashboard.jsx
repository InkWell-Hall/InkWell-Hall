import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Book } from "lucide-react";
import InkyBot from "../components/InkyBot";
import book2 from "../assets/images/book2.jpeg";
import book3 from "../assets/images/book3.jpeg";
import book1 from "../assets/images/book1.jpeg";
import book6 from "../assets/images/book6.jpeg";
import book7 from "../assets/images/book7.jpeg";
import book8 from "../assets/images/book8.jpeg";
import book9 from "../assets/images/book9.jpeg";
import book10 from "../assets/images/book10.jpeg";
import book11 from "../assets/images/book11.jpeg";
import book12 from "../assets/images/book12.jpeg";
import book13 from "../assets/images/book13.jpg";
import book14 from "../assets/images/book14.jpg";
import book15 from "../assets/images/book15.jpg";
import book16 from "../assets/images/book16.jpg";
import Bookmock from "../assets/images/Bookmockup.jpg";

const Dashboard = () => {
  return (
    <>
      <div className="bg-gray-900 text-white h-[160vh]">
        <Navbar />
        <Sidebar />
        <div className="text-white md:justify-start w-[63%] justify-center mx-auto items-center pt-20">
          <h1 className="text-3xl font-lead-font ">Welcome Benson Boone!,</h1>
          <p className="text-3xl font-lead-font">
            Ready for a new adventure today?
          </p>
        </div>

        <div className="bg-[url(./assets/images/Bookmockup.jpg)] h-[70vh] bg-center mt-10 bg-no-repeat w-[73%] ml-70 bg-cover relative rounded-3xl">
          <div className="absolute bottom-7 right-20">
            <button className="bg-black text-white px-2 py-1 rounded-2xl  hover:bg-gray-900 cursor-pointer">
              Read more
            </button>
          </div>
        </div>

        <div className="flex gap-9 text-white md:justify-start w-[63%] justify-center mx-auto items-center pt-20">
          <div className="flex gap-2 items-center backdrop-blur-sm bg-gray-800 w-40 px-3 py-2 rounded">
            <Book />
            <div>
              <h1>12 Books Read</h1>
              <p>This month</p>
            </div>
          </div>
          <div className="flex gap-2 items-center backdrop-blur-sm bg-gray-800 w-40 px-3 py-2 rounded">
            <Book />
            <div>
              <h1>12 Books Read</h1>
              <p>This month</p>
            </div>
          </div>
          <div className="flex gap-2 items-center backdrop-blur-sm bg-gray-800 w-40 px-3 py-2 rounded">
            <Book />
            <div>
              <h1>12 Books Read</h1>
              <p>This month</p>
            </div>
          </div>
        </div>

        <div className="text-white md:justify-start w-[63%] justify-center mx-auto items-center pt-20">
          <h1 className="text-3xl font-lead-font ">Recommended Books</h1>
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
        <InkyBot />
      </div>
    </>
  );
};

export default Dashboard;
