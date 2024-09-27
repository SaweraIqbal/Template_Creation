import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Header = () => {
  const [createDropdown, setCreateDropdown] = useState(false);
  const { username, profilePic } = useSelector((state) => state.user); // Get profilePic, username from Redux
  const navigate = useNavigate();

  const toggleCreateDropdown = () => {
    setCreateDropdown(!createDropdown);
  };

  // Function to handle profile icon click
  const handleProfileClick = () => {
    navigate('/dashboard/setting'); // Navigate to the settings page
  };

  return (
    <>
      {/* Header Component */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center">
          {/* Logo and Project Name */}
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">Templatrove</span>
        </div>

        {/* Main Menu */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <div
              className="flex items-center bg-gray-700 rounded-full px-4 py-2 cursor-pointer"
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

            {/* Profile Icon or Picture */}
            {username && <span className="text-[12px] font-semibold">Welcome, {username}!</span>}
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile"
                className="h-8 w-8 rounded-full object-cover cursor-pointer"
                onClick={handleProfileClick}
              />
            ) : (
              <FaUserCircle className="text-3xl cursor-pointer" onClick={handleProfileClick} />
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
