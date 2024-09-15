import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../assets/logo.png';
import backgroundImage from '../../assets/template2Background.jpg';
import image1Template2 from '../../assets/image1Template2.jpg';
import image2Template2 from '../../assets/image2Template2.png';
import image3Template2 from '../../assets/image3Template2.jpg';
import {
  toggleEdit,
  setTitle,
  setNavItem,
  setHeadline,
  setParagraph,
  setButtonText,
  setFooterItem,
} from '../../store/slices/landingPageSlice';

const images = [
  { src: image1Template2, alt: 'Image 1' },
  { src: image2Template2, alt: 'Image 2' },
  { src: image3Template2, alt: 'Image 3' },
];

const LandingPage = () => {
  const dispatch = useDispatch();
  const {
    title,
    navItems,
    headline,
    paragraph,
    buttonText,
    footerItems,
    isEditing,
  } = useSelector((state) => state.landingPage);

  const handleEditChange = (field, value) => {
    dispatch(field(value));
  };

  const handleToggleEdit = () => {
    dispatch(toggleEdit());
  };

  return (
    <div className='mt-4'>
      {/* Header */}
      <div className="bg-blue-950">
        <div className="container flex items-center justify-between p-4">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-5" />
            {isEditing ? (
              <input
                type="text"
                value={title}
                onChange={(e) => handleEditChange(setTitle, e.target.value)}
                className="text-[10px] font-semibold text-white bg-transparent border-none w-[25px] /* Fixed width */"
                style={{ fontSize: '10px', lineHeight: '1' }} /* Font size and line height */
              />
            ) : (
              <h1 className="text-[10px] font-semibold text-white hover:text-gray-400">
                {title}
              </h1>
            )}
          </div>
          {/* Navbar */}
          <nav className="space-x-6 flex">
            {Object.keys(navItems).map((key) => (
              <div key={key}>
                {isEditing ? (
                  <input
                    type="text"
                    value={navItems[key]}
                    onChange={(e) =>
                      handleEditChange(setNavItem, { key, value: e.target.value })
                    }
                    className="text-white bg-transparent border-none text-[8px] w-[45px] /* Fixed width */"
                    style={{ fontSize: '8px', lineHeight: '2' }} /* Font size and line height */
                  />
                ) : (
                  <Link
                    to={`/${key}`}
                    className="text-white hover:text-gray-400 text-[8px]"
                  >
                    {navItems[key]}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col items-start py-8 text-white">
          {isEditing ? (
            <input
              type="text"
              value={headline}
              onChange={(e) => handleEditChange(setHeadline, e.target.value)}
              className="font-bold mb-2 text-[12px] bg-transparent border-none w-[200px] /* Fixed width */"
              style={{ fontSize: '12px', lineHeight: '1.5' }} /* Font size and line height */
            />
          ) : (
            <h2 className="font-bold mb-2 text-[12px]">{headline}</h2>
          )}
          {isEditing ? (
            <textarea
              value={paragraph}
              onChange={(e) => handleEditChange(setParagraph, e.target.value)}
              className="mb-4 text-[8px] bg-transparent border-none w-[20rem] /* Fixed width */"
              style={{ fontSize: '8px', lineHeight: '1.5' }} /* Font size and line height */
            />
          ) : (
            <p className="mb-4 text-[8px]">{paragraph}</p>
          )}
          {isEditing ? (
            <input
              type="text"
              value={buttonText}
              onChange={(e) => handleEditChange(setButtonText, e.target.value)}
              className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 text-[8px] bg-transparent border-none w-[15rem] /* Fixed width */"
              style={{ fontSize: '12px', lineHeight: '1.5' }} /* Font size and line height */
            />
          ) : (
            <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 text-[8px]">
              {buttonText}
            </button>
          )}

          <div className="flex justify-center space-x-4 mt-8">
            {images.map((image, index) => (
              <div key={index} className="group relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-24 h-32 object-cover rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 space-x-10 text-sm flex">
            {Object.keys(footerItems).map((key) => (
              <div key={key}>
                {isEditing ? (
                  <input
                    type="text"
                    value={footerItems[key]}
                    onChange={(e) =>
                      handleEditChange(setFooterItem, { key, value: e.target.value })
                    }
                    className="hover:underline text-[8px] bg-transparent border-none w-[50px] /* Fixed width */"
                    style={{ fontSize: '8px', lineHeight: '2' }} /* Font size and line height */
                  />
                ) : (
                  <Link to={`/${key}`} className="hover:underline text-[8px]">
                    {footerItems[key]}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Edit/Save Buttons */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handleToggleEdit}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 text-[8px]"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
