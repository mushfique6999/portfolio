// Navbar.js
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a
          href="/#"
          className="text-xl font-bold text-gray-800 dark:text-white lg:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
        >
          My Portfolio
        </a>
        <div className="lg:hidden">
          <button
            type="button"
            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          ></button>
        </div>
        <ul
          className={`${
            isOpen ? "" : "hidden"
          } lg:flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-12`}
        >
          <li>
            <a
              href="#about"
              className="text-sm text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-sm text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-sm text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-sm text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
