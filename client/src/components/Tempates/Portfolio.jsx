import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProfileImage from '../../assets/ProfileImage.avif'; 
import {
  setHeroTitle,
  setHeroDescription,
  setContactButtonText,
  setPortfolioButtonText,
  setWhyHireHeading,
  setWhyHireDescription,
  setHireMeButtonText,
  setSkill,
  setSkillIcon,
  setStat
} from '../../store/slices/portfolioSlice';
import useDownloadImage from '../customHook/useDownloadImage';
        
const Portfolio = () => {
  const dispatch = useDispatch();
  const {
    heroTitle,
    heroDescription,
    contactButtonText,
    portfolioButtonText,
    whyHireHeading,
    whyHireDescription,
    hireMeButtonText,
    skills,
    stats
  } = useSelector((state) => state.portfolio);

  // Manage the editable state
  const [isEditing, setIsEditing] = useState(false);
  const downloadImage = useDownloadImage();

  const handleDownloadClick = () => {
    downloadImage('.download-container', 'Portfolio.png');
  };
  
  const handleEditChange = (action, value) => {
    dispatch(action(value));
  };

  const handleSkillChange = (index, title, description) => {
    dispatch(setSkill({ index, title, description }));
  };

  const handleSkillIconChange = (index, icon) => {
    dispatch(setSkillIcon({ index, icon }));
  };

  const handleStatChange = (statKey, number, label) => {
    dispatch(setStat({ statKey, number, label }));
  };

  // Toggle between edit and view modes
  const toggleEditing = () => {
    setIsEditing((prevState) => !prevState);
  };

  return (
    <>
    <div className='download-container'>
      {/* Hero Section */}
      <section className="flex justify-between items-center py-5 px-3 bg-white">
        {/* Left Side - Text and Buttons */}
        <div className="flex-1">
          {isEditing ? (
            <input
              type="text"
              value={heroTitle}
              onChange={(e) => handleEditChange(setHeroTitle, e.target.value)}
              className="text-[15px] font-bold text-gray-900 bg-transparent border-none w-full max-w-[200px]" // added w-full and max-w-[200px]
            />
          ) : (
            <h1 className="text-[15px] font-bold text-gray-900">
              {heroTitle}
            </h1>
          )}
          {isEditing ? (
            <textarea
              value={heroDescription}
              onChange={(e) => handleEditChange(setHeroDescription, e.target.value)}
              className="text-[10px] text-gray-600 mt-3 bg-transparent border-none w-full max-w-[200px]" // added w-full and max-w-[300px]
            />
          ) : (
            <p className="text-[10px] text-gray-600 mt-3">
              {heroDescription}
            </p>
          )}
          <div className="mt-3 space-x-2 flex">
            {isEditing ? (
              <input
                type="text"
                value={contactButtonText}
                onChange={(e) => handleEditChange(setContactButtonText, e.target.value)}
                className="px-4 py-2 bg-green-600 text-white rounded-full text-[8px] hover:bg-green-700 w-full max-w-[100px]" // added w-full and max-w-[100px]
              />
            ) : (
              <button className="px-4 py-2 bg-green-600 text-white rounded-full text-[8px] hover:bg-green-700">
                {contactButtonText}
              </button>
            )}
            {isEditing ? (
              <input
                type="text"
                value={portfolioButtonText}
                onChange={(e) => handleEditChange(setPortfolioButtonText, e.target.value)}
                className="px-4 py-2 border-2 border-green-600 text-[8px] text-green-600 rounded-full hover:bg-green-600 hover:text-white w-full max-w-[100px]" // added w-full and max-w-[100px]
              />
            ) : (
              <button className="px-4 py-2 border-2 border-green-600 text-[8px] text-green-600 rounded-full hover:bg-green-600 hover:text-white">
                {portfolioButtonText}
              </button>
            )}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-end">
          <div className="relative">
            <div className="absolute top-4 left-4 w-52 h-48 border-4 border-green-600 z-0"></div>
            <img
              src={ProfileImage}
              alt="Profile"
              className="relative w-[100%] h-48 object-cover rounded-lg shadow-lg z-10"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <div className="flex justify-center items-center space-x-8 my-1">
  {Object.keys(stats).map((key) => (
    <React.Fragment key={key}>
      <div className="text-center">
        <div className="flex flex-col items-center w-[100px]"> 
          {isEditing ? (
            <>
              <input
                type="text"
                value={stats[key].number}
                onChange={(e) => handleStatChange(key, e.target.value, stats[key].label)}
                className="text-green-600 font-bold text-xl bg-transparent border-none w-full"
              />
              <input
                type="text"
                value={stats[key].label}
                onChange={(e) => handleStatChange(key, stats[key].number, e.target.value)}
                className="text-gray-600 text-[8px] bg-transparent border-none w-full"
              />
            </>
          ) : (
            <>
              <h3 className="text-green-600 font-bold text-xl">
                {stats[key].number}
              </h3>
              <p className="text-gray-600 text-[8px]">
                {stats[key].label}
              </p>
            </>
          )}
        </div>
      </div>
      {key !== 'reviewsGiven' && (
        <div className="h-10 border-l border-gray-300"></div>
      )}
    </React.Fragment>
  ))}
</div>

      <div className="my-4 grid grid-cols-2 gap-6 items-start">
        {/* Left Section */}
        <div>
          {/* Main Heading */}
          {isEditing ? (
            <input
              type="text"
              value={whyHireHeading}
              onChange={(e) => handleEditChange(setWhyHireHeading, e.target.value)}
              className="text-[15px] font-bold mt-2 bg-transparent border-none w-full max-w-[300px]" // added w-full and max-w-[300px]
            />
          ) : (
            <h2 className="text-[15px] font-bold mt-2">
              {whyHireHeading}
            </h2>
          )}

          {/* Description */}
          {isEditing ? (
            <textarea
              value={whyHireDescription}
              onChange={(e) => handleEditChange(setWhyHireDescription, e.target.value)}
              className="text-gray-600 mt-0 text-[8px] bg-transparent border-none w-full max-w-[300px]" // added w-full and max-w-[300px]
            />
          ) : (
            <p className="text-gray-600 mt-0 text-[8px]">
              {whyHireDescription}
            </p>
          )}

          {/* Hire Me Button */}
          {isEditing ? (
            <input
              type="text"
              value={hireMeButtonText}
              onChange={(e) => handleEditChange(setHireMeButtonText, e.target.value)}
              className="mt-3 px-4 py-2 bg-green-600 text-white font-semibold text-[8px] rounded hover:bg-green-700 w-full max-w-[100px]" // added w-full and max-w-[100px]
            />
          ) : (
            <button className="mt-3 px-4 py-2 bg-green-600 text-white font-semibold text-[8px] rounded hover:bg-green-700">
              {hireMeButtonText}
            </button>
          )}
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-2">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white shadow-md p-2 rounded-lg col-span-2">
              <div className="flex items-center mb-0">
                {isEditing ? (
                  <input
                    type="text"
                    value={skill.icon}
                    onChange={(e) => handleSkillIconChange(index, e.target.value)}
                    className="text-green-600 bg-transparent border-none w-full max-w-[50px]" // added w-full and max-w-[50px]
                  />
                ) : (
                  <span className="text-green-600">{skill.icon}</span>
                )}
                {isEditing ? (
                  <input
                    type="text"
                    value={skill.title}
                    onChange={(e) => handleSkillChange(index, e.target.value, skill.description)}
                    className="font-semibold ml-2 text-[10px] bg-transparent border-none w-full max-w-[150px]" // added w-full and max-w-[150px]
                  />
                ) : (
                  <h4 className="font-semibold ml-2 text-[10px]">
                    {skill.title}
                  </h4>
                )}
              </div>
              {isEditing ? (
                <textarea
                  value={skill.description}
                  onChange={(e) => handleSkillChange(index, skill.title, e.target.value)}
                  className="text-gray-600 text-[8px] bg-transparent border-none w-full max-w-[200px]" // added w-full and max-w-[200px]
                />
              ) : (
                <p className="text-gray-600 text-[8px]">
                  {skill.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
     {/* Edit/Save Button at the Bottom */}
     <div className="flex justify-center p-2">
        <button
          onClick={toggleEditing}
          className="px-4 py-2 bg-blue-600 text-white rounded-full text-[10px] hover:bg-blue-700"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
    <div className="flex justify-end text-black">
     <button onClick={handleDownloadClick}>Download</button>
     </div>
    </>
  );
};

export default Portfolio;
