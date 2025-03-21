import React, { useContext, useEffect, useState } from "react";
import hlo from "./personal_trainer.jpg";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext
import { FaUserCircle } from "react-icons/fa"; // Import user icon

const Header = () => {
  const { userEmail, logout } = useContext(AuthContext); // Get userEmail and logout from context
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const [showDropdown, setShowDropdown] = useState(false); // State to show/hide dropdown
  const [showFeatures, setShowFeatures] = useState(false); // State for features dropdown
  let featureTimeout;

  // 🛠 Apply dark mode on initial load
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
        <Link to="/" className="flex items-center">
          <img src={hlo} className="w-14 transition-transform duration-200 ease-in-out hover:scale-110" alt="logo" />
        </Link>

        <div className="flex order-1 flex-grow justify-center space-x-6 text-black font-bold text-lg dark:text-gray-300">
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(featureTimeout);
              setShowFeatures(true);
            }}
            onMouseLeave={() => {
              featureTimeout = setTimeout(() => setShowFeatures(false),120);
            }}
          >
            <button className="hover:underline text-black dark:text-gray-300">Features </button>
            {showFeatures && (
              <div 
                className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
                onMouseEnter={() => clearTimeout(featureTimeout)}
                onMouseLeave={() => setShowFeatures(false)}
              >
                <NavLink to="/bmr" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">BMR</NavLink>
                <NavLink to="/calories-calculator" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Calories Calculator</NavLink>
              </div>
            )}
          </div>
          <NavLink to="/about" className={({ isActive }) => `hover:underline ${isActive ? "text-red-600 dark:text-cyan-400" : "dark:text-gray-300"}`}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `hover:underline ${isActive ? "text-red-600 dark:text-cyan-400" : "dark:text-gray-300"}`}>Contact</NavLink>
        </div>

        <div className="flex order-2 ml-auto space-x-6 text-black font-bold text-lg dark:text-gray-300 relative">
          {/* ✅ Fixed Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-auto text-[15px] px-3 py-2 bg-gray-900 text-white dark:bg-gray-300 cursor-pointer dark:text-black rounded-lg text-sm font-medium transition-all duration-300"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          {/* ✅ Profile Dropdown */}
          {userEmail ? (
            <div className="relative">
              <button onClick={() => setShowDropdown(!showDropdown)} className="flex items-center space-x-2 text-white bg-blue-600 px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition">
                <FaUserCircle size={20} />
              </button>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-55 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                  <div className="px-2 py-4 text-gray-900 dark:text-gray-200">{userEmail}</div>
                  <hr className="border-gray-300 dark:border-gray-600" />
                  <button
                    onClick={logout}
                    className="block w-full px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink to="/signin" className="flex items-center space-x-2 bg-white text-blue-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              <span>Sign in</span>
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
