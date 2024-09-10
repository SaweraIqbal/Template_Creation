import React from 'react';
import { FaSearch } from 'react-icons/fa';
import heroImage from '../../assets/heroImage.png';
import profileImage from '../../assets/profileImage.jpg';
import background from '../../assets/background.jpg'

const HomePage = () => {
  return (
    <div className="flex flex-col ">
      {/* Header Section */}
      <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center">
          <h1 className="font-bold text-[8px]">My Website</h1>
        </div>

        {/* Navigation Bar */}
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="hover:text-gray-400 text-[8px]">Home</a>
          <a href="#products" className="hover:text-gray-400 text-[8px]">Products</a>
          <a href="#contactus" className="hover:text-gray-400 text-[8px]">Contact Us</a>
          <a href="#setting" className="hover:text-gray-400 text-[8px]">Setting</a>
        </nav>

        {/* Search Bar and Profile */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-white rounded-full px-4 py-2 text-sm focus:outline-none"
              style={{ fontSize: '8px' }} // Inline style for input text size
            />
            <FaSearch className="absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-400" />
          </div>
          <img src={profileImage} alt="Profile" className="h-6 w-6 md:h-8 md:w-8 rounded-full" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center bg-gray-100 p-4 md:p-8 bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
        <div className="flex-1 text-center md:text-left space-y-4">
          <h2 className="font-bold text-[15px] text-slate-200">Get started with new ideas</h2>
          <p className="text-[10px] text-white">Try a free trial and explore the best solutions for your business.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 text-[8px]">
            Try Now
          </button>
        </div>
        <div className="flex-1 mt-4 md:mt-0">
          <img src={heroImage} alt="Hero" className="w-2/3 md:w-full mx-auto rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white p-4 md:p-8 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div>
            <h3 className="font-bold text-[8px]">Services</h3>
            <ul className="space-y-0 mt-0 md:mt-0">
              <li><a href="#web-design" className="hover:underline text-[8px]">Web Design</a></li>
              <li><a href="#seo" className="hover:underline text-[8px]">SEO Optimization</a></li>
              <li><a href="#marketing" className="hover:underline text-[8px]">Digital Marketing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[8px]">Company</h3>
            <ul className="space-y-0 mt-0 md:mt-0">
              <li><a href="#about" className="hover:underline text-[8px]">About Us</a></li>
              <li><a href="#team" className="hover:underline text-[8px]">Our Team</a></li>
              <li><a href="#careers" className="hover:underline text-[8px]">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[8px]">Support</h3>
            <ul className="space-y-0 mt-0 md:mt-0">
              <li><a href="#contact" className="hover:underline text-[8px]">Contact Us</a></li>
              <li><a href="#faq" className="hover:underline text-[8px]">FAQs</a></li>
              <li><a href="#support" className="hover:underline text-[8px]">Help Center</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-4 md:mt-8 text-center text-gray-400 text-[8px]">
          &copy; 2024 My Website. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
