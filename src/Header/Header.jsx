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
        <Link to="/">
          <img
            src={hlo}
            className="w-14 transition-transform duration-200 ease-in-out hover:scale-110"
            alt="logo"
          />
        </Link>

        {/* Navigation Links - Centered */}
        <div className="flex-grow flex justify-center space-x-6 text-black font-bold text-lg dark:text-gray-300">
          <NavLink
            className={({ isActive }) =>
              `relative hover:underline ${
                isActive ? "text-red-600 dark:text-red-400" : "dark:text-gray-300"
              }`
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `relative hover:underline ${
                isActive ? "text-red-600 dark:text-red-400" : "dark:text-gray-300"
              }`
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </div>

        {/* Dark Mode Toggle Button - Pushed to the Right */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-auto px-4 py-2 bg-gray-900 text-white dark:bg-gray-300 dark:text-black rounded-lg transition-all duration-300"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
