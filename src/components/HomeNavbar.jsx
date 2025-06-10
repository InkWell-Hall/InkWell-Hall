import React from "react";

const HomeNavbar = () => {
  return (
    <>
      <nav className="flex justify-around items-center py-5">
        <div className="logo-container">
          {/* <img src="" alt="" /> */}
          Logo
        </div>

        <ul className="flex gap-10 ">
          <li>
            <a href="" className="font-body-font font-bold">
              Dashboard
            </a>
          </li>
          <li>
            <a href="" className="font-body-font font-bold">
              Search Books
            </a>
          </li>
          <li>
            <a href="" className="font-body-font font-bold">
              My Profile
            </a>
          </li>
          <li>
            <a href="" className="font-body-font font-bold">
              Collections
            </a>
          </li>
        </ul>

        <div className="bg-[#de3326] px-3 py-2 rounded-full text-white">
          <button className="cursor-pointer">
            {" "}
            <a href="/login">Login</a>
          </button>
        </div>
      </nav>
    </>
  );
};

export default HomeNavbar;
