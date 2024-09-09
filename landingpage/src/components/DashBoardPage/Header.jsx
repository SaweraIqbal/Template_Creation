import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { FaBars, FaSearch, FaQuestionCircle, FaCog, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const [searchDropdown, setSearchDropdown] = useState(false);
  const [createDropdown, setCreateDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSearchDropdown = () => {
    setSearchDropdown(!searchDropdown);
  };

  const toggleCreateDropdown = () => {
    setCreateDropdown(!createDropdown);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Header Component */}
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center">
          {/* Logo and Project Name */}
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">Templatrove</span>
        </div>

        {/* Hamburger menu for small screens */}
        <div className="lg:hidden">
          <FaBars className="text-xl cursor-pointer" onClick={toggleMenu} />
        </div>

        {/* Main Menu - Hidden on small screens */}
        <div className={`lg:flex items-center space-x-4 ${menuOpen ? 'block' : 'hidden'}`}>
          {/* Search Bar */}
          <div className="relative">
            <div
              className="flex items-center bg-gray-700 rounded-full px-4 py-2 cursor-pointer"
              onClick={toggleSearchDropdown}
            >
              <FaSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent focus:outline-none text-white"
              />
            </div>
          </div>

          {/* Icons and Buttons */}
          <div className="flex items-center space-x-4">
            {/* Help Icon */}
            <FaQuestionCircle className="text-xl cursor-pointer" />

            {/* Settings Icon */}
            <FaCog className="text-xl cursor-pointer" />

            {/* Create a New Design Button */}
            <div className="relative">
              <button
                onClick={toggleCreateDropdown}
                className="bg-blue-500 text-white rounded-full px-4 py-2 focus:outline-none"
              >
                Create a New Design
              </button>
              {createDropdown && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white text-black rounded shadow-lg">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-200">Home Pages</li>
                    <li className="px-4 py-2 hover:bg-gray-200">Landing Pages</li>
                    <li className="px-4 py-2 hover:bg-gray-200">About Us</li>
                    <li className="px-4 py-2 hover:bg-gray-200">Contact Us</li>
                    <li className="px-4 py-2 hover:bg-gray-200">Services</li>
                    <li className="px-4 py-2 hover:bg-gray-200">Portfolios</li>
                    <li className="px-4 py-2 hover:bg-gray-200">FAQs</li>
                    <li className="px-4 py-2 hover:bg-gray-200">Terms and Conditions</li>
                    <li className="px-4 py-2 hover:bg-gray-200">Privacy Policies</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Profile Icon */}
            <FaUserCircle className="text-3xl cursor-pointer" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
