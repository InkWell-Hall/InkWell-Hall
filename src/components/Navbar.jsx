import React, { useContext } from "react";
// import { Link } from "react-router";
import Icon from "../assets/images/icon.png";
import { Search, SearchIcon, Settings, User } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import { ShopContext } from "../context/ShopContext";

const Navbar = ({ id }) => {
  const navigate = useNavigate();
  const { setShowSearch } = useContext(ShopContext);
  const location = useLocation();
  const isCollectionsPage = location.pathname === "/collections";
  const atEditPage = location.pathname === `/edit-book/${id}`;
  const atBokPage = location.pathname === `/books/${id}`;
  return (
    <div className="navbar">
      <nav>
        <div
          className={
            atEditPage || isCollectionsPage || atBokPage
              ? "flex gap-4 fixed w-full h-10 justify-between bg-white top-0 right-0 text-black items-center rounded-2xl p-2 z-30"
              : "flex gap-4 fixed w-full lg:w-[90%] h-10 justify-between bg-white right-0 text-black items-center p-2 z-30"
          }
        >
          <div
            className={
              atEditPage || isCollectionsPage || atBokPage
                ? "flex gap-2"
                : "flex gap-2 lg:ml-30 "
            }
          >
            {/* <img src={Icon} alt="" className=" w-5 h-8 rounded-4xl" />
             */}
            <Link to={"/dashboard"}>
              <User />
            </Link>
            <h1 className="font-bold">Benson Boone</h1>
          </div>
          <div className="flex mr-3 gap-4">
            {isCollectionsPage && (
              <SearchIcon
                onClick={() => setShowSearch(true)}
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
