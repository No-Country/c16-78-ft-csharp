import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-green border-gray-200 font-plus-jakarta-sans">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
        <a src="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-md font-bold whitespace-nowrap text-navy ml-14">
            ZEROWASTE
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 "
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
          <ul className="font-bold flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 text-navy mr-10">
            <li>
              <a
                href="#"
                className="block py-2 px-3  md:p-0 hover:text-blue-800 transition duration-300 ease-in-out "
              >
                Únete
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3  md:p-0 hover:text-blue-800 transition duration-300 ease-in-out "
              >
                Iniciar Sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
