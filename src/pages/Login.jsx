import { useState } from "react";
import logo from "../assets/images/logoblack.jpg";
import logowhite from "../assets/images/logowhite.png";

export default function Login() {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 to-blue-300 flex items-center justify-center p-4 font-sans">
      <div
        className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden w-[100vw] max-w-4xl h-[96vh] transition-all duration-600 ${
          isActive ? "active" : ""
        }`}
      >
        {/* Sign Up Form */}
        <div
          className={`absolute top-0 h-full w-1/2 transition-all duration-600 ease-in-out ${
            isActive
              ? "translate-x-full opacity-100 z-10 animate-pulse"
              : "translate-x-0 opacity-0 z-0"
          }`}
        >
          <div className="bg-white flex flex-col items-center justify-center h-full px-10">
            <h1 className="text-2xl font-bold mb-5">Create Account</h1>

            <div className="flex space-x-3 my-5">
              <a
                href="#"
                className="border border-gray-300 rounded-lg w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </a>
              <a
                href="#"
                className="border border-gray-300 rounded-lg w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="border border-gray-300 rounded-lg w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="border border-gray-300 rounded-lg w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            <span className="text-xs text-gray-600 mb-3">
              or use your email for registration
            </span>

            <input
              type="text"
              placeholder="Name"
              className="bg-gray-100 border-none my-2 px-4 py-3 text-sm rounded-lg w-full outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-100 border-none my-2 px-4 py-3 text-sm rounded-lg w-full outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-100 border-none my-2 px-4 py-3 text-sm rounded-lg w-full outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              type="button"
              className="bg-purple-700 text-white text-xs px-12 py-3 border border-transparent rounded-lg font-semibold tracking-wider uppercase mt-3 cursor-pointer hover:bg-purple-800 transition-colors"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Sign In Form */}
        <div
          className={`absolute top-0 h-full w-1/2 transition-all duration-600 ease-in-out z-20 ${
            isActive ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <form className="bg-white flex flex-col items-center justify-center h-full px-10">
            <h1 className=" font-bold mb-5 flex justify-start items-center font-lead-font text-3xl">
              <img src={logowhite} alt="" className="w-40" />
              {/* Login In */}
            </h1>

            <div className="flex space-x-3 my-5">
              <a
                href="#"
                className="border border-gray-300 rounded-lg w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </a>
              <a
                href="#"
                className="border border-gray-300 rounded-lg w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="border border-gray-300 rounded-lg w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="border border-gray-300 rounded-lg w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            <span className="text-xs text-gray-600 mb-3">
              or use your email password
            </span>

            <input
              type="email"
              placeholder="Email"
              className="bg-gray-100 border-none my-2 px-4 py-3 text-sm rounded-lg w-full outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-100 border-none my-2 px-4 py-3 text-sm rounded-lg w-full outline-none focus:ring-2 focus:ring-purple-500"
            />

            <a
              href="#"
              className="text-gray-700 text-xs no-underline my-4 hover:text-purple-700 transition-colors"
            >
              Forget Your Password?
            </a>

            <button
              type="button"
              className="bg-purple-700 text-white text-xs px-12 py-3 border border-transparent rounded-lg font-semibold tracking-wider uppercase mt-3 cursor-pointer hover:bg-purple-800 transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Toggle Container */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-600 ease-in-out z-50 ${
            isActive
              ? "-translate-x-full rounded-r-full rounded-l-none"
              : "translate-x-0 rounded-l-full rounded-r-none"
          }`}
          style={{
            borderRadius: isActive ? "0 150px 100px 0" : "150px 0 0 100px",
          }}
        >
          <div
            className={`bg-black h-full text-white relative -left-full w-[200%] transition-all duration-600 ease-in-out ${
              isActive ? "translate-x-1/2" : "translate-x-0"
            }`}
          >
            {/* Toggle Left Panel */}
            <div
              className={`absolute w-1/2 h-full flex flex-col items-center justify-center px-8 text-center top-0 transition-all duration-600 ease-in-out ${
                isActive ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <h1 className="text-2xl font-bold mb-4 flex flex-col mt-0">
                <img src={logo} alt="" className="w-40" />
                Welcome Back!
              </h1>
              <p className="text-sm leading-5 tracking-wide mb-5">
                Enter your personal details to use all of site features
              </p>
              <button
                onClick={handleLoginClick}
                className="bg-transparent border border-white text-white text-xs px-12 py-3 rounded-lg font-semibold tracking-wider uppercase cursor-pointer hover:bg-white hover:text-purple-700 transition-all"
              >
                Sign In
              </button>
            </div>

            {/* Toggle Right Panel */}
            <div
              className={`absolute w-1/2 h-full flex flex-col items-center justify-center px-8 text-center top-0 right-0 transition-all duration-600 ease-in-out ${
                isActive ? "translate-x-full" : "translate-x-0"
              }`}
            >
              <h1 className=" font-bold mb-4 flex flex-col justify-center text-2xl items-center font-lead-font">
                <img src={logo} alt="" className="w-40" />
                InkWell-Hall Management{" "}
                <span className="text-amber-200 text-2xl">System</span>
              </h1>
              <p className="text-sm leading-5 tracking-wide mb-5">
                Register with your personal details to use all of site features
              </p>
              <button
                onClick={handleRegisterClick}
                className="bg-transparent border border-white text-white text-xs px-12 py-3 rounded-lg font-semibold tracking-wider uppercase cursor-pointer hover:bg-white hover:text-purple-700 transition-all"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
