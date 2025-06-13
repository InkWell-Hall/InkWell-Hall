import React from "react";
import notfound from "../assets/images/notfoundimg.png";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-20">
        <img src={notfound} alt="" className="w-170" />
        <h1 className="font-bold mt-10">Oops!</h1>
        <p className="mt-8">
          We can't seem to find the page you are looking for
        </p>{" "}
        <button className="mt-10 bg-neutral-950 text-white rounded-full p-2 cursor-pointer">
          <Link to="/dashboard">Back to Homepage</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
