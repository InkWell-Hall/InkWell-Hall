// import compLogo from "../assets/images/logowhite.png";
import { Link } from "react-router";
import logowhite from "../assets/images/white.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const HomeNavbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <nav className="flex justify-around items-center py-5 fixed z-10 w-full top-0 bg-[#F5F5DC] h-20">
        <div className="logo-container">
          <Link to="/login">
            <img src={logowhite} alt="" className="w-20" />
          </Link>
        </div>

        <ul className=" gap-10 hidden md:flex">
          <li>
            <a href="/login" className="font-lead-font">
              Dashboard
            </a>
          </li>
          <li>
            <a href="login" className="font-lead-font ">
              Search Books
            </a>
          </li>
          <li>
            <a href="login" className="font-lead-font">
              My Profile
            </a>
          </li>
          <li>
            <a href="login" className="font-lead-font">
              Collections
            </a>
          </li>
        </ul>

        <div className="bg-[#de3326] px-3 py-2 rounded-full text-white hidden md:block">
          <button className="cursor-pointer">
            {" "}
            <a href="/login">Login</a>
          </button>
        </div>

        <Menu
          className="md:hidden cursor-pointer"
          onClick={() => setVisible(true)}
        />
        <div
          className={`${
            visible
              ? "bg-black text-white flex flex-col px-2 py-3 h-full fixed top-0 right-0 w-60"
              : "hidden"
          }`}
        >
          <div className="flex justify-end items-end">
            <X
              className="w-24 cursor-pointer"
              onClick={() => setVisible(false)}
            />
          </div>
          <a href="/login" className="font-lead-font border-b pb-1">
            Dashboard
          </a>

          <a href="login" className="font-lead-font border-b pb-1 mt-2">
            Search Books
          </a>

          <a href="login" className="font-lead-font border-b pb-1 mt-2">
            My Profile
          </a>

          <a href="login" className="font-lead-font border-b pb-1 mt-2">
            Collections
          </a>
        </div>
      </nav>
    </>
  );
};

export default HomeNavbar;
