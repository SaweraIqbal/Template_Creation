import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { 
  toggleEditMode, 
  updateTitle, 
  updateNavItems, 
  updateHeroText, 
  updateHeroSubText, 
  updateFooterText, 
  updateButtonText 
} from '../../store/slices/homePageSlice';
import heroImage from '../../assets/heroImage.png';
import profileImage from '../../assets/profileImage.jpg';
import background from '../../assets/background.jpg';

const HomePage = () => {
  const dispatch = useDispatch();
  const { editMode, title, navItems, heroText, heroSubText, footerText, buttonText } = useSelector((state) => state.homePage);

  const handleChange = (e, action) => {
    dispatch(action(e.target.value));
  };

  return (
    <div className="flex flex-col ">
      {/* Header Section */}
      <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center">
          {editMode ? (
            <input
              type="text"
              value={title}
              onChange={(e) => handleChange(e, updateTitle)}
              className="bg-transparent text-white font-bold text-[8px] border-b-2 border-white"
              style={{ width: '40px' }}
            />
          ) : (
            <h1 className="font-bold text-[8px]">{title}</h1>
          )}
        </div>

       {/* Navigation Bar */}
<nav className="hidden md:flex space-x-4">
  {navItems.map((item, index) => (
    <div key={index} className="flex">
      {editMode ? (
        <input
          type="text"
          value={item}
          onChange={(e) => handleChange(e, (value) => updateNavItems({ index, value }))}
          className="bg-transparent text-white text-[8px] border-b-2 border-white"
          style={{ width: '40px' }} // Set a fixed width or adjust as needed
        />
      ) : (
        <a href={`#${item.toLowerCase()}`} className="hover:text-gray-400 text-[8px]">
          {item}
        </a>
      )}
    </div>
  ))}
</nav>

        {/* Search Bar and Profile */}
        <div className="flex items-center space-x-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-white rounded-full px-2 py-1 text-xs focus:outline-none w-24"
              style={{ fontSize: '12px' }}
            />
            <FaSearch className="absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-400 text-xs" />
          </div>
          <img src={profileImage} alt="Profile" className="h-6 w-6 md:h-8 md:w-8 rounded-full" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center bg-gray-100 p-4 md:p-8 bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
        <div className="flex-1 text-center md:text-left space-y-4">
          {editMode ? (
            <>
              <input
                type="text"
                value={heroText}
                onChange={(e) => handleChange(e, updateHeroText)}
                className="bg-transparent text-slate-200 font-bold text-[15px] border-b-2 border-slate-200 w-2/3"
              />
              <input
                type="text"
                value={heroSubText}
                onChange={(e) => handleChange(e, updateHeroSubText)}
                className="bg-transparent text-white text-[10px] border-b-2 border-white w-full"
              />
            </>
          ) : (
            <>
              <h2 className="font-bold text-[15px] text-slate-200">{heroText}</h2>
              <p className="text-[10px] text-white">{heroSubText}</p>
            </>
          )}
          {editMode ? (
            <input
              type="text"
              value={buttonText}
              onChange={(e) => handleChange(e, updateButtonText)}
              className="bg-transparent text-white text-[8px] border-b-2 border-white"
            />
          ) : (
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 text-[8px]">
              {buttonText}
            </button>
          )}
        </div>
        <div className="flex-1 mt-4 md:mt-0">
          <img src={heroImage} alt="Hero" className="w-2/3 md:w-full mx-auto rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white p-4 md:p-8 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {footerText.map((column, columnIndex) => (
            <div key={columnIndex}>
              <h3 className="font-bold text-[8px]">{column.title}</h3>
              <ul className="space-y-0 mt-0 md:mt-0">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {editMode ? (
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => handleChange(e, (value) => updateFooterText({ columnIndex, itemIndex, value }))}
                        className="bg-transparent text-white text-[8px] border-b-2 border-white"
                      />
                    ) : (
                      <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:underline text-[8px]">
                        {item}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-4 md:mt-4 text-center text-gray-400 text-[8px]">
          &copy; 2024 My Website. All Rights Reserved.
        </div>
      </footer>

      {/* Edit Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => dispatch(toggleEditMode())}
          className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300 text-xs"
        >
          {editMode ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default HomePage;
