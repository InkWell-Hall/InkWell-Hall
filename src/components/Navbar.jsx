import React from "react";
// import { Link } from "react-router";
import Icon from "../assets/images/icon.png";
import { Search, SearchIcon, Settings, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isCollectionsPage = location.pathname === "/collections";

  return (
    <div className="navbar">
      <nav>
        <div className="flex gap-4 ml-60 fixed w-[93%] h-10 justify-between bg-white right-0 text-black items-center rounded-2xl p-2 z-30 ">
          <div className="flex gap-2 ml-40">
            {/* <img src={Icon} alt="" className=" w-5 h-8 rounded-4xl" />
             */}
            <User />
            <h1 className="font-bold">Beach</h1>
          </div>
          <div className="flex mr-3 gap-4">
            {isCollectionsPage && (
              <SearchIcon
                onClick={() => navigate("/add-book")}
                className="cursor-pointer"
              />
            )}
            <h1>12:39 PM</h1>
            <Settings className="settings" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
