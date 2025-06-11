// import compLogo from "../assets/images/logowhite.png";
import { Link } from "react-router";

const HomeNavbar = () => {
  return (
    <>
      <nav className="flex justify-around items-center py-5 fixed z-10 w-full top-0 bg-[#F5F5DC] h-20">
        <div className="logo-container">
          <Link to="/login">
            {/* <img src={compLogo} alt="" className="w-30" /> */}
          </Link>
        </div>

        <ul className="flex gap-10 ">
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
