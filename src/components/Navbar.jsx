import React from "react";
// import { Link } from "react-router";
import Icon from "../assets/images/icon.png";
import { Settings, User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="flex gap-4 ml-60 fixed w-[93%] h-10 justify-between bg-transparent right-0 text-black items-center rounded-2xl p-2">
          <div className="flex gap-2 ml-40">
            {/* <img src={Icon} alt="" className=" w-5 h-8 rounded-4xl" />
             */}
            <User />
            <h1 className="font-bold">Beach</h1>
          </div>
          <div className="flex mr-3 gap-4">
            <h1>12:39 PM</h1>
            <Settings />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
