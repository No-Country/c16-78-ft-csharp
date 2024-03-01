import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary border-b">
      <nav className="text-lg max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto py-2 md:py-8 px-4 2xl:px-16">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse border-b-2 border-transparent hover:border-white transition-all delay-150 duration-200"
        >
          <span className="text-white text-2xl self-center font-bold whitespace-nowrap">
            ZEROWASTE
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-textColor rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 "
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="text-white font-bold flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse">
            <li>
              <Link
                to="/register"
                className="block py-2 px-3  md:p-0 duration-200 ease-in-out border-b-2 border-transparent hover:border-white transition-all delay-150"
              >
                Únete
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block py-2 px-3  md:p-0 duration-200 ease-in-out border-b-2 border-transparent hover:border-white transition-all delay-150"
              >
                Iniciar Sesión
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
