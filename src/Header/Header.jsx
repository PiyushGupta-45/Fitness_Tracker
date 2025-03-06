import React, { useState, useEffect } from "react";
import hlo from "./personal_trainer.jpg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  
  return (
    <header className="shadow sticky z-50 top-0 bg-amber-200 dark:bg-zinc-900 transition-colors duration-500">
      <nav className="flex items-center justify-between px-5 py-3">
        {/* Logo on the Left */}
        <Link to="/" className="flex items-center">
          <img
            src={hlo}
            className="w-14 transition-transform duration-200 ease-in-out hover:scale-110"
            alt="logo"
          />
        </Link>

        {/* Centered Navigation Links */}
        <div className="flex order-1 flex-grow justify-center space-x-6 text-black font-bold text-lg dark:text-gray-300">
          <NavLink
            className={({ isActive }) =>
              `hover:underline ${
                isActive ? "text-red-600 dark:text-red-400" : "dark:text-gray-300"
              }`
            }
            to="/bmr"
          >
            BMR
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:underline ${
                isActive ? "text-red-600 dark:text-red-400" : "dark:text-gray-300"
              }`
            }
            to="/calories-calculator"
          >
            Calories Calculator
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:underline ${
                isActive ? "text-red-600 dark:text-red-400" : "dark:text-gray-300"
              }`
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:underline ${
                isActive ? "text-red-600 dark:text-red-400" : "dark:text-gray-300"
              }`
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </div>

        {/* Right-aligned Navigation Links */}
        <div className="flex order-2 ml-auto space-x-6 text-black font-bold text-lg dark:text-gray-300">
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-auto text-[15px] px-2 py-2 bg-gray-900 text-white dark:bg-gray-300 cursor-pointer dark:text-black rounded-lg text-sm font-medium transition-all duration-300"
          >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <NavLink to="/signin" className="flex items-center space-x-2 bg-white text-blue-700 
        px-4 py-2 rounded-lg  hover:bg-gray-100 transition-colors">
          <span>Sign in</span>
        </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
