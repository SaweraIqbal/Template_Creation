import React from "react";

const ButtonList = ({ setSelectedTemplate }) => {
  return (
    <div className="w-1/3 flex flex-col items-center space-y-4">
      <h1 className="text-xl font-semibold text-center text-blue-900 mb-2 py-3">
        Customizable Templates
      </h1>
      {/* Buttons */}
      <button
        onClick={() => setSelectedTemplate("Home Page")}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors w-1/2"
      >
        Home Page
      </button>
      <button
        onClick={() => setSelectedTemplate("Landing Page")}
        className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition-colors w-1/2"
      >
        Landing Page
      </button>
      <button
        onClick={() => setSelectedTemplate("Dashboard Page")}
        className="bg-purple-500 text-white font-semibold py-2 px-4 rounded hover:bg-purple-600 transition-colors w-1/2"
      >
        Dashboard Page
      </button>
      <button
        onClick={() => setSelectedTemplate("Portfolio Page")}
        className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-600 transition-colors w-1/2"
      >
        Portfolio Page
      </button>
      <button
        onClick={() => setSelectedTemplate("Setting Page")}
        className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition-colors w-1/2"
      >
        Setting Page
      </button>
      <button
        onClick={() => setSelectedTemplate("FAQs Page")}
        className="bg-teal-500 text-white font-semibold py-2 px-4 rounded hover:bg-teal-600 transition-colors w-1/2"
      >
        FAQs Page
      </button>
      <button
        onClick={() => setSelectedTemplate("Contact-Us Page")}
        className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-600 transition-colors w-1/2"
      >
        Contact-Us Page
      </button>
    </div>
  );
};

export default ButtonList;
