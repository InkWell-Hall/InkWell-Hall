import React from "react";
import notfound from "../assets/images/notfound1.jpg";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img src={notfound} alt="" className="w-150" />
        <h1 className="font-bold mt-10">Oops!</h1>
        <p className="mt-10">
          We can't seem to find the page you are looking for
        </p>{" "}
        <button className="mt-10 bg-[#7848F4] text-white rounded-full p-2 cursor-pointer">
          <Link to="/">Back to Homepage</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;